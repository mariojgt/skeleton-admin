<template>
    <Layout>
        <n-card
            title="Product"
            :class="'col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300'"
        >
            <TabGroup>
                <TabList class="flex space-x-1 rounded-xl p-1 tabs">
                    <Tab v-slot="{ selected }">
                        <a
                            class="tab tab-lg tab-bordered rounded-md bg-neutral"
                            :class="selected ? 'bg-primary text-black' : ''"
                            >Deatils</a
                        >
                    </Tab>
                    <Tab v-slot="{ selected }">
                        <a
                            class="tab tab-lg tab-bordered rounded-md bg-neutral"
                            :class="selected ? 'bg-primary text-black' : ''"
                            >Media and Description</a
                        >
                    </Tab>
                    <Tab v-slot="{ selected }">
                        <a
                            class="tab tab-lg tab-bordered rounded-md bg-neutral"
                            :class="selected ? 'bg-primary text-black' : ''"
                            >Settings</a
                        >
                    </Tab>
                </TabList>
                <form @submit.prevent="submitForm">
                    <TabPanels class="mt-2">
                        <TabPanel>
                            <input-field
                                v-model="form.name"
                                label="Name"
                                type="text"
                                placeholder="Name"
                            />
                            <input-field
                                v-model="form.slug"
                                label="slug"
                                type="text"
                                placeholder="slug"
                            />
                            <input-field
                                v-model="form.price"
                                label="Price"
                                type="text"
                                placeholder="slug"
                            />
                            <TextMultipleSelector
                                v-model="form.category_id"
                                :label="'Category'"
                                placeholder="search"
                                :model="props.dynamicCategorySearch.model"
                                :columns="props.dynamicCategorySearch.columns"
                                :single-mode="
                                    props.dynamicCategorySearch.singleSearch
                                "
                                :load-data="selected_category.data"
                                :endpoint="props.dynamicCategorySearch.endpoint"
                            />
                        </TabPanel>
                        <TabPanel>
                            <label class="form-control">
                                <div class="label">
                                    <span class="label-text">Description</span>
                                </div>
                                <textarea
                                    class="textarea textarea-bordered w-full"
                                    placeholder="Product Description"
                                    v-model="form.description"
                                ></textarea>
                            </label>
                            <Image
                                v-model="form.product_image"
                                label="image"
                                placeholder="search"
                                :load-data="product.data.media"
                                :endpoint="props.image_search_endpoint"
                            />
                        </TabPanel>
                        <TabPanel>
                            <SelectInput
                                v-model="form.price_type"
                                :options="props.price_type_enum"
                                label="Price type"
                            />
                            <SelectInput
                                v-model="form.type"
                                :options="props.type_enum"
                                label="Type"
                            />
                        </TabPanel>
                    </TabPanels>
                </form>
            </TabGroup>
            <div class="form-control pt-10">
                <submit name="Update" @click="submitForm" />
            </div>
        </n-card>
    </Layout>
</template>

<script setup>
import { useForm } from "@inertiajs/vue3";
import { onMounted } from "vue";
import Layout from "@backend_layout/App.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import {
    InputField,
    LinkButton,
    InputPassword,
    Submit,
    SelectInput,
    TextMultipleSelector,
    Image,
    Toggle,
} from "@mariojgt/masterui/packages/index";

const props = defineProps({
    product: {
        type: Object,
        default: () => ({}),
    },
    image_search_endpoint: {
        type: String,
        default: "",
    },
    dynamicCategorySearch: {
        type: Object,
        default: () => ({}),
    },
    selected_category: {
        type: Object,
        default: () => ({}),
    },
    type_enum: {
        type: Object,
        default: () => ({}),
    },
    price_type_enum: {
        type: Object,
        default: () => ({}),
    },
});

onMounted(() => {});

const form = useForm({
    name: props.product.data.name,
    slug: props.product.data.slug,
    description: props.product.data.description,
    price: props.product.data.price,
    product_image: props.product.data.media,
    media: props.product.data.media,
    category_id: props.product.data.category_id,
    type: props.product.data.type,
    price_type: props.product.data.price_type,
});

// SubmitTheForm
const submitForm = () => {
    form.patch(
        route("admin.store.product.update", { product: props.product.data.id })
    );
};
</script>
