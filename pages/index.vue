<template>
  <div class="flex flex-col justify-center items-center">
    <!-- Home Part 1: Course Price and List -->
    <div class="flex flex-col my-24 items-center justify-center">
      <div
        class="flex font-semibold text-4xl px-6 bg-white rounded-lg py-6 mb-4"
      >
        <div
          class="h-10 w-10 bg-amber-100 flex justify-center items-center rounded-md"
        >
          <MdiIcon icon="mdiLightningBolt" size="24px" />
        </div>
        <div class="text-amber-500 px-4">Unlock</div>
        <div>Your Creative Potential</div>
      </div>
      <div class="font-semibold text-3xl text-slate-800">
        with Online Design and Development Courses.
      </div>
      <div class="text-1xl text-slate-800">
        Learn from Industry Experts and Enhance Your Skills.
      </div>
      <div class="flex my-6 gap-4">
        <RouterLink to="/courses">
          <Button size="lg" variant="secondary">Explore Courses</Button>
        </RouterLink>
        <RouterLink to="/price">
          <Button size="lg" variant="default">View Pricing</Button>
        </RouterLink>
      </div>
    </div>

    <!-- All Workers Section -->
    <div class="w-full bg-gray-100 py-12">
      <div class="text-3xl font-semibold text-center mb-8">Meet Our Team</div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 p-6">
        <div
          v-for="(worker, index) in workers"
          :key="index"
          class="flex flex-col items-center"
        >
          <img
            :src="worker.image"
            :alt="`${worker.name} Photo`"
            class="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover shadow-lg mb-4"
          />
          <div class="text-lg font-semibold">{{ worker.name }}</div>
          <div class="text-sm text-gray-600">{{ worker.role }}</div>
        </div>
      </div>
    </div>
    <!-- <div class="flex gap-lg m-9 p-9">
      <button @click="toLocal" class="bg-slate-900 p-8 m-6 rounded-lg">
        save
      </button>
      <button @click="byeLocal" class="bg-slate-700 p-8 m-6 rounded-lg">
        delete
      </button>
    </div> -->
    <!-- Video Introduction Section -->
    <div class="flex flex-col items-center justify-center p-6 w-full h-[400px]">
      <video
        v-if="video.url"
        controls
        class="w-full h-full rounded-lg shadow-lg object-cover"
      >
        <source :src="video.url" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <!-- System Benefits Section -->
    <div class="flex flex-col w-full m-6 px-6">
      <div class="flex w-full justify-between">
        <div class="flex flex-col">
          <div class="font-semibold font-sans text-4xl">Benefits</div>
          <div class="text-slate-900 text-sm">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </div>
        </div>
        <div>
          <Button variant="secondary">View All</Button>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-8">
        <div
          v-for="item in Benefits"
          :key="item.id"
          class="flex flex-col bg-white rounded-lg p-6"
        >
          <div class="font-semibold text-2xl">{{ item.title }}</div>
          <div class="text-slate-900 text-md">{{ item.desc }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "user",
});
import { RouterLink } from "vue-router";
import { ref, onMounted } from "vue";

interface Worker {
  name: string;
  image: string;
  role: string;
}
const workers = ref<Worker[]>([]);
onMounted(async () => {});
const toLocal = () => {
  const toke = "this is token right ?";
  localStorage.setItem("tokee", toke);
};
const byeLocal = () => {
  localStorage.removeItem("tokee");
  localStorage.removeItem("elearn-token");
};

const Benefits = [
  {
    id: "unique",
    title: "Flexible Learning Schedule",
    desc: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
  },
  {
    id: "unique",
    title: "Expert Instruction",
    desc: "Fit your coursework around your existing commitments and obligations.",
  },
  {
    id: "unique",
    title: "Diverse Course Offerings",
    desc: "Learn from industry experts who have hands-on experience in design and development.",
  },
  {
    id: "uniqueasd",
    title: "Updated Curriculum",
    desc: "Explore a wide range of design and development courses covering various topics.",
  },
  {
    id: "uniquesdf",
    title: "Practical Projects and Assignments",
    desc: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
  },
  {
    id: "uniquasde",
    title: "Portfolio Development",
    desc: "Develop a portfolio showcasing your skills and abilities to potential employers.",
  },
];
const video = {
  title: "Welcome to Our Job Finding Platform",
  description:
    "Discover your dream job with us. We connect talent with opportunity.",
  url: "/videos/Waves.mp4", // Local video URL
};
</script>
<style scoped>
/* Additional styling if needed */
</style>
