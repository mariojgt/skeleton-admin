<template>
  <div class="w-full mb-12 xl:mb-0">
    <div
      class="
        relative
        flex flex-col
        min-w-0
        break-words
        bg-neutral-focus
        w-full
        mb-6
        shadow-lg
        rounded
      "
    >
      <div class="rounded-t mb-0 px-4 py-3 border-0">
        <div class="flex flex-wrap items-center">
          <div class="relative w-full px-4 max-w-full flex-grow flex-1">
            <h1 class="text-3xl font-bold">Hello my firend</h1>
          </div>
          <div
            class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
          >
            <button class="btn btn-primary">Button</button>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto p-6">
        <n-space vertical :size="12">
          <n-space>
            <n-button @click="sortName">Sort By Name (Ascend)</n-button>
            <n-button @click="filterAddress">Filter Address (London)</n-button>
            <n-button @click="clearFilters">Clear Filters</n-button>
            <n-button @click="clearSorter">Clear Sorter</n-button>
          </n-space>
          <n-data-table
            ref="table"
            :columns="columns"
            :data="data"
            :pagination="pagination"
          />
        </n-space>
      </div>
    </div>
  </div>
</template>
<script setup >
let columns = $ref([
  {
    title: "Name",
    key: "name",
    defaultSortOrder: "ascend",
    sorter: "default",
  },
  {
    title: "Age",
    key: "age",
  },
  {
    title: "Address",
    key: "address",
  },
]);

// Table data
let data = $ref([
  {
    key: 0,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: 1,
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: 2,
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: 3,
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
]);

let pagination = $ref(10);
</script>

