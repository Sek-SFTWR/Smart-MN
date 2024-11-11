<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "auth",
  requiresAuth: true,
  requiresRole: ["admin"],
});

import { ref } from "vue";
import useAddCourse from "@/composables/admin/useAddCourse"; // Adjust the path as needed

const { addCourse, isLoading, errorMessage, successMessage } = useAddCourse();

const title = ref("");
const description = ref("");
const teacher_id = ref(0); // Adjust as needed
const price = ref(0);
const image = ref<File | null>(null);

const handleAddCourse = async () => {
  await addCourse({
    title: title.value,
    description: description.value,
    teacher_id: teacher_id.value,
    price: price.value,
    image: image.value,
  });
};

const handleImageChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target && target.files && target.files[0]) {
    image.value = target.files[0];
  }
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-semibold mb-4">Add Course</h1>
    <div v-if="errorMessage" class="text-red-500 mb-4">{{ errorMessage }}</div>
    <div v-if="successMessage" class="text-green-500 mb-4">
      {{ successMessage }}
    </div>
    <form @submit.prevent="handleAddCourse" class="space-y-4">
      <div>
        <label class="block text-gray-700">Title</label>
        <input
          v-model="title"
          type="text"
          class="w-full px-4 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label class="block text-gray-700">Description</label>
        <textarea
          v-model="description"
          class="w-full px-4 py-2 border rounded"
          required
        ></textarea>
      </div>
      <div>
        <label class="block text-gray-700">Teacher ID</label>
        <input
          v-model="teacher_id"
          type="number"
          class="w-full px-4 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label class="block text-gray-700">Price</label>
        <input
          v-model="price"
          type="number"
          step="0.01"
          class="w-full px-4 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label class="block text-gray-700">Image (optional)</label>
        <input
          @change="handleImageChange"
          type="file"
          class="w-full px-4 py-2 border rounded"
        />
      </div>
      <button
        type="submit"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        :disabled="isLoading"
      >
        Add Course
      </button>
    </form>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
</style>
