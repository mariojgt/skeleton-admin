<template>
    <Layout>
        <div class="lg:p-10 xl:grid-cols-12 lg:bg-base-200 rounded-box">
            <div
                class="card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100"
            >
                <n-card title="User Profile" >
                    <n-tabs type="line" class="text-primary" >
                        <n-tab-pane name="basic-info" tab="Basic Info"
                            >Wonderwall</n-tab-pane
                        >
                        <n-tab-pane name="the beatles" tab="the Beatles"
                            >Hey Jude</n-tab-pane
                        >
                        <n-tab-pane name="jay chou" tab="Jay Chou"
                            >Qilixiang</n-tab-pane
                        >
                    </n-tabs>
                </n-card>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../Layout/App";

// Import the from components
import InputField from "../../Components/Form/Input";
import InputPassword from "../../Components/Form/Password";
import Submit from "../../Components/Form/Submit";
import LinkButton from "../../Components/Form/Link.vue";

let code = $ref("");

const props = defineProps({
    autenticator: {
        type: String,
        boolean: false,
    },
    autenticator_enable: {
        type: String,
        default: "mariojgt is heredude",
    },
});

const submitForm = () => {
    const form = {
        code: code,
    };
    Inertia.post("/login/user", form);
};
</script>
