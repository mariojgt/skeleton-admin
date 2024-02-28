<template>
    <aside class="bg-base-100 flex flex-col h-screen w-80">
        <div class="h-4"></div>
        <ul class="menu menu-sm lg:menu-md px-4 py-0 flex-grow">
            <!-- Example below only for example -->
            <li></li>
            <li class="menu-title flex flex-row gap-4">
                <span class="text-neutral-content"
                    ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="w-5 h-5 text-neutral-content"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z"
                            clip-rule="evenodd"
                        ></path></svg
                ></span>
                <span>Menu</span>
            </li>
            <menu-item-handle v-for="(item, index) in menu" :key="index" :menuItem="item" />
        </ul>
        <div
            class="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"
        ></div>
    </aside>
</template>

<script setup lang="ts" >
    import { usePage } from "@inertiajs/vue3";
    import { watch, onMounted } from "vue";
    import menuItemHandle from "../../Menu/MenuHandle.vue";

    const menu = usePage().props.navigation.data;
</script>
