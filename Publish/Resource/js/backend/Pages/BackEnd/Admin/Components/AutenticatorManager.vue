<template>
    <div>
        <div class="px-5 py-7">
            <div v-if="props.autenticator.is_enable === false" class="card shadow-lg compact side bg-base-100">
                <div class="flex-row items-center space-x-4 card-body">
                    <div>
                        <div class="w-full shadow border-primary border">
                            <div v-html="props.autenticator.codeinfo.qr_code"></div>
                        </div>
                    </div>
                    <div class="w-full">
                        <h2 class="card-title">
                            Scan the qr code and enter the code to activate your two factor
                            authentication.
                        </h2>
                        <p class="text-base-content text-opacity-40">
                            Case you can,t use the qr code, you can enter the code manually.
                            <strong>{{ props.autenticator.codeinfo.secret }}</strong>
                        </p>
                        <div>
                            <input-field v-model="code" label="Code" type="text" placeholder="type your code" />
                            <div class="form-control pt-10">
                                <submit name="activate" @click="submitForm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="card col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-100">
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { router } from "@inertiajs/vue3";
import { onMounted } from "vue";
// Import the from components
import {
    InputField,
    Submit
} from "@mariojgt/masterui/packages/index";

// FIelds Values

// Page props
const props = defineProps({
    adminInfo: {
        type: Object,
        default: () => ({}),
    },
    autenticator: {
        type: Object,
        default: () => ({}),
    }
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
    router.post(route("admin.2fa.enable"), form);
};
// Remvoe the user aunteticator
const removeAutenticator = () => {
    const form = {
        code: code,
    };
    Inertia.patch(route("admin.remove-autenticator"), form);
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
        props.autenticator.backup_codes
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
