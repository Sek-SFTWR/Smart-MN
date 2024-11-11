<template>
  <div class="flex h-screen">
    <!-- Sidebar on the left side -->
    <TeacherSidebar class="bg-gray-900 text-white p-4" />

    <!-- Main content area -->
    <div class="flex flex-col w-full">
      <!-- Header at the top -->
      <TeacherHeader class="text-white p-4" />

      <!-- Main content area with slot content -->
      <div class="flex-grow bg-slate-800 p-6">
        <div class="bg-white rounded-lg w-full p-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
