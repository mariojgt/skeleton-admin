<template>
    <Layout title="Reset Password Page" >
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

                    <input-password
                        v-model="password_confirmation"
                        label="Password Confirm"
                        name="password_confirmation"
                        id="password_confirmation"
                        placeholder="type your Password Confirmation"
                    />

                    <submit @click="submitForm" name="Reset" />
                </div>
                <!-- <Link href="/about-us">Go to about us</Link> -->
            </div>
        </template>

        <template v-slot:links>
            <LinkButton name="Register" link="skeleton-admin/register" />
            <LinkButton name="Forgot password" link="skeleton-admin/forgot-password" />
        </template>
    </Layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../Layout/Login";

// Import the from components
import InputField from "../../Components/Form/Input";
import InputPassword from "../../Components/Form/Password";
import Submit from "../../Components/Form/Submit";
import LinkButton from "../../Components/Form/Link.vue";

let email                 = $ref("");
let password              = $ref("");
let password_confirmation = $ref("");

const props = defineProps({
    token: {
        type: String,
        default: "",
    },
});

console.log(props);

const submitForm = () => {
    const form = {
        email                : email,
        password             : password,
        password_confirmation: password_confirmation,
        token                : props.token,
    };
    Inertia.post('/skeleton-admin/password-change', form);
};

</script>
