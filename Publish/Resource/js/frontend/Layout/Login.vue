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
import FlashMessage from "../Components/FrontEnd/Global/FlashMessage";

const props = defineProps({
  title: {
    type: String,
    default: "Title",
  },
});

// Load the saved theme
const loadLocalStorageTheme = async () => {
  // Find the html element
  const html = document.querySelector("html");
  // Set a default theme
  html.setAttribute("data-theme", "coffee");
  // Get the theme from the local storage
  const theme = localStorage.getItem("theme-frontend");
  // Add the data-theme attribute
  html.setAttribute("data-theme", theme);

};

// On mount load the saved theme from the local storage
onMounted(() => {
  loadLocalStorageTheme();
});
</script>

<style></style>
