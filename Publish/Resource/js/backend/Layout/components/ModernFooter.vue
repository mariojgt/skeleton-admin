<!-- ModernFooter.vue -->
<template>
  <footer class="bg-base-100 border-t border-base-300 mt-auto">
    <!-- Main Footer Content -->
    <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="footer py-12 text-base-content">
        <!-- Company Info Section -->
        <aside class="flex flex-col items-start">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3z"/>
              </svg>
            </div>
            <div>
              <div class="text-lg font-bold">{{ appName }}</div>
              <div class="text-sm text-base-content/60">Admin Dashboard</div>
            </div>
          </div>
          <p class="text-sm text-base-content/70 max-w-xs leading-relaxed mb-4">
            Empowering administrators with modern tools and intuitive interfaces for seamless system management.
          </p>
          <div class="flex items-center gap-2 text-xs text-base-content/60">
            <div class="badge badge-success badge-sm gap-1">
              <div class="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              System Online
            </div>
            <span>•</span>
            <span>Version {{ systemVersion }}</span>
          </div>
        </aside>

        <!-- Quick Links -->
        <nav>
          <header class="footer-title text-base-content font-semibold mb-4">Quick Links</header>
          <div class="flex flex-col gap-2">
            <a class="link link-hover text-base-content/70 hover:text-base-content transition-colors flex items-center gap-2" href="#">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.441-1.036-5.877-2.709M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Dashboard
            </a>
            <a class="link link-hover text-base-content/70 hover:text-base-content transition-colors flex items-center gap-2" href="#">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"/>
              </svg>
              User Management
            </a>
            <a class="link link-hover text-base-content/70 hover:text-base-content transition-colors flex items-center gap-2" href="#">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
              </svg>
              Analytics
            </a>
            <a class="link link-hover text-base-content/70 hover:text-base-content transition-colors flex items-center gap-2" href="#">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Settings
            </a>
          </div>
        </nav>

        <!-- Resources -->
        <nav>
          <header class="footer-title text-base-content font-semibold mb-4">Resources</header>
          <div class="flex flex-col gap-2">
            <a class="link link-hover text-base-content/70 hover:text-base-content transition-colors flex items-center gap-2" href="#">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
              Documentation
            </a>
            <a class="link link-hover text-base-content/70 hover:text-base-content transition-colors flex items-center gap-2" href="#">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
              </svg>
              API Reference
            </a>
            <a class="link link-hover text-base-content/70 hover:text-base-content transition-colors flex items-center gap-2" href="#">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
              System Status
            </a>
            <a class="link link-hover text-base-content/70 hover:text-base-content transition-colors flex items-center gap-2" href="#">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h4a1 1 0 011 1v2m-6 0h6m-6 0V3a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1H7z"/>
              </svg>
              Changelog
            </a>
          </div>
        </nav>

        <!-- Support -->
        <nav>
          <header class="footer-title text-base-content font-semibold mb-4">Support</header>
          <div class="flex flex-col gap-2">
            <a class="link link-hover text-base-content/70 hover:text-base-content transition-colors flex items-center gap-2" href="#">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Help Center
            </a>
            <a class="link link-hover text-base-content/70 hover:text-base-content transition-colors flex items-center gap-2" href="#">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Contact Support
            </a>
            <a class="link link-hover text-base-content/70 hover:text-base-content transition-colors flex items-center gap-2" href="#">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
              </svg>
              Community Forum
            </a>
            <a class="link link-hover text-base-content/70 hover:text-base-content transition-colors flex items-center gap-2" href="#">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Report Issues
            </a>
          </div>
        </nav>

        <!-- Social & Legal -->
        <nav>
          <header class="footer-title text-base-content font-semibold mb-4">Connect</header>
          <div class="flex flex-col gap-4">
            <!-- Social Links -->
            <div class="flex flex-col gap-2">
              <a class="link link-hover text-base-content/70 hover:text-base-content transition-colors flex items-center gap-2" href="#" aria-label="Follow us on Twitter">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
                Follow Updates
              </a>
              <a class="link link-hover text-base-content/70 hover:text-base-content transition-colors flex items-center gap-2" href="#" aria-label="View on GitHub">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Source Code
              </a>
            </div>

            <!-- Legal Links -->
            <div class="divider my-2"></div>
            <div class="flex flex-col gap-2 text-xs">
              <a class="link link-hover text-base-content/60 hover:text-base-content/80 transition-colors" href="#">
                Privacy Policy
              </a>
              <a class="link link-hover text-base-content/60 hover:text-base-content/80 transition-colors" href="#">
                Terms of Service
              </a>
              <a class="link link-hover text-base-content/60 hover:text-base-content/80 transition-colors" href="#">
                Cookie Policy
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <!-- Bottom Copyright Bar -->
    <div class="border-t border-base-300 bg-base-200">
      <div class="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="py-6">
          <div class="flex flex-col lg:flex-row items-center justify-between gap-4">
            <!-- Copyright -->
            <div class="flex items-center gap-4 text-sm text-base-content/60">
              <span>© {{ currentYear }} {{ appName }}. All rights reserved.</span>
              <div class="hidden lg:flex items-center gap-2">
                <span>•</span>
                <span>Built with ❤️ for administrators</span>
              </div>
            </div>

            <!-- Performance Stats -->
            <div class="flex items-center gap-6 text-xs text-base-content/50">
              <div class="flex items-center gap-2">
                <div class="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span>{{ formatUptime(systemUptime) }} uptime</span>
              </div>
              <div class="hidden sm:flex items-center gap-2">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
                <span>{{ responseTime }}ms avg response</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
                <span>SSL Secured</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'

// Get app name from page props
const appName = computed(() => usePage().props.app || 'Skeleton Admin')
const currentYear = new Date().getFullYear()

// Mock system data (replace with real data from your backend)
const systemVersion = computed(() => usePage().props.system_version?.version || '2.1.0')
const systemUptime = computed(() => usePage().props.system_uptime || 2592000) // 30 days in seconds
const responseTime = computed(() => usePage().props.avg_response_time || 47)

// Utility functions
const formatUptime = (seconds) => {
  const days = Math.floor(seconds / 86400)
  const hours = Math.floor((seconds % 86400) / 3600)

  if (days > 0) {
    return `${days}d ${hours}h`
  } else if (hours > 0) {
    return `${hours}h`
  } else {
    return `${Math.floor(seconds / 60)}m`
  }
}
</script>
