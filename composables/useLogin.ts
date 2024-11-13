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
      const response = await fetch(`${apiBaseUrl}/auth/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username: username.value,
          password: password.value,
        }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data: LoginResponse = await response.json();
      const token = data.access_token;
      localStorage.setItem("elearn-token", token);

      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const userRole = decodedToken.role;
      const exp = decodedToken.exp * 1000;
      const currentTime = new Date().getTime();

      const dateFormatter = new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      });

      console.log("Debugging:", exp, currentTime);
      if (exp <= currentTime) {
        localStorage.removeItem("elearn-token");
        router.push("/login");
      }

      console.log("User Role:", userRole);
      console.log("Decoded Token:", decodedToken);
      console.log("Expiration Time:", dateFormatter.format(exp));
      console.log("Current Time:", dateFormatter.format(currentTime));

      if (userRole === "admin") {
        router.push("/admin");
      } else if (userRole === "teacher") {
        router.push("/teacher");
      } else if (userRole === "student") {
        router.push("/courses");
      } else {
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
