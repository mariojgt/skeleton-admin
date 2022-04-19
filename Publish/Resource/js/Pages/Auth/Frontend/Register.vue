<template>
  <Layout title="Register">
    <template v-slot:form>
      <div>
        <div class="px-5 py-7">
          <input-field
            v-model="name"
            label="Name"
            type="txt"
            name="name"
            id="name"
            placeholder="type your name"
          />

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

          <div class="form-control pt-10">
            <submit name="Register" @click="submitForm" />
          </div>
        </div>
        <!-- <Link href="/about-us">Go to about us</Link> -->
      </div>
    </template>

    <template v-slot:links>
      <link-button name="Login" link="login" />
      <link-button name="Forgot password" link="forgot-password" />
    </template>
  </Layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../../Layout/Login";

// Import the from components
import {
  InputField,
  InputPassword,
  Submit,
  LinkButton,
} from "@mariojgt/masterui/packages/index";

let name = $ref("");
let email = $ref("");
let password = $ref("");
let password_confirmation = $ref("");

const props = defineProps({
  title: {
    type: String,
    default: "mariojgt is heredude",
  },
});

const submitForm = () => {
  const form = {
    name: name,
    email: email,
    password: password,
    password_confirmation: password_confirmation,
  };
  Inertia.post(route("register.user"), form);
};
</script>
