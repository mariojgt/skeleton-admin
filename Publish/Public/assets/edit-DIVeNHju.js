import { onMounted, resolveComponent, withCtx, unref, createVNode, withDirectives, vModelText, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./App-DeZIQ0nQ.js";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import { I as InputField, f as _sfc_main$2, h as _sfc_main$3, c as _sfc_main$4, a as _sfc_main$5 } from "./Input-BXi_X4mZ.js";
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
      price_type: props.product.data.price_type
    });
    const submitForm = () => {
      form.patch(
        route("admin.store.product.update", { product: props.product.data.id })
      );
    };
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
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
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
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
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
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
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
                  _push3(ssrRenderComponent(unref(_sfc_main$5), {
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
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
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
                      createVNode(unref(_sfc_main$5), {
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
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
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
                    createVNode(unref(_sfc_main$5), {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/Vendor/skeleton-store/product/edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
