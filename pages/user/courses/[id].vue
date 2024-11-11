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
  <div v-if="isLoading">Loading course details...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else-if="course">
    <h1>{{ course.title }}</h1>
    <img
      v-if="course.background_image"
      :src="course.background_image"
      alt="Course Background"
    />
    <p><strong>Description:</strong> {{ course.description }}</p>
    <p><strong>Teacher:</strong> {{ course.teacher_name }}</p>
    <p><strong>Price:</strong> ${{ course.price }}</p>
    <p><strong>Created At:</strong> {{ course.created_at }}</p>
    <p><strong>Last Updated:</strong> {{ course.updated_at }}</p>
  </div>
</template>
