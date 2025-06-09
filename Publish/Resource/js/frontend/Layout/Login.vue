<template>
  <div id="app">
    <Head>
      <title>{{ title || 'Skeleton Admin' }}</title>
      <meta name="description" content="Skeleton Admin Authentication" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <!-- Flash Messages -->
    <Transition name="flash" appear>
      <div
        v-if="flashMessage && showFlash"
        class="flash-message"
        :class="flashType"
      >
        <div class="container">
          <div class="flash-content">
            <div class="flash-icon">
              <span v-if="flashType === 'success'">✅</span>
              <span v-else-if="flashType === 'error'">❌</span>
              <span v-else>ℹ️</span>
            </div>
            <p>{{ flashMessage }}</p>
          </div>
          <button @click="clearFlash" class="close-btn">&times;</button>
        </div>
      </div>
    </Transition>

    <!-- Main Content -->
    <main class="main-content">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} Skeleton Admin. All rights reserved.</p>
        <div class="footer-links">
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Terms of Service</a>
          <a href="#" class="footer-link">Support</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { Head } from '@inertiajs/vue3'
import { computed, ref, onMounted, watch } from 'vue'
import { usePage } from '@inertiajs/vue3'

export default {
  name: 'Layout',
  components: {
    Head
  },
  props: {
    title: {
      type: String,
      default: 'Skeleton Admin'
    }
  },
  setup() {
    const page = usePage()
    const showFlash = ref(false)
    const flashTimeout = ref(null)

    const flashMessage = computed(() => {
      const flash = page.props.flash || {}
      return flash.success || flash.error || flash.message || null
    })

    const flashType = computed(() => {
      const flash = page.props.flash || {}
      if (flash.success) return 'success'
      if (flash.error) return 'error'
      return 'info'
    })

    const currentYear = computed(() => new Date().getFullYear())

    const clearFlash = () => {
      showFlash.value = false
      if (flashTimeout.value) {
        clearTimeout(flashTimeout.value)
        flashTimeout.value = null
      }
    }

    const setupFlashMessage = () => {
      if (flashMessage.value) {
        showFlash.value = true

        // Clear any existing timeout
        if (flashTimeout.value) {
          clearTimeout(flashTimeout.value)
        }

        // Auto-hide flash message after 5 seconds
        flashTimeout.value = setTimeout(() => {
          showFlash.value = false
          flashTimeout.value = null
        }, 5000)
      }
    }

    // Watch for flash message changes
    watch(flashMessage, setupFlashMessage, { immediate: true })

    onMounted(() => {
      setupFlashMessage()
    })

    return {
      flashMessage,
      flashType,
      currentYear,
      clearFlash,
      showFlash
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Flash Messages */
.flash-message {
  position: fixed;
  top: 20px;
  right: 20px;
  left: 20px;
  z-index: 1000;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.flash-message.success {
  background: linear-gradient(135deg, rgba(72, 187, 120, 0.95) 0%, rgba(56, 161, 105, 0.95) 100%);
  color: white;
}

.flash-message.error {
  background: linear-gradient(135deg, rgba(245, 101, 101, 0.95) 0%, rgba(229, 62, 62, 0.95) 100%);
  color: white;
}

.flash-message.info {
  background: linear-gradient(135deg, rgba(66, 153, 225, 0.95) 0%, rgba(49, 130, 206, 0.95) 100%);
  color: white;
}

.flash-message .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: none;
  padding: 0;
}

.flash-content {
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
}

.flash-icon {
  font-size: 20px;
  flex-shrink: 0;
}

.flash-message p {
  margin: 0;
  font-weight: 500;
  font-size: 15px;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin-left: 15px;
  opacity: 0.8;
  transition: opacity 0.2s;
  color: inherit;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.close-btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
}

/* Flash Transitions */
.flash-enter-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.flash-leave-active {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.flash-enter-from {
  transform: translateY(-100%) scale(0.9);
  opacity: 0;
}

.flash-leave-to {
  transform: translateY(-20px) scale(0.95);
  opacity: 0;
}

/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  min-height: calc(100vh - 100px);
}

/* Footer */
.footer {
  background: rgba(0, 0, 0, 0.15);
  color: white;
  padding: 24px 0;
  margin-top: auto;
  backdrop-filter: blur(10px);
}

.footer .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
}

.footer p {
  opacity: 0.9;
  font-size: 14px;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 24px;
}

.footer-link {
  color: white;
  text-decoration: none;
  font-size: 14px;
  opacity: 0.8;
  transition: opacity 0.2s;
}

.footer-link:hover {
  opacity: 1;
  text-decoration: underline;
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .flash-message {
    top: 10px;
    right: 10px;
    left: 10px;
    padding: 14px 16px;
  }

  .flash-content {
    gap: 8px;
  }

  .flash-icon {
    font-size: 18px;
  }

  .flash-message p {
    font-size: 14px;
  }

  .main-content {
    padding: 20px 10px;
    min-height: calc(100vh - 80px);
  }

  .footer .container {
    flex-direction: column;
    text-align: center;
    gap: 12px;
  }

  .footer-links {
    gap: 16px;
  }
}

@media (max-width: 480px) {
  .footer-links {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
