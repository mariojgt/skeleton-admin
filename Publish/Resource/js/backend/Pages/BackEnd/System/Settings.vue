<template>
  <Layout>
    <!-- Modern Page Header -->
    <div class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
      <div class="px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex items-center justify-between">
          <!-- Header Content -->
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <h1 class="text-2xl font-bold text-slate-900 dark:text-slate-100">
                System Settings
              </h1>
              <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Manage your Laravel application, view statistics, and perform system operations
              </p>
            </div>
          </div>

          <!-- System Status -->
          <div class="flex items-center space-x-4">
            <div class="text-right">
              <div class="text-sm font-medium text-slate-900 dark:text-slate-100">System Status</div>
              <div class="flex items-center space-x-2 mt-1">
                <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-xs text-slate-600 dark:text-slate-400">Online</span>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-medium text-slate-900 dark:text-slate-100">Laravel {{ laravelVersion }}</div>
              <div class="text-xs text-slate-600 dark:text-slate-400 mt-1">PHP {{ phpVersion }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab Navigation -->
    <div class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
      <div class="px-4 sm:px-6 lg:px-8">
        <nav class="flex space-x-8" aria-label="Tabs">
          <button
            v-for="(tab, index) in tabs"
            :key="tab.id"
            @click="activeTab = index"
            class="relative py-4 px-1 text-sm font-medium transition-all duration-200"
            :class="activeTab === index
              ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'"
          >
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="tab.id === 'overview'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                <path v-if="tab.id === 'commands'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                <path v-if="tab.id === 'packages'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
                <path v-if="tab.id === 'config'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"/>
                <path v-if="tab.id === 'logs'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.441-1.036-5.877-2.709M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>{{ tab.name }}</span>
              <span
                v-if="tab.badge"
                class="ml-2 px-2 py-0.5 text-xs font-medium rounded-full"
                :class="activeTab === index
                  ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
                  : 'bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400'"
              >
                {{ tab.badge }}
              </span>
            </div>
          </button>
        </nav>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 bg-slate-50 dark:bg-slate-800/50">
      <div class="px-4 sm:px-6 lg:px-8 py-8">
        <div class="max-w-7xl mx-auto">

          <!-- Overview Tab -->
          <div v-show="activeTab === 0" class="space-y-8">
            <!-- System Stats Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div class="flex items-center">
                  <div class="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
                    <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-slate-600 dark:text-slate-400">CPU Usage</p>
                    <p class="text-2xl font-bold text-slate-900 dark:text-slate-100">{{ systemStats.cpu }}%</p>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div class="flex items-center">
                  <div class="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                    <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-slate-600 dark:text-slate-400">Memory Usage</p>
                    <p class="text-2xl font-bold text-slate-900 dark:text-slate-100">{{ systemStats.memory }}%</p>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div class="flex items-center">
                  <div class="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                    <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"/>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-slate-600 dark:text-slate-400">Disk Usage</p>
                    <p class="text-2xl font-bold text-slate-900 dark:text-slate-100">{{ systemStats.disk }}%</p>
                  </div>
                </div>
              </div>

              <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <div class="flex items-center">
                  <div class="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl">
                    <svg class="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div class="ml-4">
                    <p class="text-sm font-medium text-slate-600 dark:text-slate-400">Uptime</p>
                    <p class="text-2xl font-bold text-slate-900 dark:text-slate-100">{{ systemStats.uptime }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Application Info -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <!-- Environment Info -->
              <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                  <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Environment Information</h3>
                </div>
                <div class="p-6 space-y-4">
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-slate-600 dark:text-slate-400">Environment</span>
                    <span class="px-3 py-1 rounded-full text-xs font-medium"
                          :class="appInfo.environment === 'production' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'">
                      {{ appInfo.environment }}
                    </span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-slate-600 dark:text-slate-400">Debug Mode</span>
                    <span class="px-3 py-1 rounded-full text-xs font-medium"
                          :class="appInfo.debug ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'">
                      {{ appInfo.debug ? 'Enabled' : 'Disabled' }}
                    </span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-slate-600 dark:text-slate-400">Cache Driver</span>
                    <span class="text-sm text-slate-900 dark:text-slate-100">{{ appInfo.cache_driver }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-slate-600 dark:text-slate-400">Session Driver</span>
                    <span class="text-sm text-slate-900 dark:text-slate-100">{{ appInfo.session_driver }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-slate-600 dark:text-slate-400">Queue Driver</span>
                    <span class="text-sm text-slate-900 dark:text-slate-100">{{ appInfo.queue_driver }}</span>
                  </div>
                </div>
              </div>

              <!-- Database Info -->
              <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                  <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Database Information</h3>
                </div>
                <div class="p-6 space-y-4">
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-slate-600 dark:text-slate-400">Database</span>
                    <span class="text-sm text-slate-900 dark:text-slate-100">{{ dbInfo.driver }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-slate-600 dark:text-slate-400">Version</span>
                    <span class="text-sm text-slate-900 dark:text-slate-100">{{ dbInfo.version }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-slate-600 dark:text-slate-400">Size</span>
                    <span class="text-sm text-slate-900 dark:text-slate-100">{{ dbInfo.size }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-slate-600 dark:text-slate-400">Tables</span>
                    <span class="text-sm text-slate-900 dark:text-slate-100">{{ dbInfo.tables }}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-sm font-medium text-slate-600 dark:text-slate-400">Connection Status</span>
                    <span class="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                      Connected
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Commands Tab -->
          <div v-show="activeTab === 1" class="space-y-8">
            <!-- Quick Actions -->
            <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Quick Actions</h3>
                <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Common Laravel commands for system maintenance</p>
              </div>
              <div class="p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <button
                    v-for="command in quickCommands"
                    :key="command.name"
                    @click="runCommand(command)"
                    :disabled="isRunningCommand"
                    class="p-4 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 text-left disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div class="flex items-center space-x-3">
                      <div class="p-2 rounded-lg" :class="command.color">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                      </div>
                      <div class="flex-1">
                        <h4 class="text-sm font-medium text-slate-900 dark:text-slate-100">{{ command.title }}</h4>
                        <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">{{ command.description }}</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <!-- Custom Command -->
            <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Custom Command</h3>
                <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Run custom Artisan commands</p>
              </div>
              <div class="p-6">
                <div class="flex space-x-4">
                  <div class="flex-1">
                    <input
                      v-model="customCommand"
                      type="text"
                      placeholder="php artisan command:name"
                      class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500 font-mono"
                      @keydown.enter="runCustomCommand"
                    />
                  </div>
                  <button
                    @click="runCustomCommand"
                    :disabled="!customCommand || isRunningCommand"
                    class="px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    <svg v-if="isRunningCommand" class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                    </svg>
                    <span v-else>Run</span>
                  </button>
                </div>
              </div>
            </div>

            <!-- Command Output -->
            <div v-if="commandOutput" class="bg-slate-900 rounded-xl shadow-sm border border-slate-700 overflow-hidden">
              <div class="px-6 py-4 border-b border-slate-700 bg-slate-800">
                <div class="flex items-center justify-between">
                  <h3 class="text-lg font-semibold text-white">Command Output</h3>
                  <button
                    @click="clearOutput"
                    class="text-slate-400 hover:text-white transition-colors duration-200"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div class="p-6">
                <pre class="text-green-400 font-mono text-sm whitespace-pre-wrap overflow-x-auto">{{ commandOutput }}</pre>
              </div>
            </div>
          </div>

          <!-- Packages Tab -->
          <div v-show="activeTab === 2" class="space-y-8">
            <!-- Package Search -->
            <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Installed Packages</h3>
              </div>
              <div class="p-6">
                <div class="mb-6">
                  <input
                    v-model="packageSearch"
                    type="text"
                    placeholder="Search packages..."
                    class="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-500"
                  />
                </div>

                <div class="space-y-4 max-h-96 overflow-y-auto">
                  <div
                    v-for="pkg in filteredPackages"
                    :key="pkg.name"
                    class="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    <div class="flex-1">
                      <h4 class="text-sm font-medium text-slate-900 dark:text-slate-100">{{ pkg.name }}</h4>
                      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">{{ pkg.description }}</p>
                      <div class="flex items-center space-x-4 mt-2">
                        <span class="text-xs text-slate-500 dark:text-slate-400">Version: {{ pkg.version }}</span>
                        <span class="text-xs text-slate-500 dark:text-slate-400">License: {{ pkg.license }}</span>
                      </div>
                    </div>
                    <div class="flex items-center space-x-2">
                      <span
                        class="px-3 py-1 rounded-full text-xs font-medium"
                        :class="pkg.outdated ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400' : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'"
                      >
                        {{ pkg.outdated ? 'Update Available' : 'Up to Date' }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Configuration Tab -->
          <div v-show="activeTab === 3" class="space-y-8">

            <!-- Configuration Tabs -->
            <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Configuration Management</h3>
                <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Manage environment variables and configuration files</p>
              </div>

              <!-- Sub Navigation -->
              <div class="border-b border-slate-200 dark:border-slate-700">
                <nav class="flex space-x-8 px-6" aria-label="Config Tabs">
                  <button
                    v-for="(configTab, index) in configTabs"
                    :key="configTab.id"
                    @click="activeConfigTab = index"
                    class="relative py-4 px-1 text-sm font-medium transition-all duration-200"
                    :class="activeConfigTab === index
                      ? 'text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'"
                  >
                    <div class="flex items-center space-x-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="configTab.id === 'env'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.441-1.036-5.877-2.709M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        <path v-if="configTab.id === 'files'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.441-1.036-5.877-2.709M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        <path v-if="configTab.id === 'quick'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                      <span>{{ configTab.name }}</span>
                    </div>
                  </button>
                </nav>
              </div>

              <!-- Environment Variables -->
              <div v-show="activeConfigTab === 0" class="p-6">
                <div class="space-y-6">
                  <!-- Search and Actions -->
                  <div class="flex items-center justify-between">
                    <div class="flex-1 max-w-md">
                      <input
                        v-model="envSearch"
                        type="text"
                        placeholder="Search environment variables..."
                        class="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                      />
                    </div>
                    <div class="flex items-center space-x-3">
                      <button
                        @click="refreshEnvVariables"
                        class="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200"
                      >
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                        </svg>
                      </button>
                      <button
                        @click="openAddEnvModal"
                        class="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200"
                      >
                        Add Variable
                      </button>
                    </div>
                  </div>

                  <!-- Environment Variables List -->
                  <div class="space-y-3 max-h-96 overflow-y-auto">
                    <div
                      v-for="(envVar, key) in filteredEnvVariables"
                      :key="key"
                      class="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200"
                    >
                      <div class="flex-1 min-w-0">
                        <div class="flex items-center space-x-3">
                          <span class="text-sm font-medium text-slate-900 dark:text-slate-100 font-mono">{{ key }}</span>
                          <span
                            class="px-2 py-1 rounded text-xs"
                            :class="getEnvTypeColor(envVar.type)"
                          >
                            {{ envVar.type }}
                          </span>
                        </div>
                        <div class="mt-1 flex items-center space-x-2">
                          <span
                            v-if="!envVar.isEditing"
                            class="text-sm text-slate-600 dark:text-slate-400 font-mono truncate"
                            :class="envVar.isSensitive ? 'blur-sm hover:blur-none transition-all duration-200' : ''"
                          >
                            {{ envVar.isSensitive && !envVar.showValue ? '••••••••' : (envVar.value || 'null') }}
                          </span>
                          <input
                            v-else
                            v-model="envVar.editValue"
                            :type="envVar.isSensitive && !envVar.showValue ? 'password' : 'text'"
                            class="text-sm bg-slate-100 dark:bg-slate-600 border border-slate-300 dark:border-slate-500 rounded px-2 py-1 font-mono flex-1"
                            @keydown.enter="saveEnvVariable(key)"
                            @keydown.escape="cancelEditEnvVariable(key)"
                          />
                        </div>
                        <p v-if="envVar.description" class="text-xs text-slate-500 dark:text-slate-400 mt-1">
                          {{ envVar.description }}
                        </p>
                      </div>
                      <div class="flex items-center space-x-2">
                        <button
                          v-if="envVar.isSensitive && !envVar.isEditing"
                          @click="toggleEnvVisibility(key)"
                          class="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                          </svg>
                        </button>
                        <button
                          v-if="!envVar.isEditing"
                          @click="editEnvVariable(key)"
                          class="p-1 text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                        >
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                          </svg>
                        </button>
                        <template v-else>
                          <button
                            @click="saveEnvVariable(key)"
                            class="p-1 text-green-600 hover:text-green-700"
                          >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                          </button>
                          <button
                            @click="cancelEditEnvVariable(key)"
                            class="p-1 text-red-600 hover:text-red-700"
                          >
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                          </button>
                        </template>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Config Files -->
              <div v-show="activeConfigTab === 1" class="p-6">
                <div class="space-y-6">
                  <!-- Config File Selector -->
                  <div class="flex items-center justify-between">
                    <select
                      v-model="selectedConfigFile"
                      @change="loadConfigFile"
                      class="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                    >
                      <option value="">Select config file</option>
                      <option v-for="file in configFiles" :key="file" :value="file">{{ file }}.php</option>
                    </select>
                    <button
                      @click="refreshConfigFiles"
                      class="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                      </svg>
                    </button>
                  </div>

                  <!-- Config Content -->
                  <div v-if="selectedConfigContent" class="space-y-4">
                    <div class="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                      <h4 class="text-sm font-medium text-slate-900 dark:text-slate-100 mb-3">
                        Configuration: {{ selectedConfigFile }}
                      </h4>
                      <div class="space-y-3 max-h-96 overflow-y-auto">
                        <div
                          v-for="(value, key) in flattenedConfig"
                          :key="key"
                          class="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-600"
                        >
                          <div class="flex-1 min-w-0">
                            <span class="text-sm font-medium text-slate-900 dark:text-slate-100 font-mono">{{ key }}</span>
                            <div class="text-sm text-slate-600 dark:text-slate-400 font-mono mt-1">
                              <span class="text-xs text-slate-500 mr-2">[{{ typeof value }}]</span>
                              {{ formatConfigValue(value) }}
                            </div>
                          </div>
                          <span
                            class="px-2 py-1 rounded text-xs"
                            :class="getConfigValueTypeColor(typeof value)"
                          >
                            {{ typeof value }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Quick Settings -->
              <div v-show="activeConfigTab === 2" class="p-6">
                <div class="space-y-6">
                  <!-- Maintenance Mode -->
                  <div class="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-600 rounded-lg">
                    <div>
                      <h4 class="text-sm font-medium text-slate-900 dark:text-slate-100">Maintenance Mode</h4>
                      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Put the application into maintenance mode</p>
                    </div>
                    <button
                      @click="toggleMaintenanceMode"
                      :disabled="isTogglingMaintenance"
                      class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      :class="isMaintenanceMode ? 'bg-red-500' : 'bg-slate-200 dark:bg-slate-600'"
                    >
                      <span
                        class="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-200"
                        :class="isMaintenanceMode ? 'translate-x-6' : 'translate-x-1'"
                      ></span>
                    </button>
                  </div>

                  <!-- Debug Mode -->
                  <div class="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-600 rounded-lg">
                    <div>
                      <h4 class="text-sm font-medium text-slate-900 dark:text-slate-100">Debug Mode</h4>
                      <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Enable or disable debug mode</p>
                    </div>
                    <button
                      @click="toggleDebugMode"
                      :disabled="isTogglingDebug"
                      class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      :class="isDebugMode ? 'bg-yellow-500' : 'bg-slate-200 dark:bg-slate-600'"
                    >
                      <span
                        class="inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform duration-200"
                        :class="isDebugMode ? 'translate-x-6' : 'translate-x-1'"
                      ></span>
                    </button>
                  </div>

                  <!-- Cache Settings -->
                  <div class="space-y-4">
                    <h4 class="text-sm font-medium text-slate-900 dark:text-slate-100">Cache Settings</h4>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <button
                        @click="runCommand({name: 'cache:clear', title: 'Clear Cache'})"
                        class="p-3 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 text-center"
                      >
                        <div class="text-sm font-medium text-slate-900 dark:text-slate-100">Clear Application Cache</div>
                      </button>
                      <button
                        @click="runCommand({name: 'config:cache', title: 'Cache Config'})"
                        class="p-3 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 text-center"
                      >
                        <div class="text-sm font-medium text-slate-900 dark:text-slate-100">Cache Configuration</div>
                      </button>
                      <button
                        @click="runCommand({name: 'route:cache', title: 'Cache Routes'})"
                        class="p-3 border border-slate-200 dark:border-slate-600 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 text-center"
                      >
                        <div class="text-sm font-medium text-slate-900 dark:text-slate-100">Cache Routes</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Logs Tab -->
          <div v-show="activeTab === 4" class="space-y-8">
            <!-- Log Viewer -->
            <div class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
              <div class="px-6 py-4 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                <div class="flex items-center justify-between">
                  <div>
                    <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Application Logs</h3>
                    <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">View and manage application logs</p>
                  </div>
                  <div class="flex items-center space-x-3">
                    <select
                      v-model="selectedLogFile"
                      @change="loadLogFile"
                      class="px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg text-sm bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                    >
                      <option value="">Select log file</option>
                      <option v-for="file in logFiles" :key="file" :value="file">{{ file }}</option>
                    </select>
                    <button
                      @click="refreshLogs"
                      class="px-3 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-200"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="p-6">
                <div v-if="logContent" class="bg-slate-900 rounded-lg p-4 max-h-96 overflow-auto">
                  <pre class="text-green-400 font-mono text-sm whitespace-pre-wrap">{{ logContent }}</pre>
                </div>
                <div v-else class="text-center py-12 text-slate-500 dark:text-slate-400">
                  <svg class="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.441-1.036-5.877-2.709M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <p>Select a log file to view its contents</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Command Running Overlay -->
    <div v-if="isRunningCommand" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 max-w-md w-full mx-4">
        <div class="flex items-center space-x-3">
          <svg class="w-6 h-6 animate-spin text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
          </svg>
          <div>
            <p class="text-sm font-medium text-slate-900 dark:text-slate-100">Running Command</p>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">{{ currentCommand }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Environment Variable Modal -->
    <div v-if="isAddingEnvVariable" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-xl border border-slate-200 dark:border-slate-700 max-w-md w-full mx-4">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-semibold text-slate-900 dark:text-slate-100">Add Environment Variable</h3>
          <button
            @click="isAddingEnvVariable = false"
            class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Variable Name</label>
            <input
              v-model="newEnvVariable.key"
              type="text"
              placeholder="e.g., NEW_VARIABLE"
              class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 font-mono"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Value</label>
            <input
              v-model="newEnvVariable.value"
              type="text"
              placeholder="Variable value"
              class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 font-mono"
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Type</label>
            <select
              v-model="newEnvVariable.type"
              class="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
            >
              <option value="string">String</option>
              <option value="boolean">Boolean</option>
              <option value="number">Number</option>
              <option value="array">Array</option>
            </select>
          </div>
        </div>

        <div class="flex items-center justify-end space-x-3 mt-6">
          <button
            @click="isAddingEnvVariable = false"
            class="px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            @click="addEnvVariable"
            :disabled="!newEnvVariable.key"
            class="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            Add Variable
          </button>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import Layout from '../../../Layout/App.vue'
import axios from 'axios'

// Props
const props = defineProps({
  systemInfo: {
    type: Object,
    default: () => ({})
  }
})

// State
const activeTab = ref(0)
const activeConfigTab = ref(0)
const isRunningCommand = ref(false)
const isTogglingMaintenance = ref(false)
const isTogglingDebug = ref(false)
const commandOutput = ref('')
const customCommand = ref('')
const currentCommand = ref('')
const packageSearch = ref('')
const selectedLogFile = ref('')
const logContent = ref('')
const envSearch = ref('')
const selectedConfigFile = ref('')
const selectedConfigContent = ref(null)
const envVariables = ref({})
const configFiles = ref([])
const isAddingEnvVariable = ref(false)
const newEnvVariable = ref({ key: '', value: '', type: 'string' })

// Mock data (replace with real API calls)
const laravelVersion = ref('10.0')
const phpVersion = ref('8.2')
const systemStats = ref({
  cpu: 45,
  memory: 62,
  disk: 78,
  uptime: '5d 12h'
})

const appInfo = ref({
  environment: 'local',
  debug: true,
  cache_driver: 'file',
  session_driver: 'file',
  queue_driver: 'sync'
})

const dbInfo = ref({
  driver: 'MySQL',
  version: '8.0.33',
  size: '24.5 MB',
  tables: 12
})

const isMaintenanceMode = ref(false)
const isDebugMode = ref(true)

const packages = ref([
  {
    name: 'laravel/framework',
    description: 'The Laravel Framework',
    version: '10.0.0',
    license: 'MIT',
    outdated: false
  },
  {
    name: 'guzzlehttp/guzzle',
    description: 'Guzzle HTTP client library',
    version: '7.5.0',
    license: 'MIT',
    outdated: true
  },
  {
    name: 'symfony/console',
    description: 'Symfony Console Component',
    version: '6.2.0',
    license: 'MIT',
    outdated: false
  }
])

const logFiles = ref([
  'laravel.log',
  'laravel-2024-01-15.log',
  'laravel-2024-01-14.log'
])

// Tab configuration
const tabs = [
  { id: 'overview', name: 'Overview' },
  { id: 'commands', name: 'Commands' },
  { id: 'packages', name: 'Packages', badge: packages.value.filter(p => p.outdated).length },
  { id: 'config', name: 'Configuration' },
  { id: 'logs', name: 'Logs' }
]

// Configuration tabs
const configTabs = [
  { id: 'env', name: 'Environment' },
  { id: 'files', name: 'Config Files' },
  { id: 'quick', name: 'Quick Settings' }
]

// Quick commands
const quickCommands = [
  {
    name: 'cache:clear',
    title: 'Clear Cache',
    description: 'Clear application cache',
    color: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400'
  },
  {
    name: 'config:clear',
    title: 'Clear Config',
    description: 'Clear configuration cache',
    color: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
  },
  {
    name: 'route:clear',
    title: 'Clear Routes',
    description: 'Clear route cache',
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
  },
  {
    name: 'view:clear',
    title: 'Clear Views',
    description: 'Clear compiled views',
    color: 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400'
  },
  {
    name: 'optimize',
    title: 'Optimize',
    description: 'Cache config, routes & views',
    color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
  },
  {
    name: 'migrate',
    title: 'Run Migrations',
    description: 'Execute database migrations',
    color: 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400'
  }
]

// Computed
const filteredEnvVariables = computed(() => {
  if (!envSearch.value) return envVariables.value

  const search = envSearch.value.toLowerCase()
  const filtered = {}

  Object.keys(envVariables.value).forEach(key => {
    if (key.toLowerCase().includes(search) ||
        (envVariables.value[key].value && envVariables.value[key].value.toString().toLowerCase().includes(search))) {
      filtered[key] = envVariables.value[key]
    }
  })

  return filtered
})

const flattenedConfig = computed(() => {
  if (!selectedConfigContent.value) return {}
  return flattenObject(selectedConfigContent.value)
})

const filteredPackages = computed(() => {
  if (!packageSearch.value) return packages.value

  return packages.value.filter(pkg =>
    pkg.name.toLowerCase().includes(packageSearch.value.toLowerCase()) ||
    pkg.description.toLowerCase().includes(packageSearch.value.toLowerCase())
  )
})

// Methods
const runCommand = async (command) => {
  isRunningCommand.value = true
  currentCommand.value = command.title
  commandOutput.value = ''

  try {
    const response = await axios.post(route('admin.api.system.command'), {
      command: command.name
    })

    commandOutput.value = response.data.output || 'Command executed successfully'
    showNotification(`${command.title} completed successfully`, 'success')

  } catch (error) {
    console.error('Command failed:', error)
    commandOutput.value = error.response?.data?.message || 'Command failed'
    showNotification(`${command.title} failed`, 'error')
  } finally {
    isRunningCommand.value = false
    currentCommand.value = ''
  }
}

const runCustomCommand = async () => {
  if (!customCommand.value) return

  await runCommand({
    name: customCommand.value.replace('php artisan ', ''),
    title: 'Custom Command'
  })

  customCommand.value = ''
}

const clearOutput = () => {
  commandOutput.value = ''
}

const toggleMaintenanceMode = async () => {
  isTogglingMaintenance.value = true

  try {
    const command = isMaintenanceMode.value ? 'up' : 'down'
    await runCommand({
      name: command,
      title: isMaintenanceMode.value ? 'Disable Maintenance' : 'Enable Maintenance'
    })

    isMaintenanceMode.value = !isMaintenanceMode.value

  } catch (error) {
    console.error('Failed to toggle maintenance mode:', error)
  } finally {
    isTogglingMaintenance.value = false
  }
}

const toggleDebugMode = async () => {
  isTogglingDebug.value = true

  try {
    await axios.post(route('admin.api.system.config'), {
      key: 'APP_DEBUG',
      value: !isDebugMode.value
    })

    isDebugMode.value = !isDebugMode.value
    showNotification('Debug mode updated', 'success')

  } catch (error) {
    console.error('Failed to toggle debug mode:', error)
    showNotification('Failed to update debug mode', 'error')
  } finally {
    isTogglingDebug.value = false
  }
}

const loadLogFile = async () => {
  if (!selectedLogFile.value) return

  try {
    const response = await axios.get(route('admin.api.system.logs'), {
      params: { file: selectedLogFile.value }
    })

    logContent.value = response.data.content

  } catch (error) {
    console.error('Failed to load log file:', error)
    showNotification('Failed to load log file', 'error')
  }
}

const refreshLogs = async () => {
  try {
    const response = await axios.get(route('admin.api.system.log-files'))
    logFiles.value = response.data.files

    if (selectedLogFile.value) {
      await loadLogFile()
    }

  } catch (error) {
    console.error('Failed to refresh logs:', error)
  }
}

// Environment Variables Methods
const refreshEnvVariables = async () => {
  try {
    const response = await axios.get(route('admin.api.system.env-variables'))
    envVariables.value = response.data.variables
  } catch (error) {
    console.error('Failed to load environment variables:', error)
    showNotification('Failed to load environment variables', 'error')
  }
}

const editEnvVariable = (key) => {
  envVariables.value[key].isEditing = true
  envVariables.value[key].editValue = envVariables.value[key].value
}

const cancelEditEnvVariable = (key) => {
  envVariables.value[key].isEditing = false
  envVariables.value[key].editValue = ''
}

const saveEnvVariable = async (key) => {
  try {
    const response = await axios.put(route('admin.api.system.env-variable', key), {
      value: envVariables.value[key].editValue
    })

    envVariables.value[key].value = envVariables.value[key].editValue
    envVariables.value[key].isEditing = false
    envVariables.value[key].editValue = ''

    showNotification(`${key} updated successfully`, 'success')
  } catch (error) {
    console.error('Failed to update environment variable:', error)
    showNotification('Failed to update environment variable', 'error')
  }
}

const addEnvVariable = async () => {
  try {
    const response = await axios.post(route('admin.api.system.env-variable.store'), {
      key: newEnvVariable.value.key,
      value: newEnvVariable.value.value,
      type: newEnvVariable.value.type
    })

    showNotification('Environment variable added successfully', 'success')
    isAddingEnvVariable.value = false
    newEnvVariable.value = { key: '', value: '', type: 'string' }

    // Refresh the variables list
    await refreshEnvVariables()

  } catch (error) {
    console.error('Failed to add environment variable:', error)
    showNotification('Failed to add environment variable', 'error')
  }
}

const toggleEnvVisibility = (key) => {
  envVariables.value[key].showValue = !envVariables.value[key].showValue
}

const getEnvTypeColor = (type) => {
  const colors = {
    'string': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    'boolean': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    'number': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    'array': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    'null': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
  }
  return colors[type] || colors.string
}

const openAddEnvModal = () => {
  isAddingEnvVariable.value = true
  newEnvVariable.value = { key: '', value: '', type: 'string' }
}

// Config Files Methods
const refreshConfigFiles = async () => {
  try {
    const response = await axios.get(route('admin.api.system.config-files'))
    configFiles.value = response.data.files
  } catch (error) {
    console.error('Failed to load config files:', error)
  }
}

const loadConfigFile = async () => {
  if (!selectedConfigFile.value) return

  try {
    const response = await axios.get(route('admin.api.system.config-file', selectedConfigFile.value))
    selectedConfigContent.value = response.data.config
  } catch (error) {
    console.error('Failed to load config file:', error)
    showNotification('Failed to load config file', 'error')
  }
}

const getConfigValueTypeColor = (type) => {
  const colors = {
    'string': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    'boolean': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
    'number': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
    'object': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
    'undefined': 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400'
  }
  return colors[type] || colors.string
}

const formatConfigValue = (value) => {
  if (value === null) return 'null'
  if (value === undefined) return 'undefined'
  if (typeof value === 'boolean') return value ? 'true' : 'false'
  if (typeof value === 'object') return JSON.stringify(value).substring(0, 100) + '...'
  if (typeof value === 'string' && value.length > 100) return value.substring(0, 100) + '...'
  return String(value)
}

const flattenObject = (obj, prefix = '') => {
  const flattened = {}

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key

      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(flattened, flattenObject(obj[key], newKey))
      } else {
        flattened[newKey] = obj[key]
      }
    }
  }

  return flattened
}

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
  }, 3000)
}

// Lifecycle
onMounted(async () => {
  // Load initial data
  try {
    // Load system stats
    const statsResponse = await axios.get(route('admin.api.system.stats'))
    systemStats.value = statsResponse.data

    // Load application info
    const appResponse = await axios.get(route('admin.api.system.info'))
    appInfo.value = appResponse.data.app
    dbInfo.value = appResponse.data.database
    laravelVersion.value = appResponse.data.laravel_version
    phpVersion.value = appResponse.data.php_version

    // Load packages
    const packagesResponse = await axios.get(route('admin.api.system.packages'))
    packages.value = packagesResponse.data.packages

    // Load environment variables
    await refreshEnvVariables()

    // Load config files
    await refreshConfigFiles()

  } catch (error) {
    console.error('Failed to load system information:', error)
  }
})
</script>
