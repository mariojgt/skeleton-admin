<template>
    <Layout>

        <section class="bg-base-300">
            <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-neutral">Edit {{ props.blog.title }}
                </h2>
                <form @submit.prevent="submit" class="space-y-8">
                    <input-field type="text" v-model="form.title" label="Title" />
                    <input-field type="text" v-model="form.slug" label="Slug" />
                    <TextMultipleSelector :label="props.dynamicCategorySearch.label" placeholder="search"
                        :model="props.dynamicCategorySearch.model" :columns="props.dynamicCategorySearch.columns"
                        :singleMode="props.dynamicCategorySearch.singleSearch" v-model="form.category_id"
                        :loadData="selected_category.data" :endpoint="props.dynamicCategorySearch.endpoint" />
                    <Toggle v-model="form.is_published" label="Is published" />
                    <Editor :api-key="props.editor_key" v-model="form.content" />

                    <label class="label"><span class="label-text">Short Description</span></label>
                    <Editor :api-key="props.editor_key" v-model="form.short_description" />
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    </Layout>
</template>

<script setup>
// Import the layout component using the root
import Layout from "../../../../../Layout/App.vue";
import { router } from '@inertiajs/vue3'
// Import the from components
import {
    InputField,
    InputPassword,
    Submit,
    TextMultipleSelector,
    Image,
    Toggle
} from "@mariojgt/masterui/packages/index";
import Editor from "@backend_components/Editor/Editor.vue";

const props = defineProps({
    blog: {
        type: Object,
        default: () => [],
    },
    editor_key: {
        type: String,
        default: null,
    },
    edit_route: {
        type: String,
        default: null,
    },
    dynamicCategorySearch: {
        type: Object,
        default: () => [],
    },
    selected_category: {
        type: Object,
        default: () => [],
    },
});

const form = $ref({
    title: props.blog.title,
    slug: props.blog.slug,
    content: props.blog.content,
    short_description: props.blog.short_description,
    is_published: props.blog.is_published,
    category_id: props.blog.category_id,
});

const submit = async () => {
    router.post(props.edit_route, form);
};

</script>
