<script setup lang="ts">
import { ref } from "vue";
const isCollapsed = ref(false);

// Toggle collapse state
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<template>
  <div
    :class="[
      'h-screen bg-gray-800 text-white transition-all duration-300 flex flex-col',
      isCollapsed ? 'w-14' : 'w-64',
    ]"
  >
    <div class="p-4 flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <img src="/images/Logo.png" alt="Logo" class="h-8 w-auto" />
        <div v-if="!isCollapsed" class="text-lg font-semibold">Admin</div>
      </div>
      <button @click="toggleCollapse" class="text-white focus:outline-none">
        <svg
          v-if="isCollapsed"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
    <nav class="p-4 flex-1">
      <ul>
        <li class="mb-4">
          <RouterLink
            to="/teacher/students"
            class="flex items-center space-x-2"
          >
            <MdiIcon icon="mdiAccountMultiple" size="24px" />
            <span v-if="!isCollapsed">See Students</span>
          </RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink
            to="/teacher/addStudent"
            class="flex items-center space-x-2"
          >
            <MdiIcon icon="mdiAccountPlus" size="24px" />
            <span v-if="!isCollapsed">Add Student</span>
          </RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink to="/teacher/courses" class="flex items-center space-x-2">
            <MdiIcon icon="mdiBookEducation" size="24px" />
            <span v-if="!isCollapsed">Courses</span>
          </RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink
            to="/teacher/addCourse"
            class="flex items-center space-x-2"
          >
            <MdiIcon icon="mdiBookPlus" size="24px" />
            <span v-if="!isCollapsed">Add Course</span>
          </RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink to="/teacher/profile" class="flex items-center space-x-2">
            <MdiIcon icon="mdiAccount" size="24px" />
            <span v-if="!isCollapsed">Profile</span>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <div class="p-4 text-center text-sm text-gray-500">
      &copy; 2024 Mongolsoft and Sek
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
</style>
