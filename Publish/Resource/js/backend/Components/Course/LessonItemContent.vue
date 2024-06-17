<template>
    <div class="w-10/12 mx-auto relative bg-base-300 rounded p-10 mt-5">
        <h1 class="text-3xl text-center font-bold text-neutral">Lesson Points</h1>
        <div v-for="(item, index) in lessonPoints" :key="index" class="border-l-2 mt-10">
            <div
                class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex gap-3 items-center px-6 py-4 bg-primary text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div
                    class="w-5 h-5 bg-accent absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
                </div>
                <div class="w-10 h-1 bg-base-content absolute -left-10 z-0"></div>
                <!-- Content that showing in the box -->
                <div class="flex-auto">
                    <h1 class="text-lg">
                        <button class="btn btn-warning">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{{ item.seconds }}S</span>
                        </button>
                    </h1>
                    <h1 class="text-xl font-bold">{{ item.title }}</h1>
                </div>
                <a href="#" class="text-center text-white hover:text-gray-300">
                    {{ item.created_for_humans }}
                </a>
                <a class="btn btn-info" href="#edit-point" @click="toogleEditModal(item)">Edit</a>
                <button class="btn btn-error" @click="toogleDeleteModal(item)">Delete</button>
            </div>

        </div>
    </div>

    <div class="mt-5" id="edit-point">
        <AddEditLearningPoint v-show="editItemModal" @update-lesson="loadReloadLessonsPoints" :editingMode="true"
            :lesson="lesson" :editLesson="editItemData" :api-key="props.editor_key" />
    </div>
    <reusable-modal :show="deleteItem" @close="deleteItem = false" @confirm="deleteItemConfirm">
        <template #title>
            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                Remove Lesson Point
            </h3>
        </template>
        <template #body>
            <div class="mt-2">
                {{ deleteItemData }}
                <!-- <input-field type="text" v-model="lessonVideoUrl" label="Vimeo Video Id" /> -->
            </div>
        </template>
    </reusable-modal>
</template>

<script setup lang="ts" >
import { api } from "../../Boot/axios.js";
import ReusableModal from "@mariojgt/masterui/packages/ReusableModal";
import { useMessage } from "naive-ui";
import AddEditLearningPoint from './AddEditLearningPoint.vue';

const message = useMessage();

const props = defineProps({
    lessonPoints: {
        type: Object,
        default: null,
    },
    lesson: {
        type: Object,
        default: null,
    },
    editor_key: {
        type: String,
        default: null,
    }
});


let deleteItem = $ref(false);
let deleteItemData = $ref(null);

const toogleDeleteModal = async (item) => {
    deleteItem = true;
    deleteItemData = item;
};

// Edit modal
let editItemModal = $ref(false);
let editItemData = $ref(null);

const toogleEditModal = async (item) => {
    editItemModal = true;
    editItemData = item;
};

const emit = defineEmits(["updateLesson"]);

const deleteItemConfirm = async () => {
    await api
        .delete(route('gamedev.lesson.point.delete', deleteItemData.id))
        .then(function (response) {
            deleteItemData = null;
            deleteItem = false;
            emit("updateLesson");
            message.success('Lesson point deleted');
        })
        .catch(function (error) { });
};

const loadReloadLessonsPoints = async () => {
    emit("updateLesson");
};

</script>
