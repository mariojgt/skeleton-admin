<template>
  <layout title="Frontend Reset Password">
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
            <submit @click="submitForm" />
          </div>
        </div>
        <!-- <Link href="/about-us">Go to about us</Link> -->
      </div>
    </template>

    <template v-slot:links>
      <link-button name="Register" link="register" />
      <link-button name="Forgot password" link="forgot-password" />
    </template>
  </layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../../Layout/Login.vue";

// Import the from components
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
  Inertia.post(route("password-reset.user"), form);
};
</script>
