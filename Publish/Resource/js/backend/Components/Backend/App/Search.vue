<template>
    <div class="flex-1 lg:flex-none">
        <div class="form-control p-6">
            <div class="relative">
                <div class="dropdown dropdown-end">
                    <input type="text" tabindex="0" placeholder="Search" v-model="search" @keyup="fetchSearch"
                        class="w-full pr-16 input input-primary input-bordered" />
                    <button class="absolute top-0 right-0 rounded-l-none btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-6 h-6 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    <ul tabindex="0"
                        class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box max-h-[400px] w-[500px] overflow-y-auto"
                        :class="searchResultEmpty > 0 ? 'hidden' : 'block'">
                        <div v-for="(item, index) in searchResult" :key="index">
                            <li v-for="(data, key) in item.search" :key="key">
                                <Link :href="data.route" class="bg-base-200 mb-1 flex justify-between">
                                <div class="text-md font-bold">
                                    <span class="text-primary text-md pr-1">{{ index }}</span> {{ data.result }}
                                </div>
                                <div class="text-md font-bold text-primary flex justify-between">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        {{ data.last_route }}
                                    </div>
                                </div>
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
// Import axios
import { api } from "../../../Boot/axios.js";
import { Link } from "@inertiajs/vue3";
import { computed } from "vue";
import { useMessage } from "naive-ui";
const message = useMessage();


let search = $ref([]);
let debounce = $ref([]);
let searchResult = $ref([]);

const fetchSearch = async () => {
    // Check the length of the search
    if (search.length < 3) {
        return;
    }

    // Clear any existing debounce event
    clearTimeout(debounce);
    // Update and log the counts after 500 miliseconds
    debounce = setTimeout(function () {
        api
            .get(route("admin.api.search", { search: search }))
            .then(function (response) {
                searchResult = response.data;
            })
            .catch(function (error) { });
    }, 500);
};

// Computeed the search result to check if it is empty
const searchResultEmpty = computed(() => {
    return searchResult.length == 0;
});


</script>
