<?php
namespace Mariojgt\SkeletonAdmin\Helpers;

class Seo
{
    private $title;
    private $description;
    private $keywords;
    private $author;
    private $image;
    private $url;
    private $type = 'website';
    private $siteName = 'TheDevRealm';
    private $twitterHandle = '@thedevrealm';
    private $locale = 'en_US';

    private static $instance = null;

    public function __construct($title = null, $description = null)
    {
        $this->title = $title;
        $this->description = $description;
    }

    public static function getInstance()
    {
        if (static::$instance === null) {
            static::$instance = new self();
        }
        return static::$instance;
    }

    public static function cleanup()
    {
        static::$instance = null;
    }

    public function setTitle($title) { $this->title = $title; return $this; }
    public function setDescription($description) { $this->description = $description; return $this; }
    public function setKeywords($keywords) { $this->keywords = $keywords; return $this; }
    public function setImage($image) { $this->image = $image; return $this; }
    public function setUrl($url) { $this->url = $url; return $this; }
    public function setType($type) { $this->type = $type; return $this; }
    public function setAuthor($author) { $this->author = $author; return $this; }

    public function toArray()
    {
        return [
            'title' => $this->title,
            'meta' => [
                'description' => $this->description,
                'keywords' => $this->keywords,
                'author' => $this->author,
                'robots' => 'index, follow',
            ],
            'og' => [
                'title' => $this->title,
                'description' => $this->description,
                'image' => $this->image,
                'url' => $this->url,
                'type' => $this->type,
                'site_name' => $this->siteName,
            ],
            'twitter' => [
                'card' => 'summary_large_image',
                'title' => $this->title,
                'description' => $this->description,
                'image' => $this->image,
                'site' => $this->twitterHandle,
            ],
            'jsonLd' => [
                '@context' => 'https://schema.org',
                '@type' => $this->type,
                'name' => $this->title,
                'description' => $this->description,
                'image' => $this->image,
                'url' => $this->url,
            ],
        ];
    }

    public function render()
    {
        $html = '';

        // Charset and viewport
        $html .= '<meta charset="UTF-8">' . PHP_EOL;
        $html .= '<meta name="viewport" content="width=device-width, initial-scale=1">' . PHP_EOL;

        // Title
        $html .= '<title>' . htmlspecialchars($this->title) . '</title>' . PHP_EOL;

        // Meta tags
        foreach ($this->toArray()['meta'] as $name => $content) {
            if (!empty($content)) {
                $html .= '<meta name="' . $name . '" content="' . htmlspecialchars($content) . '" />' . PHP_EOL;
            }
        }

        // Canonical tag
        if (!empty($this->url)) {
            $html .= '<link rel="canonical" href="' . htmlspecialchars($this->url) . '" />' . PHP_EOL;
        }

        // Favicon (customize path as needed)
        $html .= '<link rel="icon" href="/favicon.ico" type="image/x-icon">' . PHP_EOL;

        // Open Graph
        foreach ($this->toArray()['og'] as $property => $content) {
            if (!empty($content)) {
                $html .= '<meta property="og:' . $property . '" content="' . htmlspecialchars($content) . '" />' . PHP_EOL;
            }
        }

        // Twitter Card
        foreach ($this->toArray()['twitter'] as $property => $content) {
            if (!empty($content)) {
                $html .= '<meta name="twitter:' . $property . '" content="' . htmlspecialchars($content) . '" />' . PHP_EOL;
            }
        }

        // JSON-LD Schema
        $html .= '<script type="application/ld+json">' . PHP_EOL;
        $html .= json_encode($this->toArray()['jsonLd'], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . PHP_EOL;
        $html .= '</script>' . PHP_EOL;

        return $html;
    }

    public static function renderStatic()
    {
        $instance = static::getInstance();
        return $instance->render();
    }
}
