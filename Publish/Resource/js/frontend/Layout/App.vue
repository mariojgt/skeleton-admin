<template>
    <div :class="['drawer', isMobile ? 'drawer-end' : '']">
        <!-- Background Elements -->
        <div class="fixed inset-0 bg-gradient-to-b from-[#253D63] to-[#1E2F4A] -z-10">
            <!-- Gradient Orbs -->
            <div class="absolute top-0 left-0 w-[800px] h-[800px] bg-[#328AF1]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div class="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#8B60ED]/10 rounded-full blur-3xl translate-x-1/2"></div>
            <div class="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-[#1AAB8B]/10 rounded-full blur-3xl"></div>

            <!-- Tech Pattern Overlay -->
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA1IDAgTCAwIDAgTCAwIDUgTSAyNSAwIEwgMzAgMCBMIDMwIDUgTSAwIDI1IEwgMCAzMCBMIDUgMzAgTSAyNSAzMCBMIDMwIDMwIEwgMzAgMjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0JBRDlGQyIgc3Ryb2tlLXdpZHRoPSIwLjUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1Ii8+PC9wYXR0ZXJuPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50"></div>

            <!-- Subtle Noise Texture -->
            <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
        </div>

        <input id="my-drawer" type="checkbox" class="drawer-toggle">
        <div class="drawer-content">
            <!-- Required so the flash message works -->
            <Navbar v-if="showHeader" @login="openLogin" :headerBackground="headerBackground" @register="openRegister" />

            <!-- handle the breadcrumb -->
            <Breadcrumb :backgroundClass="backgroundBreadcrumbClass" />

            <!-- Main Content -->
            <div class="relative">
                <AlertSystem :alerts="usePage().props.activeAlerts" />
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
                <Subscribe
                    :is-open="displaySubscription"
                    @close-modal="closeSubscription"
                    @isLoading="loading"
                    @login="openLogin"
                />
            </div>

            <!-- Footer -->
            <Footer v-if="showFooter" :backgroundClass="backgroundFooterClass" />
        </div>

        <!-- Drawer Side -->
        <div class="drawer-side z-50">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay" />
            <MenuDrawer @pricing="openSubscription" />
        </div>
    </div>
</template>

<script setup lang="ts">
import FlashMessage from "@frontend_components/FrontEnd/Global/FlashMessage.vue";
import AlertSystem from "@frontend_components/FrontEnd/Global/AlertSystem.vue";
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
/* Add smooth scroll behavior */
html {
    scroll-behavior: smooth;
}

/* Optional: Add a subtle transition when elements load */
.drawer-content {
    transition: background-color 0.3s ease;
}

/* Ensure content is above background */
.drawer-content {
    position: relative;
    z-index: 1;
}

/* Optional: Custom scrollbar for modern browsers */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: rgba(186, 217, 252, 0.1);
}

::-webkit-scrollbar-thumb {
    background: rgba(50, 138, 241, 0.3);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(50, 138, 241, 0.5);
}
</style>
