<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "auth",
  requiresAuth: true,
  requiresRole: ["admin"],
});

import { onMounted, watch } from "vue";
import useUsers from "@/composables/admin/useUsers";

const { users, isLoading, error, fetchUsers } = useUsers();

onMounted(() => {
  fetchUsers();
});

// Watch for changes in the users array and log them
watch(users, (newUsers) => {
  console.log("Users updated:", newUsers);
});

const handleUpdate = (userId: number) => {
  console.log(`Update user with ID: ${userId}`);
};

const handleDelete = (userId: number) => {
  console.log(`Delete user with ID: ${userId}`);
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-semibold mb-4">Users</h1>
    <div v-if="isLoading" class="text-center">Loading...</div>
    <div v-if="error" class="text-red-500">{{ error }}</div>
    <div v-if="!isLoading && !error" class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-4 border-b text-center">ID</th>
            <th class="py-2 px-4 border-b text-center">Username</th>
            <th class="py-2 px-4 border-b text-center">Email</th>
            <th class="py-2 px-4 border-b text-center">Role</th>
            <th class="py-2 px-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.user_id"
            class="hover:bg-gray-50"
          >
            <td class="py-2 px-4 border-b text-center">{{ user.user_id }}</td>
            <td class="py-2 px-4 border-b text-center">{{ user.username }}</td>
            <td class="py-2 px-4 border-b text-center">{{ user.email }}</td>
            <td class="py-2 px-4 border-b text-center">{{ user.role }}</td>
            <td class="py-2 px-4 border-b text-center">
              <button
                @click="handleUpdate(user.user_id)"
                class="bg-blue-500 text-white rounded mr-2 hover:bg-blue-600"
              >
                <MdiIcon icon="mdiPencilOutline" size="24px" />
              </button>
              <button
                @click="handleDelete(user.user_id)"
                class="bg-red-500 text-white rounded hover:bg-red-600"
              >
                <MdiIcon icon="mdiDeleteOutline" size="24px" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}
.th,
.td {
  padding: 8px;
  border: 1px solid #ddd;
}
</style>
