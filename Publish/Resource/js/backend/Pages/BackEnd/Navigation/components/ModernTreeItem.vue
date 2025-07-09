<!-- ModernTreeItem Component -->
<template>
  <div
    class="relative group"
    :data-itemid="item.id"
    :style="{ marginLeft: level * 20 + 'px' }"
  >
    <!-- Item Container -->
    <div
      class="bg-white dark:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-600 p-4 shadow-sm hover:shadow-md transition-all duration-200 cursor-move"
      :class="{
        'border-l-4 border-l-green-400': level === 0,
        'border-l-4 border-l-blue-400': level === 1,
        'border-l-4 border-l-purple-400': level >= 2,
        'ring-2 ring-purple-400 ring-opacity-50': isDragging
      }"
      :data-sortable="true"
      :data-itemid="item.id"
    >
      <div class="flex items-center justify-between">
        <!-- Item Info -->
        <div class="flex items-center space-x-3 flex-1 min-w-0">
          <!-- Drag Handle -->
          <div class="flex-shrink-0 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-grab active:cursor-grabbing">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"/>
            </svg>
          </div>

          <!-- Icon -->
          <div
            class="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
            :class="level === 0 ? 'bg-green-100 dark:bg-green-900/30' : level === 1 ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-purple-100 dark:bg-purple-900/30'"
          >
            <div
              class="w-5 h-5"
              :class="level === 0 ? 'text-green-600 dark:text-green-400' : level === 1 ? 'text-blue-600 dark:text-blue-400' : 'text-purple-600 dark:text-purple-400'"
              v-html="item.icon"
            ></div>
          </div>

          <!-- Item Details -->
          <div class="flex-1 min-w-0">
            <h3 class="text-sm font-semibold text-slate-900 dark:text-slate-100 truncate">
              {{ item.menu_label }}
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 truncate">
              {{ item.route || 'No route specified' }}
            </p>
          </div>

          <!-- Level Badge -->
          <div class="flex-shrink-0">
            <span
              class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
              :class="level === 0 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                     level === 1 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' :
                     'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400'"
            >
              Level {{ level + 1 }}
            </span>
          </div>
        </div>

        <!-- Actions -->
        <div class="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            @click="editItem"
            class="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
            title="Edit item"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
            </svg>
          </button>

          <button
            @click="deleteItem"
            class="p-2 text-slate-400 hover:text-red-600 dark:hover:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
            title="Delete item"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Children Container -->
    <div
      v-if="item.children && item.children.length > 0"
      class="mt-4 ml-6 space-y-4 pl-4 border-l-2 border-slate-200 dark:border-slate-600"
      :data-sortable="true"
      :data-itemid="item.id"
    >
      <ModernTreeItem
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        :level="level + 1"
        @update="$emit('update', $event)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Props
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  level: {
    type: Number,
    default: 0
  }
})

// Emits
const emit = defineEmits(['update'])

// State
const isDragging = ref(false)

// Methods
const editItem = () => {
  // Navigate to edit page or open modal
  console.log('Edit item:', props.item.id)
}

const deleteItem = () => {
  if (confirm(`Are you sure you want to delete "${props.item.menu_label}"?`)) {
    emit('update', { action: 'delete', itemId: props.item.id })
  }
}
</script>

<style scoped>
.sortable-ghost {
  /* @apply opacity-50 bg-purple-100 dark:bg-purple-900/30 border-purple-400 dark:border-purple-600; */
}

.sortable-chosen {
  /* @apply ring-2 ring-purple-400 ring-opacity-50; */
}

.sortable-drag {
  /* @apply rotate-3 shadow-xl; */
}
</style>
