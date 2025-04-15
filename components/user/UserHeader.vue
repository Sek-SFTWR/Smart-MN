<script setup lang="ts">
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { RouterLink, useRouter } from "vue-router";
import { onMounted, ref } from "vue";

const router = useRouter();
const status = ref("Login");
const isAuthenticated = ref(false);

const checkToken = async () => {
  const token = localStorage.getItem("elearn-token");
  if (token) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    isAuthenticated.value = true;
    status.value = "Logout";
  } else {
    isAuthenticated.value = false;
    status.value = "Login";
  }
};

onMounted(checkToken);

const handleAuthAction = async () => {
  if (status.value === "Logout") {
    await new Promise((resolve) => setTimeout(resolve, 100));
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
      Үнэгүй сургалтууд🌟 Хямдрал дуусахад цөөхөн хоног үлдлээ , Яг одоо
      бүртгүүлээрэй 🌟
    </div>
    <Menubar class="flex justify-between items-center text-slate-900 px-6 py-6">
      <div class="flex items-center space-x-4">
        <img src="/images/Logo.png" alt="Logo" class="h-8 w-auto" />

        <MenubarMenu>
          <RouterLink to="/">
            <MenubarTrigger></MenubarTrigger>
          </RouterLink>
        </MenubarMenu>
        <MenubarMenu>
          <RouterLink to="/courses">
            <MenubarTrigger>Сургалт үзэх</MenubarTrigger>
          </RouterLink>
        </MenubarMenu>
        <MenubarMenu>
          <RouterLink to="/about">
            <MenubarTrigger>Бидний тухай</MenubarTrigger>
          </RouterLink>
        </MenubarMenu>
        <MenubarMenu>
          <RouterLink to="/pricing">
            <MenubarTrigger>Үнийн мэдээлэл</MenubarTrigger>
          </RouterLink>
        </MenubarMenu>
        <MenubarMenu>
          <RouterLink to="/contact">
            <MenubarTrigger>Холбоо барих</MenubarTrigger>
          </RouterLink>
        </MenubarMenu>
      </div>

      <div class="flex items-center space-x-4">
        <MenubarMenu v-if="isAuthenticated">
          <RouterLink to="/cart">
            <MenubarTrigger>Cart</MenubarTrigger>
          </RouterLink>
        </MenubarMenu>

        <MenubarMenu v-if="isAuthenticated">
          <RouterLink to="/profile">
            <MenubarTrigger>Profile</MenubarTrigger>
          </RouterLink>
        </MenubarMenu>

        <MenubarMenu v-if="!isAuthenticated">
          <RouterLink to="/signup">
            <MenubarTrigger>Бүртгүүлэх</MenubarTrigger>
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
