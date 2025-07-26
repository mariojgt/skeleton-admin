<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

use InvalidArgumentException;

/**
 * Advanced SEO Helper Class
 * Provides comprehensive SEO meta tag generation with performance optimizations
 * and enhanced schema.org support
 */
class Seo
{
    // Core SEO properties
    private string $title = '';

    private string $description = '';

    private string $keywords = '';

    private string $author = '';

    private string $image = '';

    private string $url = '';

    private string $type = 'website';

    private string $siteName = 'TheDevRealm';

    private string $twitterHandle = '@thedevrealm';

    private string $locale = 'en_US';

    private string $robots = 'index, follow';

    // Enhanced SEO properties
    private array $alternateLanguages = [];

    private array $breadcrumbs = [];

    private array $customMeta = [];

    private array $structuredData = [];

    private string $themeColor = '#3B82F6';

    private string $appleTouchIcon = '/apple-touch-icon.png';

    private string $favicon = '/favicon.ico';

    private string $manifest = '/manifest.json';

    // Performance and caching
    private static ?self $instance = null;

    private static array $cache = [];

    private bool $enableMinification = true;

    private bool $enableCaching = true;

    // SEO limits for validation
    private const TITLE_MAX_LENGTH = 60;

    private const DESCRIPTION_MAX_LENGTH = 160;

    private const KEYWORDS_MAX_COUNT = 10;

    public function __construct(?string $title = null, ?string $description = null)
    {
        if ($title) {
            $this->setTitle($title);
        }
        if ($description) {
            $this->setDescription($description);
        }

        // Set default URL if available
        if (isset($_SERVER['HTTP_HOST']) && isset($_SERVER['REQUEST_URI'])) {
            $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
            $this->url = $protocol.'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
        }
    }

    public static function getInstance(): self
    {
        if (static::$instance === null) {
            static::$instance = new self;
        }

        return static::$instance;
    }

    public static function cleanup(): void
    {
        static::$instance = null;
        static::$cache = [];
    }

    // Enhanced fluent setters with validation
    public function setTitle(string $title): self
    {
        $title = trim($title);

        $this->title = $title;

        return $this;
    }

    public function setDescription(string $description): self
    {
        $description = trim($description);
        $this->description = $description;

        return $this;
    }

    public function setKeywords($keywords): self
    {
        // Handle null or empty values
        if (empty($keywords)) {
            $this->keywords = '';

            return $this;
        }

        // Convert to array if it's a string
        if (is_string($keywords)) {
            $keywords = array_map('trim', explode(',', $keywords));
        }

        // Process array of keywords
        if (is_array($keywords)) {
            // Filter out empty values and trim whitespace
            $keywords = array_filter(array_map('trim', $keywords), function ($keyword) {
                return ! empty($keyword);
            });

            // Check count and trigger warning if exceeded
            if (count($keywords) > self::KEYWORDS_MAX_COUNT) {
                trigger_error('Keywords exceed recommended count of '.self::KEYWORDS_MAX_COUNT, E_USER_WARNING);
            }

            // Limit to max count and convert back to comma-separated string
            $this->keywords = implode(', ', array_slice($keywords, 0, self::KEYWORDS_MAX_COUNT));
        } else {
            // If it's neither string nor array, set empty
            $this->keywords = '';
        }

        return $this;
    }

    public function setImage(string $image): self
    {
        // Validate image URL format
        if (! filter_var($image, FILTER_VALIDATE_URL) && ! str_starts_with($image, '/')) {
            throw new InvalidArgumentException('Image must be a valid URL or absolute path');
        }
        $this->image = $image;

        return $this;
    }

    public function setUrl(string $url): self
    {
        if (! filter_var($url, FILTER_VALIDATE_URL)) {
            throw new InvalidArgumentException('URL must be valid');
        }
        $this->url = $url;

        return $this;
    }

    public function setType(string $type): self
    {
        $validTypes = ['website', 'article', 'product', 'book', 'profile', 'video', 'music', 'course'];
        if (! in_array($type, $validTypes)) {
            throw new InvalidArgumentException('Invalid type. Must be one of: '.implode(', ', $validTypes));
        }
        $this->type = $type;

        return $this;
    }

    public function setAuthor(string $author): self
    {
        $this->author = trim($author);

        return $this;
    }

    public function setSiteName(string $siteName): self
    {
        $this->siteName = trim($siteName);

        return $this;
    }

    public function setTwitterHandle(string $handle): self
    {
        // Ensure @ prefix
        $this->twitterHandle = str_starts_with($handle, '@') ? $handle : '@'.$handle;

        return $this;
    }

    public function setLocale(string $locale): self
    {
        $this->locale = $locale;

        return $this;
    }

    public function setRobots(string $robots): self
    {
        $this->robots = $robots;

        return $this;
    }

    public function setThemeColor(string $color): self
    {
        if (! preg_match('/^#[0-9A-Fa-f]{6}$/', $color)) {
            throw new InvalidArgumentException('Theme color must be a valid hex color');
        }
        $this->themeColor = $color;

        return $this;
    }

    // Enhanced methods for modern SEO
    public function addAlternateLanguage(string $lang, string $url): self
    {
        $this->alternateLanguages[$lang] = $url;

        return $this;
    }

    public function setBreadcrumbs(array $breadcrumbs): self
    {
        $this->breadcrumbs = $breadcrumbs;

        return $this;
    }

    public function addCustomMeta(string $name, string $content, string $type = 'name'): self
    {
        $this->customMeta[] = [
            'type' => $type, // 'name' or 'property'
            'name' => $name,
            'content' => $content,
        ];

        return $this;
    }

    public function addStructuredData(array $data): self
    {
        $this->structuredData[] = $data;

        return $this;
    }

    // Article-specific methods
    public function setArticleMeta(string $publishedTime, string $modifiedTime = '', array $tags = [], string $section = ''): self
    {
        $this->addCustomMeta('article:published_time', $publishedTime, 'property');

        if ($modifiedTime) {
            $this->addCustomMeta('article:modified_time', $modifiedTime, 'property');
        }

        if ($section) {
            $this->addCustomMeta('article:section', $section, 'property');
        }

        foreach ($tags as $tag) {
            $this->addCustomMeta('article:tag', $tag, 'property');
        }

        return $this;
    }

    // Product-specific methods
    public function setProductMeta(string $price, string $currency, string $availability = 'in stock'): self
    {
        $this->addCustomMeta('product:price:amount', $price, 'property');
        $this->addCustomMeta('product:price:currency', $currency, 'property');
        $this->addCustomMeta('product:availability', $availability, 'property');

        return $this;
    }

    // Performance optimization methods
    public function enableMinification(bool $enable = true): self
    {
        $this->enableMinification = $enable;

        return $this;
    }

    public function enableCaching(bool $enable = true): self
    {
        $this->enableCaching = $enable;

        return $this;
    }

    // Enhanced toArray method
    public function toArray(): array
    {
        $cacheKey = $this->getCacheKey();

        if ($this->enableCaching && isset(static::$cache[$cacheKey])) {
            return static::$cache[$cacheKey];
        }

        $data = [
            'title' => $this->title,
            'meta' => [
                'description' => $this->description,
                'keywords' => $this->keywords,
                'author' => $this->author,
                'robots' => $this->robots,
                'language' => $this->locale,
                'theme-color' => $this->themeColor,
            ],
            'og' => [
                'title' => $this->title,
                'description' => $this->description,
                'image' => $this->image,
                'url' => $this->url,
                'type' => $this->type,
                'site_name' => $this->siteName,
                'locale' => $this->locale,
            ],
            'twitter' => [
                'card' => 'summary_large_image',
                'title' => $this->title,
                'description' => $this->description,
                'image' => $this->image,
                'site' => $this->twitterHandle,
            ],
            'jsonLd' => $this->generateJsonLd(),
            'customMeta' => $this->customMeta,
            'alternateLanguages' => $this->alternateLanguages,
            'seoScore' => $this->calculateSeoScore(),
        ];

        if ($this->enableCaching) {
            static::$cache[$cacheKey] = $data;
        }

        return $data;
    }

    // Generate comprehensive JSON-LD
    private function generateJsonLd(): array
    {
        $jsonLd = [];

        // Base schema
        $baseSchema = [
            '@context' => 'https://schema.org',
            '@type' => ucfirst($this->type),
            'name' => $this->title,
            'description' => $this->description,
            'url' => $this->url,
        ];

        if ($this->image) {
            $baseSchema['image'] = $this->image;
        }

        if ($this->author) {
            $baseSchema['author'] = [
                '@type' => 'Person',
                'name' => $this->author,
            ];
        }

        $jsonLd[] = $baseSchema;

        // Website schema
        if ($this->siteName) {
            $jsonLd[] = [
                '@context' => 'https://schema.org',
                '@type' => 'WebSite',
                'name' => $this->siteName,
                'url' => parse_url($this->url, PHP_URL_SCHEME).'://'.parse_url($this->url, PHP_URL_HOST),
                'potentialAction' => [
                    '@type' => 'SearchAction',
                    'target' => parse_url($this->url, PHP_URL_SCHEME).'://'.parse_url($this->url, PHP_URL_HOST).'/search?q={search_term_string}',
                    'query-input' => 'required name=search_term_string',
                ],
            ];
        }

        // Breadcrumbs schema
        if (! empty($this->breadcrumbs)) {
            $breadcrumbItems = [];
            foreach ($this->breadcrumbs as $index => $breadcrumb) {
                $breadcrumbItems[] = [
                    '@type' => 'ListItem',
                    'position' => $index + 1,
                    'name' => $breadcrumb['name'],
                    'item' => $breadcrumb['url'] ?? null,
                ];
            }

            $jsonLd[] = [
                '@context' => 'https://schema.org',
                '@type' => 'BreadcrumbList',
                'itemListElement' => $breadcrumbItems,
            ];
        }

        // Add custom structured data
        $jsonLd = array_merge($jsonLd, $this->structuredData);

        return count($jsonLd) === 1 ? $jsonLd[0] : $jsonLd;
    }

    // SEO Score calculation
    private function calculateSeoScore(): int
    {
        $score = 0;
        $maxScore = 100;

        // Title scoring (20 points)
        if (! empty($this->title)) {
            $score += 10;
            if (strlen($this->title) <= self::TITLE_MAX_LENGTH && strlen($this->title) >= 30) {
                $score += 10;
            }
        }

        // Description scoring (20 points)
        if (! empty($this->description)) {
            $score += 10;
            if (strlen($this->description) <= self::DESCRIPTION_MAX_LENGTH && strlen($this->description) >= 120) {
                $score += 10;
            }
        }

        // Image scoring (15 points)
        if (! empty($this->image)) {
            $score += 15;
        }

        // Keywords scoring (10 points)
        if (! empty($this->keywords)) {
            $score += 10;
        }

        // URL scoring (10 points)
        if (! empty($this->url)) {
            $score += 10;
        }

        // Author scoring (5 points)
        if (! empty($this->author)) {
            $score += 5;
        }

        // Structured data scoring (10 points)
        if (! empty($this->structuredData) || ! empty($this->breadcrumbs)) {
            $score += 10;
        }

        // Social media optimization (10 points)
        if (! empty($this->twitterHandle) && ! empty($this->image)) {
            $score += 10;
        }

        return min($score, $maxScore);
    }

    // Enhanced render method with performance optimizations
    public function render(): string
    {
        $cacheKey = 'render_'.$this->getCacheKey();

        if ($this->enableCaching && isset(static::$cache[$cacheKey])) {
            return static::$cache[$cacheKey];
        }

        $html = $this->buildHtmlOutput();

        if ($this->enableMinification) {
            $html = $this->minifyHtml($html);
        }

        if ($this->enableCaching) {
            static::$cache[$cacheKey] = $html;
        }

        return $html;
    }

    private function buildHtmlOutput(): string
    {
        $html = [];

        // Essential meta tags
        $html[] = '<meta charset="UTF-8">';
        $html[] = '<meta name="viewport" content="width=device-width, initial-scale=1">';
        $html[] = '<meta http-equiv="X-UA-Compatible" content="IE=edge">';

        // Title
        if ($this->title) {
            $html[] = '<title>'.htmlspecialchars($this->title, ENT_QUOTES, 'UTF-8').'</title>';
        }

        // Standard meta tags
        foreach ($this->toArray()['meta'] as $name => $content) {
            if (! empty($content)) {
                $html[] = sprintf(
                    '<meta name="%s" content="%s">',
                    htmlspecialchars($name, ENT_QUOTES, 'UTF-8'),
                    htmlspecialchars($content, ENT_QUOTES, 'UTF-8')
                );
            }
        }

        // Canonical URL
        if ($this->url) {
            $html[] = sprintf('<link rel="canonical" href="%s">', htmlspecialchars($this->url, ENT_QUOTES, 'UTF-8'));
        }

        // Alternate languages
        foreach ($this->alternateLanguages as $lang => $url) {
            $html[] = sprintf(
                '<link rel="alternate" hreflang="%s" href="%s">',
                htmlspecialchars($lang, ENT_QUOTES, 'UTF-8'),
                htmlspecialchars($url, ENT_QUOTES, 'UTF-8')
            );
        }

        // Favicons and app icons
        $html[] = sprintf('<link rel="icon" href="%s" type="image/x-icon">', htmlspecialchars($this->favicon, ENT_QUOTES, 'UTF-8'));
        $html[] = sprintf('<link rel="apple-touch-icon" href="%s">', htmlspecialchars($this->appleTouchIcon, ENT_QUOTES, 'UTF-8'));
        $html[] = sprintf('<link rel="manifest" href="%s">', htmlspecialchars($this->manifest, ENT_QUOTES, 'UTF-8'));

        // Open Graph tags
        foreach ($this->toArray()['og'] as $property => $content) {
            if (! empty($content)) {
                $html[] = sprintf(
                    '<meta property="og:%s" content="%s">',
                    htmlspecialchars($property, ENT_QUOTES, 'UTF-8'),
                    htmlspecialchars($content, ENT_QUOTES, 'UTF-8')
                );
            }
        }

        // Twitter Card tags
        foreach ($this->toArray()['twitter'] as $property => $content) {
            if (! empty($content)) {
                $html[] = sprintf(
                    '<meta name="twitter:%s" content="%s">',
                    htmlspecialchars($property, ENT_QUOTES, 'UTF-8'),
                    htmlspecialchars($content, ENT_QUOTES, 'UTF-8')
                );
            }
        }

        // Custom meta tags
        foreach ($this->customMeta as $meta) {
            $attribute = $meta['type'] === 'property' ? 'property' : 'name';
            $html[] = sprintf(
                '<meta %s="%s" content="%s">',
                $attribute,
                htmlspecialchars($meta['name'], ENT_QUOTES, 'UTF-8'),
                htmlspecialchars($meta['content'], ENT_QUOTES, 'UTF-8')
            );
        }

        // Performance hints
        $html[] = '<link rel="dns-prefetch" href="//fonts.googleapis.com">';
        $html[] = '<link rel="dns-prefetch" href="//fonts.gstatic.com">';
        $html[] = '<link rel="preconnect" href="//fonts.googleapis.com">';
        $html[] = '<link rel="preconnect" href="//fonts.gstatic.com" crossorigin>';

        // JSON-LD Schema
        $jsonLd = $this->toArray()['jsonLd'];
        if (! empty($jsonLd)) {
            $html[] = '<script type="application/ld+json">';
            $html[] = json_encode($jsonLd, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
            $html[] = '</script>';
        }

        return implode(PHP_EOL, $html).PHP_EOL;
    }

    private function minifyHtml(string $html): string
    {
        // Simple HTML minification
        $html = preg_replace('/\s+/', ' ', $html);
        $html = preg_replace('/>\s+</', '><', $html);

        return trim($html);
    }

    private function getCacheKey(): string
    {
        return md5(serialize([
            $this->title,
            $this->description,
            $this->keywords,
            $this->author,
            $this->image,
            $this->url,
            $this->type,
            $this->customMeta,
            $this->structuredData,
            $this->breadcrumbs,
        ]));
    }

    // Static convenience methods
    public static function renderStatic(): string
    {
        return static::getInstance()->render();
    }

    public static function create(string $title, string $description = ''): self
    {
        return new self($title, $description);
    }

    public static function quick(string $title, string $description, string $image = '', string $url = ''): self
    {
        $seo = new self($title, $description);
        if ($image) {
            $seo->setImage($image);
        }
        if ($url) {
            $seo->setUrl($url);
        }

        return $seo;
    }

    // Debugging and validation methods
    public function validate(): array
    {
        $issues = [];

        if (empty($this->title)) {
            $issues[] = 'Title is required for SEO';
        } elseif (strlen($this->title) > self::TITLE_MAX_LENGTH) {
            $issues[] = 'Title exceeds {self::TITLE_MAX_LENGTH} characters';
        }

        if (empty($this->description)) {
            $issues[] = 'Description is required for SEO';
        } elseif (strlen($this->description) > self::DESCRIPTION_MAX_LENGTH) {
            $issues[] = 'Description exceeds {self::DESCRIPTION_MAX_LENGTH} characters';
        }

        if (empty($this->image)) {
            $issues[] = 'Image is recommended for social sharing';
        }

        if (empty($this->url)) {
            $issues[] = 'URL is required for canonical and social sharing';
        }

        return $issues;
    }

    public function getInsights(): array
    {
        return [
            'seo_score' => $this->calculateSeoScore(),
            'validation_issues' => $this->validate(),
            'character_counts' => [
                'title' => strlen($this->title),
                'description' => strlen($this->description),
            ],
            'recommendations' => $this->getRecommendations(),
        ];
    }

    private function getRecommendations(): array
    {
        $recommendations = [];

        if (strlen($this->title) < 30) {
            $recommendations[] = 'Consider expanding your title for better SEO (30-60 characters recommended)';
        }

        if (strlen($this->description) < 120) {
            $recommendations[] = 'Consider expanding your description (120-160 characters recommended)';
        }

        if (empty($this->keywords)) {
            $recommendations[] = 'Add relevant keywords to improve discoverability';
        }

        if (empty($this->structuredData) && empty($this->breadcrumbs)) {
            $recommendations[] = 'Add structured data for rich snippets in search results';
        }

        return $recommendations;
    }
}
