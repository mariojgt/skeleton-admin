<template>
    <div>
        <input id="my-drawer" type="checkbox" class="drawer-toggle">
        <div class="drawer-content">
            <!-- Required so the flash message works -->
            <n-message-provider>
                <Navbar v-if="showHeader" @login="openLogin" />
            </n-message-provider>
            <!-- handle the breadcrumb -->
            <Breadcrumb />
            <div>
                <n-loading-bar-provider>
                    <n-message-provider>
                        <n-notification-provider>
                            <n-dialog-provider>
                                <n-config-provider :theme="darkTheme">
                                    <FlashMessage />
                                    <slot />
                                    <Loading :isLoading="isLoading" />
                                    <AuthModal
                                        :showLogin="showLogin"
                                        @closeModal="closeLogin"
                                        @isLoading="loading"
                                    />
                                </n-config-provider>
                            </n-dialog-provider>
                        </n-notification-provider>
                    </n-message-provider>
                </n-loading-bar-provider>
            </div>
            <!-- {{-- Footer --}} -->
            <Footer v-if="showFooter" />
        </div>
        <div class="drawer-side z-50">
            <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay" />
            <MenuDrawer />
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
import { onBeforeMount, watch } from "vue";
import AuthModal from "@frontend_components/Auth/AuthComponent.vue";

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
});

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

</script>

<style>
</style>
