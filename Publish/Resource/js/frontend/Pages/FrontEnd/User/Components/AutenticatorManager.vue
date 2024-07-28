<template>
    <div>
        <div class="px-5 py-7">
            <div
                v-if="props.autenticatorInfo.is_enable == false"
            >
                <div class="flex flex-row items-center space-x-4 card-body">
                    <div class="rounded shadow p-4">
                        <div
                            v-html="props.autenticatorInfo.codeinfo.qr_code"
                        ></div>
                    </div>
                    <div class="w-full">
                        <h2 class="card-title text-lg font-semibold">
                            Scan the QR code and enter the code to activate your
                            two-factor authentication.
                        </h2>
                        <p class="text-base-content text-opacity-60">
                            In case you can't use the QR code, you can enter the
                            code manually.
                            <strong>{{
                                props.autenticatorInfo.codeinfo.secret
                            }}</strong>
                        </p>
                        <div class="mt-4">
                            <form
                                @submit.prevent="submitForm"
                                class="space-y-4"
                            >
                                <inputField
                                    v-model="code"
                                    label="Code"
                                    type="text"
                                    name="code"
                                    placeholder="Type your code"
                                    max="6"
                                    messageClass="text-white text-xl bg-error rounded-lg p-2 opacity-90"
                                    labelClass="text-3xl font-bold text-left"
                                    inputClass="w-full p-5 text-2xl input input-primary input-bordered"
                                />
                                <submit
                                    name="activate"
                                    @click="submitForm"
                                    class="btn btn-secondary"
                                />
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
                                    <inputField
                                        v-model="code"
                                        label="Two Factor Autenticator Code"
                                        type="text"
                                        name="code"
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
                                <tr
                                    v-for="(
                                        item, index
                                    ) in autenticatorInfo.backup_codes"
                                    :key="index"
                                >
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
import { router } from "@inertiajs/vue3";
import { onMounted } from "vue";

// Import the from components
import { InputField, Submit } from "@mariojgt/masterui/packages/index";

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
    router.post(route("user.2fa.enable"), form);
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
