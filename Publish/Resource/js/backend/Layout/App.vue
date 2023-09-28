<template>
    <div class="drawer">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <!-- Required so the flash message works -->
            <n-message-provider>
                <Navbar />
            </n-message-provider>
            <div class="px-6 py-8">
                <!-- handle the breadcrumb -->
                <Breadcrumb />
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
            <Footer />
        </div>
        <div class="drawer-side z-40" style="scroll-behavior: smooth; scroll-padding-top: 5rem;" >

            <!-- <label for="my-drawer" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
            </ul> -->

            <label for="my-drawer" class="drawer-overlay"></label>
            <MenuDrawer />
        </div>
    </div>
</template>

<script setup>
import { watch, onMounted } from "vue";
import { darkTheme } from "naive-ui";
import FlashMessage from "../Components/Backend/Global/FlashMessage.vue";
import Breadcrumb from "../Components/Backend/App/Breadcrumb.vue";
import Navbar from "../Components/Backend/App/Navbar.vue";
import Footer from "../Components/Backend/App/Footer.vue";
import MenuDrawer from "../Components/Backend/App/MenuDrawer.vue";
import { usePage } from "@inertiajs/vue3";

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
