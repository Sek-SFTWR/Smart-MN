import { baseURL } from "nuxt/dist/core/runtime/nitro/paths";

import { ref } from "vue";
import { useFetch } from "nuxt/app";
const apiBaseUrl = "http://127.0.0.1:8000";

interface Course {
  course_id: number;
  title: string;
  description: string;
  teacher_id: number;
  teacher_name?: string;
  price: number;
  background_image: string | null;
  created_at: string;
  updated_at: string;
}

interface Teacher {
  user_id: number;
  username: string;
}

export default function useCourses() {
  const courses = ref<Course[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchCourses = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const { data, error: fetchError } = await useFetch<Course[]>("/courses", {
        baseURL: apiBaseUrl,
      });
      const res = await fetch({
        url: `${apiBaseURL}/courses`,
        method: "GET",
      });
      console.log(data);
      console.log(error);

      if (fetchError.value) {
        throw new Error(fetchError.value.message || "Failed to fetch courses");
      }

      courses.value = data.value || [];

      for (const course of courses.value) {
        const { data: teacherData, error: teacherError } =
          await useFetch<Teacher>(`/users/${course.teacher_id}`, {
            baseURL: apiBaseUrl,
          });

        if (teacherError.value) {
          throw new Error(
            teacherError.value.message || "Failed to fetch teacher"
          );
        }

        course.teacher_name = teacherData.value?.username || "Unknown";
      }
    } catch (err) {
      console.log(err);
      if (err instanceof Error) {
        error.value = err.message;
      } else {
        error.value = "An unknown error occurred";
      }
    } finally {
      isLoading.value = false;
    }
  };

  return {
    courses,
    isLoading,
    error,
    fetchCourses,
  };
}
