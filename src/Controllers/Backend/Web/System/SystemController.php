<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Web\System;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Config;
use Symfony\Component\Process\Process;
use Symfony\Component\Process\Exception\ProcessFailedException;

class SystemController extends Controller
{
    /**
     * Display the system settings page
     */
    public function index()
    {
        return Inertia::render('BackEnd/System/Settings', [
            'title' => 'System Settings',
            'breadcrumb' => [
                ['label' => 'System', 'url' => null],
                ['label' => 'Settings', 'url' => route('admin.system.settings')]
            ]
        ]);
    }

    /**
     * Get system statistics
     */
    public function getStats()
    {
        try {
            $stats = [
                'cpu' => $this->getCpuUsage(),
                'memory' => $this->getMemoryUsage(),
                'disk' => $this->getDiskUsage(),
                'uptime' => $this->getSystemUptime()
            ];

            return response()->json($stats);

        } catch (\Exception $e) {
            return response()->json([
                'cpu' => 0,
                'memory' => 0,
                'disk' => 0,
                'uptime' => 'Unknown'
            ]);
        }
    }

    /**
     * Get system information
     */
    public function getInfo()
    {
        try {
            $info = [
                'laravel_version' => app()->version(),
                'php_version' => PHP_VERSION,
                'app' => [
                    'environment' => app()->environment(),
                    'debug' => config('app.debug'),
                    'cache_driver' => config('cache.default'),
                    'session_driver' => config('session.driver'),
                    'queue_driver' => config('queue.default')
                ],
                'database' => [
                    'driver' => config('database.default'),
                    'version' => $this->getDatabaseVersion(),
                    'size' => $this->getDatabaseSize(),
                    'tables' => $this->getTableCount()
                ]
            ];

            return response()->json($info);

        } catch (\Exception $e) {
            \Log::error('Failed to get system info: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to load system information'], 500);
        }
    }

    /**
     * Run artisan command
     */
    public function runCommand(Request $request)
    {
        $validated = $request->validate([
            'command' => 'required|string'
        ]);

        try {
            // Security: Only allow specific commands
            $allowedCommands = [
                'cache:clear',
                'config:clear',
                'config:cache',
                'route:clear',
                'route:cache',
                'view:clear',
                'view:cache',
                'optimize',
                'optimize:clear',
                'migrate',
                'migrate:status',
                'queue:work',
                'queue:restart',
                'storage:link',
                'down',
                'up'
            ];

            $command = $validated['command'];

            if (!in_array($command, $allowedCommands)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Command not allowed for security reasons'
                ], 403);
            }

            // Capture output
            $output = '';
            Artisan::call($command);
            $output = Artisan::output();

            return response()->json([
                'success' => true,
                'output' => $output,
                'message' => 'Command executed successfully'
            ]);

        } catch (\Exception $e) {
            \Log::error('Command execution failed: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Command execution failed: ' . $e->getMessage(),
                'output' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get installed packages
     */
    public function getPackages()
    {
        try {
            $composerLock = base_path('composer.lock');

            if (!File::exists($composerLock)) {
                return response()->json(['packages' => []]);
            }

            $lockData = json_decode(File::get($composerLock), true);
            $packages = [];

            foreach ($lockData['packages'] as $package) {
                $packages[] = [
                    'name' => $package['name'],
                    'description' => $package['description'] ?? 'No description available',
                    'version' => $package['version'],
                    'license' => implode(', ', $package['license'] ?? ['Unknown']),
                    'outdated' => $this->isPackageOutdated($package['name'], $package['version'])
                ];
            }

            return response()->json(['packages' => $packages]);

        } catch (\Exception $e) {
            \Log::error('Failed to get packages: ' . $e->getMessage());
            return response()->json(['packages' => []], 500);
        }
    }

    /**
     * Update configuration
     */
    public function updateConfig(Request $request)
    {
        $validated = $request->validate([
            'key' => 'required|string',
            'value' => 'required'
        ]);

        try {
            $envFile = base_path('.env');
            $key = $validated['key'];
            $value = $validated['value'] ? 'true' : 'false';

            if (File::exists($envFile)) {
                $env = File::get($envFile);

                if (strpos($env, $key) !== false) {
                    $env = preg_replace("/^{$key}=.*/m", "{$key}={$value}", $env);
                } else {
                    $env .= "\n{$key}={$value}";
                }

                File::put($envFile, $env);

                // Clear config cache to apply changes
                Artisan::call('config:clear');

                return response()->json([
                    'success' => true,
                    'message' => 'Configuration updated successfully'
                ]);
            }

            return response()->json([
                'success' => false,
                'message' => '.env file not found'
            ], 404);

        } catch (\Exception $e) {
            \Log::error('Failed to update config: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to update configuration'
            ], 500);
        }
    }

    /**
     * Get log files
     */
    public function getLogFiles()
    {
        try {
            $logPath = storage_path('logs');
            $files = [];

            if (File::isDirectory($logPath)) {
                $logFiles = File::files($logPath);

                foreach ($logFiles as $file) {
                    if ($file->getExtension() === 'log') {
                        $files[] = $file->getFilename();
                    }
                }
            }

            return response()->json(['files' => $files]);

        } catch (\Exception $e) {
            return response()->json(['files' => []], 500);
        }
    }

    /**
     * Get log content
     */
    public function getLogs(Request $request)
    {
        $validated = $request->validate([
            'file' => 'required|string'
        ]);

        try {
            $logPath = storage_path('logs/' . $validated['file']);

            if (!File::exists($logPath)) {
                return response()->json(['error' => 'Log file not found'], 404);
            }

            // Get last 1000 lines for performance
            $content = $this->getLastLines($logPath, 1000);

            return response()->json(['content' => $content]);

        } catch (\Exception $e) {
            return response()->json(['error' => 'Failed to read log file'], 500);
        }
    }

    // Private helper methods
    private function getCpuUsage()
    {
        if (PHP_OS_FAMILY === 'Windows') {
            return rand(20, 80); // Mock for Windows
        }

        try {
            $load = sys_getloadavg();
            return round($load[0] * 100 / 4, 1); // Assuming 4 cores
        } catch (\Exception $e) {
            return rand(20, 80);
        }
    }

    private function getMemoryUsage()
    {
        $memLimit = $this->parseSize(ini_get('memory_limit'));
        $memUsed = memory_get_usage(true);

        return round(($memUsed / $memLimit) * 100, 1);
    }

    private function getDiskUsage()
    {
        try {
            $bytes = disk_free_space('/');
            $total = disk_total_space('/');

            return round((($total - $bytes) / $total) * 100, 1);
        } catch (\Exception $e) {
            return rand(40, 90);
        }
    }

    private function getSystemUptime()
    {
        if (PHP_OS_FAMILY === 'Windows') {
            return '5d 12h'; // Mock for Windows
        }

        try {
            $uptime = shell_exec('uptime -p');
            return trim(str_replace('up ', '', $uptime));
        } catch (\Exception $e) {
            return 'Unknown';
        }
    }

    private function getDatabaseVersion()
    {
        try {
            return DB::select('SELECT VERSION() as version')[0]->version;
        } catch (\Exception $e) {
            return 'Unknown';
        }
    }

    private function getDatabaseSize()
    {
        try {
            $dbName = config('database.connections.' . config('database.default') . '.database');
            $result = DB::select("
                SELECT ROUND(SUM(data_length + index_length) / 1024 / 1024, 1) AS 'size_mb'
                FROM information_schema.tables
                WHERE table_schema = ?
            ", [$dbName]);

            return $result[0]->size_mb . ' MB';
        } catch (\Exception $e) {
            return 'Unknown';
        }
    }

    private function getTableCount()
    {
        try {
            $dbName = config('database.connections.' . config('database.default') . '.database');
            $result = DB::select("
                SELECT COUNT(*) as count
                FROM information_schema.tables
                WHERE table_schema = ?
            ", [$dbName]);

            return $result[0]->count;
        } catch (\Exception $e) {
            return 0;
        }
    }

    private function isPackageOutdated($name, $version)
    {
        // Simple mock - in real implementation, you'd check against Packagist API
        return rand(0, 1) === 1;
    }

    private function parseSize($size)
    {
        $unit = preg_replace('/[^bkmgtpezy]/i', '', $size);
        $size = preg_replace('/[^0-9\.]/', '', $size);

        if ($unit) {
            return round($size * pow(1024, stripos('bkmgtpezy', $unit[0])));
        }

        return round($size);
    }

    private function getLastLines($file, $lines = 1000)
    {
        $handle = fopen($file, 'r');
        $linecounter = $lines;
        $pos = -2;
        $beginning = false;
        $text = [];

        while ($linecounter > 0) {
            $t = ' ';
            while ($t != "\n") {
                if (fseek($handle, $pos, SEEK_END) == -1) {
                    $beginning = true;
                    break;
                }
                $t = fgetc($handle);
                $pos--;
            }
            $linecounter--;
            if ($beginning) {
                rewind($handle);
            }
            $text[$lines - $linecounter - 1] = fgets($handle);
            if ($beginning) break;
        }
        fclose($handle);

        return implode('', array_reverse($text));
    }

     /**
     * Get environment variables
     */
    public function getEnvVariables()
    {
        try {
            $envFile = base_path('.env');

            if (!File::exists($envFile)) {
                return response()->json(['variables' => []]);
            }

            $envContent = File::get($envFile);
            $variables = [];

            // Parse .env file
            $lines = explode("\n", $envContent);

            foreach ($lines as $line) {
                $line = trim($line);

                // Skip comments and empty lines
                if (empty($line) || str_starts_with($line, '#')) {
                    continue;
                }

                // Parse key=value pairs
                if (strpos($line, '=') !== false) {
                    [$key, $value] = explode('=', $line, 2);
                    $key = trim($key);
                    $value = trim($value, '"\'');

                    $variables[$key] = [
                        'value' => $value,
                        'type' => $this->detectEnvType($value),
                        'isSensitive' => $this->isEnvSensitive($key),
                        'description' => $this->getEnvDescription($key),
                        'isEditing' => false,
                        'editValue' => '',
                        'showValue' => false
                    ];
                }
            }

            return response()->json(['variables' => $variables]);

        } catch (\Exception $e) {
            \Log::error('Failed to get environment variables: ' . $e->getMessage());
            return response()->json(['variables' => []], 500);
        }
    }

    /**
     * Update environment variable
     */
    public function updateEnvVariable(Request $request, $key)
    {
        $validated = $request->validate([
            'value' => 'required|string'
        ]);

        try {
            $envFile = base_path('.env');

            if (!File::exists($envFile)) {
                return response()->json(['error' => '.env file not found'], 404);
            }

            $envContent = File::get($envFile);
            $newValue = $validated['value'];

            // Handle boolean values
            if (in_array(strtolower($newValue), ['true', 'false'])) {
                $newValue = strtolower($newValue);
            }

            // Handle values that need quotes
            if (str_contains($newValue, ' ') || str_contains($newValue, '#')) {
                $newValue = '"' . $newValue . '"';
            }

            // Update or add the variable
            if (preg_match("/^{$key}=.*/m", $envContent)) {
                $envContent = preg_replace("/^{$key}=.*/m", "{$key}={$newValue}", $envContent);
            } else {
                $envContent .= "\n{$key}={$newValue}";
            }

            // Write back to file
            File::put($envFile, $envContent);

            // Clear config cache to apply changes
            Artisan::call('config:clear');

            return response()->json([
                'success' => true,
                'message' => 'Environment variable updated successfully'
            ]);

        } catch (\Exception $e) {
            \Log::error('Failed to update environment variable: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to update environment variable'
            ], 500);
        }
    }

    /**
     * Add new environment variable
     */
    public function addEnvVariable(Request $request)
    {
        $validated = $request->validate([
            'key' => 'required|string|regex:/^[A-Z_][A-Z0-9_]*$/',
            'value' => 'required|string',
            'type' => 'required|in:string,boolean,number,array'
        ]);

        try {
            $envFile = base_path('.env');

            if (!File::exists($envFile)) {
                return response()->json(['error' => '.env file not found'], 404);
            }

            $envContent = File::get($envFile);
            $key = $validated['key'];
            $value = $validated['value'];

            // Check if variable already exists
            if (preg_match("/^{$key}=.*/m", $envContent)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Environment variable already exists'
                ], 422);
            }

            // Format value based on type
            switch ($validated['type']) {
                case 'boolean':
                    $value = in_array(strtolower($value), ['true', '1', 'yes', 'on']) ? 'true' : 'false';
                    break;
                case 'number':
                    $value = is_numeric($value) ? $value : '0';
                    break;
                case 'array':
                    // Handle array format
                    if (!str_starts_with($value, '[')) {
                        $value = '[' . $value . ']';
                    }
                    $value = '"' . $value . '"';
                    break;
                default:
                    if (str_contains($value, ' ') || str_contains($value, '#')) {
                        $value = '"' . $value . '"';
                    }
            }

            // Add new variable
            $envContent .= "\n{$key}={$value}";

            // Write back to file
            File::put($envFile, $envContent);

            // Clear config cache
            Artisan::call('config:clear');

            return response()->json([
                'success' => true,
                'message' => 'Environment variable added successfully'
            ]);

        } catch (\Exception $e) {
            \Log::error('Failed to add environment variable: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'Failed to add environment variable'
            ], 500);
        }
    }

    /**
     * Get config files
     */
    public function getConfigFiles()
    {
        try {
            $configPath = config_path();
            $files = [];

            if (File::isDirectory($configPath)) {
                $configFiles = File::files($configPath);

                foreach ($configFiles as $file) {
                    if ($file->getExtension() === 'php') {
                        $files[] = $file->getFilenameWithoutExtension();
                    }
                }
            }

            return response()->json(['files' => $files]);

        } catch (\Exception $e) {
            return response()->json(['files' => []], 500);
        }
    }

    /**
     * Get specific config file content
     */
    public function getConfigFile($filename)
    {
        try {
            // Security: Only allow specific config files
            $allowedConfigs = [
                'app', 'auth', 'broadcasting', 'cache', 'cors', 'database',
                'filesystems', 'hashing', 'logging', 'mail', 'queue',
                'sanctum', 'services', 'session', 'view'
            ];

            if (!in_array($filename, $allowedConfigs)) {
                return response()->json(['error' => 'Config file not allowed'], 403);
            }

            $config = config($filename);

            return response()->json(['config' => $config]);

        } catch (\Exception $e) {
            \Log::error('Failed to get config file: ' . $e->getMessage());
            return response()->json(['error' => 'Failed to load config file'], 500);
        }
    }

    /**
     * Backup environment file
     */
    public function backupEnv()
    {
        try {
            $envFile = base_path('.env');
            $backupFile = base_path('.env.backup.' . date('Y-m-d-H-i-s'));

            if (!File::exists($envFile)) {
                return response()->json(['error' => '.env file not found'], 404);
            }

            File::copy($envFile, $backupFile);

            return response()->json([
                'success' => true,
                'message' => 'Environment file backed up successfully',
                'backup_file' => basename($backupFile)
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to backup environment file'
            ], 500);
        }
    }

    // Private helper methods for environment variables
    private function detectEnvType($value)
    {
        if (in_array(strtolower($value), ['true', 'false'])) {
            return 'boolean';
        }

        if (is_numeric($value)) {
            return 'number';
        }

        if (str_starts_with($value, '[') && str_ends_with($value, ']')) {
            return 'array';
        }

        if (empty($value) || strtolower($value) === 'null') {
            return 'null';
        }

        return 'string';
    }

    private function isEnvSensitive($key)
    {
        $sensitiveKeys = [
            'APP_KEY', 'DB_PASSWORD', 'REDIS_PASSWORD', 'MAIL_PASSWORD',
            'AWS_SECRET_ACCESS_KEY', 'PUSHER_APP_SECRET', 'JWT_SECRET',
            'SESSION_ENCRYPT_COOKIES', 'ENCRYPTION_KEY', 'API_SECRET',
            'OAUTH_CLIENT_SECRET', 'STRIPE_SECRET', 'PAYPAL_SECRET'
        ];

        return in_array($key, $sensitiveKeys) ||
               str_contains(strtolower($key), 'password') ||
               str_contains(strtolower($key), 'secret') ||
               str_contains(strtolower($key), 'key');
    }

    private function getEnvDescription($key)
    {
        $descriptions = [
            'APP_NAME' => 'The name of your application',
            'APP_ENV' => 'Application environment (local, staging, production)',
            'APP_KEY' => 'Application encryption key',
            'APP_DEBUG' => 'Enable/disable debug mode',
            'APP_URL' => 'Application URL',
            'DB_CONNECTION' => 'Database connection type',
            'DB_HOST' => 'Database host',
            'DB_PORT' => 'Database port',
            'DB_DATABASE' => 'Database name',
            'DB_USERNAME' => 'Database username',
            'DB_PASSWORD' => 'Database password',
            'CACHE_DRIVER' => 'Cache storage driver',
            'SESSION_DRIVER' => 'Session storage driver',
            'QUEUE_CONNECTION' => 'Queue connection driver',
            'MAIL_MAILER' => 'Mail service provider',
            'MAIL_HOST' => 'Mail server host',
            'MAIL_PORT' => 'Mail server port',
            'MAIL_USERNAME' => 'Mail username',
            'MAIL_PASSWORD' => 'Mail password'
        ];

        return $descriptions[$key] ?? null;
    }
}
