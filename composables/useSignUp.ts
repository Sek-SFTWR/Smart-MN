import { ref } from "vue";
import { useRouter } from "vue-router";

const apiBaseUrl = "http://127.0.0.1:8000";

interface SignUpData {
  username: string;
  password: string;
  email: string;
  role: string;
}

interface SignUpResponse {
  message: string;
}

export default function useSignUp() {
  const isLoading = ref(false);
  const errorMessage = ref("");
  const successMessage = ref("");
  const router = useRouter();

  const signup = async (signUpData: SignUpData) => {
    isLoading.value = true;
    errorMessage.value = "";
    successMessage.value = "";

    try {
      const { data, error } = await useFetch<SignUpResponse>("/auth/register", {
        method: "POST",
        baseURL: apiBaseUrl,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });

      if (error.value) {
        throw new Error(error.value.message || "Sign up failed");
      }

      successMessage.value = data.value?.message || "Sign up successful!";

      // Redirect to login page after successful signup
      await router.push({ path: "/login" });
    } catch (error) {
      errorMessage.value = (error as Error).message;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    signup,
    isLoading,
    errorMessage,
    successMessage,
  };
}
