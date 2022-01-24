<template>
    <select class="select select-bordered select-xs w-full max-w-xs text-base-content" id="theme-select"
        @click="onChangeChangeTheme()">
        <option disabled=" disabled" selected="selected">Change Theme</option>
        <option onclick="changeTheme('light')"> light </option>
        <option onclick="changeTheme('dark')"> dark </option>
        <option onclick="changeTheme('cupcake')"> cupcake </option>
        <option onclick="changeTheme('bumblebee')"> bumblebee </option>
        <option onclick="changeTheme('emerald')"> emerald </option>
        <option onclick="changeTheme('corporate')"> corporate </option>
        <option onclick="changeTheme('synthwave')"> synthwave </option>
        <option onclick="changeTheme('retro')"> retro </option>
        <option onclick="changeTheme('cyberpunk')"> cyberpunk </option>
        <option onclick="changeTheme('valentine')"> valentine </option>
        <option onclick="changeTheme('halloween')"> halloween </option>
        <option onclick="changeTheme('garden')"> garden </option>
        <option onclick="changeTheme('forest')"> forest </option>
        <option onclick="changeTheme('aqua')"> aqua </option>
        <option onclick="changeTheme('lofi')"> lofi </option>
        <option onclick="changeTheme('pastel')"> pastel </option>
        <option onclick="changeTheme('fantasy')"> fantasy </option>
        <option onclick="changeTheme('wireframe')"> wireframe </option>
        <option onclick="changeTheme('black')"> black </option>
        <option onclick="changeTheme('dracula')"> dracula </option>
        <option onclick="changeTheme('cmyk')"> cmyk </option>
    </select>
</template>

<script setup>

    import { watch, onMounted } from "vue";
    import { usePage } from "@inertiajs/inertia-vue3";
    import Toastify from 'toastify-js';

    // Get the saved theme option
    const theme = localStorage.getItem('theme');

    onMounted(() => {
        if (theme) {
            changeTheme(theme);
        } else {
            changeTheme('light');
        }
    });

    /**
     * Change the current theme
     * @param mixed theme
     *
     * @return [type]
     */
    const changeTheme = (theme) => {
       // Find the main html theme
        var html = document.getElementsByTagName("HTML")[0];
        // now check if there is data in the stora
        html.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
   };

    /**
     * On select change
     * @return [type]
     */
    const onChangeChangeTheme = (theme) => {
       var themeColor = document.querySelector('#theme-select').value;
        changeTheme(themeColor);
    };

</script>
