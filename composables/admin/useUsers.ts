import { ref } from "vue";

const apiBaseUrl = "http://127.0.0.1:8000";

interface User {
  user_id: number;
  username: string;
  email: string;
  role: string;
}

export default function useUsers() {
  const users = ref<User[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);

  const fetchUsers = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const { data, error: fetchError } = await useFetch<User[]>("/users", {
        baseURL: apiBaseUrl,
      });

      if (fetchError.value) {
        throw new Error(fetchError.value.message || "Failed to fetch users");
      }

      users.value = data.value || [];
      console.log(data.value);
      console.log("users:", users.value);
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
    users,
    isLoading,
    error,
    fetchUsers,
  };
}
