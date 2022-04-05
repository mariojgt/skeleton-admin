<template>
    <div class="base-200 drawer">
        <!-- {{-- Id used to toogle the side menu --}} -->
        <input id="nav-drawer" type="checkbox" class="drawer-toggle" />
        <!-- {{-- Website content --}} -->
        <div class="flex flex-col drawer-content">
            <Navbar />
            <div class="px-6 py-8">
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
        <!-- {{-- Side Menu Drawer Start here --}} -->
        <div class="drawer-side">
            <label for="nav-drawer" class="drawer-overlay"></label>
            <MenuDrawer />
        </div>
        <!-- {{-- Side Menu Drawer End here --}} -->
    </div>
</template>

<script setup>
import { watch, onMounted } from "vue";
import { darkTheme } from "naive-ui";
import FlashMessage from "../Components/Backend/Global/FlashMessage";
import Navbar from "../Components/Backend/App/Navbar";
import Footer from "../Components/Backend/App/Footer";
import MenuDrawer from "../Components/Backend/App/MenuDrawer";
</script>

<style></style>
