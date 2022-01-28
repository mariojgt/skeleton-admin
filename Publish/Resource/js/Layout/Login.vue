<template>
    <n-loading-bar-provider>
        <n-message-provider>
            <n-notification-provider>
                <n-dialog-provider>
                    <n-config-provider :theme="darkTheme">
                        <FlashMessage />
                        <auth-wraper :title="props.title">
                            <template v-slot:form>
                                <slot name="form" />
                            </template>
                            <template v-slot:links>
                                <slot name="links" />
                            </template>
                        </auth-wraper>
                    </n-config-provider>
                </n-dialog-provider>
            </n-notification-provider>
        </n-message-provider>
    </n-loading-bar-provider>
</template>

<script setup>
import { watch, onMounted } from "vue";
// Call the auth wrhaper compnent
import AuthWraper from "../Components/Auth/AuthWrap";
import FlashMessage from "../Components/Global/FlashMessage";

const props = defineProps({
    title: {
        type: String,
        default: "Title",
    },
});
</script>

<style></style>
