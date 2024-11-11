<script setup lang="ts">
definePageMeta({
  layout: "user",
});

import { ref } from "vue";
import { RouterLink } from "vue-router";

const { signup, isLoading, errorMessage, successMessage } = useSignUp();

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const role = ref("student");

const handleSignup = async () => {
  if (password.value !== confirmPassword.value) {
    errorMessage.value = "Passwords do not match";
    return;
  }

  await signup({
    username: username.value,
    email: email.value,
    password: password.value,
    role: role.value,
  });
};
</script>

<template>
  <div
    class="bg-white flex flex-col justify-center items-center rounded-lg p-8 max-w-md mx-auto shadow-lg m-9"
  >
    <div class="flex flex-col justify-center items-center mb-8">
      <div class="font-semibold text-3xl">Sign Up</div>
      <div class="text-slate-900 text-md mt-2">
        Create an account to get started!
      </div>
    </div>

    <div class="w-full mb-4">
      <label class="block text-slate-700 text-md mb-1">Username</label>
      <input
        type="text"
        v-model="username"
        placeholder="Enter your username"
        class="w-full"
      />
    </div>

    <div class="w-full mb-4">
      <label class="block text-slate-700 text-md mb-1">Email</label>
      <input
        type="email"
        v-model="email"
        placeholder="Enter your email"
        class="w-full"
      />
    </div>

    <div class="w-full mb-4">
      <label class="block text-slate-700 text-md mb-1">Password</label>
      <input
        type="password"
        v-model="password"
        placeholder="Create a password"
        class="w-full"
      />
    </div>

    <div class="w-full mb-6">
      <label class="block text-slate-700 text-md mb-1">Confirm Password</label>
      <input
        type="password"
        v-model="confirmPassword"
        placeholder="Confirm your password"
        class="w-full"
      />
    </div>

    <button
      class="w-full mb-4 bg-blue-500 text-white py-2 rounded"
      @click="handleSignup"
      :disabled="isLoading"
    >
      Sign Up
    </button>

    <div class="text-slate-900 text-md mt-4">
      Already have an account?
      <RouterLink to="/login" class="text-blue-600 hover:underline"
        >Log in</RouterLink
      >
    </div>

    <div v-if="errorMessage" class="text-red-600">{{ errorMessage }}</div>
    <div v-if="successMessage" class="text-green-600">{{ successMessage }}</div>
  </div>
</template>
