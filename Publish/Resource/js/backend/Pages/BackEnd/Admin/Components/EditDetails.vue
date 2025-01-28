<template>
    <div>
        <div class="px-5 py-7">
            <div class="grid">
                <div class="avatar justify-center">
                    <div class="mb-8 rounded-full w-24 h-24">
                        <img :src="adminInformation.avatar" />
                    </div>
                </div>
            </div>
            <form @submit.prevent="submitForm">
                <input-field v-model="adminInformation.first_name" label="First Name" type="text"
                    placeholder="type your first name" />
                <input-field v-model="adminInformation.last_name" label="Last Name" type="text"
                    placeholder="type your last name" />
                <input-field v-model="adminInformation.email" label="Email" type="email"
                    placeholder="type your email" />

                <select-input v-if="adminInformation.role?.id" label="Role" :options="props.roles"
                    v-model="adminInformation.role.id" />

                <div class="form-control pt-10">
                    <submit name="update" @click="submitForm" />
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { router } from "@inertiajs/vue3";
import { onMounted } from "vue";
// Import the from components
// Import the from components
import {
    InputField,
    LinkButton,
    InputPassword,
    Submit,
    SelectInput,
} from "@mariojgt/masterui/packages/index";

// FIelds Values

// Page props
const props = defineProps({
    adminInfo: {
        type: Object,
        default: {},
    },
    roles: {
        type: Object,
        default: () => ({}),
        default: {},
    },
});

let adminInformation = $ref([]);
onMounted(() => {
    adminInformation = props.adminInfo;
});

// SubmitTheForm
const submitForm = () => {
    const form = {
        first_name: adminInformation.first_name,
        last_name: adminInformation.last_name,
        email: adminInformation.email,
        role: adminInformation.role.id,
    };
    router.patch(route("admin.update", adminInformation.id), form);
};
</script>
