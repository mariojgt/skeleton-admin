<template>
    <loginModal :isOpen="loginModalisOpen" @closeModal="closeLoginModal" @register="register" @forgotPassword="forgotPassword" @isLoading="isLoading" />
    <registerModal :isOpen="registerModalisOpen" @closeModal="closeRegisterModal" @alreadyHaveAccount="alreadyHaveAccount" @isLoading="isLoading" />
    <forgetPassword :isOpen="forgetPasswordModalisOpen" @closeModal="closeForgetPasswordModal" @isLoading="isLoading" />
    <codeWall :isOpen="codeWallModal" @closeModal="closecodeWall" @isLoading="isLoading" />
</template>

<script setup lang="ts">
import { router, Link } from "@inertiajs/vue3";
import Layout from "@frontend_layout/Login.vue";
import ReusableModal from "./ReusableModal.vue";
import loginModal from "@frontend_components/Auth/FloatPages/Login.vue";
import registerModal from "@frontend_components/Auth/FloatPages/Register.vue";
import forgetPassword from "@frontend_components/Auth/FloatPages/ForgetPassword.vue";
import codeWall from "@frontend_components/Auth/FloatPages/codeWall.vue";
import { watch } from "vue";
// Import the from components
import {
    InputField,
    InputPassword,
    Submit,
    LinkButton,
} from "@mariojgt/masterui/packages/index";

const emit = defineEmits(["closeModal", "isLoading"]);

// Login Modal
let loginModalisOpen = $ref(false) as boolean;
const closeLoginModal = () => {
    loginModalisOpen = false;
    emit("closeModal");
};
const register = () => {
    loginModalisOpen = false;
    registerModalisOpen = true;
};
const forgotPassword = () => {
    loginModalisOpen = false;
    forgetPasswordModalisOpen = true;
};
// Register Modal
let registerModalisOpen = $ref(false) as boolean;
const closeRegisterModal = () => {
    registerModalisOpen = false;
    emit("closeModal");
};
const alreadyHaveAccount = () => {
    registerModalisOpen = false;
    loginModalisOpen = true;
};
// Forget Password Modal
let forgetPasswordModalisOpen = $ref(false) as boolean;
const closeForgetPasswordModal = () => {
    forgetPasswordModalisOpen = false;
    emit("closeModal");
};

// codeWall Modal
let codeWallModal = $ref(false) as boolean;
const closecodeWall = () => {
    codeWallModal = false;
    emit("closeModal");
};

// Is loading
const isLoading = (isLoading: boolean) => {
    emit("isLoading", isLoading);
};

const props = defineProps({
    showLogin: {
        type: Boolean,
        default: false,
    },
    showRegister: {
        type: Boolean,
        default: false,
    },
    showCodeWall: {
        type: Boolean,
        default: false,
    },
});

// watch if the showLogin is open or close and set the loginModalisOpen
watch(() => props.showLogin, (value) => {
    if (value) {
        loginModalisOpen = value;
    }
});

// watch if the showRegister is open or close and set the registerModalisOpen
watch(() => props.showRegister, (value) => {
    if (value) {
        registerModalisOpen = value;
    }
});

// watch if the showCodeWall is open or close and set the codeWallModal
watch(() => props.showCodeWall, (value) => {
    if (value) {
        codeWallModal = value;
    }
});
</script>
