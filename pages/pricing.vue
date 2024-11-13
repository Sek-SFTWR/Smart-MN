<script setup>
definePageMeta({
  layout: "user",
});
</script>
<template>
  <div class="max-w-5xl mx-auto px-6 py-12 space-y-12">
    <!-- Header Section -->
    <section class="text-center space-y-4">
      <h1 class="text-4xl font-bold text-gray-900">Our Pricings</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Welcome to Skillbridge's Pricing Plan page, where we offer two
        comprehensive options to suit your needs: Monthly and Yearly. We believe
        in providing flexible and affordable pricing options for our audience.
        Whether you’re an individual looking to enhance your skills or a
        business seeking professional development solutions, we’ve got plans
        that fit your needs. Explore our pricing options below and choose the
        one that best fits your requirements.
      </p>
      <div class="flex justify-center mt-6 space-x-4">
        <button
          class="px-4 py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600"
        >
          Monthly
        </button>
        <button
          class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300"
        >
          Yearly
        </button>
      </div>
    </section>

    <!-- Pricing Plans Section -->
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Free Plan Card -->
      <div
        class="bg-white shadow-md rounded-lg p-8 border-t-4 border-amber-500"
      >
        <h2 class="text-xl font-semibold text-gray-800 text-center">
          Free Plan
        </h2>
        <p class="text-3xl font-bold text-gray-900 text-center mt-4">
          $0<span class="text-base font-medium text-gray-600">/month</span>
        </p>
        <ul class="mt-6 space-y-3 text-gray-600">
          <li>✔️ Access to selected free courses.</li>
          <li>✔️ Limited access to materials and resources.</li>
          <li>✔️ Basic community support.</li>
          <li>✔️ No certification upon completion.</li>
          <li>✔️ Ad-supported platform.</li>
          <li>✔️ Access to selected free Plan community forum.</li>
          <li>✔️ Early access to new courses and updates.</li>
        </ul>
        <button
          class="w-full mt-6 px-4 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600"
        >
          Get Started
        </button>
      </div>

      <!-- Pro Plan Card -->
      <div
        class="bg-white shadow-md rounded-lg p-8 border-t-4 border-amber-500"
      >
        <h2 class="text-xl font-semibold text-gray-800 text-center">
          Pro Plan
        </h2>
        <p class="text-3xl font-bold text-gray-900 text-center mt-4">
          $79<span class="text-base font-medium text-gray-600">/month</span>
        </p>
        <ul class="mt-6 space-y-3 text-gray-600">
          <li>✔️ Unlimited access to all courses.</li>
          <li>✔️ Unlimited course materials and resources.</li>
          <li>✔️ Priority support from instructors.</li>
          <li>✔️ Course completion certificates.</li>
          <li>✔️ Ad-free experience.</li>
          <li>✔️ Access to exclusive Pro Plan community forum.</li>
          <li>✔️ Early access to new courses and updates.</li>
        </ul>
        <button
          class="w-full mt-6 px-4 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600"
        >
          Get Started
        </button>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-gray-50 py-10 px-8 rounded-lg space-y-8">
      <div class="text-center">
        <h2 class="text-2xl font-semibold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p class="text-gray-600 mt-2">
          Still have more questions? Contact our team via
          support@skillbridge.com
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="font-semibold text-gray-800 flex justify-between">
              Can I enroll in multiple courses at once?
              <span class="text-amber-500">+</span>
            </h3>
            <p class="text-gray-600 mt-2 hidden">
              Absolutely! You can enroll in multiple courses simultaneously and
              access them at your convenience.
            </p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="font-semibold text-gray-800 flex justify-between">
              What kind of support can I expect from instructors?
              <span class="text-amber-500">+</span>
            </h3>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="font-semibold text-gray-800 flex justify-between">
              Are the courses self-paced or do they have specific start and end
              dates? <span class="text-amber-500">+</span>
            </h3>
          </div>
        </div>
        <div class="space-y-4">
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="font-semibold text-gray-800 flex justify-between">
              Are there any prerequisites for the courses?
              <span class="text-amber-500">+</span>
            </h3>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="font-semibold text-gray-800 flex justify-between">
              Can I download the course materials for offline access?
              <span class="text-amber-500">+</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
