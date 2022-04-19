<template>
  <layout title="Reset Password">
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

          <div class="form-control pt-10">
            <submit @click="submitForm" name="Request Password" />
          </div>
        </div>
        <!-- <Link href="/about-us">Go to about us</Link> -->
      </div>
    </template>

    <template v-slot:links>
      <link-button name="Register" :link="registerLink" />
      <link-button name="Login" :link="loginLink" />
    </template>
  </layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../../Layout/Login";

// Page links
const registerLink = route("skeleton.register");
const loginLink = route("skeleton.login");

// Import the from components
import {
  InputField,
  InputPassword,
  Submit,
  LinkButton,
} from "@mariojgt/masterui/packages/index";

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
    email: email,
  };
  Inertia.post(route("skeleton.password-reset"), form);
};
</script>
