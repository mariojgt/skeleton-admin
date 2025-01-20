import { onMounted, ref, resolveComponent, withCtx, unref, createVNode, withDirectives, vModelText, isRef, openBlock, createBlock, vModelSelect, createCommentVNode, Fragment, renderList, toDisplayString, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1, a as api } from "./App-DeZIQ0nQ.js";
import { useForm } from "@inertiajs/vue3";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { I as InputField, f as _sfc_main$2, h as _sfc_main$3, c as _sfc_main$4, d as _sfc_main$5, a as _sfc_main$6 } from "./Input-BXi_X4mZ.js";
import "naive-ui";
import "./FlashMessage-C9hwciIU.js";
import "axios";
import "lucide-vue-next";
import "lodash/debounce.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "dompurify";
import "marked";
import "turndown";
import "date-fns";
const _sfc_main = {
  __name: "edit",
  __ssrInlineRender: true,
  props: {
    product: {
      type: Object,
      default: () => ({})
    },
    image_search_endpoint: {
      type: String,
      default: ""
    },
    dynamicCategorySearch: {
      type: Object,
      default: () => ({})
    },
    selected_category: {
      type: Object,
      default: () => ({})
    },
    type_enum: {
      type: Object,
      default: () => ({})
    },
    price_type_enum: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
    });
    const form = useForm({
      name: props.product.data.name,
      slug: props.product.data.slug,
      description: props.product.data.description,
      price: props.product.data.price,
      product_image: props.product.data.media,
      media: props.product.data.media,
      category_id: props.product.data.category_id,
      type: props.product.data.type,
      price_type: props.product.data.price_type,
      free_with_subscription: props.product.data.free_with_subscription
    });
    const submitForm = () => {
      form.patch(
        route("admin.store.product.update", { product: props.product.data.id })
      );
    };
    let productResources = ref([]);
    let newResourceModal = ref(false);
    let newResource = ref({
      title: "",
      description: "",
      resource_type: "link",
      resource_url: "",
      file_path: ""
    });
    const loadResources = async () => {
      try {
        const response = await api.get(route("admin.store.product.resources.index", props.product.data.id));
        productResources.value = response.data.data;
      } catch (error) {
        console.error("Error loading resources:", error);
      }
    };
    const createResource = async () => {
      try {
        await api.post(
          route("admin.store.product.resources.store", props.product.data.id),
          newResource.value
        );
        newResourceModal.value = false;
        loadResources();
        newResource.value = {
          title: "",
          description: "",
          resource_type: "link",
          resource_url: "",
          file_path: ""
        };
      } catch (error) {
        console.error("Error creating resource:", error);
      }
    };
    const updateResource = async (resource) => {
      try {
        await api.put(
          route("admin.store.product.resources.update", [props.product.data.id, resource.id]),
          resource
        );
        loadResources();
      } catch (error) {
        console.error("Error updating resource:", error);
      }
    };
    const deleteResource = async (resource) => {
      try {
        await api.delete(
          route("admin.store.product.resources.destroy", [props.product.data.id, resource.id])
        );
        loadResources();
      } catch (error) {
        console.error("Error deleting resource:", error);
      }
    };
    onMounted(() => {
      loadResources();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_card = resolveComponent("n-card");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_card, {
              title: "Product",
              class: "col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TabGroup), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(TabList), { class: "flex space-x-1 rounded-xl p-1 tabs" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(Tab), null, {
                                default: withCtx(({ selected }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<a class="${ssrRenderClass([selected ? "bg-primary text-black" : "", "tab tab-lg tab-bordered rounded-md bg-neutral"])}"${_scopeId5}>Deatils</a>`);
                                  } else {
                                    return [
                                      createVNode("a", {
                                        class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                      }, "Deatils", 2)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Tab), null, {
                                default: withCtx(({ selected }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<a class="${ssrRenderClass([selected ? "bg-primary text-black" : "", "tab tab-lg tab-bordered rounded-md bg-neutral"])}"${_scopeId5}>Media and Description</a>`);
                                  } else {
                                    return [
                                      createVNode("a", {
                                        class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                      }, "Media and Description", 2)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Tab), null, {
                                default: withCtx(({ selected }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<a class="${ssrRenderClass([selected ? "bg-primary text-black" : "", "tab tab-lg tab-bordered rounded-md bg-neutral"])}"${_scopeId5}>Settings</a>`);
                                  } else {
                                    return [
                                      createVNode("a", {
                                        class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                      }, "Settings", 2)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Tab), null, {
                                default: withCtx(({ selected }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<a class="${ssrRenderClass([selected ? "bg-primary text-black" : "", "tab tab-lg tab-bordered rounded-md bg-neutral"])}"${_scopeId5}>Add Resources</a>`);
                                  } else {
                                    return [
                                      createVNode("a", {
                                        class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                      }, "Add Resources", 2)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(Tab), null, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("a", {
                                      class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                    }, "Deatils", 2)
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Tab), null, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("a", {
                                      class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                    }, "Media and Description", 2)
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Tab), null, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("a", {
                                      class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                    }, "Settings", 2)
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Tab), null, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("a", {
                                      class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                    }, "Add Resources", 2)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`<form${_scopeId3}>`);
                        _push4(ssrRenderComponent(unref(TabPanels), { class: "mt-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(TabPanel), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(InputField), {
                                      modelValue: unref(form).name,
                                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                      label: "Name",
                                      type: "text",
                                      placeholder: "Name"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(InputField), {
                                      modelValue: unref(form).slug,
                                      "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                                      label: "slug",
                                      type: "text",
                                      placeholder: "slug"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(InputField), {
                                      modelValue: unref(form).price,
                                      "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                      label: "Price",
                                      type: "text",
                                      placeholder: "slug"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(_sfc_main$2), {
                                      modelValue: unref(form).category_id,
                                      "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                                      label: "Category",
                                      placeholder: "search",
                                      model: props.dynamicCategorySearch.model,
                                      columns: props.dynamicCategorySearch.columns,
                                      "single-mode": props.dynamicCategorySearch.singleSearch,
                                      "load-data": __props.selected_category.data,
                                      endpoint: props.dynamicCategorySearch.endpoint
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(InputField), {
                                        modelValue: unref(form).name,
                                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                        label: "Name",
                                        type: "text",
                                        placeholder: "Name"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(unref(InputField), {
                                        modelValue: unref(form).slug,
                                        "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                                        label: "slug",
                                        type: "text",
                                        placeholder: "slug"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(unref(InputField), {
                                        modelValue: unref(form).price,
                                        "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                        label: "Price",
                                        type: "text",
                                        placeholder: "slug"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(unref(_sfc_main$2), {
                                        modelValue: unref(form).category_id,
                                        "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                                        label: "Category",
                                        placeholder: "search",
                                        model: props.dynamicCategorySearch.model,
                                        columns: props.dynamicCategorySearch.columns,
                                        "single-mode": props.dynamicCategorySearch.singleSearch,
                                        "load-data": __props.selected_category.data,
                                        endpoint: props.dynamicCategorySearch.endpoint
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "model", "columns", "single-mode", "load-data", "endpoint"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(TabPanel), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<label class="form-control"${_scopeId5}><div class="label"${_scopeId5}><span class="label-text"${_scopeId5}>Description</span></div><textarea class="textarea textarea-bordered w-full" placeholder="Product Description"${_scopeId5}>${ssrInterpolate(unref(form).description)}</textarea></label>`);
                                    _push6(ssrRenderComponent(unref(_sfc_main$3), {
                                      modelValue: unref(form).product_image,
                                      "onUpdate:modelValue": ($event) => unref(form).product_image = $event,
                                      label: "image",
                                      placeholder: "search",
                                      "load-data": __props.product.data.media,
                                      endpoint: props.image_search_endpoint
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode("label", { class: "form-control" }, [
                                        createVNode("div", { class: "label" }, [
                                          createVNode("span", { class: "label-text" }, "Description")
                                        ]),
                                        withDirectives(createVNode("textarea", {
                                          class: "textarea textarea-bordered w-full",
                                          placeholder: "Product Description",
                                          "onUpdate:modelValue": ($event) => unref(form).description = $event
                                        }, null, 8, ["onUpdate:modelValue"]), [
                                          [vModelText, unref(form).description]
                                        ])
                                      ]),
                                      createVNode(unref(_sfc_main$3), {
                                        modelValue: unref(form).product_image,
                                        "onUpdate:modelValue": ($event) => unref(form).product_image = $event,
                                        label: "image",
                                        placeholder: "search",
                                        "load-data": __props.product.data.media,
                                        endpoint: props.image_search_endpoint
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "load-data", "endpoint"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(TabPanel), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(unref(_sfc_main$4), {
                                      modelValue: unref(form).price_type,
                                      "onUpdate:modelValue": ($event) => unref(form).price_type = $event,
                                      options: props.price_type_enum,
                                      label: "Price type"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(_sfc_main$4), {
                                      modelValue: unref(form).type,
                                      "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                      options: props.type_enum,
                                      label: "Type"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(_sfc_main$5), {
                                      modelValue: unref(form).free_with_subscription,
                                      "onUpdate:modelValue": ($event) => unref(form).free_with_subscription = $event,
                                      label: "Is Free WIth Subscription"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(unref(_sfc_main$4), {
                                        modelValue: unref(form).price_type,
                                        "onUpdate:modelValue": ($event) => unref(form).price_type = $event,
                                        options: props.price_type_enum,
                                        label: "Price type"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                      createVNode(unref(_sfc_main$4), {
                                        modelValue: unref(form).type,
                                        "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                        options: props.type_enum,
                                        label: "Type"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                      createVNode(unref(_sfc_main$5), {
                                        modelValue: unref(form).free_with_subscription,
                                        "onUpdate:modelValue": ($event) => unref(form).free_with_subscription = $event,
                                        label: "Is Free WIth Subscription"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(TabPanel), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<div class="flex flex-col space-y-4"${_scopeId5}><button type="button" class="btn btn-primary"${_scopeId5}> Add New Resource </button>`);
                                    if (unref(newResourceModal)) {
                                      _push6(`<div class="p-4 border rounded-lg bg-base-300"${_scopeId5}><h2 class="text-xl font-bold mb-2"${_scopeId5}>Add New Resource</h2>`);
                                      _push6(ssrRenderComponent(unref(InputField), {
                                        modelValue: unref(newResource).title,
                                        "onUpdate:modelValue": ($event) => unref(newResource).title = $event,
                                        type: "text",
                                        label: "Title"
                                      }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(unref(InputField), {
                                        modelValue: unref(newResource).description,
                                        "onUpdate:modelValue": ($event) => unref(newResource).description = $event,
                                        type: "text",
                                        label: "Description"
                                      }, null, _parent6, _scopeId5));
                                      _push6(`<div class="mb-2"${_scopeId5}><label${_scopeId5}>Resource Type</label><select class="select select-bordered w-full"${_scopeId5}><option value="link"${ssrIncludeBooleanAttr(Array.isArray(unref(newResource).resource_type) ? ssrLooseContain(unref(newResource).resource_type, "link") : ssrLooseEqual(unref(newResource).resource_type, "link")) ? " selected" : ""}${_scopeId5}>Link</option><option value="file"${ssrIncludeBooleanAttr(Array.isArray(unref(newResource).resource_type) ? ssrLooseContain(unref(newResource).resource_type, "file") : ssrLooseEqual(unref(newResource).resource_type, "file")) ? " selected" : ""}${_scopeId5}>File</option></select></div>`);
                                      if (unref(newResource).resource_type === "link") {
                                        _push6(ssrRenderComponent(unref(InputField), {
                                          modelValue: unref(newResource).resource_url,
                                          "onUpdate:modelValue": ($event) => unref(newResource).resource_url = $event,
                                          type: "text",
                                          label: "Resource URL"
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (unref(newResource).resource_type === "file") {
                                        _push6(ssrRenderComponent(unref(InputField), {
                                          modelValue: unref(newResource).file_path,
                                          "onUpdate:modelValue": ($event) => unref(newResource).file_path = $event,
                                          type: "text",
                                          label: "File Path"
                                        }, null, _parent6, _scopeId5));
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`<div class="flex space-x-2 mt-4"${_scopeId5}><button type="button" class="btn btn-success"${_scopeId5}>Create Resource</button><button type="button" class="btn btn-error"${_scopeId5}>Cancel</button></div></div>`);
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                    _push6(`<!--[-->`);
                                    ssrRenderList(unref(productResources), (resource, index) => {
                                      _push6(`<div class="p-4 border bg-base-100 rounded-lg flex flex-col space-y-2"${_scopeId5}><div class="flex justify-between items-center"${_scopeId5}><h3 class="text-lg font-semibold"${_scopeId5}>${ssrInterpolate(resource.title)}</h3><div class="space-x-2"${_scopeId5}><button class="btn btn-secondary"${_scopeId5}>Edit</button><button class="btn btn-error"${_scopeId5}>Delete</button></div></div><p class="text-sm"${_scopeId5}>${ssrInterpolate(resource.description)}</p>`);
                                      if (resource.resource_type === "link") {
                                        _push6(`<div${_scopeId5}><a${ssrRenderAttr("href", resource.resource_url)} target="_blank" class="text-blue-500 underline"${_scopeId5}>Open Link</a></div>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (resource.resource_type === "file") {
                                        _push6(`<div${_scopeId5}><span${_scopeId5}>File: ${ssrInterpolate(resource.file_path)}</span></div>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (resource.editing) {
                                        _push6(`<div class="p-4 bg-base-200 rounded-lg"${_scopeId5}>`);
                                        _push6(ssrRenderComponent(unref(InputField), {
                                          modelValue: resource.title,
                                          "onUpdate:modelValue": ($event) => resource.title = $event,
                                          type: "text",
                                          label: "Title"
                                        }, null, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(unref(InputField), {
                                          modelValue: resource.description,
                                          "onUpdate:modelValue": ($event) => resource.description = $event,
                                          type: "text",
                                          label: "Description"
                                        }, null, _parent6, _scopeId5));
                                        _push6(`<div class="mb-2"${_scopeId5}><label${_scopeId5}>Resource Type</label><select class="select select-bordered w-full"${_scopeId5}><option value="link"${ssrIncludeBooleanAttr(Array.isArray(resource.resource_type) ? ssrLooseContain(resource.resource_type, "link") : ssrLooseEqual(resource.resource_type, "link")) ? " selected" : ""}${_scopeId5}>Link</option><option value="file"${ssrIncludeBooleanAttr(Array.isArray(resource.resource_type) ? ssrLooseContain(resource.resource_type, "file") : ssrLooseEqual(resource.resource_type, "file")) ? " selected" : ""}${_scopeId5}>File</option></select></div>`);
                                        if (resource.resource_type === "link") {
                                          _push6(ssrRenderComponent(unref(InputField), {
                                            modelValue: resource.resource_url,
                                            "onUpdate:modelValue": ($event) => resource.resource_url = $event,
                                            type: "text",
                                            label: "Resource URL"
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        if (resource.resource_type === "file") {
                                          _push6(ssrRenderComponent(unref(InputField), {
                                            modelValue: resource.file_path,
                                            "onUpdate:modelValue": ($event) => resource.file_path = $event,
                                            type: "text",
                                            label: "File Path"
                                          }, null, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<!---->`);
                                        }
                                        _push6(`<div class="flex space-x-2 mt-4"${_scopeId5}><button class="btn btn-success"${_scopeId5}>Save Changes</button><button class="btn btn-error"${_scopeId5}>Cancel</button></div></div>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      _push6(`</div>`);
                                    });
                                    _push6(`<!--]--></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "flex flex-col space-y-4" }, [
                                        createVNode("button", {
                                          type: "button",
                                          class: "btn btn-primary",
                                          onClick: ($event) => isRef(newResourceModal) ? newResourceModal.value = true : newResourceModal = true
                                        }, " Add New Resource ", 8, ["onClick"]),
                                        unref(newResourceModal) ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "p-4 border rounded-lg bg-base-300"
                                        }, [
                                          createVNode("h2", { class: "text-xl font-bold mb-2" }, "Add New Resource"),
                                          createVNode(unref(InputField), {
                                            modelValue: unref(newResource).title,
                                            "onUpdate:modelValue": ($event) => unref(newResource).title = $event,
                                            type: "text",
                                            label: "Title"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(unref(InputField), {
                                            modelValue: unref(newResource).description,
                                            "onUpdate:modelValue": ($event) => unref(newResource).description = $event,
                                            type: "text",
                                            label: "Description"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("div", { class: "mb-2" }, [
                                            createVNode("label", null, "Resource Type"),
                                            withDirectives(createVNode("select", {
                                              "onUpdate:modelValue": ($event) => unref(newResource).resource_type = $event,
                                              class: "select select-bordered w-full"
                                            }, [
                                              createVNode("option", { value: "link" }, "Link"),
                                              createVNode("option", { value: "file" }, "File")
                                            ], 8, ["onUpdate:modelValue"]), [
                                              [vModelSelect, unref(newResource).resource_type]
                                            ])
                                          ]),
                                          unref(newResource).resource_type === "link" ? (openBlock(), createBlock(unref(InputField), {
                                            key: 0,
                                            modelValue: unref(newResource).resource_url,
                                            "onUpdate:modelValue": ($event) => unref(newResource).resource_url = $event,
                                            type: "text",
                                            label: "Resource URL"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                          unref(newResource).resource_type === "file" ? (openBlock(), createBlock(unref(InputField), {
                                            key: 1,
                                            modelValue: unref(newResource).file_path,
                                            "onUpdate:modelValue": ($event) => unref(newResource).file_path = $event,
                                            type: "text",
                                            label: "File Path"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                          createVNode("div", { class: "flex space-x-2 mt-4" }, [
                                            createVNode("button", {
                                              type: "button",
                                              class: "btn btn-success",
                                              onClick: createResource
                                            }, "Create Resource"),
                                            createVNode("button", {
                                              type: "button",
                                              class: "btn btn-error",
                                              onClick: ($event) => isRef(newResourceModal) ? newResourceModal.value = false : newResourceModal = false
                                            }, "Cancel", 8, ["onClick"])
                                          ])
                                        ])) : createCommentVNode("", true),
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(productResources), (resource, index) => {
                                          return openBlock(), createBlock("div", {
                                            key: index,
                                            class: "p-4 border bg-base-100 rounded-lg flex flex-col space-y-2"
                                          }, [
                                            createVNode("div", { class: "flex justify-between items-center" }, [
                                              createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(resource.title), 1),
                                              createVNode("div", { class: "space-x-2" }, [
                                                createVNode("button", {
                                                  class: "btn btn-secondary",
                                                  onClick: ($event) => resource.editing = !resource.editing
                                                }, "Edit", 8, ["onClick"]),
                                                createVNode("button", {
                                                  class: "btn btn-error",
                                                  onClick: ($event) => deleteResource(resource)
                                                }, "Delete", 8, ["onClick"])
                                              ])
                                            ]),
                                            createVNode("p", { class: "text-sm" }, toDisplayString(resource.description), 1),
                                            resource.resource_type === "link" ? (openBlock(), createBlock("div", { key: 0 }, [
                                              createVNode("a", {
                                                href: resource.resource_url,
                                                target: "_blank",
                                                class: "text-blue-500 underline"
                                              }, "Open Link", 8, ["href"])
                                            ])) : createCommentVNode("", true),
                                            resource.resource_type === "file" ? (openBlock(), createBlock("div", { key: 1 }, [
                                              createVNode("span", null, "File: " + toDisplayString(resource.file_path), 1)
                                            ])) : createCommentVNode("", true),
                                            resource.editing ? (openBlock(), createBlock("div", {
                                              key: 2,
                                              class: "p-4 bg-base-200 rounded-lg"
                                            }, [
                                              createVNode(unref(InputField), {
                                                modelValue: resource.title,
                                                "onUpdate:modelValue": ($event) => resource.title = $event,
                                                type: "text",
                                                label: "Title"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode(unref(InputField), {
                                                modelValue: resource.description,
                                                "onUpdate:modelValue": ($event) => resource.description = $event,
                                                type: "text",
                                                label: "Description"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                              createVNode("div", { class: "mb-2" }, [
                                                createVNode("label", null, "Resource Type"),
                                                withDirectives(createVNode("select", {
                                                  "onUpdate:modelValue": ($event) => resource.resource_type = $event,
                                                  class: "select select-bordered w-full"
                                                }, [
                                                  createVNode("option", { value: "link" }, "Link"),
                                                  createVNode("option", { value: "file" }, "File")
                                                ], 8, ["onUpdate:modelValue"]), [
                                                  [vModelSelect, resource.resource_type]
                                                ])
                                              ]),
                                              resource.resource_type === "link" ? (openBlock(), createBlock(unref(InputField), {
                                                key: 0,
                                                modelValue: resource.resource_url,
                                                "onUpdate:modelValue": ($event) => resource.resource_url = $event,
                                                type: "text",
                                                label: "Resource URL"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                              resource.resource_type === "file" ? (openBlock(), createBlock(unref(InputField), {
                                                key: 1,
                                                modelValue: resource.file_path,
                                                "onUpdate:modelValue": ($event) => resource.file_path = $event,
                                                type: "text",
                                                label: "File Path"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                              createVNode("div", { class: "flex space-x-2 mt-4" }, [
                                                createVNode("button", {
                                                  class: "btn btn-success",
                                                  onClick: ($event) => updateResource(resource)
                                                }, "Save Changes", 8, ["onClick"]),
                                                createVNode("button", {
                                                  class: "btn btn-error",
                                                  onClick: ($event) => resource.editing = false
                                                }, "Cancel", 8, ["onClick"])
                                              ])
                                            ])) : createCommentVNode("", true)
                                          ]);
                                        }), 128))
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(TabPanel), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(InputField), {
                                      modelValue: unref(form).name,
                                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                      label: "Name",
                                      type: "text",
                                      placeholder: "Name"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(unref(InputField), {
                                      modelValue: unref(form).slug,
                                      "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                                      label: "slug",
                                      type: "text",
                                      placeholder: "slug"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(unref(InputField), {
                                      modelValue: unref(form).price,
                                      "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                      label: "Price",
                                      type: "text",
                                      placeholder: "slug"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(unref(_sfc_main$2), {
                                      modelValue: unref(form).category_id,
                                      "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                                      label: "Category",
                                      placeholder: "search",
                                      model: props.dynamicCategorySearch.model,
                                      columns: props.dynamicCategorySearch.columns,
                                      "single-mode": props.dynamicCategorySearch.singleSearch,
                                      "load-data": __props.selected_category.data,
                                      endpoint: props.dynamicCategorySearch.endpoint
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "model", "columns", "single-mode", "load-data", "endpoint"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(TabPanel), null, {
                                  default: withCtx(() => [
                                    createVNode("label", { class: "form-control" }, [
                                      createVNode("div", { class: "label" }, [
                                        createVNode("span", { class: "label-text" }, "Description")
                                      ]),
                                      withDirectives(createVNode("textarea", {
                                        class: "textarea textarea-bordered w-full",
                                        placeholder: "Product Description",
                                        "onUpdate:modelValue": ($event) => unref(form).description = $event
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(form).description]
                                      ])
                                    ]),
                                    createVNode(unref(_sfc_main$3), {
                                      modelValue: unref(form).product_image,
                                      "onUpdate:modelValue": ($event) => unref(form).product_image = $event,
                                      label: "image",
                                      placeholder: "search",
                                      "load-data": __props.product.data.media,
                                      endpoint: props.image_search_endpoint
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "load-data", "endpoint"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(TabPanel), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$4), {
                                      modelValue: unref(form).price_type,
                                      "onUpdate:modelValue": ($event) => unref(form).price_type = $event,
                                      options: props.price_type_enum,
                                      label: "Price type"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                    createVNode(unref(_sfc_main$4), {
                                      modelValue: unref(form).type,
                                      "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                      options: props.type_enum,
                                      label: "Type"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                    createVNode(unref(_sfc_main$5), {
                                      modelValue: unref(form).free_with_subscription,
                                      "onUpdate:modelValue": ($event) => unref(form).free_with_subscription = $event,
                                      label: "Is Free WIth Subscription"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(TabPanel), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex flex-col space-y-4" }, [
                                      createVNode("button", {
                                        type: "button",
                                        class: "btn btn-primary",
                                        onClick: ($event) => isRef(newResourceModal) ? newResourceModal.value = true : newResourceModal = true
                                      }, " Add New Resource ", 8, ["onClick"]),
                                      unref(newResourceModal) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "p-4 border rounded-lg bg-base-300"
                                      }, [
                                        createVNode("h2", { class: "text-xl font-bold mb-2" }, "Add New Resource"),
                                        createVNode(unref(InputField), {
                                          modelValue: unref(newResource).title,
                                          "onUpdate:modelValue": ($event) => unref(newResource).title = $event,
                                          type: "text",
                                          label: "Title"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(unref(InputField), {
                                          modelValue: unref(newResource).description,
                                          "onUpdate:modelValue": ($event) => unref(newResource).description = $event,
                                          type: "text",
                                          label: "Description"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "mb-2" }, [
                                          createVNode("label", null, "Resource Type"),
                                          withDirectives(createVNode("select", {
                                            "onUpdate:modelValue": ($event) => unref(newResource).resource_type = $event,
                                            class: "select select-bordered w-full"
                                          }, [
                                            createVNode("option", { value: "link" }, "Link"),
                                            createVNode("option", { value: "file" }, "File")
                                          ], 8, ["onUpdate:modelValue"]), [
                                            [vModelSelect, unref(newResource).resource_type]
                                          ])
                                        ]),
                                        unref(newResource).resource_type === "link" ? (openBlock(), createBlock(unref(InputField), {
                                          key: 0,
                                          modelValue: unref(newResource).resource_url,
                                          "onUpdate:modelValue": ($event) => unref(newResource).resource_url = $event,
                                          type: "text",
                                          label: "Resource URL"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                        unref(newResource).resource_type === "file" ? (openBlock(), createBlock(unref(InputField), {
                                          key: 1,
                                          modelValue: unref(newResource).file_path,
                                          "onUpdate:modelValue": ($event) => unref(newResource).file_path = $event,
                                          type: "text",
                                          label: "File Path"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                        createVNode("div", { class: "flex space-x-2 mt-4" }, [
                                          createVNode("button", {
                                            type: "button",
                                            class: "btn btn-success",
                                            onClick: createResource
                                          }, "Create Resource"),
                                          createVNode("button", {
                                            type: "button",
                                            class: "btn btn-error",
                                            onClick: ($event) => isRef(newResourceModal) ? newResourceModal.value = false : newResourceModal = false
                                          }, "Cancel", 8, ["onClick"])
                                        ])
                                      ])) : createCommentVNode("", true),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(productResources), (resource, index) => {
                                        return openBlock(), createBlock("div", {
                                          key: index,
                                          class: "p-4 border bg-base-100 rounded-lg flex flex-col space-y-2"
                                        }, [
                                          createVNode("div", { class: "flex justify-between items-center" }, [
                                            createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(resource.title), 1),
                                            createVNode("div", { class: "space-x-2" }, [
                                              createVNode("button", {
                                                class: "btn btn-secondary",
                                                onClick: ($event) => resource.editing = !resource.editing
                                              }, "Edit", 8, ["onClick"]),
                                              createVNode("button", {
                                                class: "btn btn-error",
                                                onClick: ($event) => deleteResource(resource)
                                              }, "Delete", 8, ["onClick"])
                                            ])
                                          ]),
                                          createVNode("p", { class: "text-sm" }, toDisplayString(resource.description), 1),
                                          resource.resource_type === "link" ? (openBlock(), createBlock("div", { key: 0 }, [
                                            createVNode("a", {
                                              href: resource.resource_url,
                                              target: "_blank",
                                              class: "text-blue-500 underline"
                                            }, "Open Link", 8, ["href"])
                                          ])) : createCommentVNode("", true),
                                          resource.resource_type === "file" ? (openBlock(), createBlock("div", { key: 1 }, [
                                            createVNode("span", null, "File: " + toDisplayString(resource.file_path), 1)
                                          ])) : createCommentVNode("", true),
                                          resource.editing ? (openBlock(), createBlock("div", {
                                            key: 2,
                                            class: "p-4 bg-base-200 rounded-lg"
                                          }, [
                                            createVNode(unref(InputField), {
                                              modelValue: resource.title,
                                              "onUpdate:modelValue": ($event) => resource.title = $event,
                                              type: "text",
                                              label: "Title"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(InputField), {
                                              modelValue: resource.description,
                                              "onUpdate:modelValue": ($event) => resource.description = $event,
                                              type: "text",
                                              label: "Description"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("div", { class: "mb-2" }, [
                                              createVNode("label", null, "Resource Type"),
                                              withDirectives(createVNode("select", {
                                                "onUpdate:modelValue": ($event) => resource.resource_type = $event,
                                                class: "select select-bordered w-full"
                                              }, [
                                                createVNode("option", { value: "link" }, "Link"),
                                                createVNode("option", { value: "file" }, "File")
                                              ], 8, ["onUpdate:modelValue"]), [
                                                [vModelSelect, resource.resource_type]
                                              ])
                                            ]),
                                            resource.resource_type === "link" ? (openBlock(), createBlock(unref(InputField), {
                                              key: 0,
                                              modelValue: resource.resource_url,
                                              "onUpdate:modelValue": ($event) => resource.resource_url = $event,
                                              type: "text",
                                              label: "Resource URL"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                            resource.resource_type === "file" ? (openBlock(), createBlock(unref(InputField), {
                                              key: 1,
                                              modelValue: resource.file_path,
                                              "onUpdate:modelValue": ($event) => resource.file_path = $event,
                                              type: "text",
                                              label: "File Path"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                            createVNode("div", { class: "flex space-x-2 mt-4" }, [
                                              createVNode("button", {
                                                class: "btn btn-success",
                                                onClick: ($event) => updateResource(resource)
                                              }, "Save Changes", 8, ["onClick"]),
                                              createVNode("button", {
                                                class: "btn btn-error",
                                                onClick: ($event) => resource.editing = false
                                              }, "Cancel", 8, ["onClick"])
                                            ])
                                          ])) : createCommentVNode("", true)
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`</form>`);
                      } else {
                        return [
                          createVNode(unref(TabList), { class: "flex space-x-1 rounded-xl p-1 tabs" }, {
                            default: withCtx(() => [
                              createVNode(unref(Tab), null, {
                                default: withCtx(({ selected }) => [
                                  createVNode("a", {
                                    class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                  }, "Deatils", 2)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Tab), null, {
                                default: withCtx(({ selected }) => [
                                  createVNode("a", {
                                    class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                  }, "Media and Description", 2)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Tab), null, {
                                default: withCtx(({ selected }) => [
                                  createVNode("a", {
                                    class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                  }, "Settings", 2)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Tab), null, {
                                default: withCtx(({ selected }) => [
                                  createVNode("a", {
                                    class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                  }, "Add Resources", 2)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("form", {
                            onSubmit: withModifiers(submitForm, ["prevent"])
                          }, [
                            createVNode(unref(TabPanels), { class: "mt-2" }, {
                              default: withCtx(() => [
                                createVNode(unref(TabPanel), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(InputField), {
                                      modelValue: unref(form).name,
                                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                      label: "Name",
                                      type: "text",
                                      placeholder: "Name"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(unref(InputField), {
                                      modelValue: unref(form).slug,
                                      "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                                      label: "slug",
                                      type: "text",
                                      placeholder: "slug"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(unref(InputField), {
                                      modelValue: unref(form).price,
                                      "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                      label: "Price",
                                      type: "text",
                                      placeholder: "slug"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(unref(_sfc_main$2), {
                                      modelValue: unref(form).category_id,
                                      "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                                      label: "Category",
                                      placeholder: "search",
                                      model: props.dynamicCategorySearch.model,
                                      columns: props.dynamicCategorySearch.columns,
                                      "single-mode": props.dynamicCategorySearch.singleSearch,
                                      "load-data": __props.selected_category.data,
                                      endpoint: props.dynamicCategorySearch.endpoint
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "model", "columns", "single-mode", "load-data", "endpoint"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(TabPanel), null, {
                                  default: withCtx(() => [
                                    createVNode("label", { class: "form-control" }, [
                                      createVNode("div", { class: "label" }, [
                                        createVNode("span", { class: "label-text" }, "Description")
                                      ]),
                                      withDirectives(createVNode("textarea", {
                                        class: "textarea textarea-bordered w-full",
                                        placeholder: "Product Description",
                                        "onUpdate:modelValue": ($event) => unref(form).description = $event
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, unref(form).description]
                                      ])
                                    ]),
                                    createVNode(unref(_sfc_main$3), {
                                      modelValue: unref(form).product_image,
                                      "onUpdate:modelValue": ($event) => unref(form).product_image = $event,
                                      label: "image",
                                      placeholder: "search",
                                      "load-data": __props.product.data.media,
                                      endpoint: props.image_search_endpoint
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "load-data", "endpoint"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(TabPanel), null, {
                                  default: withCtx(() => [
                                    createVNode(unref(_sfc_main$4), {
                                      modelValue: unref(form).price_type,
                                      "onUpdate:modelValue": ($event) => unref(form).price_type = $event,
                                      options: props.price_type_enum,
                                      label: "Price type"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                    createVNode(unref(_sfc_main$4), {
                                      modelValue: unref(form).type,
                                      "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                      options: props.type_enum,
                                      label: "Type"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                    createVNode(unref(_sfc_main$5), {
                                      modelValue: unref(form).free_with_subscription,
                                      "onUpdate:modelValue": ($event) => unref(form).free_with_subscription = $event,
                                      label: "Is Free WIth Subscription"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(TabPanel), null, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "flex flex-col space-y-4" }, [
                                      createVNode("button", {
                                        type: "button",
                                        class: "btn btn-primary",
                                        onClick: ($event) => isRef(newResourceModal) ? newResourceModal.value = true : newResourceModal = true
                                      }, " Add New Resource ", 8, ["onClick"]),
                                      unref(newResourceModal) ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "p-4 border rounded-lg bg-base-300"
                                      }, [
                                        createVNode("h2", { class: "text-xl font-bold mb-2" }, "Add New Resource"),
                                        createVNode(unref(InputField), {
                                          modelValue: unref(newResource).title,
                                          "onUpdate:modelValue": ($event) => unref(newResource).title = $event,
                                          type: "text",
                                          label: "Title"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(unref(InputField), {
                                          modelValue: unref(newResource).description,
                                          "onUpdate:modelValue": ($event) => unref(newResource).description = $event,
                                          type: "text",
                                          label: "Description"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "mb-2" }, [
                                          createVNode("label", null, "Resource Type"),
                                          withDirectives(createVNode("select", {
                                            "onUpdate:modelValue": ($event) => unref(newResource).resource_type = $event,
                                            class: "select select-bordered w-full"
                                          }, [
                                            createVNode("option", { value: "link" }, "Link"),
                                            createVNode("option", { value: "file" }, "File")
                                          ], 8, ["onUpdate:modelValue"]), [
                                            [vModelSelect, unref(newResource).resource_type]
                                          ])
                                        ]),
                                        unref(newResource).resource_type === "link" ? (openBlock(), createBlock(unref(InputField), {
                                          key: 0,
                                          modelValue: unref(newResource).resource_url,
                                          "onUpdate:modelValue": ($event) => unref(newResource).resource_url = $event,
                                          type: "text",
                                          label: "Resource URL"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                        unref(newResource).resource_type === "file" ? (openBlock(), createBlock(unref(InputField), {
                                          key: 1,
                                          modelValue: unref(newResource).file_path,
                                          "onUpdate:modelValue": ($event) => unref(newResource).file_path = $event,
                                          type: "text",
                                          label: "File Path"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                        createVNode("div", { class: "flex space-x-2 mt-4" }, [
                                          createVNode("button", {
                                            type: "button",
                                            class: "btn btn-success",
                                            onClick: createResource
                                          }, "Create Resource"),
                                          createVNode("button", {
                                            type: "button",
                                            class: "btn btn-error",
                                            onClick: ($event) => isRef(newResourceModal) ? newResourceModal.value = false : newResourceModal = false
                                          }, "Cancel", 8, ["onClick"])
                                        ])
                                      ])) : createCommentVNode("", true),
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(productResources), (resource, index) => {
                                        return openBlock(), createBlock("div", {
                                          key: index,
                                          class: "p-4 border bg-base-100 rounded-lg flex flex-col space-y-2"
                                        }, [
                                          createVNode("div", { class: "flex justify-between items-center" }, [
                                            createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(resource.title), 1),
                                            createVNode("div", { class: "space-x-2" }, [
                                              createVNode("button", {
                                                class: "btn btn-secondary",
                                                onClick: ($event) => resource.editing = !resource.editing
                                              }, "Edit", 8, ["onClick"]),
                                              createVNode("button", {
                                                class: "btn btn-error",
                                                onClick: ($event) => deleteResource(resource)
                                              }, "Delete", 8, ["onClick"])
                                            ])
                                          ]),
                                          createVNode("p", { class: "text-sm" }, toDisplayString(resource.description), 1),
                                          resource.resource_type === "link" ? (openBlock(), createBlock("div", { key: 0 }, [
                                            createVNode("a", {
                                              href: resource.resource_url,
                                              target: "_blank",
                                              class: "text-blue-500 underline"
                                            }, "Open Link", 8, ["href"])
                                          ])) : createCommentVNode("", true),
                                          resource.resource_type === "file" ? (openBlock(), createBlock("div", { key: 1 }, [
                                            createVNode("span", null, "File: " + toDisplayString(resource.file_path), 1)
                                          ])) : createCommentVNode("", true),
                                          resource.editing ? (openBlock(), createBlock("div", {
                                            key: 2,
                                            class: "p-4 bg-base-200 rounded-lg"
                                          }, [
                                            createVNode(unref(InputField), {
                                              modelValue: resource.title,
                                              "onUpdate:modelValue": ($event) => resource.title = $event,
                                              type: "text",
                                              label: "Title"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode(unref(InputField), {
                                              modelValue: resource.description,
                                              "onUpdate:modelValue": ($event) => resource.description = $event,
                                              type: "text",
                                              label: "Description"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                            createVNode("div", { class: "mb-2" }, [
                                              createVNode("label", null, "Resource Type"),
                                              withDirectives(createVNode("select", {
                                                "onUpdate:modelValue": ($event) => resource.resource_type = $event,
                                                class: "select select-bordered w-full"
                                              }, [
                                                createVNode("option", { value: "link" }, "Link"),
                                                createVNode("option", { value: "file" }, "File")
                                              ], 8, ["onUpdate:modelValue"]), [
                                                [vModelSelect, resource.resource_type]
                                              ])
                                            ]),
                                            resource.resource_type === "link" ? (openBlock(), createBlock(unref(InputField), {
                                              key: 0,
                                              modelValue: resource.resource_url,
                                              "onUpdate:modelValue": ($event) => resource.resource_url = $event,
                                              type: "text",
                                              label: "Resource URL"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                            resource.resource_type === "file" ? (openBlock(), createBlock(unref(InputField), {
                                              key: 1,
                                              modelValue: resource.file_path,
                                              "onUpdate:modelValue": ($event) => resource.file_path = $event,
                                              type: "text",
                                              label: "File Path"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                            createVNode("div", { class: "flex space-x-2 mt-4" }, [
                                              createVNode("button", {
                                                class: "btn btn-success",
                                                onClick: ($event) => updateResource(resource)
                                              }, "Save Changes", 8, ["onClick"]),
                                              createVNode("button", {
                                                class: "btn btn-error",
                                                onClick: ($event) => resource.editing = false
                                              }, "Cancel", 8, ["onClick"])
                                            ])
                                          ])) : createCommentVNode("", true)
                                        ]);
                                      }), 128))
                                    ])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ], 32)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="form-control pt-10"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(_sfc_main$6), {
                    name: "Update",
                    onClick: submitForm
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(unref(TabGroup), null, {
                      default: withCtx(() => [
                        createVNode(unref(TabList), { class: "flex space-x-1 rounded-xl p-1 tabs" }, {
                          default: withCtx(() => [
                            createVNode(unref(Tab), null, {
                              default: withCtx(({ selected }) => [
                                createVNode("a", {
                                  class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                }, "Deatils", 2)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Tab), null, {
                              default: withCtx(({ selected }) => [
                                createVNode("a", {
                                  class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                }, "Media and Description", 2)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Tab), null, {
                              default: withCtx(({ selected }) => [
                                createVNode("a", {
                                  class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                }, "Settings", 2)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Tab), null, {
                              default: withCtx(({ selected }) => [
                                createVNode("a", {
                                  class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                                }, "Add Resources", 2)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("form", {
                          onSubmit: withModifiers(submitForm, ["prevent"])
                        }, [
                          createVNode(unref(TabPanels), { class: "mt-2" }, {
                            default: withCtx(() => [
                              createVNode(unref(TabPanel), null, {
                                default: withCtx(() => [
                                  createVNode(unref(InputField), {
                                    modelValue: unref(form).name,
                                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                    label: "Name",
                                    type: "text",
                                    placeholder: "Name"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(unref(InputField), {
                                    modelValue: unref(form).slug,
                                    "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                                    label: "slug",
                                    type: "text",
                                    placeholder: "slug"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(unref(InputField), {
                                    modelValue: unref(form).price,
                                    "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                    label: "Price",
                                    type: "text",
                                    placeholder: "slug"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(unref(_sfc_main$2), {
                                    modelValue: unref(form).category_id,
                                    "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                                    label: "Category",
                                    placeholder: "search",
                                    model: props.dynamicCategorySearch.model,
                                    columns: props.dynamicCategorySearch.columns,
                                    "single-mode": props.dynamicCategorySearch.singleSearch,
                                    "load-data": __props.selected_category.data,
                                    endpoint: props.dynamicCategorySearch.endpoint
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "model", "columns", "single-mode", "load-data", "endpoint"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(TabPanel), null, {
                                default: withCtx(() => [
                                  createVNode("label", { class: "form-control" }, [
                                    createVNode("div", { class: "label" }, [
                                      createVNode("span", { class: "label-text" }, "Description")
                                    ]),
                                    withDirectives(createVNode("textarea", {
                                      class: "textarea textarea-bordered w-full",
                                      placeholder: "Product Description",
                                      "onUpdate:modelValue": ($event) => unref(form).description = $event
                                    }, null, 8, ["onUpdate:modelValue"]), [
                                      [vModelText, unref(form).description]
                                    ])
                                  ]),
                                  createVNode(unref(_sfc_main$3), {
                                    modelValue: unref(form).product_image,
                                    "onUpdate:modelValue": ($event) => unref(form).product_image = $event,
                                    label: "image",
                                    placeholder: "search",
                                    "load-data": __props.product.data.media,
                                    endpoint: props.image_search_endpoint
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "load-data", "endpoint"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(TabPanel), null, {
                                default: withCtx(() => [
                                  createVNode(unref(_sfc_main$4), {
                                    modelValue: unref(form).price_type,
                                    "onUpdate:modelValue": ($event) => unref(form).price_type = $event,
                                    options: props.price_type_enum,
                                    label: "Price type"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                  createVNode(unref(_sfc_main$4), {
                                    modelValue: unref(form).type,
                                    "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                    options: props.type_enum,
                                    label: "Type"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                  createVNode(unref(_sfc_main$5), {
                                    modelValue: unref(form).free_with_subscription,
                                    "onUpdate:modelValue": ($event) => unref(form).free_with_subscription = $event,
                                    label: "Is Free WIth Subscription"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              }),
                              createVNode(unref(TabPanel), null, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex flex-col space-y-4" }, [
                                    createVNode("button", {
                                      type: "button",
                                      class: "btn btn-primary",
                                      onClick: ($event) => isRef(newResourceModal) ? newResourceModal.value = true : newResourceModal = true
                                    }, " Add New Resource ", 8, ["onClick"]),
                                    unref(newResourceModal) ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "p-4 border rounded-lg bg-base-300"
                                    }, [
                                      createVNode("h2", { class: "text-xl font-bold mb-2" }, "Add New Resource"),
                                      createVNode(unref(InputField), {
                                        modelValue: unref(newResource).title,
                                        "onUpdate:modelValue": ($event) => unref(newResource).title = $event,
                                        type: "text",
                                        label: "Title"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(unref(InputField), {
                                        modelValue: unref(newResource).description,
                                        "onUpdate:modelValue": ($event) => unref(newResource).description = $event,
                                        type: "text",
                                        label: "Description"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "mb-2" }, [
                                        createVNode("label", null, "Resource Type"),
                                        withDirectives(createVNode("select", {
                                          "onUpdate:modelValue": ($event) => unref(newResource).resource_type = $event,
                                          class: "select select-bordered w-full"
                                        }, [
                                          createVNode("option", { value: "link" }, "Link"),
                                          createVNode("option", { value: "file" }, "File")
                                        ], 8, ["onUpdate:modelValue"]), [
                                          [vModelSelect, unref(newResource).resource_type]
                                        ])
                                      ]),
                                      unref(newResource).resource_type === "link" ? (openBlock(), createBlock(unref(InputField), {
                                        key: 0,
                                        modelValue: unref(newResource).resource_url,
                                        "onUpdate:modelValue": ($event) => unref(newResource).resource_url = $event,
                                        type: "text",
                                        label: "Resource URL"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                      unref(newResource).resource_type === "file" ? (openBlock(), createBlock(unref(InputField), {
                                        key: 1,
                                        modelValue: unref(newResource).file_path,
                                        "onUpdate:modelValue": ($event) => unref(newResource).file_path = $event,
                                        type: "text",
                                        label: "File Path"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                      createVNode("div", { class: "flex space-x-2 mt-4" }, [
                                        createVNode("button", {
                                          type: "button",
                                          class: "btn btn-success",
                                          onClick: createResource
                                        }, "Create Resource"),
                                        createVNode("button", {
                                          type: "button",
                                          class: "btn btn-error",
                                          onClick: ($event) => isRef(newResourceModal) ? newResourceModal.value = false : newResourceModal = false
                                        }, "Cancel", 8, ["onClick"])
                                      ])
                                    ])) : createCommentVNode("", true),
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(productResources), (resource, index) => {
                                      return openBlock(), createBlock("div", {
                                        key: index,
                                        class: "p-4 border bg-base-100 rounded-lg flex flex-col space-y-2"
                                      }, [
                                        createVNode("div", { class: "flex justify-between items-center" }, [
                                          createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(resource.title), 1),
                                          createVNode("div", { class: "space-x-2" }, [
                                            createVNode("button", {
                                              class: "btn btn-secondary",
                                              onClick: ($event) => resource.editing = !resource.editing
                                            }, "Edit", 8, ["onClick"]),
                                            createVNode("button", {
                                              class: "btn btn-error",
                                              onClick: ($event) => deleteResource(resource)
                                            }, "Delete", 8, ["onClick"])
                                          ])
                                        ]),
                                        createVNode("p", { class: "text-sm" }, toDisplayString(resource.description), 1),
                                        resource.resource_type === "link" ? (openBlock(), createBlock("div", { key: 0 }, [
                                          createVNode("a", {
                                            href: resource.resource_url,
                                            target: "_blank",
                                            class: "text-blue-500 underline"
                                          }, "Open Link", 8, ["href"])
                                        ])) : createCommentVNode("", true),
                                        resource.resource_type === "file" ? (openBlock(), createBlock("div", { key: 1 }, [
                                          createVNode("span", null, "File: " + toDisplayString(resource.file_path), 1)
                                        ])) : createCommentVNode("", true),
                                        resource.editing ? (openBlock(), createBlock("div", {
                                          key: 2,
                                          class: "p-4 bg-base-200 rounded-lg"
                                        }, [
                                          createVNode(unref(InputField), {
                                            modelValue: resource.title,
                                            "onUpdate:modelValue": ($event) => resource.title = $event,
                                            type: "text",
                                            label: "Title"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode(unref(InputField), {
                                            modelValue: resource.description,
                                            "onUpdate:modelValue": ($event) => resource.description = $event,
                                            type: "text",
                                            label: "Description"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                          createVNode("div", { class: "mb-2" }, [
                                            createVNode("label", null, "Resource Type"),
                                            withDirectives(createVNode("select", {
                                              "onUpdate:modelValue": ($event) => resource.resource_type = $event,
                                              class: "select select-bordered w-full"
                                            }, [
                                              createVNode("option", { value: "link" }, "Link"),
                                              createVNode("option", { value: "file" }, "File")
                                            ], 8, ["onUpdate:modelValue"]), [
                                              [vModelSelect, resource.resource_type]
                                            ])
                                          ]),
                                          resource.resource_type === "link" ? (openBlock(), createBlock(unref(InputField), {
                                            key: 0,
                                            modelValue: resource.resource_url,
                                            "onUpdate:modelValue": ($event) => resource.resource_url = $event,
                                            type: "text",
                                            label: "Resource URL"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                          resource.resource_type === "file" ? (openBlock(), createBlock(unref(InputField), {
                                            key: 1,
                                            modelValue: resource.file_path,
                                            "onUpdate:modelValue": ($event) => resource.file_path = $event,
                                            type: "text",
                                            label: "File Path"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                          createVNode("div", { class: "flex space-x-2 mt-4" }, [
                                            createVNode("button", {
                                              class: "btn btn-success",
                                              onClick: ($event) => updateResource(resource)
                                            }, "Save Changes", 8, ["onClick"]),
                                            createVNode("button", {
                                              class: "btn btn-error",
                                              onClick: ($event) => resource.editing = false
                                            }, "Cancel", 8, ["onClick"])
                                          ])
                                        ])) : createCommentVNode("", true)
                                      ]);
                                    }), 128))
                                  ])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ], 32)
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "form-control pt-10" }, [
                      createVNode(unref(_sfc_main$6), {
                        name: "Update",
                        onClick: submitForm
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_card, {
                title: "Product",
                class: "col-span-1 row-span-3 shadow-lg xl:col-span-2 bg-base-300"
              }, {
                default: withCtx(() => [
                  createVNode(unref(TabGroup), null, {
                    default: withCtx(() => [
                      createVNode(unref(TabList), { class: "flex space-x-1 rounded-xl p-1 tabs" }, {
                        default: withCtx(() => [
                          createVNode(unref(Tab), null, {
                            default: withCtx(({ selected }) => [
                              createVNode("a", {
                                class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                              }, "Deatils", 2)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Tab), null, {
                            default: withCtx(({ selected }) => [
                              createVNode("a", {
                                class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                              }, "Media and Description", 2)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Tab), null, {
                            default: withCtx(({ selected }) => [
                              createVNode("a", {
                                class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                              }, "Settings", 2)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Tab), null, {
                            default: withCtx(({ selected }) => [
                              createVNode("a", {
                                class: ["tab tab-lg tab-bordered rounded-md bg-neutral", selected ? "bg-primary text-black" : ""]
                              }, "Add Resources", 2)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode("form", {
                        onSubmit: withModifiers(submitForm, ["prevent"])
                      }, [
                        createVNode(unref(TabPanels), { class: "mt-2" }, {
                          default: withCtx(() => [
                            createVNode(unref(TabPanel), null, {
                              default: withCtx(() => [
                                createVNode(unref(InputField), {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  label: "Name",
                                  type: "text",
                                  placeholder: "Name"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(unref(InputField), {
                                  modelValue: unref(form).slug,
                                  "onUpdate:modelValue": ($event) => unref(form).slug = $event,
                                  label: "slug",
                                  type: "text",
                                  placeholder: "slug"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(unref(InputField), {
                                  modelValue: unref(form).price,
                                  "onUpdate:modelValue": ($event) => unref(form).price = $event,
                                  label: "Price",
                                  type: "text",
                                  placeholder: "slug"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(unref(_sfc_main$2), {
                                  modelValue: unref(form).category_id,
                                  "onUpdate:modelValue": ($event) => unref(form).category_id = $event,
                                  label: "Category",
                                  placeholder: "search",
                                  model: props.dynamicCategorySearch.model,
                                  columns: props.dynamicCategorySearch.columns,
                                  "single-mode": props.dynamicCategorySearch.singleSearch,
                                  "load-data": __props.selected_category.data,
                                  endpoint: props.dynamicCategorySearch.endpoint
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "model", "columns", "single-mode", "load-data", "endpoint"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(TabPanel), null, {
                              default: withCtx(() => [
                                createVNode("label", { class: "form-control" }, [
                                  createVNode("div", { class: "label" }, [
                                    createVNode("span", { class: "label-text" }, "Description")
                                  ]),
                                  withDirectives(createVNode("textarea", {
                                    class: "textarea textarea-bordered w-full",
                                    placeholder: "Product Description",
                                    "onUpdate:modelValue": ($event) => unref(form).description = $event
                                  }, null, 8, ["onUpdate:modelValue"]), [
                                    [vModelText, unref(form).description]
                                  ])
                                ]),
                                createVNode(unref(_sfc_main$3), {
                                  modelValue: unref(form).product_image,
                                  "onUpdate:modelValue": ($event) => unref(form).product_image = $event,
                                  label: "image",
                                  placeholder: "search",
                                  "load-data": __props.product.data.media,
                                  endpoint: props.image_search_endpoint
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "load-data", "endpoint"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(TabPanel), null, {
                              default: withCtx(() => [
                                createVNode(unref(_sfc_main$4), {
                                  modelValue: unref(form).price_type,
                                  "onUpdate:modelValue": ($event) => unref(form).price_type = $event,
                                  options: props.price_type_enum,
                                  label: "Price type"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                createVNode(unref(_sfc_main$4), {
                                  modelValue: unref(form).type,
                                  "onUpdate:modelValue": ($event) => unref(form).type = $event,
                                  options: props.type_enum,
                                  label: "Type"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                createVNode(unref(_sfc_main$5), {
                                  modelValue: unref(form).free_with_subscription,
                                  "onUpdate:modelValue": ($event) => unref(form).free_with_subscription = $event,
                                  label: "Is Free WIth Subscription"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            }),
                            createVNode(unref(TabPanel), null, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex flex-col space-y-4" }, [
                                  createVNode("button", {
                                    type: "button",
                                    class: "btn btn-primary",
                                    onClick: ($event) => isRef(newResourceModal) ? newResourceModal.value = true : newResourceModal = true
                                  }, " Add New Resource ", 8, ["onClick"]),
                                  unref(newResourceModal) ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "p-4 border rounded-lg bg-base-300"
                                  }, [
                                    createVNode("h2", { class: "text-xl font-bold mb-2" }, "Add New Resource"),
                                    createVNode(unref(InputField), {
                                      modelValue: unref(newResource).title,
                                      "onUpdate:modelValue": ($event) => unref(newResource).title = $event,
                                      type: "text",
                                      label: "Title"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(unref(InputField), {
                                      modelValue: unref(newResource).description,
                                      "onUpdate:modelValue": ($event) => unref(newResource).description = $event,
                                      type: "text",
                                      label: "Description"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "mb-2" }, [
                                      createVNode("label", null, "Resource Type"),
                                      withDirectives(createVNode("select", {
                                        "onUpdate:modelValue": ($event) => unref(newResource).resource_type = $event,
                                        class: "select select-bordered w-full"
                                      }, [
                                        createVNode("option", { value: "link" }, "Link"),
                                        createVNode("option", { value: "file" }, "File")
                                      ], 8, ["onUpdate:modelValue"]), [
                                        [vModelSelect, unref(newResource).resource_type]
                                      ])
                                    ]),
                                    unref(newResource).resource_type === "link" ? (openBlock(), createBlock(unref(InputField), {
                                      key: 0,
                                      modelValue: unref(newResource).resource_url,
                                      "onUpdate:modelValue": ($event) => unref(newResource).resource_url = $event,
                                      type: "text",
                                      label: "Resource URL"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                    unref(newResource).resource_type === "file" ? (openBlock(), createBlock(unref(InputField), {
                                      key: 1,
                                      modelValue: unref(newResource).file_path,
                                      "onUpdate:modelValue": ($event) => unref(newResource).file_path = $event,
                                      type: "text",
                                      label: "File Path"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                    createVNode("div", { class: "flex space-x-2 mt-4" }, [
                                      createVNode("button", {
                                        type: "button",
                                        class: "btn btn-success",
                                        onClick: createResource
                                      }, "Create Resource"),
                                      createVNode("button", {
                                        type: "button",
                                        class: "btn btn-error",
                                        onClick: ($event) => isRef(newResourceModal) ? newResourceModal.value = false : newResourceModal = false
                                      }, "Cancel", 8, ["onClick"])
                                    ])
                                  ])) : createCommentVNode("", true),
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(productResources), (resource, index) => {
                                    return openBlock(), createBlock("div", {
                                      key: index,
                                      class: "p-4 border bg-base-100 rounded-lg flex flex-col space-y-2"
                                    }, [
                                      createVNode("div", { class: "flex justify-between items-center" }, [
                                        createVNode("h3", { class: "text-lg font-semibold" }, toDisplayString(resource.title), 1),
                                        createVNode("div", { class: "space-x-2" }, [
                                          createVNode("button", {
                                            class: "btn btn-secondary",
                                            onClick: ($event) => resource.editing = !resource.editing
                                          }, "Edit", 8, ["onClick"]),
                                          createVNode("button", {
                                            class: "btn btn-error",
                                            onClick: ($event) => deleteResource(resource)
                                          }, "Delete", 8, ["onClick"])
                                        ])
                                      ]),
                                      createVNode("p", { class: "text-sm" }, toDisplayString(resource.description), 1),
                                      resource.resource_type === "link" ? (openBlock(), createBlock("div", { key: 0 }, [
                                        createVNode("a", {
                                          href: resource.resource_url,
                                          target: "_blank",
                                          class: "text-blue-500 underline"
                                        }, "Open Link", 8, ["href"])
                                      ])) : createCommentVNode("", true),
                                      resource.resource_type === "file" ? (openBlock(), createBlock("div", { key: 1 }, [
                                        createVNode("span", null, "File: " + toDisplayString(resource.file_path), 1)
                                      ])) : createCommentVNode("", true),
                                      resource.editing ? (openBlock(), createBlock("div", {
                                        key: 2,
                                        class: "p-4 bg-base-200 rounded-lg"
                                      }, [
                                        createVNode(unref(InputField), {
                                          modelValue: resource.title,
                                          "onUpdate:modelValue": ($event) => resource.title = $event,
                                          type: "text",
                                          label: "Title"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(unref(InputField), {
                                          modelValue: resource.description,
                                          "onUpdate:modelValue": ($event) => resource.description = $event,
                                          type: "text",
                                          label: "Description"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "mb-2" }, [
                                          createVNode("label", null, "Resource Type"),
                                          withDirectives(createVNode("select", {
                                            "onUpdate:modelValue": ($event) => resource.resource_type = $event,
                                            class: "select select-bordered w-full"
                                          }, [
                                            createVNode("option", { value: "link" }, "Link"),
                                            createVNode("option", { value: "file" }, "File")
                                          ], 8, ["onUpdate:modelValue"]), [
                                            [vModelSelect, resource.resource_type]
                                          ])
                                        ]),
                                        resource.resource_type === "link" ? (openBlock(), createBlock(unref(InputField), {
                                          key: 0,
                                          modelValue: resource.resource_url,
                                          "onUpdate:modelValue": ($event) => resource.resource_url = $event,
                                          type: "text",
                                          label: "Resource URL"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                        resource.resource_type === "file" ? (openBlock(), createBlock(unref(InputField), {
                                          key: 1,
                                          modelValue: resource.file_path,
                                          "onUpdate:modelValue": ($event) => resource.file_path = $event,
                                          type: "text",
                                          label: "File Path"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                                        createVNode("div", { class: "flex space-x-2 mt-4" }, [
                                          createVNode("button", {
                                            class: "btn btn-success",
                                            onClick: ($event) => updateResource(resource)
                                          }, "Save Changes", 8, ["onClick"]),
                                          createVNode("button", {
                                            class: "btn btn-error",
                                            onClick: ($event) => resource.editing = false
                                          }, "Cancel", 8, ["onClick"])
                                        ])
                                      ])) : createCommentVNode("", true)
                                    ]);
                                  }), 128))
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ], 32)
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "form-control pt-10" }, [
                    createVNode(unref(_sfc_main$6), {
                      name: "Update",
                      onClick: submitForm
                    })
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Vendor/skeleton-store/product/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
