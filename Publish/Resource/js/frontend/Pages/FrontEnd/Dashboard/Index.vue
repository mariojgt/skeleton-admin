<template>
  <Layout :title="title">
    <!-- Header Section -->
    <div class="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden py-16">
      <div class="container mx-auto px-4 text-center text-white relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="flex justify-center mb-8">
            <div class="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>
          <h1 class="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Documentation
          </h1>
          <p class="text-xl mb-8 text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Complete guide to Skeleton Admin - The ultimate Laravel package for rapid admin panel development with authentication, user management, and modern UI components.
          </p>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex gap-8">
        <!-- Sidebar -->
        <div class="w-64 flex-shrink-0">
          <nav class="sticky top-8 bg-white rounded-lg shadow-sm border p-4">
            <ul class="space-y-1">
              <li v-for="section in navigationSections" :key="section.id">
                <a
                  :href="`#${section.id}`"
                  @click.prevent="scrollToSection(section.id)"
                  :class="['nav-link block px-3 py-2 text-sm font-medium text-gray-700 rounded-md transition-all duration-200 border-l-3 border-transparent hover:bg-blue-50 hover:border-blue-500', activeSection === section.id ? 'bg-blue-50 border-blue-500 text-blue-600' : '']"
                >
                  {{ section.title }}
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Main Content -->
        <div class="flex-1 max-w-4xl">
          <!-- Introduction -->
          <section id="introduction" class="mb-12">
            <div class="bg-white rounded-lg shadow-sm border p-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p class="text-lg text-gray-600 mb-6">
                Skeleton Admin is a comprehensive Laravel package that provides a complete admin panel solution with modern UI components, authentication, user management, and extensible architecture.
              </p>

              <div class="grid md:grid-cols-2 gap-6 mb-8">
                <div class="p-6 bg-blue-50 rounded-lg">
                  <h3 class="text-lg font-semibold text-blue-900 mb-3">✨ Key Features</h3>
                  <ul class="space-y-2 text-blue-800">
                    <li>• Complete authentication system with 2FA</li>
                    <li>• Role-based permissions with Spatie</li>
                    <li>• Modern Vue.js + Inertia.js frontend</li>
                    <li>• Built-in package builder</li>
                    <li>• System monitoring & settings</li>
                    <li>• Extensible architecture</li>
                  </ul>
                </div>
                <div class="p-6 bg-green-50 rounded-lg">
                  <h3 class="text-lg font-semibold text-green-900 mb-3">🚀 Quick Setup</h3>
                  <ul class="space-y-2 text-green-800">
                    <li>• 5-minute installation</li>
                    <li>• Automated migrations & seeders</li>
                    <li>• Pre-built UI components</li>
                    <li>• Development tools included</li>
                    <li>• Production-ready</li>
                  </ul>
                </div>
              </div>

              <div class="bg-gray-50 p-6 rounded-lg">
                <h4 class="font-semibold text-gray-900 mb-3">Technology Stack</h4>
                <div class="flex flex-wrap gap-3">
                  <span v-for="tech in techStack" :key="tech.name" :class="`px-3 py-1 ${tech.color} rounded-full text-sm`">
                    {{ tech.name }}
                  </span>
                </div>
              </div>
            </div>
          </section>

          <!-- Installation -->
          <section id="installation" class="mb-12">
            <div class="bg-white rounded-lg shadow-sm border p-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Installation</h2>

              <div class="mb-8">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">Requirements</h3>
                <ul class="space-y-2 text-gray-600">
                  <li v-for="requirement in requirements" :key="requirement">• {{ requirement }}</li>
                </ul>
              </div>

              <div class="space-y-6">
                <div v-for="step in installationSteps" :key="step.number" class="installation-step">
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">{{ step.title }}</h4>
                  <div class="code-block relative">
                    <button
                      @click="copyToClipboard(step.code)"
                      class="copy-btn absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs transition-colors"
                    >
                      {{ step.copied ? 'Copied!' : 'Copy' }}
                    </button>
                    <pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto"><code>{{ step.code }}</code></pre>
                  </div>
                  <p v-if="step.description" class="text-gray-600 mt-2">{{ step.description }}</p>
                  <ul v-if="step.details" class="text-gray-600 ml-4 mt-2 space-y-1">
                    <li v-for="detail in step.details" :key="detail">• {{ detail }}</li>
                  </ul>
                </div>

                <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h5 class="font-semibold text-yellow-800 mb-2">⚠️ Important</h5>
                  <p class="text-yellow-700">After installation, check <code>skeleton-admin-credentials.txt</code> in your project root for default login credentials. Delete this file after noting the credentials!</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Quick Start -->
          <section id="quick-start" class="mb-12">
            <div class="bg-white rounded-lg shadow-sm border p-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Quick Start</h2>

              <div class="space-y-6">
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">Access Your Admin Panel</h4>
                  <p class="text-gray-600 mb-3">After installation, you can access your admin panel at:</p>
                  <div class="code-block relative">
                    <button
                      @click="copyToClipboard('http://your-domain.com/admin')"
                      class="copy-btn absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs transition-colors"
                    >
                      Copy
                    </button>
                    <pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto"><code>http://your-domain.com/admin</code></pre>
                  </div>
                </div>

                <div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">Default Routes</h4>
                  <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200">
                      <thead class="bg-gray-50">
                        <tr>
                          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="route in defaultRoutes" :key="route.path">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">{{ route.path }}</td>
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ route.description }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">First Steps</h4>
                  <div class="grid md:grid-cols-3 gap-4">
                    <div v-for="step in firstSteps" :key="step.number" class="p-4 border rounded-lg">
                      <div :class="`w-8 h-8 ${step.color} rounded-full flex items-center justify-center mb-3 text-lg font-bold`">
                        {{ step.number }}
                      </div>
                      <h5 class="font-semibold mb-2">{{ step.title }}</h5>
                      <p class="text-sm text-gray-600">{{ step.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Configuration -->
          <section id="configuration" class="mb-12">
            <div class="bg-white rounded-lg shadow-sm border p-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Configuration</h2>

              <div class="space-y-6">
                <div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">Environment Variables</h4>
                  <p class="text-gray-600 mb-4">Add these to your <code>.env</code> file:</p>
                  <div class="code-block relative">
                    <button
                      @click="copyToClipboard(envVariables)"
                      class="copy-btn absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs transition-colors"
                    >
                      Copy
                    </button>
                    <pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm"><code>{{ envVariables }}</code></pre>
                  </div>
                </div>

                <div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">Settings Showcase</h4>
                  <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                    <div class="space-y-4">
                      <div v-for="setting in configSettings" :key="setting.key" class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <span class="text-slate-700">{{ setting.label }}</span>
                        <div :class="['toggle toggle-success toggle-sm', setting.enabled ? 'toggle-checked' : '']"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Authentication -->
          <section id="authentication" class="mb-12">
            <div class="bg-white rounded-lg shadow-sm border p-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Authentication</h2>

              <div class="space-y-6">
                <div v-for="authFeature in authenticationFeatures" :key="authFeature.title">
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">{{ authFeature.title }}</h4>
                  <p class="text-gray-600 mb-4">{{ authFeature.description }}</p>
                  <ul v-if="authFeature.points" class="space-y-2 text-gray-600">
                    <li v-for="point in authFeature.points" :key="point">• {{ point }}</li>
                  </ul>
                  <div v-if="authFeature.code" class="code-block relative mt-4">
                    <button
                      @click="copyToClipboard(authFeature.code)"
                      class="copy-btn absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs transition-colors"
                    >
                      Copy
                    </button>
                    <pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm"><code>{{ authFeature.code }}</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Commands -->
          <section id="commands" class="mb-12">
            <div class="bg-white rounded-lg shadow-sm border p-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Artisan Commands</h2>

              <div class="space-y-6">
                <div v-for="commandGroup in commandGroups" :key="commandGroup.title">
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">{{ commandGroup.title }}</h4>
                  <div class="code-block relative">
                    <button
                      @click="copyToClipboard(commandGroup.commands)"
                      class="copy-btn absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs transition-colors"
                    >
                      Copy
                    </button>
                    <pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm"><code>{{ commandGroup.commands }}</code></pre>
                  </div>
                </div>

                <div class="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 class="font-semibold text-blue-800 mb-2">💡 Tip</h5>
                  <p class="text-blue-700">Use <code>--help</code> with any command to see all available options and detailed descriptions.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- Package Builder -->
          <section id="package-builder" class="mb-12">
            <div class="bg-white rounded-lg shadow-sm border p-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Package Builder</h2>

              <div class="space-y-6">
                <p class="text-gray-600 mb-4">The Package Builder allows you to create extension packages for Skeleton Admin with a complete MVC structure.</p>

                <div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">Generated Structure</h4>
                  <div class="code-block relative">
                    <button
                      @click="copyToClipboard(packageStructure)"
                      class="copy-btn absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs transition-colors"
                    >
                      Copy
                    </button>
                    <pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm"><code>{{ packageStructure }}</code></pre>
                  </div>
                </div>

                <div>
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">Using the Web Interface</h4>
                  <p class="text-gray-600 mb-4">Access the visual Package Builder at <code>/admin/package/builder</code> for an interactive experience with:</p>
                  <ul class="space-y-2 text-gray-600">
                    <li>• Real-time validation</li>
                    <li>• Feature selection (API routes, frontend/backend, database)</li>
                    <li>• Existing package management</li>
                    <li>• Auto-installation options</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <!-- Routes -->
          <section id="routes" class="mb-12">
            <div class="bg-white rounded-lg shadow-sm border p-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Route Structure</h2>

              <div class="space-y-6">
                <div v-for="routeGroup in routeGroups" :key="routeGroup.title">
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">{{ routeGroup.title }}</h4>
                  <p class="text-gray-600 mb-4">{{ routeGroup.description }}</p>

                  <div class="overflow-x-auto mb-4">
                    <table class="min-w-full divide-y divide-gray-200 text-sm">
                      <thead class="bg-gray-50">
                        <tr>
                          <th class="px-4 py-2 text-left font-medium text-gray-500 uppercase">Route</th>
                          <th class="px-4 py-2 text-left font-medium text-gray-500 uppercase">Name</th>
                          <th class="px-4 py-2 text-left font-medium text-gray-500 uppercase">Description</th>
                        </tr>
                      </thead>
                      <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="route in routeGroup.routes" :key="route.path">
                          <td class="px-4 py-2 font-mono text-gray-900">{{ route.path }}</td>
                          <td class="px-4 py-2 font-mono text-gray-600">{{ route.name }}</td>
                          <td class="px-4 py-2 text-gray-500">{{ route.description }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Troubleshooting -->
          <section id="troubleshooting" class="mb-12">
            <div class="bg-white rounded-lg shadow-sm border p-8">
              <h2 class="text-3xl font-bold text-gray-900 mb-6">Troubleshooting</h2>

              <div class="space-y-6">
                <h4 class="text-lg font-semibold text-gray-900 mb-3">Common Issues</h4>

                <div class="space-y-4">
                  <div v-for="issue in troubleshootingIssues" :key="issue.title" :class="`p-4 border rounded-lg ${issue.bgColor} ${issue.borderColor}`">
                    <h5 :class="`font-semibold mb-2 ${issue.textColor}`">{{ issue.title }}</h5>
                    <p :class="`mb-3 ${issue.descColor}`">{{ issue.description }}</p>
                    <div class="code-block relative">
                      <button
                        @click="copyToClipboard(issue.solution)"
                        class="copy-btn absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs transition-colors"
                      >
                        Copy
                      </button>
                      <pre class="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm"><code>{{ issue.solution }}</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Layout from '../../../Layout/App.vue'

// Props
defineProps({
  title: {
    type: String,
    default: 'Skeleton Admin Documentation - Laravel Admin Panel Package'
  }
})

// Reactive data
const activeSection = ref('introduction')

const navigationSections = ref([
  { id: 'introduction', title: 'Introduction' },
  { id: 'installation', title: 'Installation' },
  { id: 'quick-start', title: 'Quick Start' },
  { id: 'configuration', title: 'Configuration' },
  { id: 'authentication', title: 'Authentication' },
  { id: 'commands', title: 'Artisan Commands' },
  { id: 'package-builder', title: 'Package Builder' },
  { id: 'routes', title: 'Route Structure' },
  { id: 'troubleshooting', title: 'Troubleshooting' }
])

const techStack = ref([
  { name: 'Laravel 10+', color: 'bg-red-100 text-red-800' },
  { name: 'Vue.js 3', color: 'bg-green-100 text-green-800' },
  { name: 'Inertia.js', color: 'bg-purple-100 text-purple-800' },
  { name: 'Tailwind CSS', color: 'bg-blue-100 text-blue-800' },
  { name: 'DaisyUI', color: 'bg-yellow-100 text-yellow-800' },
  { name: 'Spatie Permissions', color: 'bg-indigo-100 text-indigo-800' }
])

const requirements = ref([
  'PHP 8.1 or higher',
  'Laravel 10.0 or higher',
  'Composer',
  'Node.js & NPM',
  'MySQL/PostgreSQL database'
])

const installationSteps = ref([
  {
    number: 1,
    title: 'Step 1: Install via Composer',
    code: 'composer require mariojgt/skeleton-admin',
    copied: false
  },
  {
    number: 2,
    title: 'Step 2: Run Installation Command',
    code: 'php artisan skeleton-admin:install',
    description: 'This command will:',
    details: [
      'Publish package assets and configurations',
      'Run database migrations',
      'Seed default roles and permissions',
      'Create default admin and user accounts',
      'Install NPM dependencies'
    ],
    copied: false
  },
  {
    number: 3,
    title: 'Step 3: Build Frontend Assets',
    code: 'npm install && npm run dev',
    copied: false
  }
])

const defaultRoutes = ref([
  { path: '/admin', description: 'Admin login page' },
  { path: '/admin/dashboard', description: 'Admin dashboard' },
  { path: '/login', description: 'Frontend user login' },
  { path: '/register', description: 'Frontend user registration' }
])

const firstSteps = ref([
  {
    number: 1,
    title: 'Login to Admin',
    description: 'Use the credentials from skeleton-admin-credentials.txt',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    number: 2,
    title: 'Change Passwords',
    description: 'Update default admin and user passwords',
    color: 'bg-green-100 text-green-600'
  },
  {
    number: 3,
    title: 'Configure Settings',
    description: 'Customize your admin panel settings',
    color: 'bg-purple-100 text-purple-600'
  }
])

const envVariables = ref(`# Skeleton Admin Configuration
SKELETON_FRONTEND_REGISTER_ENABLE=true
SKELETON_BACKEND_REGISTER_ENABLE=false
SKELETON_FRONTEND_EMAIL_VERIFY=true
SKELETON_SEND_VERIFICATION=true

# Route Configuration
SKELETON_ROUTE_PREFIX=admin
SKELETON_USER_GUARD=web

# Redirect Routes
SKELETON_FRONT_END_LOGOUT_REDIRECT=login
SKELETON_FRONT_END_VERIFY_REDIRECT=login
SKELETON_FRONT_END_REGISTER_REDIRECT=dashboard`)

const configSettings = ref([
  { key: 'frontend_register_enable', label: 'Frontend Registration', enabled: true },
  { key: 'frontend_email_verify', label: 'Email Verification', enabled: true },
  { key: 'backend_register_enable', label: 'Backend Registration', enabled: false }
])

const authenticationFeatures = ref([
  {
    title: 'Multi-Guard System',
    description: 'Skeleton Admin uses separate guards for frontend users and backend admins:',
    points: [
      'Frontend Guard: web (configurable) - For regular users',
      'Backend Guard: skeleton_admin - For admin users'
    ]
  },
  {
    title: 'Two-Factor Authentication (2FA)',
    description: 'Built-in 2FA support with backup codes:',
    code: `// Check if user has 2FA enabled
if (backendGuard()->user()->twoStepsEnable()) {
    // Handle 2FA verification
    $authenticator = new AuthenticatorHandle();
    $verification = $authenticator->checkCode($request->code);
}`
  },
  {
    title: 'Magic Login Links',
    description: 'Generate secure, time-limited login links:',
    code: `// Generate magic login link (valid for 15 minutes)
$link = URL::temporarySignedRoute(
    'skeleton.magic.login',
    now()->addMinutes(15),
    ['admin' => $admin->id, 'hash' => sha1($admin->email)]
);

// Send via email
Mail::to($admin->email)->send(new MagicLoginLink($link));`
  }
])

const commandGroups = ref([
  {
    title: 'Main Installation',
    commands: `# Full installation with all dependencies
php artisan skeleton-admin:install

# Skip migrations (if already run)
php artisan skeleton-admin:install --skip-migrations

# Skip NPM installation
php artisan skeleton-admin:install --skip-npm

# Force installation without confirmation
php artisan skeleton-admin:install --force

# Custom admin email
php artisan skeleton-admin:install --admin-email=admin@yoursite.com`
  },
  {
    title: 'Package Builder',
    commands: `# Interactive package creation
php artisan skeleton:extension-package

# Non-interactive with all options
php artisan skeleton:extension-package \\
    --name=blog-system \\
    --namespace="MyCompany\\Blog\\\\" \\
    --prefix=mycompany \\
    --controller=Blog \\
    --description="A blog management system" \\
    --force \\
    --no-composer-update`
  },
  {
    title: 'Utility Commands',
    commands: `# Rebuild backend menu
php artisan menu:backend

# Test notifications
php artisan test:notification user icon
php artisan test:notification admin image

# Republish package assets
php artisan republish:skeleton-admin`
  }
])

const packageStructure = ref(`packages/your-package/
├── src/
│   ├── Commands/
│   │   ├── Install.php
│   │   └── Republish.php
│   ├── Controllers/
│   │   ├── Backend/
│   │   └── Frontend/
│   ├── Routes/
│   │   ├── Backend/
│   │   │   ├── web/
│   │   │   └── api/
│   │   └── Frontend/
│   │       ├── web/
│   │       └── api/
│   ├── Models/
│   ├── Database/
│   │   └── Migrations/
│   ├── Config/
│   └── Resources/
│       ├── views/
│       └── lang/
├── Publish/
│   ├── Resource/
│   ├── Public/
│   └── Npm/
├── composer.json
└── README.md`)

const routeGroups = ref([
  {
    title: 'Backend Admin Routes',
    description: 'All admin routes are prefixed with /admin (configurable) and protected by authentication middleware:',
    routes: [
      { path: '/admin/skeleton-admin/home', name: 'skeleton-admin.home', description: 'Main dashboard' },
      { path: '/admin/admin/index', name: 'admin.admin.index', description: 'Admin management' },
      { path: '/admin/user/index', name: 'user.admin.index', description: 'User management' },
      { path: '/admin/role/index', name: 'admin.role.index', description: 'Role management' },
      { path: '/admin/permission/index', name: 'admin.permission.index', description: 'Permission management' },
      { path: '/admin/navigation/index', name: 'admin.navigation.index', description: 'Navigation management' },
      { path: '/admin/system/settings', name: 'admin.system.settings', description: 'System settings' },
      { path: '/admin/package/builder', name: 'admin.package.builder', description: 'Package builder' }
    ]
  },
  {
    title: 'Frontend User Routes',
    description: 'Public and authenticated user routes:',
    routes: [
      { path: '/login', name: 'login', description: 'User login' },
      { path: '/register', name: 'register.user.form', description: 'User registration' },
      { path: '/home', name: 'home', description: 'Homepage' },
      { path: '/dashboard', name: 'dashboard', description: 'User dashboard' },
      { path: '/user/edit', name: 'user.edit', description: 'User profile edit' }
    ]
  },
  {
    title: 'API Routes',
    description: 'RESTful API endpoints for frontend integration:',
    routes: [
      { path: '/admin/api/notifications/{amount}', name: 'admin.api.notifications', description: 'Get notifications' },
      { path: '/admin/api/system/stats', name: 'admin.api.system.stats', description: 'System statistics' },
      { path: '/admin/api/package/generate', name: 'admin.api.package.generate', description: 'Generate package' },
      { path: '/api/backend/login', name: 'skeleton.backend.api.login', description: 'Backend API login' },
      { path: '/api/user/info', name: 'user.info', description: 'User information' }
    ]
  }
])

const troubleshootingIssues = ref([
  {
    title: 'Installation Fails',
    description: 'If the installation command fails, try these steps:',
    solution: `# Check requirements
php -v  # Should be 8.1+
composer --version

# Clear caches
php artisan cache:clear
php artisan config:clear
composer dump-autoload

# Retry installation
php artisan skeleton-admin:install --force`,
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-800',
    descColor: 'text-red-700'
  },
  {
    title: 'NPM Build Issues',
    description: 'Frontend assets not building correctly:',
    solution: `# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Ensure Vite config is correct
npm run build`,
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    textColor: 'text-yellow-800',
    descColor: 'text-yellow-700'
  },
  {
    title: 'Permission Errors',
    description: 'Issues with file permissions or roles:',
    solution: `# Fix storage permissions
chmod -R 775 storage bootstrap/cache

# Re-run permission seeder
php artisan db:seed --class="Mariojgt\\SkeletonAdmin\\Database\\Seeder\\RolesPermissionSeeder"

# Rebuild menu
php artisan menu:backend`,
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-800',
    descColor: 'text-blue-700'
  },
  {
    title: 'Database Issues',
    description: 'Migration or seeding problems:',
    solution: `# Check migration status
php artisan migrate:status

# Fresh migration (WARNING: loses data)
php artisan migrate:fresh

# Re-run specific seeders
php artisan db:seed --class="Mariojgt\\SkeletonAdmin\\Database\\Seeder\\NavigationSeeder"`,
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    textColor: 'text-green-800',
    descColor: 'text-green-700'
  }
])

// Methods
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text)
    .then(() => {
      console.log('Text copied to clipboard')
      // You could show a toast notification here
    })
    .catch(err => {
      console.error('Failed to copy: ', err)
    })
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const updateActiveSection = () => {
  const sections = document.querySelectorAll('section')
  let current = ''

  sections.forEach(section => {
    const sectionTop = section.offsetTop
    if (window.pageYOffset >= sectionTop - 100) {
      current = section.getAttribute('id')
    }
  })

  activeSection.value = current
}

const throttledScrollHandler = () => {
  let ticking = false

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateActiveSection)
      ticking = true
      setTimeout(() => {
        ticking = false
      }, 100)
    }
  }

  return requestTick
}

// Lifecycle
onMounted(() => {
  const scrollHandler = throttledScrollHandler()
  window.addEventListener('scroll', scrollHandler)
  updateActiveSection() // Initial call
})

onUnmounted(() => {
  const scrollHandler = throttledScrollHandler()
  window.removeEventListener('scroll', scrollHandler)
})
</script>

<style scoped>
.nav-link {
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
}

.nav-link:hover {
  background-color: rgba(59, 130, 246, 0.1);
  border-left-color: rgb(59, 130, 246);
}

.nav-link.active {
  background-color: rgba(59, 130, 246, 0.1);
  border-left-color: rgb(59, 130, 246);
  color: rgb(59, 130, 246);
}

.code-block {
  position: relative;
}

.copy-btn {
  transition: all 0.2s;
}

.copy-btn:hover {
  background-color: rgba(55, 65, 81, 1) !important;
}

.installation-step {
  margin-bottom: 1.5rem;
}

.toggle {
  --tglbg: #d1d5db;
  --handleoffset: 1.5rem;
  --handleoffsetcalculator: calc(var(--handleoffset) * -1);
  --togglehandleborder: 0 0;
  background-color: var(--tglbg);
  border-radius: var(--rounded-badge, 1.9rem);
  border: var(--togglehandleborder);
  cursor: pointer;
  display: inline-block;
  height: 1.5rem;
  position: relative;
  transition: background, box-shadow var(--animation-input, 0.2s) ease-out;
  width: 3rem;
  appearance: none;
}

.toggle:before {
  background-color: white;
  border-radius: var(--rounded-badge, 1.9rem);
  content: "";
  height: 1.125rem;
  left: 0.1875rem;
  position: absolute;
  top: 0.1875rem;
  transition: transform var(--animation-input, 0.2s) ease-out;
  width: 1.125rem;
}

.toggle-checked,
.toggle[checked="true"],
.toggle[aria-checked="true"] {
  background-image: none;
  --tglbg: #10b981;
}

.toggle-checked:before,
.toggle[checked="true"]:before,
.toggle[aria-checked="true"]:before {
  transform: translateX(var(--handleoffset));
}

.toggle-success {
  --tglbg: #10b981;
}

.toggle-sm {
  height: 1.25rem;
  width: 2.5rem;
}

.toggle-sm:before {
  height: 0.875rem;
  width: 0.875rem;
  top: 0.1875rem;
  left: 0.1875rem;
}

.toggle-sm {
  --handleoffset: 1.25rem;
}

html {
  scroll-behavior: smooth;
}
</style>
