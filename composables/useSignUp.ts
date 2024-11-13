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
  message?: string;
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
      const response = await fetch(`${apiBaseUrl}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Sign up failed");
      }

      const data: SignUpResponse | null = await response.json();

      // Check if data is non-null and has a message, or use a default success message
      successMessage.value = data?.message || "Sign up successful!";

      // Redirect to login page after successful signup
      await router.push({ path: "/login" });
    } catch (error) {
      errorMessage.value =
        (error as Error).message || "An error occurred during sign-up";
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
