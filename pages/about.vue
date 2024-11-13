<script setup>
definePageMeta({
  layout: "user",
});
</script>

<template>
  <div class="container mx-auto p-8 lg:p-16">
    <!-- Introduction Section -->
    <section class="space-y-4 text-center mb-12 lg:mb-16">
      <h1 class="text-4xl font-bold text-gray-900">About Skillbridge</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Welcome to our platform, where we are passionate about empowering
        individuals to master the world of design and development. We offer a
        wide range of online courses designed to equip learners with the skills
        and knowledge needed to succeed in the ever-evolving digital landscape.
      </p>
    </section>

    <!-- Achievements Section -->
    <section class="space-y-6 lg:space-y-8">
      <h2
        class="text-2xl font-semibold text-gray-900 text-center mb-8 lg:mb-12"
      >
        Achievements
      </h2>
      <p class="text-center text-gray-600 mb-8 lg:mb-12">
        Our commitment to excellence has led us to achieve significant
        milestones along our journey. Here are some of our notable achievements.
      </p>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
      >
        <div
          class="bg-white shadow-lg rounded-lg p-6 lg:p-8 space-y-3 lg:space-y-4"
        >
          <div class="text-orange-500">
            <!-- Icon Placeholder -->
            <span class="text-4xl">🏆</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-800">
            Trusted by Thousands
          </h3>
          <p class="text-gray-600">
            We are proud to have earned the trust of thousands of learners
            worldwide.
          </p>
        </div>
        <div
          class="bg-white shadow-lg rounded-lg p-6 lg:p-8 space-y-3 lg:space-y-4"
        >
          <div class="text-orange-500">
            <!-- Icon Placeholder -->
            <span class="text-4xl">📚</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-800">
            Comprehensive Courses
          </h3>
          <p class="text-gray-600">
            Our courses cover a wide range of topics to help you stay ahead in
            the digital world.
          </p>
        </div>
        <div
          class="bg-white shadow-lg rounded-lg p-6 lg:p-8 space-y-3 lg:space-y-4"
        >
          <div class="text-orange-500">
            <!-- Icon Placeholder -->
            <span class="text-4xl">🌟</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-800">
            High-Quality Content
          </h3>
          <p class="text-gray-600">
            We ensure that our content is of the highest quality, created by
            industry experts.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
</style>
