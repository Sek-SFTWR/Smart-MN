<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="bg-gray-800 text-white p-4">
      <div class="max-w-5xl mx-auto flex justify-between items-center">
        <h1 class="text-2xl font-bold">Сагс</h1>
        <RouterLink to="/" class="text-amber-500 hover:underline"
          >Нүүр хуудас руу буцах</RouterLink
        >
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow p-4 bg-gray-100">
      <div class="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 class="text-xl font-semibold mb-4">Таны Сагс</h2>
        <ul v-if="cart.length" class="space-y-2">
          <li
            v-for="course in cart"
            :key="course.course_id"
            class="flex justify-between items-center"
          >
            <span>{{ course.title }}</span>
            <button
              @click="removeFromCart(course.course_id)"
              class="text-red-500 hover:underline"
            >
              Устгах
            </button>
          </li>
        </ul>
        <p v-else class="text-gray-500">Сагс хоосон байна.</p>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4">
      <div class="max-w-5xl mx-auto text-center">
        <p>&copy; 2023 MATHMIND. Бүх эрх хуулиар хамгаалагдсан.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
definePageMeta({
  layout: "user"
});

import useCart from "@/composables/user/useCart";

const { cart, removeFromCart } = useCart();
</script>
