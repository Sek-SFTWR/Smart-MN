<template>
  <div>profile</div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "auth",
  requiresAuth: true,
  requiresRole: ["admin"],
});
</script>
