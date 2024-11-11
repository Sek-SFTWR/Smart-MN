<template>
  <div
    class="bg-white flex flex-col justify-center items-center rounded-lg p-8 max-w-md mx-auto shadow-lg m-9"
  >
    <div class="flex flex-col justify-center items-center mb-8">
      <div class="font-semibold text-3xl">Log In</div>
      <div class="text-slate-900 text-md mt-2">
        Welcome back! Please log in to continue.
      </div>
    </div>

    <div class="w-full mb-4">
      <label class="block text-slate-700 text-md mb-1">Username</label>
      <Input
        type="text"
        v-model="username"
        placeholder="Enter your username"
        class="w-full"
      />
    </div>

    <div class="w-full mb-6">
      <label class="block text-slate-700 text-md mb-1">Password</label>
      <Input
        type="password"
        v-model="password"
        placeholder="Enter your password"
        class="w-full"
      />
    </div>

    <Button variant="secondary" class="w-full mb-4" @click="login">
      Log In
    </Button>

    <div class="text-slate-900 text-md mt-4">
      Don't have an account?
      <RouterLink to="/signup" class="text-blue-600 hover:underline">
        Sign up
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "user",
});

import { ref } from "vue";
import { RouterLink } from "vue-router";
// import useLogin from "~/composables/useLogin";

const { username, password, login } = useLogin();
</script>
