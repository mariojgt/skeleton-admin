<template>
    <div :class="['drawer', isMobile ? 'drawer-end' : '']">
        <input id="my-drawer" type="checkbox" class="drawer-toggle">
        <div class="drawer-content">
            <!-- Required so the flash message works -->
            <n-message-provider>
                <Navbar v-if="showHeader" @login="openLogin" :headerBackground="headerBackground" @register="openRegister" />
            </n-message-provider>
            <!-- handle the breadcrumb -->
            <Breadcrumb :backgroundClass="backgroundBreadcrumbClass" />
            <div>
                <n-loading-bar-provider>
                    <n-message-provider>
                        <n-notification-provider>
                            <n-dialog-provider>
                                <n-config-provider :theme="darkTheme">
                                    <FlashMessage />
                                    <SeoManager :seo="usePage().props.seo" :inDebugMode="usePage().props.app_env === 'local'" />
                                    <slot />
                                    <Loading :isLoading="isLoading" />
                                    <AuthModal
                                        :showLogin="showLogin"
                                        :showRegister="showRegister"
                                        :showCodeWall="showWall"
                                        @closeModal="closeLogin"
                                        @isLoading="loading"
                                    />
                                    <Subscribe :is-open="displaySubscription" @close-modal="closeSubscription" @isLoading="loading" />
                                </n-config-provider>
                            </n-dialog-provider>
                        </n-notification-provider>
                    </n-message-provider>
                </n-loading-bar-provider>
            </div>
            <!-- {{-- Footer --}} -->
            <Footer v-if="showFooter" :backgroundClass="backgroundFooterClass" />
        </div>
        <div class="drawer-side z-50">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay" />
            <MenuDrawer @pricing="openSubscription" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { darkTheme } from "naive-ui";
import FlashMessage from "@frontend_components/FrontEnd/Global/FlashMessage.vue";
import Loading from "@frontend_components/FrontEnd/Global/Loading.vue";
import { usePage } from "@inertiajs/vue3";
import Breadcrumb from "@frontend_components/FrontEnd/App/Breadcrumb.vue";
import Navbar from "@frontend_components/FrontEnd/App/Navbar.vue";
import Footer from "@frontend_components/FrontEnd/App/Footer.vue";
import MenuDrawer from "@frontend_components/FrontEnd/App/MenuDrawer.vue";
import { onBeforeMount, watch, onMounted} from "vue";
import AuthModal from "@frontend_components/Auth/AuthComponent.vue";
import Subscribe from "@frontend_components/Payment/Subscription/subscribe.vue";
import SeoManager  from "@frontend_components/FrontEnd/Seo/SeoManager.vue";

const props = defineProps({
    showHeader: {
        type: Boolean,
        default: true,
    },
    showFooter: {
        type: Boolean,
        default: true,
    },
    displayLogin: {
        type: Boolean,
        default: false,
    },
    backgroundFooterClass: {
        type: String,
        default: "bg-dark-100",
    },
    headerBackground: {
        type: String,
        default: "magicpattern",
    },
    backgroundBreadcrumbClass: {
        type: String,
        default: "bg-dark-100",
    },
    displayLoading: {
        type: Boolean,
        default: false,
    },
    displaySubscription: {
        type: Boolean,
        default: false,
    }
});

const emit = defineEmits(["closeLogin", "closeRegister", "closeLoading", "closeSubscription"]);

/*
|--------------------------------------------------------------------------
| Login Modal
|--------------------------------------------------------------------------
*/
let showLogin = $ref(false);

const openLogin = () => {
    showLogin = true;
};
const closeLogin = () => {
    showLogin = false;
    showRegister = false;
    emit("closeLogin");
};

let showRegister = $ref(false);

const openRegister = () => {
    showRegister = true;
};

watch(() => props.displayLogin, (value) => {
    if (value) {
        openLogin();
    } else {
        closeLogin();
    }
});

/*
|--------------------------------------------------------------------------
| Loading popup
|--------------------------------------------------------------------------
*/
let isLoading = $ref(false);

const loading = (isLoading: boolean) => {
    if (isLoading) {
        openLoading();
    } else {
        closeLoading();
    }
};

const openLoading = () => {
    isLoading = true;
};

const closeLoading = () => {
    isLoading = false;
};

watch(() => props.displayLoading, (value) => {
    if (value) {
        openLoading();
    } else {
        closeLoading();
    }
});

/*
|--------------------------------------------------------------------------
| displaySubscription
|--------------------------------------------------------------------------
*/
let displaySubscription = $ref(false);

watch(() => props.displaySubscription, (value) => {
    if (value) {
        displaySubscription = true;
    } else {
        displaySubscription = false;
    }
});

const closeSubscription = () => {
    emit("closeSubscription");
    displaySubscription = false;
};

const openSubscription = () => {
    displaySubscription = true;
    // find the elemnt my-drawer and click it
    const element = document.getElementById("my-drawer");
    if (element) {
        element.click();
    }
};

// on before mount we going to check if we have a flash message and if we do we going to display it
onBeforeMount(() => {
    if (usePage().props.title) {
        const document = window.document;
        document.title = usePage().props.title;
    }

    if (props.showHeader === false) {
        document.querySelector("html").setAttribute("data-theme", "master");
    }
});

let showWall = $ref(false);

const showWallOpen = () => {
    showWall = true;
};
const showWallClose = () => {
    showWall = false;
};

onMounted(() => {
    const url = new URL(window.location.href);
    const showWall = url.searchParams.get('show_wall');
    if (showWall) {
        showWallOpen();
    }
});

let isMobile = $ref(false);

onMounted(() => {
    if (window.innerWidth < 1024) {
        isMobile = true;
    }
});
</script>

<style>
</style>
