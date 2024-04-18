<template>
    <Layout :homePage="true" >
        <div class="h-screen flex">
            <div class="w-full skeleton-bg2 pt-20">
                <div class="grid sm:grid-cols-6 grid-cols-2">
                    <MenuApp v-for="(item, index) in menu" :key="index" :menuItem="item" class="opacity-90" />
                    <LogoutApp/>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup type="ts">
import { router } from "@inertiajs/vue3";
import { onMounted } from "vue";
import { Link } from "@inertiajs/vue3";
import Layout from "../../../Layout/App.vue";
import { usePage } from "@inertiajs/vue3";
import MenuApp from "../../../Components/Menu/AppMenuSingle.vue";
import LogoutApp from "../../../Components/HomepageApp/Logout.vue";

const menu = usePage().props.navigation.data;

let email = $ref("");
let password = $ref("");

const props = defineProps({
    title: {
        type: String,
        default: "add title",
    },
    system_version: {
        type: Object,
        default: []
    },
});

const submitForm = () => {
    const form = {
        email: email,
        password: password,
    };
    router.post("/login/user", form);
};
</script>
