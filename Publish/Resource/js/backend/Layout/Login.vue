<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
    <!-- Dark Animated Background Elements -->
    <div class="absolute inset-0">
      <!-- Dark Floating Orbs -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float"></div>
      <div class="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float animation-delay-2000"></div>
      <div class="absolute bottom-1/4 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-screen filter blur-3xl animate-float animation-delay-4000"></div>

      <!-- Dark Grid Pattern -->
      <div class="absolute inset-0 opacity-20" style="background-image: radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.3) 1px, transparent 0); background-size: 24px 24px;"></div>

      <!-- Subtle Geometric Patterns -->
      <div class="absolute top-0 right-0 w-64 h-64 opacity-10">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:rgb(59,130,246);stop-opacity:0.5" />
              <stop offset="100%" style="stop-color:rgb(147,51,234);stop-opacity:0.3" />
            </linearGradient>
          </defs>
          <polygon points="100,10 150,90 50,90" fill="url(#grad1)" />
        </svg>
      </div>
    </div>

    <!-- Flash Message -->
    <FlashMessage />

    <!-- Main Content -->
    <div class="hero min-h-screen relative z-10">
      <div class="hero-content flex-col lg:flex-row max-w-7xl w-full px-4">
        <!-- Left Side - Login Form -->
        <div class="w-full lg:w-1/2 max-w-md mx-auto lg:mx-0">
          <div class="card bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 shadow-2xl">
            <div class="card-body p-8">
              <!-- Form Header -->
              <div class="text-center mb-8">
                <div class="avatar mb-6">
                  <div class="w-20 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl ring-4 ring-blue-500/30">
                    <div class="w-full h-full flex items-center justify-center">
                      <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <h2 class="text-3xl font-bold text-white mb-3">{{ props.title }}</h2>
                <p class="text-slate-400 text-lg">Secure access to your admin dashboard</p>
              </div>

              <!-- Form Slot -->
              <div class="space-y-6">
                <slot name="form" />
              </div>

              <!-- Divider -->
              <!-- <div class="divider text-slate-500 my-8">
                <span class="bg-slate-800/60 px-4 py-1 rounded-full text-sm">or continue with</span>
              </div> -->

              <!-- Social Login Options -->
              <!-- <div class="grid grid-cols-2 gap-4">
                <button class="btn btn-outline border-slate-600 hover:border-blue-500 hover:bg-blue-500/10 text-slate-300 hover:text-white transition-all duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button class="btn btn-outline border-slate-600 hover:border-purple-500 hover:bg-purple-500/10 text-slate-300 hover:text-white transition-all duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.4 24C5.1 24 0 18.9 0 12.6 0 5.7 5.1 0 11.4 0c3.2 0 5.9 1.1 7.9 3.1l-3.1 3c-.9-.9-2.3-1.4-4.8-1.4-3.9 0-7 3.1-7 7s3.1 7 7 7c2.8 0 4.4-1.1 5.4-2.1.8-.8 1.3-2 1.5-3.6h-6.9v-4.2h11.5c.1.6.2 1.3.2 2.1 0 2.5-.7 5.6-2.8 7.8C17.9 22.5 15.1 24 11.4 24z"/>
                  </svg>
                  GitHub
                </button>
              </div> -->

              <!-- Links Slot -->
              <div class="text-center mt-8 space-y-4">
                <slot name="links" />
              </div>

              <!-- Security Notice -->
              <div class="mt-8 p-4 bg-slate-900/50 border border-slate-700/50 rounded-xl">
                <div class="flex items-start gap-3">
                  <div class="flex-shrink-0">
                    <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <div>
                    <div class="font-semibold text-white text-sm">Enterprise Security</div>
                    <div class="text-slate-400 text-xs mt-1">Your data is protected with military-grade 256-bit AES encryption</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Side - Branding -->
        <div class="w-full lg:w-1/2 text-center lg:text-left lg:pl-16 mt-12 lg:mt-0">
          <div class="space-y-8">
            <!-- Main Logo -->
            <div class="flex justify-center lg:justify-start">
              <div class="avatar">
                <div class="w-24 rounded-full ring-4 ring-blue-500/50 bg-gradient-to-br from-blue-500 to-purple-600 shadow-2xl">
                  <div class="w-full h-full flex items-center justify-center">
                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <!-- Headlines -->
            <div>
              <h1 class="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Admin Dashboard
                <span class="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Reimagined
                </span>
              </h1>
              <p class="text-xl text-slate-300 leading-relaxed max-w-lg">
                Experience the most advanced admin interface with cutting-edge technology,
                intuitive design, and enterprise-grade security.
              </p>
            </div>

            <!-- Feature Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
              <div class="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div class="flex items-center gap-4 mb-3">
                  <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div class="text-white font-semibold">99.9% Uptime</div>
                </div>
                <p class="text-slate-400 text-sm">Enterprise-grade reliability with redundant systems</p>
              </div>

              <div class="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div class="flex items-center gap-4 mb-3">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div class="text-white font-semibold">Lightning Fast</div>
                </div>
                <p class="text-slate-400 text-sm">Optimized performance with sub-100ms response times</p>
              </div>

              <div class="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
                <div class="flex items-center gap-4 mb-3">
                  <div class="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                  </div>
                  <div class="text-white font-semibold">Bank-Level Security</div>
                </div>
                <p class="text-slate-400 text-sm">Multi-layer security with advanced threat protection</p>
              </div>

              <div class="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-300">
                <div class="flex items-center gap-4 mb-3">
                  <div class="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                    </svg>
                  </div>
                  <div class="text-white font-semibold">AI Analytics</div>
                </div>
                <p class="text-slate-400 text-sm">Intelligent insights powered by machine learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enhanced Footer -->
    <footer class="absolute bottom-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-6 text-slate-400 text-sm">
            <p>
              © {{ currentYear }}
              <a
                target="_blank"
                href="https://github.com/mariojgt/skeleton-admin"
                class="text-white hover:text-blue-400 font-semibold transition-colors"
              >
                Skeleton Admin
              </a>
              - All rights reserved
            </p>
          </div>

          <!-- Real-time Status -->
          <div class="flex items-center gap-6 text-xs text-slate-500">
            <div class="flex items-center gap-2">
              <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>All Systems Operational</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
              <span>SSL Secured</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span>v2.1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import FlashMessage from "@backend_components/Backend/Global/FlashMessage.vue"

const props = defineProps({
  title: {
    type: String,
    default: "Sign In",
  },
})

// Load the saved theme
const loadLocalStorageTheme = async () => {
  const html = document.querySelector("html")
  const theme = localStorage.getItem("theme-backend")
  if (theme) {
    html.setAttribute("data-theme", theme)
  } else {
    html.setAttribute("data-theme", "dark") // Default to dark theme
  }
}

onMounted(() => {
  loadLocalStorageTheme()
})

const currentYear = new Date().getFullYear()
</script>

<style scoped>
/* Enhanced dark animations */
@keyframes float {
  0%, 100% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(20px, -30px) scale(1.05);
  }
  66% {
    transform: translate(-15px, 15px) scale(0.95);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Dark glassmorphism effects */
.card {
  background: rgba(30, 41, 59, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(71, 85, 105, 0.5);
}

/* Enhanced form styling for dark theme */
.card :deep(.input),
.card :deep(.btn) {
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(71, 85, 105, 0.5);
  color: white;
  transition: all 0.3s ease;
}

.card :deep(.input::placeholder) {
  color: rgba(148, 163, 184, 0.7);
}

.card :deep(.input:focus) {
  background: rgba(30, 41, 59, 0.8);
  border-color: rgb(59, 130, 246);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  transform: translateY(-2px);
}

.card :deep(.btn-primary) {
  background: linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(147, 51, 234) 100%);
  border: none;
  color: white;
  box-shadow: 0 10px 40px rgba(59, 130, 246, 0.3);
  font-weight: 600;
}

.card :deep(.btn-primary:hover) {
  transform: translateY(-3px);
  box-shadow: 0 15px 50px rgba(59, 130, 246, 0.4);
}

/* Glow effects */
.card:hover {
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.1);
}

/* Enhanced button styling for links */
.card :deep(.btn-outline) {
  background: rgba(30, 41, 59, 0.3);
  border: 1px solid rgba(71, 85, 105, 0.5);
  color: rgb(148, 163, 184);
}

.card :deep(.btn-outline:hover) {
  background: rgba(59, 130, 246, 0.1);
  border-color: rgb(59, 130, 246);
  color: white;
  transform: translateY(-2px);
}
</style>
