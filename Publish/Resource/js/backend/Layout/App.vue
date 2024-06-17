<template>
    <div class="drawer grid min-h-screen">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- Required so the flash message works -->
            <n-message-provider>
                <Navbar :homePage="homePage" />
            </n-message-provider>
            <div class="bg-neutral" :class="homePage ? '' : 'h-full p-10'">
                <n-loading-bar-provider>
                    <n-message-provider>
                        <n-notification-provider>
                            <n-dialog-provider>
                                <n-config-provider :theme="darkTheme">
                                    <FlashMessage />
                                    <div>
                                        <!-- handle the breadcrumb -->
                                        <Breadcrumb />
                                        <slot />
                                    </div>
                                </n-config-provider>
                            </n-dialog-provider>
                        </n-notification-provider>
                    </n-message-provider>
                </n-loading-bar-provider>
            </div>
            <Footer style="grid-row: 3;" />
        </div>
        <div class="drawer-side z-40" style="scroll-behavior: smooth; scroll-padding-top: 5rem;" >
            <label for="my-drawer" class="drawer-overlay"></label>
            <MenuDrawer />
        </div>
    </div>
</template>

<script setup>
import { watch, onMounted } from "vue";
import { darkTheme } from "naive-ui";
import FlashMessage from "@backend_components/Backend/Global/FlashMessage.vue";
import Breadcrumb from "@backend_components/Backend/App/Breadcrumb.vue";
import Navbar from "@backend_components/Backend/App/Navbar.vue";
import Footer from "@backend_components/Backend/App/Footer.vue";
import MenuDrawer from "@backend_components/Backend/App/MenuDrawer.vue";
import { usePage } from "@inertiajs/vue3";

// Page props
const props = defineProps({
    homePage: {
        type: Boolean,
        default: false
    },
});

// Watch for any changes in the page title once the title has change we goin to update the title of the page
watch(
    () => usePage().props.title,
    (v) => {
        pageTitleUpdate(v);
    }
);

/**
 * Update the page title
 */
const pageTitleUpdate = async (newTitle) => {
    document.title = newTitle;
};

setTimeout(() => {
    pageTitleUpdate(usePage().props.title ?? 'Skeleton Admin');
}, 500);

</script>

<style>
</style>
