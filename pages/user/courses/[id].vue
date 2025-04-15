<script setup>
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import useCourse from "@/composables/user/useCourseByID";
import useCart from "@/composables/user/useCart";

definePageMeta({
  layout: "user",
  middleware: "auth",
  requiresAuth: true,
  requiresRole: ["student"]
});

const route = useRoute();
const router = useRouter();
const { course, isLoading, error, fetchCourse } = useCourse();
const { addToCart } = useCart();

onMounted(() => {
  const courseId = Number(route.params.id);
  fetchCourse(courseId);
});

const goBack = () => {
  router.back();
};

const handleBuy = () => {
  addToCart(course);
};
</script>

<template>
  <div v-if="isLoading" class="text-center text-gray-500 py-10">
    Ачаалж байна...
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
        v-if="`http://localhost:8000/${course.background_image}`"
        :src="`http://localhost:8000/${course.background_image}`"
        alt="Course Background"
        class="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
      />
    </div>

    <!-- Teacher and Price Section -->
    <div
      class="flex justify-between items-center bg-white p-4 rounded-lg shadow-md"
    >
      <div>
        <p class="text-gray-700">
          <strong>Багш:</strong> {{ course.teacher_name }}
        </p>
        <p class="text-gray-700"><strong>Үнэ:</strong> ₮{{ course.price }}</p>
      </div>
      <div class="flex space-x-2">
        <button
          @click="handleBuy"
          class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Худалдаж авах
        </button>
        <button
          @click="goBack"
          class="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Буцах
        </button>
      </div>
    </div>

    <!-- Curriculum Section -->
    <div class="bg-gray-50 rounded-lg p-6 shadow-md">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Хөтөлбөр</h2>
      <ul class="space-y-3">
        <li
          v-for="(section, index) in course.sections"
          :key="index"
          class="border-b border-gray-200 pb-2"
        >
          <h3 class="text-lg font-semibold">
            {{ index + 1 }}. {{ section.title }}
          </h3>
          <ul class="pl-4">
            <li
              v-for="(lesson, idx) in section.lessons"
              :key="idx"
              class="flex justify-between text-gray-700"
            >
              <span>{{ lesson.title }}</span>
              <span class="text-sm text-gray-500">{{ lesson.duration }}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
