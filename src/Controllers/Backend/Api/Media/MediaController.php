<?php

namespace Mariojgt\SkeletonAdmin\Controllers\Backend\Api\Media;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Mariojgt\Magnifier\Models\Media;
use Mariojgt\Magnifier\Resources\MediaResource;

class MediaController extends Controller
{
    public function searchMedia(Request $request)
    {
        $request->validate([
          'search'       => 'required',
        ]);

        // Search for the media
        $media = Media::where('name', 'like', '%' . $request->search . '%')
            ->orWhere('alt', 'like', '%' . $request->search . '%')
            ->orWhere('description', 'like', '%' . $request->search . '%')
            ->paginate(10);

        return MediaResource::collection($media);
    }
}
