import { ref } from "vue";

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

export default function useCourse() {
  const course = ref<Course | null>(null);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  // Fetch all courses - example already provided
  const fetchCourses = async () => {
    // Existing fetchCourses code here...
  };

  // Fetch a specific course by ID
  const fetchCourse = async (course_id: number) => {
    isLoading.value = true;
    error.value = null;

    try {
      const { data, error: fetchError } = await useFetch<Course>(
        `/courses/${course_id}`,
        {
          baseURL: apiBaseUrl,
        }
      );

      if (fetchError.value) {
        throw new Error(
          fetchError.value.message || "Failed to fetch course details"
        );
      }

      course.value = data.value || null;

      if (course.value) {
        // Fetch teacher name if available
        const { data: teacherData, error: teacherError } =
          await useFetch<Teacher>(`/users/${course.value.teacher_id}`, {
            baseURL: apiBaseUrl,
          });

        if (teacherError.value) {
          throw new Error(
            teacherError.value.message || "Failed to fetch teacher"
          );
        }

        course.value.teacher_name = teacherData.value?.username || "Unknown";
      }
    } catch (err) {
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
    course,
    isLoading,
    error,
    fetchCourses,
    fetchCourse,
  };
}
