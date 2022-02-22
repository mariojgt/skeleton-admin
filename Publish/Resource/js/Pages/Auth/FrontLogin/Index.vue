<template>
    <Layout title="User Login" >
        <template v-slot:form>
            <div>
                <div class="px-5 py-7">
                    <input-field
                        v-model="email"
                        label="Email"
                        type="email"
                        name="email"
                        id="email"
                        placeholder="type your email"
                    />

                    <input-password
                        v-model="password"
                        label="Password"
                        name="password"
                        id="password"
                        placeholder="type your password"
                    />

                    <submit @click="submitForm" />
                </div>
                <!-- <Link href="/about-us">Go to about us</Link> -->
            </div>
        </template>

        <template v-slot:links>
            <LinkButton name="Register" link="register" />
            <LinkButton name="Forgot password" link="forgot-password" />
        </template>
    </Layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../../Layout/Login";

// Import the from components
import InputField from "../../../Components/Form/Input";
import InputPassword from "../../../Components/Form/Password";
import Submit from "../../../Components/Form/Submit";
import LinkButton from "../../../Components/Form/Link.vue";

let email = $ref("");
let password = $ref("");

const props = defineProps({
    title: {
        type: String,
        default: "mariojgt is heredude",
    },
});


const submitForm = () => {
    const form = {
        email :email,
        password :password,
    };
    Inertia.post(route('login.user'), form);
};

</script>
