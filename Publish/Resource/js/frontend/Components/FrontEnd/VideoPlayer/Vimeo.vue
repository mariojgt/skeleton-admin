<template>
    <div :class="computedClass">
        <div ref="videoPlayerRef"></div>
    </div>
</template>

<script setup>
// Import vimeo player
import vimeoPlayer from '@vimeo/player';
import { onMounted, onBeforeUnmount, computed } from 'vue';

const computedClass = computed(() => {
    let returnCass = props.classVideo + " " + (isLoading.value ? "fancy-background06" : "");
    return returnCass;
});

const emit = defineEmits(["video-start", "video-pause", "video-running", "video-ended"]);
// Props
const props = defineProps({
    lessonUrl: {
        type: String,
        default: ''
    },
    lessonId: {
        type: Number,
        default: 0
    },
    width: {
        type: Number,
        default: 640
    },
    height: {
        type: Number,
        default: 564
    },
    seek: {
        type: Number,
        default: 0
    },
    classVideo: {
        type: String,
        default: 'video-container mb-8 border-2 rounded-lg fancy-border'
    }
});

let videoPlayerRef = $ref(null);
let currentVideoTime = $ref(null);
let videoPlayerInstance = null;
let intervalId = $ref(null);
let leesonPointsInterval = $ref(null);
let isLoading = $ref(true);

// On mounted add the event listener to the video player
onMounted(() => {

    if (props.lessonUrl) {
        // Create a new player
        videoPlayerInstance = new vimeoPlayer(videoPlayerRef, {
            url: props.lessonUrl,
            width: props.width,
            height: props.height,
            quality: 'auto'
        });

        videoPlayerInstance.ready().then(function () {
            isLoading = false;
            if (props.seek > 0) {
                seek(props.seek);
            }
        });

        // Listen for when is paused
        videoPlayerInstance.on('pause', async function () {
            // Get the current time of the video
            await getCurrentTime();
            // Emit the event
            emit("video-pause", currentVideoTime);

            // Clear the interval
            if (intervalId) {
                clearInterval(intervalId);
            }

            if (leesonPointsInterval) {
                clearInterval(leesonPointsInterval);
            }
        });

        // Listen for when is completed
        videoPlayerInstance.on('ended', async function () {
            // Get the current time of the video
            await getCurrentTime();
            // Emit the event
            emit("video-ended", currentVideoTime);

            // Clear the interval
            if (intervalId) {
                clearInterval(intervalId);
            }

            if (leesonPointsInterval) {
                clearInterval(leesonPointsInterval);
            }
            // Get out of full screen if is in full screen
            videoPlayerInstance.exitFullscreen();
        });

        // WHen the user press play we track the video
        videoPlayerInstance.on('play', async function () {
            // Get the current time of the video
            await getCurrentTime();
            // Emit the event
            emit("video-start", currentVideoTime);
            trackVideoTimeInterval();
            trackLessonPoints();
        });
    }
});

onBeforeUnmount(() => {
    // Clear the interval when the component is unmounted
    if (intervalId) {
        clearInterval(intervalId);
    }
});

// Create some functions to control the video player like seek, play, pause, set the current time, etc.
const play = () => {
    console.log(videoPlayerInstance);
    videoPlayerInstance.play();
}

const pause = () => {
    videoPlayerInstance.pause();
}

const seek = (time) => {
    videoPlayerInstance.setCurrentTime(time);
}

const setVolume = (volume) => {
    videoPlayerInstance.setVolume(volume);
}

const setPlaybackRate = (playbackRate) => {
    videoPlayerInstance.setPlaybackRate(playbackRate);
}

const setLoop = (loop) => {
    videoPlayerInstance.setLoop(loop);
}

const setMuted = (muted) => {
    videoPlayerInstance.setMuted(muted);
}

const getVideoTitle = async () => {
    await videoPlayerInstance.getVideoTitle().then(function (title) {
        console.log('title:', title);
    });
}

const getCurrentTime = async () => {
    await videoPlayerInstance.getCurrentTime().then(function (seconds) {
        currentVideoTime = seconds;
    });
}

const trackVideoTimeInterval = () => {
    // Set an interval to get the current time every second so we can display it a nice time line with information about the video
    intervalId = setInterval(async () => {
        await getCurrentTime();
        // Emit the event
        emit("video-running", currentVideoTime);
    }, 5000);
};

const trackLessonPoints = () => {
    leesonPointsInterval = setInterval(async () => {
        await getCurrentTime();
        // Emit the event
        emit("video-lesson-points", currentVideoTime);
    }, 1000);
};

</script>
