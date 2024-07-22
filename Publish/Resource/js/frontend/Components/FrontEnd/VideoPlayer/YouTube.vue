<template>
    <div :class="computedClass">
      <div ref="videoPlayerRef"></div>
    </div>
  </template>

  <script setup>
  import YouTubePlayer from 'youtube-player';
  import { onMounted, onBeforeUnmount, computed } from 'vue';

  // Props
  const props = defineProps({
    videoId: {
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

  const emit = defineEmits(["video-start", "video-pause", "video-running", "video-ended"]);

  const computedClass = computed(() => {
    return props.classVideo + " " + (isLoading.value ? "fancy-background06" : "");
  });

  let videoPlayerRef = $ref(null);
  let currentVideoTime = $ref(null);
  let videoPlayerInstance = null;
  let intervalId = $ref(null);
  let lessonPointsInterval = $ref(null);
  let isLoading = $ref(true);

  // On mounted add the event listener to the video player
  onMounted(() => {
    if (props.videoId) {
      const videoId = props.videoId;

      videoPlayerInstance = YouTubePlayer(videoPlayerRef, {
        videoId: videoId,
        width: props.width,
        height: props.height,
      });

      videoPlayerInstance.on('stateChange', async function(event) {
        const state = event.data;

        if (state === 1) {
          // Playing
          await getCurrentTime();
          emit("video-start", currentVideoTime);
          trackVideoTimeInterval();
          trackLessonPoints();
        } else if (state === 2) {
          // Paused
          await getCurrentTime();
          emit("video-pause", currentVideoTime);
          clearIntervals();
        } else if (state === 0) {
          // Ended
          await getCurrentTime();
          emit("video-ended", currentVideoTime);
          clearIntervals();
        }
      });

      videoPlayerInstance.on('ready', () => {
        isLoading = false;
        if (props.seek > 0) {
          seek(props.seek);
        }
      });
    }
  });

  onBeforeUnmount(() => {
    clearIntervals();
  });

  const play = () => {
    videoPlayerInstance.playVideo();
  };

  const pause = () => {
    videoPlayerInstance.pauseVideo();
  };

  const seek = (time) => {
    videoPlayerInstance.seekTo(time, true);
  };

  const setVolume = (volume) => {
    videoPlayerInstance.setVolume(volume);
  };

  const setPlaybackRate = (playbackRate) => {
    videoPlayerInstance.setPlaybackRate(playbackRate);
  };

  const setLoop = (loop) => {
    videoPlayerInstance.setLoop(loop);
  };

  const setMuted = (muted) => {
    videoPlayerInstance.mute();
    if (!muted) {
      videoPlayerInstance.unMute();
    }
  };

  const getVideoTitle = async () => {
    await videoPlayerInstance.getVideoData().then(function (data) {
      console.log('title:', data.title);
    });
  };

  const getCurrentTime = async () => {
    await videoPlayerInstance.getCurrentTime().then(function (seconds) {
      currentVideoTime = seconds;
    });
  };

  const trackVideoTimeInterval = () => {
    intervalId = setInterval(async () => {
      await getCurrentTime();
      emit("video-running", currentVideoTime);
    }, 5000);
  };

  const trackLessonPoints = () => {
    lessonPointsInterval = setInterval(async () => {
      await getCurrentTime();
      emit("video-lesson-points", currentVideoTime);
    }, 1000);
  };

  const clearIntervals = () => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    if (lessonPointsInterval) {
      clearInterval(lessonPointsInterval);
    }
  };

  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length == 11) ? match[2] : null;
  };

  </script>
