<template>
  <Layout :title="title">
    <!-- Welcome Section -->
    <div class="hero min-h-96 bg-gradient-to-r from-primary to-secondary">
      <div class="hero-content text-center text-white">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Welcome!</h1>
          <p class="py-6">
            This is your home page. You can easily customize this content to match your needs.
          </p>
          <button class="btn btn-accent">Get Started</button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 py-12">

      <!-- Quick Stats -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="stat bg-base-200 rounded-lg shadow">
          <div class="stat-figure text-primary">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <div class="stat-title">Total Users</div>
          <div class="stat-value text-primary">89</div>
          <div class="stat-desc">21% more than last month</div>
        </div>

        <div class="stat bg-base-200 rounded-lg shadow">
          <div class="stat-figure text-secondary">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div class="stat-title">Page Views</div>
          <div class="stat-value text-secondary">2.6K</div>
          <div class="stat-desc">15% more than last month</div>
        </div>

        <div class="stat bg-base-200 rounded-lg shadow">
          <div class="stat-figure text-accent">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div class="stat-title">Tasks Done</div>
          <div class="stat-value text-accent">86%</div>
          <div class="stat-desc">12% more than last month</div>
        </div>
      </div>

      <!-- Two Column Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <!-- Recent Activity -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Recent Activity
            </h2>

            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="avatar placeholder">
                  <div class="bg-primary text-primary-content rounded-full w-8 h-8">
                    <span class="text-xs">JD</span>
                  </div>
                </div>
                <div class="flex-1">
                  <p class="text-sm font-medium">John Doe created a new project</p>
                  <p class="text-xs text-base-content/60">2 hours ago</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="avatar placeholder">
                  <div class="bg-secondary text-secondary-content rounded-full w-8 h-8">
                    <span class="text-xs">JS</span>
                  </div>
                </div>
                <div class="flex-1">
                  <p class="text-sm font-medium">Jane Smith updated profile</p>
                  <p class="text-xs text-base-content/60">4 hours ago</p>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <div class="avatar placeholder">
                  <div class="bg-accent text-accent-content rounded-full w-8 h-8">
                    <span class="text-xs">BW</span>
                  </div>
                </div>
                <div class="flex-1">
                  <p class="text-sm font-medium">Bob Wilson completed task</p>
                  <p class="text-xs text-base-content/60">1 day ago</p>
                </div>
              </div>
            </div>

            <div class="card-actions justify-end mt-4">
              <button class="btn btn-sm btn-primary">View All</button>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <h2 class="card-title">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Quick Actions
            </h2>

            <div class="grid grid-cols-2 gap-4">
              <button class="btn btn-outline btn-primary">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add User
              </button>

              <button class="btn btn-outline btn-secondary">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                New Project
              </button>

              <button class="btn btn-outline btn-accent">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </button>

              <button class="btn btn-outline btn-info">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Reports
              </button>
            </div>

            <div class="divider"></div>

            <!-- Simple Form Example -->
            <div class="form-control">
              <label class="label">
                <span class="label-text">Quick Note</span>
              </label>
              <textarea
                v-model="quickNote"
                class="textarea textarea-bordered"
                placeholder="Write a quick note..."
              ></textarea>
              <div class="label">
                <span class="label-text-alt"></span>
                <button class="btn btn-xs btn-primary" @click="saveNote">Save Note</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Simple Table Example -->
      <div class="card bg-base-100 shadow-xl mt-8">
        <div class="card-body">
          <h2 class="card-title">
            <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2H9z" />
            </svg>
            Recent Users
          </h2>

          <div class="overflow-x-auto">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img src="https://i.pravatar.cc/100?img=1" alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">John Doe</div>
                        <div class="text-sm opacity-50">Admin</div>
                      </div>
                    </div>
                  </td>
                  <td>john@example.com</td>
                  <td><span class="badge badge-success">Active</span></td>
                  <td>
                    <button class="btn btn-ghost btn-xs">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img src="https://i.pravatar.cc/100?img=2" alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Jane Smith</div>
                        <div class="text-sm opacity-50">User</div>
                      </div>
                    </div>
                  </td>
                  <td>jane@example.com</td>
                  <td><span class="badge badge-warning">Pending</span></td>
                  <td>
                    <button class="btn btn-ghost btn-xs">Edit</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img src="https://i.pravatar.cc/100?img=3" alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Bob Wilson</div>
                        <div class="text-sm opacity-50">Moderator</div>
                      </div>
                    </div>
                  </td>
                  <td>bob@example.com</td>
                  <td><span class="badge badge-error">Inactive</span></td>
                  <td>
                    <button class="btn btn-ghost btn-xs">Edit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Customization Tips -->
      <div class="alert alert-info mt-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <div>
          <h3 class="font-bold">Customization Tips:</h3>
          <div class="text-xs mt-1">
            • Change the welcome message in the hero section<br>
            • Update the stats with your real data<br>
            • Modify the recent activity to show your content<br>
            • Replace the table data with your users<br>
            • Add your own quick action buttons
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import Layout from '../../../Layout/App.vue'

// Props
defineProps({
  title: {
    type: String,
    default: 'Home'
  }
})

// Simple reactive data
const quickNote = ref('')

// Simple methods
const saveNote = () => {
  if (quickNote.value.trim()) {
    alert('Note saved: ' + quickNote.value)
    quickNote.value = ''
  }
}
</script>
