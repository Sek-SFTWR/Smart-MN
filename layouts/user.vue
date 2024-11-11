<template>
  <div class="bg-slate-100 min-h-screen">
    <UserHeader />
    <slot />
    <UserFooter />
  </div>
</template>

<script setup>
import UserHeader from "@/components/user/UserHeader.vue";
import UserFooter from "@/components/user/UserFooter.vue";
</script>
