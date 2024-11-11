import { ref } from "vue";
import { useRouter } from "vue-router";

const apiBaseUrl = "http://127.0.0.1:8000";

interface AddCourseData {
  title: string;
  description: string;
  teacher_id: number;
  price: number;
  image?: File | null;
}

interface AddCourseResponse {
  course_id: number;
  title: string;
  description: string;
  teacher_id: number;
  price: number;
  background_image: string | null;
  created_at: string;
  updated_at: string;
}

export default function useAddCourse() {
  const isLoading = ref(false);
  const errorMessage = ref("");
  const successMessage = ref("");
  const router = useRouter();

  const addCourse = async (addCourseData: AddCourseData) => {
    isLoading.value = true;
    errorMessage.value = "";
    successMessage.value = "";

    try {
      const formData = new FormData();
      formData.append("title", addCourseData.title);
      formData.append("description", addCourseData.description);
      formData.append("teacher_id", addCourseData.teacher_id.toString());
      formData.append("price", addCourseData.price.toString());
      if (addCourseData.image) {
        formData.append("image", addCourseData.image);
      }

      const { data, error } = await useFetch<AddCourseResponse>("/add_course", {
        method: "POST",
        baseURL: apiBaseUrl,
        body: formData,
      });

      if (error.value) {
        throw new Error(error.value.message || "Failed to add course");
      }

      successMessage.value = "Course added successfully!";
      // Optionally, redirect to another page after successful addition
      // await router.push({ path: "/admin/courses" });
    } catch (error) {
      errorMessage.value = (error as Error).message;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    addCourse,
    isLoading,
    errorMessage,
    successMessage,
  };
}
