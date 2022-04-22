<template>
  <div
    class="
      px-5
      py-5
      bg-base-200
      border-t
      flex flex-col
      xs:flex-row
      items-center
      xs:justify-between
    "
  >
    <span class="text-xs xs:text-sm text-primary">
      Showing 1 to 4 of 50 Entries
    </span>
    <div class="inline-flex mt-2 xs:mt-0">
      <div class="btn-group">
        <button
          class="btn btn-md"
          v-for="(item, index) in props.paginationInfo"
          :key="index"
          :class="item.active ? 'btn-active' : ''"
          @click="nextPage(item.url)"
        >
          <span v-html="item.label"></span>
        </button>
        <!-- <button class="btn btn-md btn-active">2</button>
        <button class="btn btn-md">3</button>
        <button class="btn btn-md" @click="nextPage(4)">4</button> -->
      </div>
    </div>
  </div>
</template>
<script setup >
// Define the event that will sync the selected category
const emit = defineEmits(["onPagiation"]);

const nextPage = async (pageLink) => {
  emit("onPagiation", pageLink);
};

const props = defineProps({
  paginationInfo: {
    type: Array,
    default: () => [],
  },
});
</script>


