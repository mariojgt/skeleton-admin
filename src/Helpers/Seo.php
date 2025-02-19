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

    // Static instance for singleton pattern
    private static $instance = null;

    public function __construct($title = null, $description = null)
    {
        $this->title = $title;
        $this->description = $description;
    }

    /**
     * Get singleton instance
     *
     * @return \Mariojgt\SkeletonAdmin\Helpers\Seo
     */
    public static function getInstance()
    {
        if (static::$instance === null) {
            static::$instance = new self();
        }
        return static::$instance;
    }

    /**
     * Clean up instance - useful for request cycles
     *
     * @return void
     */
    public static function cleanup()
    {
        static::$instance = null;
    }

    public function setTitle($title)
    {
        $this->title = $title;
        return $this;
    }

    public function setDescription($description)
    {
        $this->description = $description;
        return $this;
    }

    public function setKeywords($keywords)
    {
        $this->keywords = $keywords;
        return $this;
    }

    public function setImage($image)
    {
        $this->image = $image;
        return $this;
    }

    public function setUrl($url)
    {
        $this->url = $url;
        return $this;
    }

    public function setType($type)
    {
        $this->type = $type;
        return $this;
    }

    public function setAuthor($author)
    {
        $this->author = $author;
        return $this;
    }

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

    /**
     * Render all SEO tags as HTML
     *
     * @return string
     */
    public function render()
    {
        $html = '';

        // Add basic meta tags
        $html .= '<title>' . $this->title . '</title>' . PHP_EOL;

        // Add meta tags
        foreach ($this->toArray()['meta'] as $name => $content) {
            if (!empty($content)) {
                $html .= '<meta name="' . $name . '" content="' . $content . '" />' . PHP_EOL;
            }
        }

        // Add Open Graph tags
        foreach ($this->toArray()['og'] as $property => $content) {
            if (!empty($content)) {
                $html .= '<meta property="og:' . $property . '" content="' . $content . '" />' . PHP_EOL;
            }
        }

        // Add Twitter tags
        foreach ($this->toArray()['twitter'] as $property => $content) {
            if (!empty($content)) {
                $html .= '<meta name="twitter:' . $property . '" content="' . $content . '" />' . PHP_EOL;
            }
        }

        // Add JSON-LD script
        $html .= '<script type="application/ld+json">' . PHP_EOL;
        $html .= json_encode($this->toArray()['jsonLd'], JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) . PHP_EOL;
        $html .= '</script>' . PHP_EOL;

        return $html;
    }

    /**
     * Static method to render SEO tags
     *
     * @return string
     */
    public static function renderStatic()
    {
        $instance = static::getInstance();
        return $instance->render();
    }
}
