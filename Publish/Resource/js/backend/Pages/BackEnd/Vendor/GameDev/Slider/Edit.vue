<template>
    <Layout>
        <div class="px-5 py-7 w-full bg-base-300">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral">
                Edit {{ props.slider.title }}
            </h2>

            <form @submit.prevent="submit"
                class="bg-secondary bg-opacity-80 backdrop-blur transition-all duration-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <input-field type="text" v-model="form.title" label="Title" />
                <input-field type="text" v-model="form.class" label="Class" />
                <input-field type="number" v-model="form.order" label="Order" />
                <Toggle v-model="form.active" label="Is published" />

                <div>
                    <label class="label">
                        <span class="label-text">Slider Body</span>
                    </label>
                    <Editor :api-key="props.editor_key" :init="{
                        plugins:
                            'lists link image table code help wordcount',
                    }" v-model="form.body" />
                </div>
                <button type="submit" class="btn btn-accent mt-10 block w-full">
                    Update
                </button>
            </form>
        </div>
    </Layout>
</template>

<script setup>
import { router } from "@inertiajs/vue3";
// Import the layout component using the root
import Layout from "../../../../../Layout/App.vue";
// Import the table component from the builder api
import Table from "../../../../../../../../Builder/Table/Table.vue";
// Import the table component from the builder api
import Editor from "@backend_components/Editor/Editor.vue";
// Import the from components
import {
    InputField,
    InputPassword,
    Submit,
    SelectInput,
    TextMultipleSelector,
    Image,
    Toggle,
} from "@mariojgt/masterui/packages/index";

const props = defineProps({
    editor_key: {
        type: String,
        default: null,
    },
    slider: {
        type: Object,
        default: () => [],
    },
});


const submit = async () => {
    router.post(route("gamedev.slider.update", props.slider.id), form);
};

const form = $ref(props.slider);

</script>
