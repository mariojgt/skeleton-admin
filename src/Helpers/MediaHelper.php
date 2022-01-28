<?php

namespace Mariojgt\SkeletonAdmin\Helpers;

use Mariojgt\UnityAdmin\Models\Media;

class MediaHelper
{
    /**
     * @param Media|null $media
     *
     * @return [error]
     */
    public static function imagePath(Media $media = null)
    {
        if ($media == null) {
            return [
                'large'           => url('vendor/UnityAdmin/Images/empty.png'),
                'medium'          => url('vendor/UnityAdmin/Images/empty.png'),
                'small'           => url('vendor/UnityAdmin/Images/empty.png'),
                'thumbnail'       => url('vendor/UnityAdmin/Images/empty.png'),
                'thumbnail_micro' => url('vendor/UnityAdmin/Images/empty.png'),
            ];
        } elseif ($media->extension == 'jpg' || $media->extension == 'png') {
            return [
                'large'           => route('image.display', [
                    'image' => $media->id,
                    'size'  => '_default',
                    'name'  => $media->file . '.' . $media->extension
                ]),
                'medium'          => route('image.display', [
                    'image' => $media->id,
                    'size'  => '_medium',
                    'name'  => $media->file . '.' . $media->extension
                ]),
                'small'           => route('image.display', [
                    'image' => $media->id,
                    'size'  => '_small',
                    'name'  => $media->file . '.' . $media->extension
                ]),
                'thumbnail'       => route('image.display', [
                    'image' => $media->id,
                    'size'  => '_tiny',
                    'name'  => $media->file . '.' . $media->extension
                ]),
                'thumbnail_micro' => route('image.display', [
                    'image' => $media->id,
                    'size'  => '_thumbnail',
                    'name'  => $media->file . '.' . $media->extension
                ]),
            ];
        } else {
            dd('this is a file archive not a image');
        }
    }
}
