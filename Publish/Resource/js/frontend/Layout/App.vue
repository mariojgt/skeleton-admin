<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
    <Head :title="`${title} - ${$page.props.app}`" />

    <!-- Background Pattern -->
    <div class="fixed inset-0 opacity-30">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent)]"></div>
      <div class="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#000_0deg,#7877c6_180deg,#000_360deg)] opacity-20"></div>
    </div>

    <!-- Use your existing Navbar -->
    <Navbar />

    <!-- Flash Messages -->
    <FlashMessage v-if="$page.props.flash" :flash="$page.props.flash" />

    <!-- Main Content -->
    <main class="relative z-10">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { Head } from '@inertiajs/vue3'
import FlashMessage from '../Components/FlashMessage.vue'
import Navbar from '../Components/Navbar.vue'

defineProps({
  title: {
    type: String,
    default: 'SkeletonAdmin'
  }
})
</script>
