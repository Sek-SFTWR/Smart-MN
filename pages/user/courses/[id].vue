<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import useCourse from "@/composables/user/useCourseByID";

definePageMeta({
  layout: "user",
  middleware: "auth",
  requiresAuth: true,
  requiresRole: ["student"],
});

const route = useRoute();
const { course, isLoading, error, fetchCourse } = useCourse();

onMounted(() => {
  const courseId = Number(route.params.id);
  fetchCourse(courseId);
});
</script>

<template>
  <div v-if="isLoading" class="text-center text-gray-500 py-10">
    Loading course details...
  </div>
  <div v-else-if="error" class="text-center text-red-500 py-10">
    {{ error }}
  </div>
  <div v-else-if="course" class="max-w-4xl mx-auto p-6 space-y-8">
    <!-- Course Header Section -->
    <div class="text-center space-y-4">
      <h1 class="text-3xl font-bold text-gray-800">{{ course.title }}</h1>
      <p class="text-gray-600">{{ course.description }}</p>
      <img
        v-if="course.background_image"
        :src="course.background_image"
        alt="Course Background"
        class="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
      />
    </div>

    <!-- Video and Curriculum Section -->
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Video Section -->
      <div class="flex flex-col items-center space-y-4 md:w-1/2">
        <img
          src="/images/ceo.png"
          alt="Video Preview"
          class="w-full rounded-lg shadow-md"
        />
        <div class="text-center space-y-2">
          <p class="text-gray-700">
            <strong>Teacher:</strong> {{ course.teacher_name }}
          </p>
          <p class="text-gray-700">
            <strong>Price:</strong> ${{ course.price }}
          </p>
        </div>
      </div>

      <!-- Curriculum Section -->
      <div class="md:w-1/2">
        <div
          v-for="(section, index) in course.sections"
          :key="index"
          class="bg-gray-50 rounded-lg p-6 shadow-md mb-4"
        >
          <h2 class="text-xl font-semibold text-gray-800 mb-4">
            {{ index + 1 }}. {{ section.title }}
          </h2>
          <ul class="space-y-3">
            <li
              v-for="(lesson, idx) in section.lessons"
              :key="idx"
              class="flex justify-between border-b border-gray-200 pb-2"
            >
              <span class="text-gray-700">{{ lesson.title }}</span>
              <span class="text-sm text-gray-500">{{ lesson.duration }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
