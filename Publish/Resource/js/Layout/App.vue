<template>
    <div class="base-200 drawer">
        <!-- {{-- Id used to toogle the side menu --}} -->
        <input id="nav-drawer" type="checkbox" class="drawer-toggle">
        <!-- {{-- Website content --}} -->
        <div class="flex flex-col drawer-content">
            <Navbar/>
            <FlashMessage/>
            <div class="px-6 py-8">
                <slot />
            </div>
            <!-- {{-- Footer --}} -->
            <Footer/>
        </div>
        <!-- {{-- Side Menu Drawer Start here --}} -->
        <div class="drawer-side">
            <label for="nav-drawer" class="drawer-overlay"></label>
            <MenuDrawer/>
        </div>
        <!-- {{-- Side Menu Drawer End here --}} -->
    </div>

</template>

<script setup>
import { watch, onMounted } from "vue";
import FlashMessage from "../Components/Global/FlashMessage";
import Navbar from "../Components/App/Navbar";
import Footer from "../Components/App/Footer";
import MenuDrawer from "../Components/App/MenuDrawer";

</script>

<style>

</style>
