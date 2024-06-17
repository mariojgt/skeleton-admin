<template>
    <div>
        <input id="my-drawer" type="checkbox" class="drawer-toggle">
        <div class="drawer-content">
            <!-- Required so the flash message works -->
            <n-message-provider>
                <Navbar v-if="showHeader" />
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
import { usePage } from "@inertiajs/vue3";
import Breadcrumb from "@frontend_components/FrontEnd/App/Breadcrumb.vue";
import Navbar from "@frontend_components/FrontEnd/App/Navbar.vue";
import Footer from "@frontend_components/FrontEnd/App/Footer.vue";
import MenuDrawer from "@frontend_components/FrontEnd/App/MenuDrawer.vue";
import { onBeforeMount } from "vue";

defineProps({
    showHeader: {
        type: Boolean,
        default: true,
    },
    showFooter: {
        type: Boolean,
        default: true,
    },
});

// on before mount we going to check if we have a flash message and if we do we going to display it
onBeforeMount(() => {
    if (usePage().props.title) {
        const document = window.document;
        document.title = usePage().props.title;
    }
});

</script>

<style>
</style>
