<template>
    <div>
        <Editor
        :api-key="props.editor_key"
        v-model="editorValue"
        :init="{
        plugins: 'lists link image table code help wordcount codesample importcss',
        toolbar: 'undo redo | image code | codesample',
        content_css: '/my-styles.css',
        setup: (editor) => onInit({editor}),
        images_upload_handler: async (blobInfo) => {
            let formData = new FormData();
            formData.append('file', blobInfo.blob(), blobInfo.filename());
            try {
                const res = await axios.post(usePage().props.upload_media, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                if (res.data && res.data.data.url.default) {
                    return res.data.data.url.default;
                } else {
                    throw new Error('Unable to upload image');
                }
            } catch (err) {
                throw new Error('Unable to upload image');
            }
        }

    }"
    />
    </div>
</template>

<script setup>
import axios from "axios";
import Editor from "@tinymce/tinymce-vue";
import FormData from 'form-data';
// import on mounted
import { onMounted, watch} from "vue";
import { usePage } from "@inertiajs/vue3";

const props = defineProps({
    modelValue: {
        type: String,
        default: "",
    },
    editor_key: {
        type: String,
        default: null,
    },
    editModelValue: {
        type: String,
        default: "",
    },
});

const emit = defineEmits(["update:modelValue"]);

let editorInstance = null;

const onInit = (e) => {
    editorInstance = e.editor;
    // On change event
    editorInstance.on("change", (e) => {
        onEditorChange();
    });
};

const onEditorChange = () => {
    emit("update:modelValue", editorValue);
};

let editorValue = $ref(null);
let firstLoaded = $ref(false);

onMounted(() => {
    editorValue = props.modelValue;
    firstLoaded = true;
});

// watch the editorValue for changes
watch(
    () => editorValue,
    (value) => {
        if (firstLoaded) {
            onEditorChange();
        }
    }
);

watch(
    () => props.editModelValue,
    (value) => {
        editorValue = value;
        onEditorChange();
    }
);
</script>
