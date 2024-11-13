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
      // Fetch course details
      const courseResponse = await fetch(`${apiBaseUrl}/courses/${course_id}`);
      if (!courseResponse.ok) {
        throw new Error(
          `Failed to fetch course details: ${courseResponse.statusText}`
        );
      }

      const courseData: Course = await courseResponse.json();
      course.value = courseData;

      if (course.value) {
        // Fetch teacher's name if available
        const teacherResponse = await fetch(
          `${apiBaseUrl}/users/${course.value.teacher_id}`
        );
        if (!teacherResponse.ok) {
          throw new Error(
            `Failed to fetch teacher: ${teacherResponse.statusText}`
          );
        }

        const teacherData: Teacher = await teacherResponse.json();
        course.value.teacher_name = teacherData.username || "Unknown";
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
