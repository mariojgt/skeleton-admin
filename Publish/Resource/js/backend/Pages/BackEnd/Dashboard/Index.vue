<template>
    <Layout>
        <div class="grid grid-cols-1 gap-6 lg:p-10 xl:grid-cols-3 lg:bg-base-200 rounded-box">
            <div class="card shadow-lg compact side bg-base-100">
                <div class="flex-row items-center space-x-4 card-body">
                    <div>
                        <div class="avatar">
                            <div class="w-14 h-14 shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 class="card-title">System Version <div class="badge badge-lg">{{
                                props.system_version.version
                        }}</div>
                        </h2>
                        <p class="text-base-content text-opacity-40">
                        <div class="alert alert-error shadow-lg mt-5" v-if="props.system_version.update">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6"
                                    fill="none" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>New version <div class="badge badge-lg">{{ props.system_version.live_version }}
                                    </div> is avaliable please update.</span>
                            </div>
                        </div>
                        </p>
                    </div>
                </div>
            </div>
            <div class="card shadow-lg compact side bg-base-100">
                <div class="flex-row items-center space-x-4 card-body">
                    <div class="flex-1">
                        <h2 class="card-title">Meredith Mayer</h2>
                        <p class="text-base-content text-opacity-40">
                            Data Liaison
                        </p>
                    </div>
                    <div class="flex-0">
                        <button class="btn btn-sm">Follow</button>
                    </div>
                </div>
            </div>
            <div class="card row-span-3 shadow-lg compact bg-base-100">
                <figure>
                    <img src="https://picsum.photos/id/1005/600/400" />
                </figure>
                <div class="flex-row items-center space-x-4 card-body">
                    <div>
                        <h2 class="card-title">Karolann Collins</h2>
                        <p class="text-base-content text-opacity-40">
                            Direct Interactions Liaison
                        </p>
                    </div>
                </div>
            </div>
            <div class="card shadow-lg compact side bg-base-100">
                <div class="flex-row items-center space-x-4 card-body">
                    <div class="flex-1">
                        <h2 class="card-title text-primary">4,600</h2>
                        <p class="text-base-content text-opacity-40">
                            Page views
                        </p>
                    </div>
                    <div class="flex space-x-2 flex-0">
                        <button class="btn btn-sm btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block w-6 h-6 stroke-current">
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                </path>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                            </svg>
                        </button>
                        <button class="btn btn-sm btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block w-6 h-6 stroke-current">
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z">
                                </path>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card shadow-lg compact side bg-base-100">
                <div class="flex-row items-center space-x-4 card-body">
                    <label class="flex-0"><input type="checkbox" checked="checked" class="toggle toggle-primary"
                            data-com.bitwarden.browser.user-edited="yes" /></label>
                    <div class="flex-1">
                        <h2 class="card-title">Enable Notifications</h2>
                        <p class="text-base-content text-opacity-40">
                            To get latest updates
                        </p>
                    </div>
                </div>
            </div>
            <div class="card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100">
                <div class="card-body">
                    <h2 class="my-4 text-4xl font-bold card-title">
                        Top 10 UI Components
                    </h2>
                    <div class="mb-4 space-x-2 card-actions">
                        <div class="badge badge-ghost">Colors</div>
                        <div class="badge badge-ghost">UI Design</div>
                        <div class="badge badge-ghost">Creativity</div>
                    </div>
                    <p>
                        Rerum reiciendis beatae tenetur excepturi aut pariatur
                        est eos. Sit sit necessitatibus veritatis sed molestiae
                        voluptates incidunt iure sapiente.
                    </p>
                    <div class="justify-end space-x-2 card-actions">
                        <button class="btn btn-primary">Login</button>
                        <button class="btn">Register</button>
                    </div>
                </div>
            </div>
            <div class="card shadow-lg compact side bg-base-100">
                <div class="flex-row items-center space-x-4 card-body">
                    <div class="flex-1">
                        <h2 class="flex card-title">
                            <button class="btn btn-ghost btn-sm btn-circle loading"></button>
                            Downloading...
                        </h2>
                        <progress value="70" max="100" class="progress progress-secondary"></progress>
                    </div>
                    <div class="flex-0">
                        <button class="btn btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                class="inline-block w-6 h-6 stroke-current">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="card shadow-lg compact side bg-base-100">
                <div class="flex-row items-center space-x-4 card-body">
                    <label class="cursor-pointer label"><input type="checkbox" checked="checked"
                            class="checkbox checkbox-accent" />
                        <span class="mx-4 label-text">Enable Autosave</span></label>
                </div>
            </div>
            <ul class="menu row-span-3 p-4 shadow-lg bg-base-100 text-base-content text-opacity-40 rounded-box">
                <li class="menu-title"><span> Menu Title </span></li>
                <li>
                    <a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-5 h-5 mr-2 stroke-current">
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                            </path>
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                        </svg>
                        Item with icon
                    </a>
                </li>
                <li>
                    <a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-5 h-5 mr-2 stroke-current">
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                        </svg>
                        Item with icon
                    </a>
                </li>
                <li>
                    <a><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-5 h-5 mr-2 stroke-current">
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                        </svg>
                        Item with icon
                    </a>
                </li>
            </ul>
            <div class="alert col-span-1 xl:col-span-2 bg-base-100">
                <div class="flex-1">
                    <label class="mx-3">Lorem ipsum dolor sit amet, consectetur adip!</label>
                </div>
                <div class="flex-none">
                    <button class="btn btn-sm btn-ghost mr-2">Cancel</button>
                    <button class="btn btn-sm btn-primary">Apply</button>
                </div>
            </div>
            <div class="alert col-span-1 xl:col-span-2 alert-info">
                <div class="flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="w-6 h-6 mx-2 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                    </svg>
                    <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
                </div>
            </div>
            <div class="alert col-span-1 xl:col-span-2 alert-success">
                <div class="flex-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="w-6 h-6 mx-2 stroke-current">
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                        <!---->
                    </svg>
                    <label>Lorem ipsum dolor sit amet, consectetur adip!</label>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Layout from "../../../Layout/App.vue";

let email = $ref("");
let password = $ref("");

const props = defineProps({
    title: {
        type: String,
        default: "add title",
    },
    system_version: {
        type: String,
        default: "",
    },
});

const submitForm = () => {
    const form = {
        email: email,
        password: password,
    };
    Inertia.post("/login/user", form);
};
</script>
