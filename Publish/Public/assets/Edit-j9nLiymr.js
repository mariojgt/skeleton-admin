import { ref, onMounted, resolveComponent, withCtx, unref, createVNode, withModifiers, isRef, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { router } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./App-DeZIQ0nQ.js";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import _sfc_main$5 from "./DeployTable-DG1XJajE.js";
import _sfc_main$6 from "./DeployStatus-CyTLjyEY.js";
import { I as InputField, d as _sfc_main$2, e as _sfc_main$3, a as _sfc_main$4 } from "./Input-BXi_X4mZ.js";
import "naive-ui";
import "./FlashMessage-C9hwciIU.js";
import "axios";
import "lucide-vue-next";
import "lodash/debounce.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
import "date-fns";
import "dompurify";
import "marked";
import "turndown";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    deploy: {
      type: Object,
      default: () => ({})
    },
    deploymentLogs: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    let deployInformation = ref({});
    onMounted(() => {
      deployInformation.value = props.deploy;
    });
    let deployment = ref(null);
    const submitForm = () => {
      const form = {
        name: deployInformation.value.name,
        repository_url: deployInformation.value.repository_url,
        branch: deployInformation.value.branch,
        secret_token: deployInformation.value.secret_token,
        is_active: deployInformation.value.is_active,
        deployment_commands: deployInformation.value.deployment_commands,
        deployment_path: deployInformation.value.deployment_path
      };
      router.post(route("admin.deploy.update", deployInformation.value.id), form);
    };
    const genereteToken = () => {
      deployInformation.value.secret_token = Math.random().toString(36).substring(2).toUpperCase() + Math.random().toString(36).substring(2).toUpperCase();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_card = resolveComponent("n-card");
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_n_card, {
              title: "User Profile",
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
                                    _push6(`<a class="${ssrRenderClass([selected ? "tab-active" : "", "tab tab-lg tab-bordered"])}"${_scopeId5}>Deploy Information</a>`);
                                  } else {
                                    return [
                                      createVNode("a", {
                                        class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                      }, "Deploy Information", 2)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Tab), null, {
                                default: withCtx(({ selected }, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<a class="${ssrRenderClass([selected ? "tab-active" : "", "tab tab-lg tab-bordered"])}"${_scopeId5}>Last Deployment</a>`);
                                  } else {
                                    return [
                                      createVNode("a", {
                                        class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                      }, "Last Deployment", 2)
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
                                      class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                    }, "Deploy Information", 2)
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(Tab), null, {
                                  default: withCtx(({ selected }) => [
                                    createVNode("a", {
                                      class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                    }, "Last Deployment", 2)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(unref(TabPanels), { class: "mt-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(unref(TabPanel), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<form${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(InputField), {
                                      modelValue: unref(deployInformation).name,
                                      "onUpdate:modelValue": ($event) => unref(deployInformation).name = $event,
                                      label: "Name",
                                      type: "text",
                                      placeholder: "Name"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(InputField), {
                                      modelValue: unref(deployInformation).repository_url,
                                      "onUpdate:modelValue": ($event) => unref(deployInformation).repository_url = $event,
                                      label: "Repository URL",
                                      type: "text",
                                      placeholder: "Repository URL"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(InputField), {
                                      modelValue: unref(deployInformation).branch,
                                      "onUpdate:modelValue": ($event) => unref(deployInformation).branch = $event,
                                      label: "Branch",
                                      type: "text",
                                      placeholder: "Branch"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(InputField), {
                                      modelValue: unref(deployInformation).secret_token,
                                      "onUpdate:modelValue": ($event) => unref(deployInformation).secret_token = $event,
                                      label: "secret_token",
                                      type: "text",
                                      placeholder: "secret_token",
                                      required: "true"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<div class="form-control pt-10"${_scopeId5}><button type="button" class="btn btn-primary"${_scopeId5}> Generate Token </button></div>`);
                                    _push6(ssrRenderComponent(unref(_sfc_main$2), {
                                      modelValue: unref(deployInformation).is_active,
                                      "onUpdate:modelValue": ($event) => unref(deployInformation).is_active = $event,
                                      label: "Is Active"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(_sfc_main$3), {
                                      modelValue: unref(deployInformation).deployment_commands,
                                      "onUpdate:modelValue": ($event) => unref(deployInformation).deployment_commands = $event,
                                      label: "Deployment Commands"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(unref(InputField), {
                                      modelValue: unref(deployInformation).deployment_path,
                                      "onUpdate:modelValue": ($event) => unref(deployInformation).deployment_path = $event,
                                      label: "deployment_path",
                                      type: "text",
                                      placeholder: "deployment_path",
                                      required: "true"
                                    }, null, _parent6, _scopeId5));
                                    _push6(`<div class="form-control pt-10"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(unref(_sfc_main$4), {
                                      name: "update",
                                      onClick: submitForm
                                    }, null, _parent6, _scopeId5));
                                    _push6(`</div></form>`);
                                  } else {
                                    return [
                                      createVNode("form", {
                                        onSubmit: withModifiers(submitForm, ["prevent"])
                                      }, [
                                        createVNode(unref(InputField), {
                                          modelValue: unref(deployInformation).name,
                                          "onUpdate:modelValue": ($event) => unref(deployInformation).name = $event,
                                          label: "Name",
                                          type: "text",
                                          placeholder: "Name"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(unref(InputField), {
                                          modelValue: unref(deployInformation).repository_url,
                                          "onUpdate:modelValue": ($event) => unref(deployInformation).repository_url = $event,
                                          label: "Repository URL",
                                          type: "text",
                                          placeholder: "Repository URL"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(unref(InputField), {
                                          modelValue: unref(deployInformation).branch,
                                          "onUpdate:modelValue": ($event) => unref(deployInformation).branch = $event,
                                          label: "Branch",
                                          type: "text",
                                          placeholder: "Branch"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(unref(InputField), {
                                          modelValue: unref(deployInformation).secret_token,
                                          "onUpdate:modelValue": ($event) => unref(deployInformation).secret_token = $event,
                                          label: "secret_token",
                                          type: "text",
                                          placeholder: "secret_token",
                                          required: "true"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "form-control pt-10" }, [
                                          createVNode("button", {
                                            onClick: genereteToken,
                                            type: "button",
                                            class: "btn btn-primary"
                                          }, " Generate Token ")
                                        ]),
                                        createVNode(unref(_sfc_main$2), {
                                          modelValue: unref(deployInformation).is_active,
                                          "onUpdate:modelValue": ($event) => unref(deployInformation).is_active = $event,
                                          label: "Is Active"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(unref(_sfc_main$3), {
                                          modelValue: unref(deployInformation).deployment_commands,
                                          "onUpdate:modelValue": ($event) => unref(deployInformation).deployment_commands = $event,
                                          label: "Deployment Commands"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode(unref(InputField), {
                                          modelValue: unref(deployInformation).deployment_path,
                                          "onUpdate:modelValue": ($event) => unref(deployInformation).deployment_path = $event,
                                          label: "deployment_path",
                                          type: "text",
                                          placeholder: "deployment_path",
                                          required: "true"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                        createVNode("div", { class: "form-control pt-10" }, [
                                          createVNode(unref(_sfc_main$4), {
                                            name: "update",
                                            onClick: submitForm
                                          })
                                        ])
                                      ], 32)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(TabPanel), null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$5, {
                                      deployments: __props.deploymentLogs.data,
                                      onViewDeployment: ($event) => isRef(deployment) ? deployment.value = $event : deployment = $event
                                    }, null, _parent6, _scopeId5));
                                    if (unref(deployment)) {
                                      _push6(ssrRenderComponent(_sfc_main$6, { deployment: unref(deployment) }, null, _parent6, _scopeId5));
                                    } else {
                                      _push6(`<!---->`);
                                    }
                                  } else {
                                    return [
                                      createVNode(_sfc_main$5, {
                                        deployments: __props.deploymentLogs.data,
                                        onViewDeployment: ($event) => isRef(deployment) ? deployment.value = $event : deployment = $event
                                      }, null, 8, ["deployments", "onViewDeployment"]),
                                      unref(deployment) ? (openBlock(), createBlock(_sfc_main$6, {
                                        key: 0,
                                        deployment: unref(deployment)
                                      }, null, 8, ["deployment"])) : createCommentVNode("", true)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(unref(TabPanel), null, {
                                  default: withCtx(() => [
                                    createVNode("form", {
                                      onSubmit: withModifiers(submitForm, ["prevent"])
                                    }, [
                                      createVNode(unref(InputField), {
                                        modelValue: unref(deployInformation).name,
                                        "onUpdate:modelValue": ($event) => unref(deployInformation).name = $event,
                                        label: "Name",
                                        type: "text",
                                        placeholder: "Name"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(unref(InputField), {
                                        modelValue: unref(deployInformation).repository_url,
                                        "onUpdate:modelValue": ($event) => unref(deployInformation).repository_url = $event,
                                        label: "Repository URL",
                                        type: "text",
                                        placeholder: "Repository URL"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(unref(InputField), {
                                        modelValue: unref(deployInformation).branch,
                                        "onUpdate:modelValue": ($event) => unref(deployInformation).branch = $event,
                                        label: "Branch",
                                        type: "text",
                                        placeholder: "Branch"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(unref(InputField), {
                                        modelValue: unref(deployInformation).secret_token,
                                        "onUpdate:modelValue": ($event) => unref(deployInformation).secret_token = $event,
                                        label: "secret_token",
                                        type: "text",
                                        placeholder: "secret_token",
                                        required: "true"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "form-control pt-10" }, [
                                        createVNode("button", {
                                          onClick: genereteToken,
                                          type: "button",
                                          class: "btn btn-primary"
                                        }, " Generate Token ")
                                      ]),
                                      createVNode(unref(_sfc_main$2), {
                                        modelValue: unref(deployInformation).is_active,
                                        "onUpdate:modelValue": ($event) => unref(deployInformation).is_active = $event,
                                        label: "Is Active"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(unref(_sfc_main$3), {
                                        modelValue: unref(deployInformation).deployment_commands,
                                        "onUpdate:modelValue": ($event) => unref(deployInformation).deployment_commands = $event,
                                        label: "Deployment Commands"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode(unref(InputField), {
                                        modelValue: unref(deployInformation).deployment_path,
                                        "onUpdate:modelValue": ($event) => unref(deployInformation).deployment_path = $event,
                                        label: "deployment_path",
                                        type: "text",
                                        placeholder: "deployment_path",
                                        required: "true"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                      createVNode("div", { class: "form-control pt-10" }, [
                                        createVNode(unref(_sfc_main$4), {
                                          name: "update",
                                          onClick: submitForm
                                        })
                                      ])
                                    ], 32)
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(TabPanel), null, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$5, {
                                      deployments: __props.deploymentLogs.data,
                                      onViewDeployment: ($event) => isRef(deployment) ? deployment.value = $event : deployment = $event
                                    }, null, 8, ["deployments", "onViewDeployment"]),
                                    unref(deployment) ? (openBlock(), createBlock(_sfc_main$6, {
                                      key: 0,
                                      deployment: unref(deployment)
                                    }, null, 8, ["deployment"])) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(TabList), { class: "flex space-x-1 rounded-xl p-1 tabs" }, {
                            default: withCtx(() => [
                              createVNode(unref(Tab), null, {
                                default: withCtx(({ selected }) => [
                                  createVNode("a", {
                                    class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                  }, "Deploy Information", 2)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(Tab), null, {
                                default: withCtx(({ selected }) => [
                                  createVNode("a", {
                                    class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                  }, "Last Deployment", 2)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanels), { class: "mt-2" }, {
                            default: withCtx(() => [
                              createVNode(unref(TabPanel), null, {
                                default: withCtx(() => [
                                  createVNode("form", {
                                    onSubmit: withModifiers(submitForm, ["prevent"])
                                  }, [
                                    createVNode(unref(InputField), {
                                      modelValue: unref(deployInformation).name,
                                      "onUpdate:modelValue": ($event) => unref(deployInformation).name = $event,
                                      label: "Name",
                                      type: "text",
                                      placeholder: "Name"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(unref(InputField), {
                                      modelValue: unref(deployInformation).repository_url,
                                      "onUpdate:modelValue": ($event) => unref(deployInformation).repository_url = $event,
                                      label: "Repository URL",
                                      type: "text",
                                      placeholder: "Repository URL"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(unref(InputField), {
                                      modelValue: unref(deployInformation).branch,
                                      "onUpdate:modelValue": ($event) => unref(deployInformation).branch = $event,
                                      label: "Branch",
                                      type: "text",
                                      placeholder: "Branch"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(unref(InputField), {
                                      modelValue: unref(deployInformation).secret_token,
                                      "onUpdate:modelValue": ($event) => unref(deployInformation).secret_token = $event,
                                      label: "secret_token",
                                      type: "text",
                                      placeholder: "secret_token",
                                      required: "true"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "form-control pt-10" }, [
                                      createVNode("button", {
                                        onClick: genereteToken,
                                        type: "button",
                                        class: "btn btn-primary"
                                      }, " Generate Token ")
                                    ]),
                                    createVNode(unref(_sfc_main$2), {
                                      modelValue: unref(deployInformation).is_active,
                                      "onUpdate:modelValue": ($event) => unref(deployInformation).is_active = $event,
                                      label: "Is Active"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(unref(_sfc_main$3), {
                                      modelValue: unref(deployInformation).deployment_commands,
                                      "onUpdate:modelValue": ($event) => unref(deployInformation).deployment_commands = $event,
                                      label: "Deployment Commands"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode(unref(InputField), {
                                      modelValue: unref(deployInformation).deployment_path,
                                      "onUpdate:modelValue": ($event) => unref(deployInformation).deployment_path = $event,
                                      label: "deployment_path",
                                      type: "text",
                                      placeholder: "deployment_path",
                                      required: "true"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                    createVNode("div", { class: "form-control pt-10" }, [
                                      createVNode(unref(_sfc_main$4), {
                                        name: "update",
                                        onClick: submitForm
                                      })
                                    ])
                                  ], 32)
                                ]),
                                _: 1
                              }),
                              createVNode(unref(TabPanel), null, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5, {
                                    deployments: __props.deploymentLogs.data,
                                    onViewDeployment: ($event) => isRef(deployment) ? deployment.value = $event : deployment = $event
                                  }, null, 8, ["deployments", "onViewDeployment"]),
                                  unref(deployment) ? (openBlock(), createBlock(_sfc_main$6, {
                                    key: 0,
                                    deployment: unref(deployment)
                                  }, null, 8, ["deployment"])) : createCommentVNode("", true)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(TabGroup), null, {
                      default: withCtx(() => [
                        createVNode(unref(TabList), { class: "flex space-x-1 rounded-xl p-1 tabs" }, {
                          default: withCtx(() => [
                            createVNode(unref(Tab), null, {
                              default: withCtx(({ selected }) => [
                                createVNode("a", {
                                  class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                }, "Deploy Information", 2)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(Tab), null, {
                              default: withCtx(({ selected }) => [
                                createVNode("a", {
                                  class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                                }, "Last Deployment", 2)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(unref(TabPanels), { class: "mt-2" }, {
                          default: withCtx(() => [
                            createVNode(unref(TabPanel), null, {
                              default: withCtx(() => [
                                createVNode("form", {
                                  onSubmit: withModifiers(submitForm, ["prevent"])
                                }, [
                                  createVNode(unref(InputField), {
                                    modelValue: unref(deployInformation).name,
                                    "onUpdate:modelValue": ($event) => unref(deployInformation).name = $event,
                                    label: "Name",
                                    type: "text",
                                    placeholder: "Name"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(unref(InputField), {
                                    modelValue: unref(deployInformation).repository_url,
                                    "onUpdate:modelValue": ($event) => unref(deployInformation).repository_url = $event,
                                    label: "Repository URL",
                                    type: "text",
                                    placeholder: "Repository URL"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(unref(InputField), {
                                    modelValue: unref(deployInformation).branch,
                                    "onUpdate:modelValue": ($event) => unref(deployInformation).branch = $event,
                                    label: "Branch",
                                    type: "text",
                                    placeholder: "Branch"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(unref(InputField), {
                                    modelValue: unref(deployInformation).secret_token,
                                    "onUpdate:modelValue": ($event) => unref(deployInformation).secret_token = $event,
                                    label: "secret_token",
                                    type: "text",
                                    placeholder: "secret_token",
                                    required: "true"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "form-control pt-10" }, [
                                    createVNode("button", {
                                      onClick: genereteToken,
                                      type: "button",
                                      class: "btn btn-primary"
                                    }, " Generate Token ")
                                  ]),
                                  createVNode(unref(_sfc_main$2), {
                                    modelValue: unref(deployInformation).is_active,
                                    "onUpdate:modelValue": ($event) => unref(deployInformation).is_active = $event,
                                    label: "Is Active"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(unref(_sfc_main$3), {
                                    modelValue: unref(deployInformation).deployment_commands,
                                    "onUpdate:modelValue": ($event) => unref(deployInformation).deployment_commands = $event,
                                    label: "Deployment Commands"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode(unref(InputField), {
                                    modelValue: unref(deployInformation).deployment_path,
                                    "onUpdate:modelValue": ($event) => unref(deployInformation).deployment_path = $event,
                                    label: "deployment_path",
                                    type: "text",
                                    placeholder: "deployment_path",
                                    required: "true"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                  createVNode("div", { class: "form-control pt-10" }, [
                                    createVNode(unref(_sfc_main$4), {
                                      name: "update",
                                      onClick: submitForm
                                    })
                                  ])
                                ], 32)
                              ]),
                              _: 1
                            }),
                            createVNode(unref(TabPanel), null, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5, {
                                  deployments: __props.deploymentLogs.data,
                                  onViewDeployment: ($event) => isRef(deployment) ? deployment.value = $event : deployment = $event
                                }, null, 8, ["deployments", "onViewDeployment"]),
                                unref(deployment) ? (openBlock(), createBlock(_sfc_main$6, {
                                  key: 0,
                                  deployment: unref(deployment)
                                }, null, 8, ["deployment"])) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_n_card, {
                title: "User Profile",
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
                                class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                              }, "Deploy Information", 2)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(Tab), null, {
                            default: withCtx(({ selected }) => [
                              createVNode("a", {
                                class: ["tab tab-lg tab-bordered", selected ? "tab-active" : ""]
                              }, "Last Deployment", 2)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(TabPanels), { class: "mt-2" }, {
                        default: withCtx(() => [
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode("form", {
                                onSubmit: withModifiers(submitForm, ["prevent"])
                              }, [
                                createVNode(unref(InputField), {
                                  modelValue: unref(deployInformation).name,
                                  "onUpdate:modelValue": ($event) => unref(deployInformation).name = $event,
                                  label: "Name",
                                  type: "text",
                                  placeholder: "Name"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(unref(InputField), {
                                  modelValue: unref(deployInformation).repository_url,
                                  "onUpdate:modelValue": ($event) => unref(deployInformation).repository_url = $event,
                                  label: "Repository URL",
                                  type: "text",
                                  placeholder: "Repository URL"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(unref(InputField), {
                                  modelValue: unref(deployInformation).branch,
                                  "onUpdate:modelValue": ($event) => unref(deployInformation).branch = $event,
                                  label: "Branch",
                                  type: "text",
                                  placeholder: "Branch"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(unref(InputField), {
                                  modelValue: unref(deployInformation).secret_token,
                                  "onUpdate:modelValue": ($event) => unref(deployInformation).secret_token = $event,
                                  label: "secret_token",
                                  type: "text",
                                  placeholder: "secret_token",
                                  required: "true"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "form-control pt-10" }, [
                                  createVNode("button", {
                                    onClick: genereteToken,
                                    type: "button",
                                    class: "btn btn-primary"
                                  }, " Generate Token ")
                                ]),
                                createVNode(unref(_sfc_main$2), {
                                  modelValue: unref(deployInformation).is_active,
                                  "onUpdate:modelValue": ($event) => unref(deployInformation).is_active = $event,
                                  label: "Is Active"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(unref(_sfc_main$3), {
                                  modelValue: unref(deployInformation).deployment_commands,
                                  "onUpdate:modelValue": ($event) => unref(deployInformation).deployment_commands = $event,
                                  label: "Deployment Commands"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(unref(InputField), {
                                  modelValue: unref(deployInformation).deployment_path,
                                  "onUpdate:modelValue": ($event) => unref(deployInformation).deployment_path = $event,
                                  label: "deployment_path",
                                  type: "text",
                                  placeholder: "deployment_path",
                                  required: "true"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode("div", { class: "form-control pt-10" }, [
                                  createVNode(unref(_sfc_main$4), {
                                    name: "update",
                                    onClick: submitForm
                                  })
                                ])
                              ], 32)
                            ]),
                            _: 1
                          }),
                          createVNode(unref(TabPanel), null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5, {
                                deployments: __props.deploymentLogs.data,
                                onViewDeployment: ($event) => isRef(deployment) ? deployment.value = $event : deployment = $event
                              }, null, 8, ["deployments", "onViewDeployment"]),
                              unref(deployment) ? (openBlock(), createBlock(_sfc_main$6, {
                                key: 0,
                                deployment: unref(deployment)
                              }, null, 8, ["deployment"])) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/vendor/SkeletonAdmin/js/backend/Pages/BackEnd/Deploy/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
