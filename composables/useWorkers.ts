import { ref } from "vue";
import { useRouter } from "vue-router";

const apiBaseUrl = "http://127.0.0.1:8000";

interface LoginResponse {
  access_token: string;
  token_type: string;
}

export default function useLogin() {
  const username = ref("");
  const password = ref("");
  const router = useRouter();

  const login = async () => {
    try {
      const { data } = await useFetch<LoginResponse>("/auth/token", {
        method: "POST",
        baseURL: apiBaseUrl,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: username.value,
          password: password.value,
        }),
      });
      if (data.value) {
        const token = data.value.access_token;
        const token_type = data.value.token_type;

        localStorage.setItem("elearn-token", token);
        localStorage.setItem("token-type", token_type);

        router.push("/");
      }
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return {
    username,
    password,
    login,
  };
}
