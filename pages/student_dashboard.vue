<template>
  <div>student Dashboard</div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "user",
  middleware: "auth",
  requiresAuth: true,
  requiresRole: ["student"],
});
</script>
