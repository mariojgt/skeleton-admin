<template>
    <div>
        <div class="px-5 py-7">
            <div v-if="props.autenticatorInfo.is_enable == false" class="card shadow-lg compact side bg-base-100">
                <div class="flex-row items-center space-x-4 card-body">
                    <div>
                        <div class="rounded-full w-60 h-60 shadow">
                            <div v-html="props.autenticatorInfo.codeinfo.qr_code"></div>
                        </div>
                    </div>
                    <div class="w-full">
                        <h2 class="card-title">
                            Scan the qr code and enter the code to activate your two factor
                            authentication.
                        </h2>
                        <p class="text-base-content text-opacity-40">
                            Case you can,t use the qr code, you can enter the code manually.
                            <strong>{{ props.autenticatorInfo.codeinfo.secret }}</strong>
                        </p>
                        <div>
                            <form @submit.prevent="submitForm">
                                <input-field v-model="code" label="Code" type="text" placeholder="type your code" max="6" />
                                <div class="form-control pt-10">
                                    <submit name="activate" @click="submitForm" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="card-body">
                    <h2 class="my-4 text-4xl font-bold card-title">
                        Two Factor Autenticator Backup Codes
                        <div class="flex items-center justify-end gap-3">
                            <button class="btn btn-primary" @click="printCodes">
                                Download Csv
                            </button>

                            <label for="my-modal-2" class="btn btn-primary modal-button">Remove Autenticator</label>
                            <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                            <div class="modal">
                                <div class="modal-box">
                                    <input-field v-model="code" label="Two Factor Autenticator Code" type="text"
                                        placeholder="type your code" />

                                    <div class="modal-action">
                                        <label for="my-modal-2" class="btn btn-primary"
                                            @click="removeAutenticator">Remove</label>
                                        <label for="my-modal-2" class="btn">Close</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </h2>

                    <div class="overflow-x-auto">
                        <table class="table table-zebra w-full">
                            <!-- head -->
                            <thead>
                                <tr>
                                    <th>Code</th>
                                    <th>Used</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- row 1 -->
                                <tr v-for="(item, index) in autenticatorInfo.backup_codes" :key="index">
                                    <th>{{ item.code }}</th>
                                    <th>{{ item.used }}</th>
                                </tr>
                            </tbody>
                        </table>
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
import {
    InputField,
    Submit,
} from "@mariojgt/masterui/packages/index";

// FIelds Values

// Page props
const props = defineProps({
    userInfo: {
        type: Object,
        default: () => ({}),
    },
    autenticatorInfo: {
        type: Object,
        default: () => ({}),
    },
});

let userInformation = $ref([]);

onMounted(() => {
    userInformation = props.userInfo;
});

let code = $ref("");

// SubmitTheForm
const submitForm = () => {
    const form = {
        code: code,
    };
    Inertia.post(route("user.2fa.enable"), form);
};
// Remvoe the user aunteticator
const removeAutenticator = () => {
    const form = {
        code: code,
    };
    Inertia.patch(route("user.remove-autenticator"), form);
};

const printCodes = () => {
    let mywindow = window.open(
        "",
        "PRINT",
        "height=650,width=900,top=100,left=150"
    );
    const title = "codes";
    mywindow.document.write(`<html><head><title>${title}</title>`);
    mywindow.document.write("</head><body>");
    mywindow.document.write("<h1> Two Factor Autenticator Backup Codes </h1>");

    // Create a table
    mywindow.document.write("<table>");
    mywindow.document.write("<tr><th>Code</th><th>used</th></tr>");
    // Create a table row for each object
    for (const [key, value] of Object.entries(
        props.autenticatorInfo.backup_codes
    )) {
        mywindow.document.write("<tr>");
        mywindow.document.write(`<td>${value.code}</td>`);
        mywindow.document.write(`<td>${value.used}</td>`);
        mywindow.document.write("</tr>");
    }
    // Close the table
    mywindow.document.write("</table>");

    mywindow.document.write("</body></html>");

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
};
</script>
