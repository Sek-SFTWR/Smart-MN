<template>
  <div class="flex">
    <AdminSideBar />
    <div class="flex bg-slate-800 w-full">
      <div class="bg-white rounded-lg m-6 w-full p-6"><slot /></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
