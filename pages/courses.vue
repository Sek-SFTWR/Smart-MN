<script setup lang="ts">
definePageMeta({
  layout: "user",
});

import { onMounted } from "vue";
import useCourses from "@/composables/admin/useCourses";
import { useRouter } from "vue-router";
const { courses, isLoading, error, fetchCourses } = useCourses();
const router = useRouter();
onMounted(() => {
  console.log("Courses fetched", courses);
  fetchCourses();
});

const handleView = (courseId: number) => {
  console.log(`View course with ID: ${courseId}`);
  router.push(`/user/courses/${courseId}`);
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
    <div
      v-if="!isLoading && !error"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    >
      <div
        v-for="course in courses"
        :key="course.course_id"
        class="bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <!-- Course Image -->
        <div v-if="`http://localhost:8000/${course.background_image}`">
          <img
            :src="`http://localhost:8000/${course.background_image}`"
            alt="Course Image"
            class="w-full h-48 object-cover"
          />
        </div>
        
        <!-- Course Title -->
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ course.title }}</h2>
          <p class="text-gray-700 mb-2">{{ course.description }}</p>
          <p class="text-gray-500 mb-2">Teacher: {{ course.teacher_name }}</p>
          <p class="text-gray-500 mb-2">Price: ${{ course.price }}</p>
          
          <!-- Action Buttons -->
          <div class="flex justify-end space-x-2">
            <button
              @click="handleView(course.course_id)"
              class="bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600 flex items-center"
            >
              <MdiIcon icon="mdiEyeOutline" size="24px" class="mr-1" />
              View
            </button>

            <button
              @click="handleDelete(course.course_id)"
              class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 flex items-center"
            >
              <MdiIcon icon="mdiDeleteOutline" size="24px" class="mr-1" />
              Hide
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
</style>
