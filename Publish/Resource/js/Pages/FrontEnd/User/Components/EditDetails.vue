<template>
  <div>
    <div class="px-5 py-7">
      <div class="grid">
        <div class="avatar justify-center">
          <div class="mb-8 rounded-full w-24 h-24">
            <img :src="userInformation.avatar" />
          </div>
        </div>
      </div>
      <input-field
        v-model="userInformation.first_name"
        label="First Name"
        type="text"
        placeholder="type your first name"
      />
      <input-field
        v-model="userInformation.last_name"
        label="Last Name"
        type="text"
        placeholder="type your last name"
      />
      <input-field
        v-model="userInformation.email"
        label="Email"
        type="email"
        placeholder="type your email"
      />

      <div class="form-control pt-10">
        <submit name="update" @click="submitForm" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
// Import the from components
import InputField from "@mariojgt/masterui/packages/Input/index";
import Submit from "@mariojgt/masterui/packages/Submit/index";

// FIelds Values

// Page props
const props = defineProps({
  userInfo: {
    type: Object,
    default: {},
  },
});

let userInformation = $ref([]);
onMounted(() => {
  userInformation = props.userInfo;
});

// SubmitTheForm
const submitForm = () => {
  const form = {
    first_name: userInformation.first_name,
    last_name: userInformation.last_name,
    email: userInformation.email,
  };
  Inertia.patch(route("user.update", userInformation.id), form);
};
</script>
