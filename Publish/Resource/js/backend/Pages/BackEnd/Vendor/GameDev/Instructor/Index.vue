<template>
    <Layout>
        <div class="px-5 py-7 w-full bg-base-300">
            <form @submit.prevent="submitForm">
                <input-field v-model="admin.data.work_title" label="Work title" type="text" placeholder="type your Work title" />
                <input-field v-model="admin.data.facebook" label="Facebook" type="text" placeholder="type your Facebook" />
                <input-field v-model="admin.data.twitter" label="Twitter" type="text" placeholder="type your Twitter" />
                <input-field v-model="admin.data.linkedin" label="Linkedin" type="text" placeholder="type your Linkedin" />
                <input-field v-model="admin.data.github" label="Github" type="text" placeholder="type your github" />
                <input-field v-model="admin.data.instagram" label="Instagram" type="text" placeholder="type your Instagram" />
                <input-field v-model="admin.data.website" label="Website" type="text" placeholder="type your Website" />
                <textarea class="textarea textarea-bordered w-full mt-5" v-model="admin.data.about" rows="5" placeholder="Type your about"></textarea>
                <div class="form-control pt-10">
                    <submit name="update" @click="submitForm" />
                </div>
            </form>
        </div>
    </Layout>
</template>

<script setup>
import { router } from "@inertiajs/vue3";
import { onMounted } from "vue";
import { Link } from "@inertiajs/vue3";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import Layout from "@backend_layout/App.vue";
import {
    InputField,
    LinkButton,
    InputPassword,
    Submit,
    SelectInput,
} from "@mariojgt/masterui/packages/index";

const props = defineProps({
    admin: {
        type: Object,
        default: () => ({}), default: {},
    }
});

// SubmitTheForm
const submitForm = () => {
    const form = {
        work_title: props.admin.data.work_title,
        about     : props.admin.data.about,
        facebook  : props.admin.data.facebook,
        twitter   : props.admin.data.twitter,
        linkedin  : props.admin.data.linkedin,
        github    : props.admin.data.github,
        instagram : props.admin.data.instagram,
        website   : props.admin.data.website,
    };
    router.patch(route("gamedev.instructor.edit"), form);
};
</script>
