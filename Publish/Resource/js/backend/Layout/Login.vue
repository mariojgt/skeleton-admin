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
  <footer class="footer footer-center p-4 bg-base-300 text-base-content">
    <div>
      <p>
        Copyright © {{ currentYear }} - All right reserved by
        <a target="_blank" href="https://github.com/mariojgt/skeleton-admin"
          >Skeleton-admin</a
        >
      </p>
    </div>
  </footer>
</template>

<script setup>
import { watch, onMounted } from "vue";
// Call the auth wrhaper compnent
import AuthWraper from "../Components/Auth/AuthWrap.vue";
import FlashMessage from "../Components/Backend/Global/FlashMessage.vue";

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
  html.setAttribute("data-theme", "forest");
  // Get the theme from the local storage
  const theme = localStorage.getItem("theme-backend");
  // if not found set the default theme
  if (theme) {
    // Add the data-theme attribute
    html.setAttribute("data-theme", theme);
  } else {
    html.setAttribute("data-theme", "forest");
  }
};

// On mount load the saved theme from the local storage
onMounted(() => {
  loadLocalStorageTheme();
});

// Footer date
const currentYear = new Date().getFullYear();
</script>

<style></style>
