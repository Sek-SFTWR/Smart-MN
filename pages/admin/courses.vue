<script setup lang="ts">
definePageMeta({
  layout: "admin",
  middleware: "auth",
  requiresAuth: true,
  requiresRole: ["admin"],
});

import { onMounted } from "vue";
import useCourses from "@/composables/admin/useCourses";

const { courses, isLoading, error, fetchCourses } = useCourses();

onMounted(() => {
  fetchCourses();
  console.log("Courses fetched", courses);
});

const handleUpdate = (courseId: number) => {
  console.log(`Update course with ID: ${courseId}`);
};

const handleDelete = (courseId: number) => {
  console.log(`Delete course with ID: ${courseId}`);
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-semibold mb-4">Courses</h1>
    <div v-if="isLoading" class="text-center">Loading...</div>
    <div v-if="error" class="text-red-500">{{ error }}</div>
    <div v-if="!isLoading && !error" class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-200">
        <thead class="bg-gray-100">
          <tr>
            <th class="py-2 px-4 border-b text-center">ID</th>
            <th class="py-2 px-4 border-b text-center">Title</th>
            <th class="py-2 px-4 border-b text-center">Description</th>
            <th class="py-2 px-4 border-b text-center">Teacher</th>
            <th class="py-2 px-4 border-b text-center">Price</th>
            <th class="py-2 px-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="course in courses"
            :key="course.course_id"
            class="hover:bg-gray-50"
          >
            <td class="py-2 px-4 border-b text-center">
              {{ course.course_id }}
            </td>
            <td class="py-2 px-4 border-b text-center">{{ course.title }}</td>
            <td class="py-2 px-4 border-b text-center">
              {{ course.description }}
            </td>
            <td class="py-2 px-4 border-b text-center">
              {{ course.teacher_name }}
            </td>
            <td class="py-2 px-4 border-b text-center">{{ course.price }}</td>
            <td class="py-2 px-4 border-b text-center">
              <button
                @click="handleUpdate(course.course_id)"
                class="bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
              >
                <MdiIcon icon="mdiPencilOutline" size="24px" />
              </button>
              <button
                @click="handleDelete(course.course_id)"
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
