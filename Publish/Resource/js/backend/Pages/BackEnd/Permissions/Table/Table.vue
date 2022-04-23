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
            <h1 class="text-3xl font-bold">Table name</h1>
          </div>
          <div
            class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
          >
            <slot name="new">
              <Create
                :columns="props.columns"
                :endpoint="props.endpointCreate"
                :model="props.model"
                @onCreate="onCreate"
              />
            </slot>
          </div>
        </div>
      </div>

      <!-- Table filter -->
      <TableFilter
        @onPerPage="onPerPage"
        @onOrderBy="onOrderBy"
        @onSearch="onSearch"
        @onFilter="onFilter"
        :columns="props.columns"
      />

      <div class="overflow-x-auto p-6">
        <div class="overflow-x-auto">
          <table class="table table-compact w-full">
            <thead>
              <tr>
                <th v-for="(item, index) in columns" :key="index">
                  {{ item.label }}
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tableItem, tableKey) in tableData" :key="tableItem">
                <th v-for="(item, index) in tableItem" :key="index">
                  {{ item }}
                </th>
                <th>
                  <Delete
                    :id="tableItem.id"
                    :endpoint="props.endpointDelete"
                    :model="props.model"
                    @onDelete="onDelete"
                  />
                  <Edit
                    :columns="props.columns"
                    :endpoint="props.endpointEdit"
                    :model="props.model"
                    :modelValue="tableItem"
                    :id="tableItem.id"
                    @onEdit="onEdit"
                  />
                </th>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th v-for="(item, index) in columns" :key="index">
                  {{ item.label }}
                </th>
                <th>Action</th>
              </tr>
            </tfoot>
          </table>
        </div>

        <!-- Table Pagination -->
        <TablePagination
          @onPagiation="onPagiation"
          :paginationInfo="paginationInfo"
        />
      </div>
    </div>
  </div>
</template>
<script setup >
// Import axios
import axios from "axios";

// Include filter
import TableFilter from "./components/filter.vue";
import TablePagination from "./components/pagination.vue";
// Import the delete component
import Delete from "./components/delete.vue";
// Import the create component
import Create from "./components/create.vue";
// Import the edit component
import Edit from "./components/edit.vue";

const props = defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
  model: {
    type: String,
    default: "",
  },
  endpoint: {
    type: String,
    default: "",
  },
  endpointDelete: {
    type: String,
    default: "",
  },
  endpointCreate: {
    type: String,
    default: "",
  },
  endpointEdit: {
    type: String,
    default: "",
  },
});

// When the user clicks on the pagination button
const onPagiation = async (paginationLink) => {
  fetchData(paginationLink);
};

// When the user cahgne per page
let perPage = $ref(10);
const onPerPage = async (onPerPage) => {
  perPage = onPerPage;
  fetchData();
};

// On sort field
let filterBy = $ref("id");
const onFilter = async (onFilter) => {
  filterBy = onFilter;
  fetchData();
};

let orderBy = $ref(null);
// When the user change order by
const onOrderBy = async (onOrderBy) => {
  orderBy = onOrderBy;
  fetchData();
};

let search = $ref(null);
// On user search
const onSearch = async (onSearch) => {
  // check if length is greater than 3
  if (onSearch.length > 3) {
    search = onSearch;
    fetchData();
  }
};

// On delete we reload the page
const onDelete = async () => {
  fetchData();
};
// On create new
const onCreate = async () => {
  fetchData();
};

// Data we goin to display in the table
let tableData = $ref([]);
// Current page
let paginationInfo = $ref([]);

// This fuction will return the data from the endpoint with the filters and etc
const fetchData = async (newEndPoint = null) => {
  // If the endpoint is not defined, we use the default endpoint
  if (newEndPoint === null) {
    newEndPoint = props.endpoint;
  }

  axios
    .post(newEndPoint, {
      model: props.model, // The model name encrypted
      columns: props.columns, // columns to display
      perPage: perPage, // per page
      search: search, // Search
      sort: filterBy, // Fiel example : name
      direction: orderBy, // Asc or desc
    })
    .then(function (response) {
      tableData = response.data.data;
      paginationInfo = response.data.links;
    })
    .catch(function (error) {});
};
fetchData();

const tableStart = async () => {};
</script>

