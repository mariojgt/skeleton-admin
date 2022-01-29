<template>
    <div>
        <div class="px-5 py-7">
            <div
                v-if="props.autenticatorInfo.is_enable == false"
                class="card shadow-lg compact side bg-base-100"
            >
                <div class="flex-row items-center space-x-4 card-body">
                    <div>
                        <div class="rounded-full w-60 h-60 shadow">
                            <div
                                v-html="props.autenticatorInfo.codeinfo.qr_code"
                            ></div>
                        </div>
                    </div>
                    <div class="w-full">
                        <h2 class="card-title">
                            Scan the qr code and enter the code to activate your
                            two factor authentication.
                        </h2>
                        <p class="text-base-content text-opacity-40">
                            Case you can,t use the qr code, you can enter the
                            code manually.
                            <strong>{{
                                props.autenticatorInfo.codeinfo.secret
                            }}</strong>
                        </p>
                        <div>
                            <input-field
                                v-model="code"
                                label="Code"
                                type="text"
                                placeholder="type your code"
                            />
                            <submit name="activate" @click="submitForm" />
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div
                    class="card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100"
                >
                    <div class="card-body">
                        <h2 class="my-4 text-4xl font-bold card-title">
                            Two Factor Autenticator Backup Codes
                            <div class="flex items-center justify-end gap-3">
                                <button
                                    class="btn btn-primary"
                                    @click="downloadCodesToCsv"
                                >
                                    Download Csv
                                </button>

                                <label
                                    for="my-modal-2"
                                    class="btn btn-primary modal-button"
                                    >Remove Autenticator</label
                                >
                                <input
                                    type="checkbox"
                                    id="my-modal-2"
                                    class="modal-toggle"
                                />
                                <div class="modal">
                                    <div class="modal-box">

                                        <input-field
                                            v-model="code"
                                            label="Two Factor Autenticator Code"
                                            type="text"
                                            placeholder="type your code"
                                        />

                                        <div class="modal-action">
                                            <label
                                                for="my-modal-2"
                                                class="btn btn-primary"
                                                @click="removeAutenticator"
                                                >Remove</label
                                            >
                                            <label for="my-modal-2" class="btn"
                                                >Close</label
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Inertia } from "@inertiajs/inertia";
import { onMounted } from "vue";
// Import the from components
import InputField from "../../../Components/Form/Input";
import Submit from "../../../Components/Form/Submit";

// FIelds Values

// Page props
const props = defineProps({
    adminInfo: {
        type: Object,
        default: () => ({}),
    },
    autenticatorInfo: {
        type: Object,
        default: () => ({}),
    },
});

let adminInformation = $ref([]);

onMounted(() => {
    adminInformation = props.adminInfo;
});

let code = $ref("");

// SubmitTheForm
const submitForm = () => {
    const form = {
        code: code,
    };
    Inertia.post(route("admin.2fa.enable"), form);
};
// Remvoe the user aunteticator
const removeAutenticator = () => {
    const form = {
        code: code,
    };
    Inertia.patch(route("admin.remove-autenticator"), form);
};

const downloadCodesToCsv = () => {
    // csv header
    let rows = [["Code", "Used"]];

    // Loop a varaible and add the value to the csv
    for (const [key, value] of Object.entries(
        props.autenticatorInfo.backup_codes
    )) {
        console.log(value);
        // Build the totals in the csv
        rows.push([value.code, value.used]);
    }

    // Build the csv
    let csvContent =
        "data:text/csv;charset=utf-8," +
        rows.map((e) => e.join(",")).join("\n");

    window.open(encodeURI(csvContent));
};
</script>
