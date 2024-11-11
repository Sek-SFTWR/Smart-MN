<template>
  <div>Teacher Dashboard</div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "teacher",
  middleware: "auth",
  requiresAuth: true,
  requiresRole: ["teacher"],
});
</script>
