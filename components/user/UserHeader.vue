<script setup lang="ts">
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { RouterLink, useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const router = useRouter();
const status = ref("Login");
const isAuthenticated = ref(false);

const checkToken = () => {
  const token = localStorage.getItem("elearn-token");
  isAuthenticated.value = !!token;
  status.value = token ? "Logout" : "Login";
};

onMounted(checkToken);

const handleAuthAction = () => {
  if (status.value === "Logout") {
    // Logout logic
    localStorage.removeItem("elearn-token");
    isAuthenticated.value = false;
    router.push("/");
    status.value = "Login";
  } else {
    if (!isAuthenticated.value) {
      router.push("/login");
    }
  }
};
</script>

<template>
  <div class="w-full px-4 py-2 flex flex-col sticky top-0 z-50">
    <div
      class="flex items-center justify-center m-0 p-2 bg-amber-500 text-slate-50 mb-2 text-lg font-sans font-semibold rounded-md"
    >
      Free Courses 🌟 Sale Ends Soon, Get It Now ->
    </div>
    <Menubar class="flex justify-between items-center text-slate-900 px-6 py-6">
      <div class="flex items-center space-x-4">
        <img src="/images/Logo.png" alt="Logo" class="h-8 w-auto" />

        <MenubarMenu>
          <RouterLink to="/">
            <MenubarTrigger>Home</MenubarTrigger>
          </RouterLink>
        </MenubarMenu>
        <MenubarMenu>
          <RouterLink to="/courses">
            <MenubarTrigger>Courses</MenubarTrigger>
          </RouterLink>
        </MenubarMenu>
        <MenubarMenu>
          <RouterLink to="/about">
            <MenubarTrigger>About Us</MenubarTrigger>
          </RouterLink>
        </MenubarMenu>
        <MenubarMenu>
          <RouterLink to="/pricing">
            <MenubarTrigger>Pricing</MenubarTrigger>
          </RouterLink>
        </MenubarMenu>
        <MenubarMenu>
          <RouterLink to="/contact">
            <MenubarTrigger>Contact</MenubarTrigger>
          </RouterLink>
        </MenubarMenu>
      </div>

      <div class="flex items-center space-x-4">
        <!-- Conditionally render Profile if authenticated -->
        <MenubarMenu v-if="isAuthenticated">
          <RouterLink to="/profile">
            <MenubarTrigger>Profile</MenubarTrigger>
          </RouterLink>
        </MenubarMenu>

        <!-- Conditionally render Sign Up if not authenticated -->
        <MenubarMenu v-if="!isAuthenticated">
          <RouterLink to="/signup">
            <MenubarTrigger>Sign Up</MenubarTrigger>
          </RouterLink>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger @click="handleAuthAction">{{
            status
          }}</MenubarTrigger>
        </MenubarMenu>
      </div>
    </Menubar>
  </div>
</template>
