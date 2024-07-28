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
                        class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box max-h-[400px] w-[500px] overflow-y-auto">
                        <div v-if="search.length === 0">
                            <li>
                                <div class="">
                                    <div class="flex justify-between">
                                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>
                                        <div>
                                            Type to search ...
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div v-else-if="searchResult.status === false">
                            <li>
                                <div class="">
                                    <div class="flex justify-between">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                                        </svg>
                                        <div>
                                            No Result ...
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div v-else-if="searching">
                            <li>
                                <div class="">
                                    <div class="flex justify-between">
                                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                stroke-width="4"></circle>
                                            <path class="opacity-75" fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                                            </path>
                                        </svg>
                                        <div>
                                            Searching ...
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div v-else v-for="(item, index) in searchResult.data" :key="index">
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
let searching = $ref(false);

const fetchSearch = async () => {
    // Check the length of the search
    if (search.length < 3) {
        return;
    }
    searching = true;
    // Clear any existing debounce event
    clearTimeout(debounce);
    // Update and log the counts after 500 miliseconds
    debounce = setTimeout(function () {
        api
            .get(route("admin.api.search", { search: search }))
            .then(function (response) {
                searchResult = response.data;
                searching = false;
            })
            .catch(function (error) { });
    }, 500);
};
</script>
