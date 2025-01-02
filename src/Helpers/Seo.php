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

    public function __construct($title = null, $description = null)
    {
        $this->title = $title;
        $this->description = $description;
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
}
