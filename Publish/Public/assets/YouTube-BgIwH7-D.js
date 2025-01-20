import { computed, ref, onMounted, onBeforeUnmount, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import vimeoPlayer from "@vimeo/player";
import YouTubePlayer from "youtube-player";
const _sfc_main$1 = {
  __name: "Vimeo",
  __ssrInlineRender: true,
  props: {
    lessonUrl: {
      type: String,
      default: ""
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
      default: "video-container mb-8 border rounded-lg border-dark-900"
    }
  },
  emits: ["video-start", "video-pause", "video-running", "video-ended"],
  setup(__props, { emit: __emit }) {
    const computedClass = computed(() => {
      let returnCass = props.classVideo + " " + (isLoading.value.value ? "fancy-background06" : "");
      return returnCass;
    });
    const emit = __emit;
    const props = __props;
    let videoPlayerRef = ref(null);
    let currentVideoTime = ref(null);
    let videoPlayerInstance = null;
    let intervalId = ref(null);
    let leesonPointsInterval = ref(null);
    let isLoading = ref(true);
    onMounted(() => {
      if (props.lessonUrl) {
        videoPlayerInstance = new vimeoPlayer(videoPlayerRef.value, {
          url: props.lessonUrl,
          width: props.width,
          height: props.height,
          quality: "auto"
        });
        videoPlayerInstance.ready().then(function() {
          isLoading.value = false;
          if (props.seek > 0) {
            seek(props.seek);
          }
        });
        videoPlayerInstance.on("pause", async function() {
          await getCurrentTime();
          emit("video-pause", currentVideoTime.value);
          if (intervalId.value) {
            clearInterval(intervalId.value);
          }
          if (leesonPointsInterval.value) {
            clearInterval(leesonPointsInterval.value);
          }
        });
        videoPlayerInstance.on("ended", async function() {
          await getCurrentTime();
          emit("video-ended", currentVideoTime.value);
          if (intervalId.value) {
            clearInterval(intervalId.value);
          }
          if (leesonPointsInterval.value) {
            clearInterval(leesonPointsInterval.value);
          }
          videoPlayerInstance.exitFullscreen();
        });
        videoPlayerInstance.on("play", async function() {
          await getCurrentTime();
          emit("video-start", currentVideoTime.value);
          trackVideoTimeInterval();
          trackLessonPoints();
        });
      }
    });
    onBeforeUnmount(() => {
      if (intervalId.value) {
        clearInterval(intervalId.value);
      }
    });
    const seek = (time) => {
      videoPlayerInstance.setCurrentTime(time);
    };
    const getCurrentTime = async () => {
      await videoPlayerInstance.getCurrentTime().then(function(seconds) {
        currentVideoTime.value = seconds;
      });
    };
    const trackVideoTimeInterval = () => {
      intervalId.value = setInterval(async () => {
        await getCurrentTime();
        emit("video-running", currentVideoTime.value);
      }, 5e3);
    };
    const trackLessonPoints = () => {
      leesonPointsInterval.value = setInterval(async () => {
        await getCurrentTime();
        emit("video-lesson-points", currentVideoTime.value);
      }, 1e3);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: computedClass.value }, _attrs))}><div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/VideoPlayer/Vimeo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "YouTube",
  __ssrInlineRender: true,
  props: {
    videoId: {
      type: String,
      default: ""
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
      default: "video-container mb-8 border rounded-lg border-dark-900"
    }
  },
  emits: ["video-start", "video-pause", "video-running", "video-ended"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const computedClass = computed(() => {
      return props.classVideo + " " + (isLoading.value.value ? "fancy-background06" : "");
    });
    let videoPlayerRef = ref(null);
    let currentVideoTime = ref(null);
    let videoPlayerInstance = null;
    let intervalId = ref(null);
    let lessonPointsInterval = ref(null);
    let isLoading = ref(true);
    onMounted(() => {
      if (props.videoId) {
        const videoId = props.videoId;
        videoPlayerInstance = YouTubePlayer(videoPlayerRef.value, {
          videoId,
          width: props.width,
          height: props.height
        });
        videoPlayerInstance.on("stateChange", async function(event) {
          const state = event.data;
          if (state === 1) {
            await getCurrentTime();
            emit("video-start", currentVideoTime.value);
            trackVideoTimeInterval();
            trackLessonPoints();
          } else if (state === 2) {
            await getCurrentTime();
            emit("video-pause", currentVideoTime.value);
            clearIntervals();
          } else if (state === 0) {
            await getCurrentTime();
            emit("video-ended", currentVideoTime.value);
            clearIntervals();
          }
        });
        videoPlayerInstance.on("ready", () => {
          isLoading.value = false;
          if (props.seek > 0) {
            seek(props.seek);
          }
        });
      }
    });
    onBeforeUnmount(() => {
      clearIntervals();
    });
    const seek = (time) => {
      videoPlayerInstance.seekTo(time, true);
    };
    const getCurrentTime = async () => {
      await videoPlayerInstance.getCurrentTime().then(function(seconds) {
        currentVideoTime.value = seconds;
      });
    };
    const trackVideoTimeInterval = () => {
      intervalId.value = setInterval(async () => {
        await getCurrentTime();
        emit("video-running", currentVideoTime.value);
      }, 5e3);
    };
    const trackLessonPoints = () => {
      lessonPointsInterval.value = setInterval(async () => {
        await getCurrentTime();
        emit("video-lesson-points", currentVideoTime.value);
      }, 1e3);
    };
    const clearIntervals = () => {
      if (intervalId.value) {
        clearInterval(intervalId.value);
      }
      if (lessonPointsInterval.value) {
        clearInterval(lessonPointsInterval.value);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: computedClass.value }, _attrs))}><div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/frontend/Components/FrontEnd/VideoPlayer/YouTube.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
