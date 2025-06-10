<template>
  <Layout>
    <!-- Header -->
    <div class="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
      <div class="px-4 sm:px-6 lg:px-8 py-12">
        <div class="max-w-4xl mx-auto text-center">
          <div class="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
          </div>
          <h1 class="text-4xl font-bold mb-4">
            Extension Package Builder
          </h1>
          <p class="text-xl text-blue-100 max-w-2xl mx-auto">
            Create powerful Laravel extension packages for Skeleton Admin with our intuitive visual builder.
            No command line required!
          </p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="bg-slate-50 dark:bg-slate-900 min-h-screen">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <!-- Progress Steps -->
        <div class="mb-8">
          <div class="flex items-center justify-center space-x-4 mb-6">
            <div
              v-for="(step, index) in steps"
              :key="step.id"
              class="flex items-center"
            >
              <!-- Step Circle -->
              <div class="relative">
                <div
                  class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300"
                  :class="getStepClasses(index)"
                >
                  <svg v-if="index < currentStep" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                  <span v-else>{{ index + 1 }}</span>
                </div>
                <div class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span class="text-xs font-medium text-slate-600 dark:text-slate-400">{{ step.title }}</span>
                </div>
              </div>

              <!-- Connector Line -->
              <div
                v-if="index < steps.length - 1"
                class="w-20 h-0.5 mx-4 transition-all duration-300"
                :class="index < currentStep ? 'bg-indigo-500' : 'bg-slate-300 dark:bg-slate-600'"
              ></div>
            </div>
          </div>
        </div>

        <!-- Form Card -->
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden">

          <!-- Step 1: Basic Information -->
          <div v-show="currentStep === 0" class="p-8">
            <div class="text-center mb-8">
              <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Package Information
              </h2>
              <p class="text-slate-600 dark:text-slate-400">
                Let's start with the basic details of your extension package
              </p>
            </div>

            <div class="max-w-2xl mx-auto space-y-6">
              <!-- Package Name -->
              <div>
                <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Package Name *
                </label>
                <input
                  v-model="packageConfig.packageName"
                  type="text"
                  placeholder="e.g., blog-system, user-management"
                  class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 transition-colors"
                  :class="{ 'border-red-500': errors.packageName }"
                  @input="validatePackageName"
                />
                <p v-if="errors.packageName" class="mt-2 text-sm text-red-600">{{ errors.packageName }}</p>
                <p class="mt-2 text-sm text-slate-500">Use kebab-case (lowercase with hyphens)</p>
              </div>

              <!-- Description -->
              <div>
                <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Package Description
                </label>
                <textarea
                  v-model="packageConfig.description"
                  rows="3"
                  placeholder="A brief description of what your package does..."
                  class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 resize-none transition-colors"
                ></textarea>
              </div>

              <!-- Composer Prefix -->
              <div>
                <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Composer Prefix *
                </label>
                <input
                  v-model="packageConfig.composerPrefix"
                  type="text"
                  placeholder="e.g., skeleton, mycompany"
                  class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 transition-colors"
                  :class="{ 'border-red-500': errors.composerPrefix }"
                  @input="validateComposerPrefix"
                />
                <p v-if="errors.composerPrefix" class="mt-2 text-sm text-red-600">{{ errors.composerPrefix }}</p>
                <p class="mt-2 text-sm text-slate-500">This will be used as the vendor name in composer (prefix/package-name)</p>
              </div>

              <!-- Package Preview -->
              <div v-if="packageConfig.packageName && packageConfig.composerPrefix" class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4">
                <h4 class="text-sm font-semibold text-indigo-900 dark:text-indigo-100 mb-2">Package Preview:</h4>
                <div class="space-y-1 text-sm">
                  <p class="text-indigo-700 dark:text-indigo-300">
                    <span class="font-medium">Composer Name:</span> {{ packageConfig.composerPrefix }}/{{ packageConfig.packageName }}
                  </p>
                  <p class="text-indigo-700 dark:text-indigo-300">
                    <span class="font-medium">Directory:</span> packages/{{ packageConfig.packageName }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 2: Technical Configuration -->
          <div v-show="currentStep === 1" class="p-8">
            <div class="text-center mb-8">
              <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Technical Configuration
              </h2>
              <p class="text-slate-600 dark:text-slate-400">
                Configure the technical aspects of your package
              </p>
            </div>

            <div class="max-w-2xl mx-auto space-y-6">
              <!-- Namespace -->
              <div>
                <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  PHP Namespace *
                </label>
                <input
                  v-model="packageConfig.namespace"
                  type="text"
                  placeholder="e.g., Skeleton\\Blog\\, MyCompany\\Extensions\\"
                  class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 font-mono transition-colors"
                  :class="{ 'border-red-500': errors.namespace }"
                  @input="validateNamespace"
                />
                <p v-if="errors.namespace" class="mt-2 text-sm text-red-600">{{ errors.namespace }}</p>
                <p class="mt-2 text-sm text-slate-500">Use PascalCase with backslashes (e.g., Skeleton\Blog\)</p>
              </div>

              <!-- Controller Name -->
              <div>
                <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Main Controller Name *
                </label>
                <input
                  v-model="packageConfig.controller"
                  type="text"
                  placeholder="e.g., Blog, UserManagement"
                  class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 transition-colors"
                  :class="{ 'border-red-500': errors.controller }"
                  @input="validateController"
                />
                <p v-if="errors.controller" class="mt-2 text-sm text-red-600">{{ errors.controller }}</p>
                <p class="mt-2 text-sm text-slate-500">Use PascalCase. 'Controller' will be appended automatically</p>
              </div>

              <!-- Package Features -->
              <div>
                <label class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                  Package Features
                </label>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label class="flex items-center space-x-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors">
                    <input
                      v-model="packageConfig.features.backendRoutes"
                      type="checkbox"
                      class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div>
                      <div class="font-medium text-slate-900 dark:text-slate-100">Backend Routes</div>
                      <div class="text-sm text-slate-500">Admin panel integration</div>
                    </div>
                  </label>

                  <label class="flex items-center space-x-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors">
                    <input
                      v-model="packageConfig.features.frontendRoutes"
                      type="checkbox"
                      class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div>
                      <div class="font-medium text-slate-900 dark:text-slate-100">Frontend Routes</div>
                      <div class="text-sm text-slate-500">Public-facing pages</div>
                    </div>
                  </label>

                  <label class="flex items-center space-x-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors">
                    <input
                      v-model="packageConfig.features.apiRoutes"
                      type="checkbox"
                      class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div>
                      <div class="font-medium text-slate-900 dark:text-slate-100">API Routes</div>
                      <div class="text-sm text-slate-500">REST API endpoints</div>
                    </div>
                  </label>

                  <label class="flex items-center space-x-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors">
                    <input
                      v-model="packageConfig.features.database"
                      type="checkbox"
                      class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div>
                      <div class="font-medium text-slate-900 dark:text-slate-100">Database</div>
                      <div class="text-sm text-slate-500">Models & migrations</div>
                    </div>
                  </label>

                  <label class="flex items-center space-x-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors">
                    <input
                      v-model="packageConfig.features.commands"
                      type="checkbox"
                      class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div>
                      <div class="font-medium text-slate-900 dark:text-slate-100">Artisan Commands</div>
                      <div class="text-sm text-slate-500">Custom CLI commands</div>
                    </div>
                  </label>

                  <label class="flex items-center space-x-3 p-4 border border-slate-200 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition-colors">
                    <input
                      v-model="packageConfig.features.vueComponents"
                      type="checkbox"
                      class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <div>
                      <div class="font-medium text-slate-900 dark:text-slate-100">Vue Components</div>
                      <div class="text-sm text-slate-500">Frontend UI components</div>
                    </div>
                  </label>
                </div>
              </div>

              <!-- Advanced Options -->
              <div class="border border-slate-200 dark:border-slate-600 rounded-xl p-6">
                <h4 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Advanced Options</h4>

                <div class="space-y-4">
                  <label class="flex items-center justify-between">
                    <div>
                      <div class="font-medium text-slate-900 dark:text-slate-100">Force Overwrite</div>
                      <div class="text-sm text-slate-500">Overwrite existing package if it exists</div>
                    </div>
                    <input
                      v-model="packageConfig.advanced.forceOverwrite"
                      type="checkbox"
                      class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </label>

                  <label class="flex items-center justify-between">
                    <div>
                      <div class="font-medium text-slate-900 dark:text-slate-100">Auto Composer Update</div>
                      <div class="text-sm text-slate-500">Automatically run composer update after creation</div>
                    </div>
                    <input
                      v-model="packageConfig.advanced.autoComposerUpdate"
                      type="checkbox"
                      class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </label>

                  <label class="flex items-center justify-between">
                    <div>
                      <div class="font-medium text-slate-900 dark:text-slate-100">Auto Install Package</div>
                      <div class="text-sm text-slate-500">Run package install command after creation</div>
                    </div>
                    <input
                      v-model="packageConfig.advanced.autoInstall"
                      type="checkbox"
                      class="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- Step 3: Review & Generate -->
          <div v-show="currentStep === 2" class="p-8">
            <div class="text-center mb-8">
              <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                Review & Generate
              </h2>
              <p class="text-slate-600 dark:text-slate-400">
                Review your package configuration and generate the extension
              </p>
            </div>

            <div class="max-w-4xl mx-auto">
              <!-- Configuration Summary -->
              <div class="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 mb-8">
                <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Package Summary</h3>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Basic Info -->
                  <div>
                    <h4 class="font-medium text-slate-700 dark:text-slate-300 mb-3">Basic Information</h4>
                    <dl class="space-y-2 text-sm">
                      <div class="flex justify-between">
                        <dt class="text-slate-600 dark:text-slate-400">Package Name:</dt>
                        <dd class="font-mono text-slate-900 dark:text-slate-100">{{ packageConfig.packageName }}</dd>
                      </div>
                      <div class="flex justify-between">
                        <dt class="text-slate-600 dark:text-slate-400">Composer Name:</dt>
                        <dd class="font-mono text-slate-900 dark:text-slate-100">{{ packageConfig.composerPrefix }}/{{ packageConfig.packageName }}</dd>
                      </div>
                      <div class="flex justify-between">
                        <dt class="text-slate-600 dark:text-slate-400">Namespace:</dt>
                        <dd class="font-mono text-slate-900 dark:text-slate-100">{{ packageConfig.namespace }}</dd>
                      </div>
                      <div class="flex justify-between">
                        <dt class="text-slate-600 dark:text-slate-400">Controller:</dt>
                        <dd class="font-mono text-slate-900 dark:text-slate-100">{{ packageConfig.controller }}Controller</dd>
                      </div>
                    </dl>
                  </div>

                  <!-- Features -->
                  <div>
                    <h4 class="font-medium text-slate-700 dark:text-slate-300 mb-3">Features</h4>
                    <div class="space-y-2">
                      <div
                        v-for="(enabled, feature) in packageConfig.features"
                        :key="feature"
                        class="flex items-center space-x-2 text-sm"
                      >
                        <div class="w-4 h-4 rounded-full flex items-center justify-center"
                             :class="enabled ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-400'">
                          <svg v-if="enabled" class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                          </svg>
                          <span v-else class="text-xs">×</span>
                        </div>
                        <span class="capitalize" :class="enabled ? 'text-slate-900 dark:text-slate-100' : 'text-slate-500'">
                          {{ feature.replace(/([A-Z])/g, ' $1').trim() }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Description -->
                <div v-if="packageConfig.description" class="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <h4 class="font-medium text-slate-700 dark:text-slate-300 mb-2">Description</h4>
                  <p class="text-sm text-slate-600 dark:text-slate-400">{{ packageConfig.description }}</p>
                </div>
              </div>

              <!-- File Structure Preview -->
              <div class="bg-slate-900 rounded-xl p-6 mb-8">
                <h3 class="text-lg font-semibold text-white mb-4">Generated File Structure</h3>
                <div class="font-mono text-sm text-green-400 space-y-1">
                  <div>📁 packages/{{ packageConfig.packageName }}/</div>
                  <div class="ml-4">📄 composer.json</div>
                  <div class="ml-4">📄 README.md</div>
                  <div class="ml-4">📁 src/</div>
                  <div class="ml-8">📄 {{ packageConfig.controller }}ServiceProvider.php</div>
                  <div class="ml-8">📁 Controllers/</div>
                  <div class="ml-12" v-if="packageConfig.features.backendRoutes">📄 Backend{{ packageConfig.controller }}Controller.php</div>
                  <div class="ml-12" v-if="packageConfig.features.frontendRoutes">📄 Frontend{{ packageConfig.controller }}Controller.php</div>
                  <div class="ml-8">📁 Routes/</div>
                  <div class="ml-12" v-if="packageConfig.features.backendRoutes">📁 Backend/</div>
                  <div class="ml-12" v-if="packageConfig.features.frontendRoutes">📁 Frontend/</div>
                  <div class="ml-8" v-if="packageConfig.features.database">📁 Models/</div>
                  <div class="ml-8" v-if="packageConfig.features.database">📁 Database/Migrations/</div>
                  <div class="ml-8" v-if="packageConfig.features.commands">📁 Commands/</div>
                  <div class="ml-8" v-if="packageConfig.features.vueComponents">📁 Resources/views/</div>
                  <div class="ml-8">📁 Config/</div>
                </div>
              </div>

              <!-- Generation Status -->
              <div v-if="isGenerating" class="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <svg class="w-8 h-8 animate-spin text-indigo-600" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-lg font-semibold text-indigo-900 dark:text-indigo-100">
                      Generating Package...
                    </h4>
                    <p class="text-indigo-700 dark:text-indigo-300">{{ currentGenerationStep }}</p>
                    <div class="mt-2 bg-white dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div
                        class="h-full bg-indigo-600 transition-all duration-300 ease-out"
                        :style="{ width: generationProgress + '%' }"
                      ></div>
                    </div>
                    <p class="text-sm text-indigo-600 dark:text-indigo-400 mt-1">
                      {{ generationProgress }}% complete
                    </p>
                  </div>
                </div>
              </div>

              <!-- Success Message -->
              <div v-if="generationComplete" class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-6">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <div class="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h4 class="text-lg font-semibold text-green-900 dark:text-green-100">
                      Package Generated Successfully!
                    </h4>
                    <p class="text-green-700 dark:text-green-300 mb-4">
                      Your extension package has been created and is ready to use.
                    </p>

                    <div class="space-y-2 text-sm">
                      <div class="font-medium text-green-800 dark:text-green-200">Next Steps:</div>
                      <div class="space-y-1 text-green-700 dark:text-green-300">
                        <div>1. Run: <code class="bg-green-100 dark:bg-green-900/50 px-2 py-1 rounded font-mono">npm install && npm run dev</code></div>
                        <div>2. Run: <code class="bg-green-100 dark:bg-green-900/50 px-2 py-1 rounded font-mono">php artisan install:{{ packageConfig.packageName }}</code></div>
                        <div>3. Visit your package routes to see it in action!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Navigation -->
          <div class="px-8 py-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
            <div class="flex items-center justify-between">
              <button
                v-if="currentStep > 0"
                @click="previousStep"
                class="flex items-center space-x-2 px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
                <span>Previous</span>
              </button>
              <div v-else></div>

              <div class="flex items-center space-x-4">
                <button
                  v-if="currentStep < steps.length - 1"
                  @click="nextStep"
                  :disabled="!canProceedToNextStep"
                  class="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <span>Next</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </button>

                <button
                  v-if="currentStep === steps.length - 1 && !isGenerating && !generationComplete"
                  @click="generatePackage"
                  :disabled="!isConfigurationValid"
                  class="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl hover:from-green-700 hover:to-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                  <span>Generate Package</span>
                </button>

                <button
                  v-if="generationComplete"
                  @click="resetBuilder"
                  class="flex items-center space-x-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                  </svg>
                  <span>Create Another Package</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Feature Cards -->
        <div v-if="currentStep === 0" class="mt-12">
          <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100 text-center mb-8">
            Why Use the Package Builder?
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Lightning Fast
              </h4>
              <p class="text-slate-600 dark:text-slate-400">
                Generate complete extension packages in seconds instead of hours of manual setup.
              </p>
            </div>

            <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Best Practices
              </h4>
              <p class="text-slate-600 dark:text-slate-400">
                Generated packages follow Laravel and Skeleton Admin conventions and best practices.
              </p>
            </div>

            <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
                <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Full Structure
              </h4>
              <p class="text-slate-600 dark:text-slate-400">
                Complete package structure with controllers, routes, views, commands, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import Layout from '../../../Layout/App.vue'
import axios from 'axios'

// State
const currentStep = ref(0)
const isGenerating = ref(false)
const generationComplete = ref(false)
const generationProgress = ref(0)
const currentGenerationStep = ref('')

// Steps configuration
const steps = [
  { id: 'basic', title: 'Basic Info' },
  { id: 'technical', title: 'Configuration' },
  { id: 'review', title: 'Review & Generate' }
]

// Package configuration
const packageConfig = ref({
  packageName: '',
  description: '',
  composerPrefix: 'skeleton',
  namespace: 'Skeleton\\',
  controller: '',
  features: {
    backendRoutes: true,
    frontendRoutes: true,
    apiRoutes: false,
    database: false,
    commands: true,
    vueComponents: true
  },
  advanced: {
    forceOverwrite: false,
    autoComposerUpdate: true,
    autoInstall: false
  }
})

// Validation errors
const errors = ref({})

// Computed properties
const canProceedToNextStep = computed(() => {
  switch (currentStep.value) {
    case 0:
      return packageConfig.value.packageName &&
             packageConfig.value.composerPrefix &&
             !errors.value.packageName &&
             !errors.value.composerPrefix
    case 1:
      return packageConfig.value.namespace &&
             packageConfig.value.controller &&
             !errors.value.namespace &&
             !errors.value.controller
    default:
      return true
  }
})

const isConfigurationValid = computed(() => {
  return packageConfig.value.packageName &&
         packageConfig.value.composerPrefix &&
         packageConfig.value.namespace &&
         packageConfig.value.controller &&
         Object.keys(errors.value).length === 0
})

// Step styling
const getStepClasses = (index) => {
  if (index < currentStep.value) {
    return 'bg-indigo-600 text-white'
  } else if (index === currentStep.value) {
    return 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400 ring-2 ring-indigo-600'
  } else {
    return 'bg-slate-200 text-slate-500 dark:bg-slate-700 dark:text-slate-400'
  }
}

// Navigation methods
const nextStep = () => {
  if (canProceedToNextStep.value && currentStep.value < steps.length - 1) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 0) {
    currentStep.value--
  }
}

// Validation methods
const validatePackageName = () => {
  const name = packageConfig.value.packageName
  errors.value.packageName = ''

  if (!name) {
    errors.value.packageName = 'Package name is required'
  } else if (!/^[a-z][a-z0-9-]*[a-z0-9]$/.test(name)) {
    errors.value.packageName = 'Package name must be in kebab-case (lowercase, hyphens allowed)'
  } else {
    delete errors.value.packageName
  }
}

const validateComposerPrefix = () => {
  const prefix = packageConfig.value.composerPrefix
  errors.value.composerPrefix = ''

  if (!prefix) {
    errors.value.composerPrefix = 'Composer prefix is required'
  } else if (!/^[a-z][a-z0-9-]*[a-z0-9]$/.test(prefix)) {
    errors.value.composerPrefix = 'Composer prefix must be lowercase with optional hyphens'
  } else {
    delete errors.value.composerPrefix
  }
}

const validateNamespace = () => {
  const namespace = packageConfig.value.namespace
  errors.value.namespace = ''

  if (!namespace) {
    errors.value.namespace = 'Namespace is required'
  } else if (!/^[A-Z][A-Za-z0-9\\]+\\?$/.test(namespace)) {
    errors.value.namespace = 'Namespace must be in PascalCase with backslashes'
  } else {
    delete errors.value.namespace
  }
}

const validateController = () => {
  const controller = packageConfig.value.controller
  errors.value.controller = ''

  if (!controller) {
    errors.value.controller = 'Controller name is required'
  } else if (!/^[A-Z][A-Za-z0-9]*$/.test(controller)) {
    errors.value.controller = 'Controller name must be in PascalCase'
  } else {
    delete errors.value.controller
  }
}

// Auto-fill namespace based on package name
watch(() => packageConfig.value.packageName, (newName) => {
  if (newName && !packageConfig.value.namespace.includes(newName)) {
    const pascalName = newName.split('-').map(part =>
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join('')

    packageConfig.value.namespace = `Skeleton\\${pascalName}\\`
  }
})

// Auto-fill controller based on package name
watch(() => packageConfig.value.packageName, (newName) => {
  if (newName && !packageConfig.value.controller) {
    const pascalName = newName.split('-').map(part =>
      part.charAt(0).toUpperCase() + part.slice(1)
    ).join('')

    packageConfig.value.controller = pascalName
  }
})

// Package generation
const generatePackage = async () => {
  if (!isConfigurationValid.value) return

  isGenerating.value = true
  generationProgress.value = 0

  const generationSteps = [
    'Validating configuration...',
    'Creating directory structure...',
    'Generating composer.json...',
    'Creating service provider...',
    'Generating controllers...',
    'Setting up routes...',
    'Creating views and components...',
    'Generating commands...',
    'Updating project composer.json...',
    'Running composer update...',
    'Package generation complete!'
  ]

  try {
    // Simulate progress through steps
    for (let i = 0; i < generationSteps.length; i++) {
      currentGenerationStep.value = generationSteps[i]
      generationProgress.value = Math.round(((i + 1) / generationSteps.length) * 100)

      if (i === Math.floor(generationSteps.length / 2)) {
        // Make the actual API call in the middle of the process
        await callPackageGenerationAPI()
      }

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 500 + Math.random() * 1000))
    }

    generationComplete.value = true
    showNotification('Package generated successfully!', 'success')

  } catch (error) {
    console.error('Package generation failed:', error)
    showNotification('Package generation failed: ' + (error.response?.data?.message || error.message), 'error')
  } finally {
    isGenerating.value = false
  }
}

// API call to generate package
const callPackageGenerationAPI = async () => {
  const payload = {
    name: packageConfig.value.packageName,
    namespace: packageConfig.value.namespace,
    prefix: packageConfig.value.composerPrefix,
    description: packageConfig.value.description || 'A Laravel extension package for Skeleton Admin',
    controller: packageConfig.value.controller,
    force: packageConfig.value.advanced.forceOverwrite,
    features: packageConfig.value.features,
    autoComposerUpdate: packageConfig.value.advanced.autoComposerUpdate,
    autoInstall: packageConfig.value.advanced.autoInstall
  }

  const response = await axios.post(route('admin.api.package.generate'), payload)
  return response.data
}

// Reset builder
const resetBuilder = () => {
  currentStep.value = 0
  isGenerating.value = false
  generationComplete.value = false
  generationProgress.value = 0
  currentGenerationStep.value = ''

  // Reset form
  packageConfig.value = {
    packageName: '',
    description: '',
    composerPrefix: 'skeleton',
    namespace: 'Skeleton\\',
    controller: '',
    features: {
      backendRoutes: true,
      frontendRoutes: true,
      apiRoutes: false,
      database: false,
      commands: true,
      vueComponents: true
    },
    advanced: {
      forceOverwrite: false,
      autoComposerUpdate: true,
      autoInstall: false
    }
  }

  errors.value = {}
}

// Notification system
const showNotification = (message, type = 'info') => {
  const notification = document.createElement('div')
  notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transition-all duration-300 ${
    type === 'success' ? 'bg-green-500 text-white' :
    type === 'error' ? 'bg-red-500 text-white' :
    'bg-blue-500 text-white'
  }`
  notification.textContent = message

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.opacity = '0'
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  }, 5000)
}
</script>
