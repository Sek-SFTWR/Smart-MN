<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "auth",
  requiresAuth: true,
  requiresRole: ["admin"],
});
import { ref } from "vue";
import useAddUser from "@/composables/admin/addUser";

const { addUser, isLoading, errorMessage, successMessage } = useAddUser();

const username = ref("");
const email = ref("");
const password = ref("");
const role = ref();

const handleAddUser = async () => {
  await addUser({
    username: username.value,
    email: email.value,
    password: password.value,
    role: role.value,
  });
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-semibold mb-4">Add User</h1>
    <div v-if="errorMessage" class="text-red-500 mb-4">{{ errorMessage }}</div>
    <div v-if="successMessage" class="text-green-500 mb-4">
      {{ successMessage }}
    </div>
    <form @submit.prevent="handleAddUser" class="space-y-4">
      <div>
        <label class="block text-gray-700">Username</label>
        <input
          v-model="username"
          type="text"
          class="w-full px-4 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label class="block text-gray-700">Email</label>
        <input
          v-model="email"
          type="email"
          class="w-full px-4 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label class="block text-gray-700">Password</label>
        <input
          v-model="password"
          type="password"
          class="w-full px-4 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label class="block text-gray-700">Role</label>
        <select v-model="role" class="w-full px-4 py-2 border rounded">
          <option value="student">student</option>
          <option value="teacher">teacher</option>
          <option value="admin">admin</option>
        </select>
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        :disabled="isLoading"
      >
        Add User
      </button>
    </form>
  </div>
</template>

<style scoped></style>
