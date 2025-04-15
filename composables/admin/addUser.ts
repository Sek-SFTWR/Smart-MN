import { ref } from "vue";
import { useRouter } from "vue-router";

const apiBaseUrl = "http://127.0.0.1:8000";

interface AddUserData {
  username: string;
  password: string;
  email: string;
  role: string;
}

interface AddUserResponse {
  message: string;
}

export default function useAddUser() {
  const isLoading = ref(false);
  const errorMessage = ref("");
  const successMessage = ref("");
  const router = useRouter();

  const addUser = async (addUserData: AddUserData) => {
    isLoading.value = true;
    errorMessage.value = "";
    successMessage.value = "";

    try {
      const { data, error } = await useFetch<AddUserResponse>(
        "/auth/register",
        {
          method: "POST",
          baseURL: apiBaseUrl,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addUserData),
        }
      );

      if (error.value) {
        throw new Error(error.value.message || "Aлдаа гарлаа!");
      }

      successMessage.value = data.value?.message || "Амжилттай нэмэгдлээ!";
    } catch (error) {
      errorMessage.value = (error as Error).message;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    addUser,
    isLoading,
    errorMessage,
    successMessage,
  };
}
