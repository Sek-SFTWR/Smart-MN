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
    class="bg-gray-50 flex flex-col justify-center items-center min-h-screen px-4"
  >
    <div
      class="bg-white flex flex-col justify-center items-center rounded-lg p-10 max-w-lg w-full mx-auto shadow-lg space-y-6"
    >
      <div class="text-center mb-6">
        <h1 class="font-bold text-3xl text-gray-800">Sign Up</h1>
        <p class="text-gray-600 mt-2">Create an account to get started!</p>
      </div>

      <div class="w-full space-y-5">
        <div>
          <label class="block text-gray-700 text-md mb-1">Username</label>
          <input
            type="text"
            v-model="username"
            placeholder="Enter your username"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label class="block text-gray-700 text-md mb-1">Email</label>
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label class="block text-gray-700 text-md mb-1">Password</label>
          <input
            type="password"
            v-model="password"
            placeholder="Create a password"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div>
          <label class="block text-gray-700 text-md mb-1"
            >Confirm Password</label
          >
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="Confirm your password"
            class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <button
          class="w-full bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600 transition font-semibold"
          @click="handleSignup"
          :disabled="isLoading"
        >
          Sign Up
        </button>
      </div>

      <div class="text-gray-700 text-md mt-6">
        Already have an account?
        <RouterLink to="/login" class="text-amber-500 hover:underline"
          >Log in</RouterLink
        >
      </div>

      <div v-if="errorMessage" class="text-red-600 mt-4">
        {{ errorMessage }}
      </div>
      <div v-if="successMessage" class="text-green-600 mt-4">
        {{ successMessage }}
      </div>
    </div>
  </div>
</template>
