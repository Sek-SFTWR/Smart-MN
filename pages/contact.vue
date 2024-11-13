<script setup lang="ts">
definePageMeta({
  layout: "user",
});
</script>
<template>
  <div class="bg-gray-50 min-h-screen flex items-center justify-center">
    <div class="max-w-5xl w-full px-6 py-12 bg-white shadow-lg rounded-lg">
      <h1 class="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <p class="text-gray-600 mb-8">
        Welcome to SkillBridge's Pricing Plan page, where we offer two
        comprehensive options to cater to your needs: Free and Pro. We believe
        in providing flexible and affordable pricing options for our services.
        Whether you’re an individual looking to enhance your skills or a
        business seeking professional development solutions, we have a plan that
        suits you. Explore our pricing options below and choose the one that
        best fits your requirements.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Contact Form -->
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter First Name"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input
              type="text"
              placeholder="Enter Last Name"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
          <input
            type="email"
            placeholder="Enter your Email"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="text"
            placeholder="Enter Phone Number"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="text"
            placeholder="Enter your Subject"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <textarea
            placeholder="Enter your Message here..."
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
            rows="4"
          ></textarea>
          <button
            class="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition"
          >
            Send Your Message
          </button>
        </div>

        <!-- Contact Information -->
        <div class="space-y-6">
          <div
            class="p-4 border border-gray-200 rounded-md flex items-center space-x-4"
          >
            <span class="text-gray-600">
              <!-- Email Icon -->
              <svg
                class="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
            </span>
            <span class="text-gray-700">support@skillbridge.com</span>
          </div>
          <div
            class="p-4 border border-gray-200 rounded-md flex items-center space-x-4"
          >
            <span class="text-gray-600">
              <!-- Phone Icon -->
              <svg
                class="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M13 11h8v2h-8v7h-2v-7H3v-2h8V4h2v7z" />
              </svg>
            </span>
            <span class="text-gray-700">+91 00000 00000</span>
          </div>
          <div
            class="p-4 border border-gray-200 rounded-md flex items-center space-x-4"
          >
            <span class="text-gray-600">
              <!-- Location Icon -->
              <svg
                class="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"
                />
              </svg>
            </span>
            <span class="text-gray-700">Somewhere in the World</span>
          </div>
          <div class="flex space-x-4 text-gray-600">
            <!-- Social Icons -->
            <a href="#" class="hover:text-gray-800">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <!-- Facebook icon path here -->
              </svg>
            </a>
            <a href="#" class="hover:text-gray-800">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <!-- Twitter icon path here -->
              </svg>
            </a>
            <a href="#" class="hover:text-gray-800">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <!-- LinkedIn icon path here -->
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
