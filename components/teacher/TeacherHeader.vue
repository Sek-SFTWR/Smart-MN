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

import { useRouter } from "vue-router";

const router = useRouter();
const handleLogout = () => {
  localStorage.removeItem("elearn-token");
  router.push("/login");
};
</script>

<template>
  <div class="w-full px-4 py-2 flex flex-col sticky top-0 z-50">
    <Menubar class="flex justify-right items-rigth text-slate-900 px-6 py-6">
      <div class="flex items-center space-x-4">
        <MenubarMenu>
          <div @click="handleLogout">
            <MenubarTrigger>Logout</MenubarTrigger>
          </div>
        </MenubarMenu>
      </div>
    </Menubar>
  </div>
</template>
