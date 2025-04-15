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
      const response = await fetch(`${apiBaseUrl}/users`);

      if (!response.ok) {
        throw new Error(`Хэрэглэгчийн мэдээлэл олдсонгүй : ${response.statusText}`);
      }

      const data = await response.json();
      users.value = data || [];
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
