<template>
    <div class="flex-1 lg:flex-none">
      <div class="form-control p-6">
        <div class="relative" ref="searchContainer">
          <!-- Search Input -->
          <div class="relative">
            <input
              type="text"
              v-model="searchQuery"
              @input="handleInput"
              @keydown.down.prevent="handleArrowDown"
              @keydown.up.prevent="handleArrowUp"
              @keydown.enter.prevent="handleEnter"
              @keydown.esc="clearSearch"
              placeholder="Search..."
              class="w-full pr-16 input input-primary input-bordered"
              :class="{ 'input-error': hasError }"
            />

            <button
              class="absolute top-0 right-0 rounded-l-none btn btn-primary"
              @click="handleSearch"
            >
              <Loader2Icon v-if="isLoading" class="w-5 h-5 animate-spin" />
              <SearchIcon v-else class="w-5 h-5" />
            </button>
          </div>

          <!-- Results Dropdown -->
          <div
            v-show="showDropdown"
            class="absolute z-50 w-full mt-2 bg-base-100 rounded-box shadow-lg"
          >
            <!-- Initial State -->
            <div v-if="searchQuery.length < minChars" class="p-4 text-center text-base-content/60">
              <SearchIcon class="w-5 h-5 mx-auto mb-2" />
              Type at least {{ minChars }} characters to search
            </div>

            <!-- Loading State -->
            <div v-else-if="isLoading" class="p-4 text-center">
              <div class="flex items-center justify-center space-x-2">
                <Loader2Icon class="w-5 h-5 animate-spin" />
                <span>Searching...</span>
              </div>
            </div>

            <!-- No Results -->
            <div v-else-if="hasNoResults" class="p-4 text-center text-base-content/60">
              <FileQuestionIcon class="w-6 h-6 mx-auto mb-2" />
              No results found for "{{ searchQuery }}"
            </div>

            <!-- Results List -->
            <div v-else-if="hasResults" class="max-h-[400px] overflow-y-auto">
              <div v-for="(category, categoryName) in searchResults.data" :key="categoryName">
                <div class="px-4 py-2 text-sm font-semibold bg-base-200 flex items-center space-x-2">
                  <FolderIcon class="w-4 h-4" />
                  <span>{{ categoryName }}</span>
                </div>
                <div v-for="(item, index) in category.search" :key="index">
                  <Link
                    :href="item.route"
                    class="block px-4 py-3 hover:bg-base-200 transition-colors duration-150"
                    :class="{ 'bg-primary/10': selectedIndex === getItemIndex(categoryName, index) }"
                    @click="handleItemClick(item)"
                  >
                    <div class="flex items-center justify-between">
                      <div class="flex items-center space-x-3 flex-1">
                        <div class="flex-shrink-0">
                          <FileTextIcon class="w-5 h-5 text-primary" />
                        </div>
                        <div class="min-w-0">
                          <div class="font-medium truncate">{{ item.result }}</div>
                          <div class="text-sm text-base-content/60 flex items-center space-x-1">
                            <HistoryIcon class="w-3 h-3" />
                            <span class="truncate">{{ item.last_route }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="flex-shrink-0 ml-4">
                        <ArrowRightIcon class="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import { Link } from '@inertiajs/vue3';
  import { api } from "../../../Boot/axios.js";
  import debounce from 'lodash/debounce';
  import {
    Search as SearchIcon,
    Loader2 as Loader2Icon,
    FileQuestion as FileQuestionIcon,
    Folder as FolderIcon,
    FileText as FileTextIcon,
    History as HistoryIcon,
    ArrowRight as ArrowRightIcon
  } from 'lucide-vue-next';

  // Types
  interface SearchItem {
    route: string;
    result: string;
    last_route: string;
  }

  interface CategoryData {
    search: SearchItem[];
  }

  interface SearchResponse {
    status: boolean;
    data: Record<string, CategoryData>;
  }

  // Props
  const props = withDefaults(defineProps<{
    minChars?: number;
    debounceTime?: number;
  }>(), {
    minChars: 3,
    debounceTime: 300
  });

  // State
  const searchQuery = ref('');
  const searchResults = ref<SearchResponse>({ status: false, data: {} });
  const isLoading = ref(false);
  const hasError = ref(false);
  const showDropdown = ref(false);
  const selectedIndex = ref(-1);
  const searchContainer = ref<HTMLElement | null>(null);

  // Computed
  const hasResults = computed(() => {
    return searchResults.value.status && Object.keys(searchResults.value.data).length > 0;
  });

  const hasNoResults = computed(() => {
    return !isLoading.value && searchQuery.value.length >= props.minChars && !hasResults.value;
  });

  const totalItems = computed(() => {
    if (!hasResults.value) return 0;
    return Object.values(searchResults.value.data).reduce((total, category) => {
      return total + category.search.length;
    }, 0);
  });

  // Methods
  const debouncedSearch = debounce(async () => {
    if (searchQuery.value.length < props.minChars) {
      searchResults.value = { status: false, data: {} };
      isLoading.value = false;
      return;
    }

    try {
      isLoading.value = true;
      hasError.value = false;
      const response = await api.get<SearchResponse>(
        route('admin.api.search', { search: searchQuery.value })
      );
      searchResults.value = response.data;
      showDropdown.value = true;
    } catch (error) {
      hasError.value = true;
      searchResults.value = { status: false, data: {} };
    } finally {
      isLoading.value = false;
    }
  }, props.debounceTime);

  const handleInput = () => {
    showDropdown.value = true;
    hasError.value = false;
    debouncedSearch();
  };

  const handleSearch = () => {
    if (searchQuery.value.length >= props.minChars) {
      debouncedSearch();
    }
  };

  const clearSearch = () => {
    searchQuery.value = '';
    searchResults.value = { status: false, data: {} };
    showDropdown.value = false;
    selectedIndex.value = -1;
  };

  const getItemIndex = (category: string, itemIndex: number): number => {
    let index = 0;
    for (const [categoryName, categoryData] of Object.entries(searchResults.value.data)) {
      if (categoryName === category) {
        return index + itemIndex;
      }
      index += categoryData.search.length;
    }
    return -1;
  };

  const handleArrowDown = () => {
    if (!hasResults.value) return;
    selectedIndex.value = (selectedIndex.value + 1) % totalItems.value;
  };

  const handleArrowUp = () => {
    if (!hasResults.value) return;
    selectedIndex.value = selectedIndex.value <= 0 ? totalItems.value - 1 : selectedIndex.value - 1;
  };

  const handleEnter = () => {
    if (!hasResults.value || selectedIndex.value === -1) return;

    let currentIndex = 0;
    for (const category of Object.values(searchResults.value.data)) {
      for (const item of category.search) {
        if (currentIndex === selectedIndex.value) {
          window.location.href = item.route;
          return;
        }
        currentIndex++;
      }
    }
  };

  const handleItemClick = (item: SearchItem) => {
    clearSearch();
  };

  // Click outside handler
  const handleClickOutside = (event: MouseEvent) => {
    if (searchContainer.value && !searchContainer.value.contains(event.target as Node)) {
      showDropdown.value = false;
    }
  };

  // Lifecycle
  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
    debouncedSearch.cancel();
  });
  </script>

  <style scoped>
  .animate-spin {
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  </style>
