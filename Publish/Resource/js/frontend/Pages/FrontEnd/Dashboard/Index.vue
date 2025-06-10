<template>
  <Layout :title="title">
    <!-- Hero Section -->
    <div class="hero min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <!-- Background Pattern -->


      <div class="hero-content text-center text-white relative z-10">
        <div class="max-w-4xl">
          <div class="flex justify-center mb-8">
            <div class="w-20 h-20 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
          </div>

          <h1 class="text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Skeleton Admin
          </h1>
          <p class="text-xl mb-8 text-slate-300 leading-relaxed max-w-2xl mx-auto">
            The ultimate Laravel package for rapid admin panel development. Build powerful applications with authentication, user management, and modern UI components in minutes, not weeks.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button class="btn btn-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white border-none shadow-xl transform hover:scale-105 transition-all duration-200">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Get Started
            </button>
            <button class="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-slate-900">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Documentation
            </button>
          </div>

          <!-- Installation Command -->
          <div class="mt-12 max-w-md mx-auto">
            <div class="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
              <div class="flex items-center justify-between">
                <code class="text-green-400 text-sm">composer require mariojgt/skeleton-admin</code>
                <button
                  @click="copyInstallCommand"
                  class="btn btn-xs btn-ghost text-slate-400 hover:text-white"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="container mx-auto px-4 py-20">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Why Choose Skeleton Admin?</h2>
        <p class="text-xl text-slate-600 max-w-2xl mx-auto">
          Everything you need to build professional admin panels and user dashboards with Laravel and Vue.js
        </p>
      </div>

      <!-- Feature Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div class="card bg-white shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
          <div class="card-body">
            <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="card-title text-slate-800">Lightning Fast Setup</h3>
            <p class="text-slate-600">Get your admin panel running in under 5 minutes with our automated installation command.</p>
          </div>
        </div>

        <div class="card bg-white shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
          <div class="card-body">
            <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="card-title text-slate-800">Built-in Authentication</h3>
            <p class="text-slate-600">Complete auth system with 2FA, email verification, role-based permissions, and password policies.</p>
          </div>
        </div>

        <div class="card bg-white shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
          <div class="card-body">
            <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 class="card-title text-slate-800">User Management</h3>
            <p class="text-slate-600">Advanced user management with roles, permissions, profiles, and notification systems.</p>
          </div>
        </div>

        <div class="card bg-white shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
          <div class="card-body">
            <div class="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h4" />
              </svg>
            </div>
            <h3 class="card-title text-slate-800">Modern UI Components</h3>
            <p class="text-slate-600">Beautiful, responsive components built with Tailwind CSS and DaisyUI for rapid development.</p>
          </div>
        </div>

        <div class="card bg-white shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
          <div class="card-body">
            <div class="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM4 19h10a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="card-title text-slate-800">Extensible Architecture</h3>
            <p class="text-slate-600">Built for extension with package manager, command generators, and modular design patterns.</p>
          </div>
        </div>

        <div class="card bg-white shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 group">
          <div class="card-body">
            <div class="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="card-title text-slate-800">Developer Experience</h3>
            <p class="text-slate-600">Artisan commands, automated testing, and comprehensive documentation for smooth development.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Start Section -->
    <div class="bg-slate-50 py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-4 text-slate-800">Get Started in Minutes</h2>
            <p class="text-xl text-slate-600">Follow these simple steps to have your admin panel up and running</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                1
              </div>
              <h3 class="text-xl font-semibold mb-2 text-slate-800">Install Package</h3>
              <div class="bg-slate-800 rounded-lg p-3 mb-3">
                <code class="text-green-400 text-sm">composer require mariojgt/skeleton-admin</code>
              </div>
              <p class="text-slate-600">Add Skeleton Admin to your Laravel project with Composer</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                2
              </div>
              <h3 class="text-xl font-semibold mb-2 text-slate-800">Run Installation</h3>
              <div class="bg-slate-800 rounded-lg p-3 mb-3">
                <code class="text-green-400 text-sm">php artisan skeleton-admin:install</code>
              </div>
              <p class="text-slate-600">Automated setup with database migrations and default configuration</p>
            </div>

            <div class="text-center">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                3
              </div>
              <h3 class="text-xl font-semibold mb-2 text-slate-800">Start Building</h3>
              <div class="bg-slate-800 rounded-lg p-3 mb-3">
                <code class="text-green-400 text-sm">npm run dev</code>
              </div>
              <p class="text-slate-600">Your admin panel is ready! Start customizing and building features</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Statistics Section -->
    <div class="container mx-auto px-4 py-20">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div class="stat bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div class="stat-figure text-blue-600">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <div class="stat-title text-slate-600">Active Projects</div>
          <div class="stat-value text-blue-600">500+</div>
          <div class="stat-desc text-slate-500">Applications built with Skeleton Admin</div>
        </div>

        <div class="stat bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div class="stat-figure text-green-600">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div class="stat-title text-slate-600">Development Speed</div>
          <div class="stat-value text-green-600">10x</div>
          <div class="stat-desc text-slate-500">Faster than building from scratch</div>
        </div>

        <div class="stat bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div class="stat-figure text-purple-600">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="stat-title text-slate-600">Success Rate</div>
          <div class="stat-value text-purple-600">98%</div>
          <div class="stat-desc text-slate-500">Projects deployed successfully</div>
        </div>

        <div class="stat bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <div class="stat-figure text-orange-600">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="stat-title text-slate-600">Setup Time</div>
          <div class="stat-value text-orange-600">5min</div>
          <div class="stat-desc text-slate-500">From zero to fully functional admin</div>
        </div>
      </div>
    </div>

    <!-- Features Showcase -->
    <div class="bg-slate-50 py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-4 text-slate-800">Complete Feature Set</h2>
            <p class="text-xl text-slate-600">Everything you need for professional admin panels and user dashboards</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Authentication Features -->
            <div>
              <div class="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-slate-800">Advanced Authentication</h3>
              <ul class="space-y-3 text-slate-600">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Two-Factor Authentication (2FA)
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Email Verification System
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Role-Based Access Control
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Password Policy Management
                </li>
              </ul>
            </div>

            <div class="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
              <div class="space-y-4">
                <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span class="text-slate-700">Frontend Registration</span>
                  <div class="toggle toggle-success toggle-sm" :class="{ 'toggle-checked': settings.frontend_register_enable }"></div>
                </div>
                <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span class="text-slate-700">Email Verification</span>
                  <div class="toggle toggle-success toggle-sm" :class="{ 'toggle-checked': settings.frontend_email_verify }"></div>
                </div>
                <div class="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <span class="text-slate-700">Backend Registration</span>
                  <div class="toggle toggle-success toggle-sm" :class="{ 'toggle-checked': settings.backend_register_enable }"></div>
                </div>
              </div>
            </div>

            <!-- Command Line Tools -->
            <div class="order-2 lg:order-1">
              <div class="bg-slate-900 rounded-2xl shadow-xl p-6 text-green-400 font-mono text-sm">
                <div class="flex items-center mb-4">
                  <div class="flex space-x-2">
                    <div class="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span class="ml-4 text-slate-400">Terminal</span>
                </div>
                <div class="space-y-2">
                  <div><span class="text-blue-400">$</span> php artisan skeleton-admin:install</div>
                  <div><span class="text-blue-400">$</span> php artisan skeleton:extension-package</div>
                  <div><span class="text-blue-400">$</span> php artisan test:notification user icon</div>
                  <div><span class="text-blue-400">$</span> php artisan menu:backend</div>
                  <div><span class="text-blue-400">$</span> php artisan republish:skeleton-admin</div>
                </div>
              </div>
            </div>

            <div class="order-1 lg:order-2">
              <div class="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-slate-800">Powerful CLI Tools</h3>
              <ul class="space-y-3 text-slate-600">
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Automated Installation Command
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Extension Package Generator
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Notification Testing Tools
                </li>
                <li class="flex items-center">
                  <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Menu Rebuilding Commands
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-700 py-20">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">Ready to Build Something Amazing?</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join hundreds of developers who have accelerated their Laravel projects with Skeleton Admin
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button class="btn btn-lg bg-white text-blue-600 hover:bg-blue-50 border-none shadow-xl">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Start Your Project Now
          </button>
          <button class="btn btn-lg btn-outline text-white border-white hover:bg-white hover:text-blue-600">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View on GitHub
          </button>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-slate-900 text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div class="flex items-center mb-4">
              <div class="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <span class="text-xl font-bold">Skeleton Admin</span>
            </div>
            <p class="text-slate-400 mb-4">The ultimate Laravel package for rapid admin panel development.</p>
            <div class="flex space-x-4">
              <a href="#" class="text-slate-400 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" class="text-slate-400 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Getting Started</h4>
            <ul class="space-y-2 text-slate-400">
              <li><a href="#" class="hover:text-white transition-colors">Installation</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Quick Start</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Configuration</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Examples</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Features</h4>
            <ul class="space-y-2 text-slate-400">
              <li><a href="#" class="hover:text-white transition-colors">Authentication</a></li>
              <li><a href="#" class="hover:text-white transition-colors">User Management</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Notifications</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Extensions</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-semibold mb-4">Support</h4>
            <ul class="space-y-2 text-slate-400">
              <li><a href="#" class="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" class="hover:text-white transition-colors">GitHub Issues</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Community</a></li>
              <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Skeleton Admin. Built with ❤️ for the Laravel community.</p>
        </div>
      </div>
    </footer>
  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import Layout from '../../../Layout/App.vue'

// Props
defineProps({
  title: {
    type: String,
    default: 'Skeleton Admin - Laravel Admin Panel Package'
  }
})

// Settings showcase data
const settings = ref({
  frontend_register_enable: true,
  frontend_email_verify: true,
  backend_register_enable: true
})

// Methods
const copyInstallCommand = () => {
  navigator.clipboard.writeText('composer require mariojgt/skeleton-admin')
    .then(() => {
      // You could show a toast notification here
      console.log('Install command copied to clipboard')
    })
    .catch(err => {
      console.error('Failed to copy: ', err)
    })
}
</script>
