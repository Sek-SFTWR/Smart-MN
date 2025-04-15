<script setup lang="ts">
definePageMeta({
  layout: "user"
});
import { RouterLink } from "vue-router";
import { ref, onMounted } from "vue";
import PptxGenJS from "pptxgenjs";
import html2canvas from "html2canvas";
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
    title: "Уян Хатан Хуваарь",
    desc: "Суралцагчидтай хамтран ажиллаж, санаа бодлоо солилцон ойлголтоо дээшлүүлэх."
  },
  {
    id: "unique",
    title: "Мэргэжлийн Заах Арга",
    desc: "Өөрийн цагийн хуваарьт тохируулан суралцах боломж."
  },
  {
    id: "unique",
    title: "Олон Төрлийн Сургалт",
    desc: "Дизайн, хөгжүүлэлтийн чиглэлээр туршлагатай мэргэжилтнүүдээс суралцах."
  },
  {
    id: "uniqueasd",
    title: "Шинэчлэгдсэн Хөтөлбөр",
    desc: "Дизайн, хөгжүүлэлтийн олон төрлийн сэдвүүдийг хамарсан сургалтууд."
  },
  {
    id: "uniquesdf",
    title: "Практик Төслүүд",
    desc: "Салбарын чиг хандлага, шинэ технологид нийцсэн шинэчлэгдсэн агуулга."
  },
  {
    id: "uniquasde",
    title: "Портфолио Хөгжүүлэлт",
    desc: "Ажил олгогчдод үзүүлэх ур чадвараа харуулсан портфолио бүтээх."
  }
];
const video = {
  title: "Welcome to Our Job Finding Platform",
  description:
    "Discover your dream job with us. We connect talent with opportunity.",
  url: "/videos/Waves.mp4" // Local video URL
};

const generatePptFromDiv = async () => {
  const pptx = new PptxGenJS();
  const slideWidth = 10; // Inches
  const slideHeight = 5.62; // Inches (16:9)

  const targetElement = document.getElementById("content-to-export");

  if (!targetElement) {
    console.error("❌ Element not found");
    return;
  }

  // Use html2canvas to capture the whole content
  const fullCanvas = await html2canvas(targetElement, {
    scale: 2, // Higher scale for better quality
    scrollY: -window.scrollY // Prevent capturing only the visible part
  });

  const imgHeightInPx = fullCanvas.height;
  const imgWidthInPx = fullCanvas.width;

  // Define pixels per inch based on slide width
  const pxPerInch = imgWidthInPx / slideWidth;
  const sliceHeightInPx = pxPerInch * slideHeight;

  let offsetY = 0;
  while (offsetY < imgHeightInPx) {
    const canvasSlice = document.createElement("canvas");
    canvasSlice.width = imgWidthInPx;
    canvasSlice.height = Math.min(sliceHeightInPx, imgHeightInPx - offsetY);

    const ctx = canvasSlice.getContext("2d");
    if (ctx) {
      ctx.drawImage(
        fullCanvas,
        0,
        offsetY,
        imgWidthInPx,
        canvasSlice.height,
        0,
        0,
        imgWidthInPx,
        canvasSlice.height
      );

      const imgData = canvasSlice.toDataURL("image/png");

      const slide = pptx.addSlide();
      slide.addImage({
        data: imgData,
        x: 0,
        y: 0,
        w: slideWidth,
        h: canvasSlice.height / pxPerInch
      });
    }

    offsetY += sliceHeightInPx;
  }

  await pptx.writeFile("presentation-from-html.pptx");
};
</script>
<style scoped>
/* Additional styling if needed */
</style>

<template>
  <div class="flex flex-col justify-center items-center" id="content-to-export">
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
        <div class="text-amber-500 px-4">Нээ</div>
        <div>Бүтээлч Чадвараа</div>
      </div>
      <div class="font-semibold text-3xl text-slate-800">
        Онлайн Дизайн болон Хөгжүүлэлтийн Хичээлүүдтэй.
      </div>
      <div class="text-1xl text-slate-800">
        Салбарын Мэргэжилтнүүдээс суралц, Ур Чадвараа Дээшлүүл.
      </div>
      <div class="flex my-6 gap-4">
        <RouterLink to="/courses">
          <Button size="lg" variant="secondary">Хичээлүүд</Button>
        </RouterLink>
        <RouterLink to="/pricing">
          <Button size="lg" variant="default">Үнийн Санал</Button>
        </RouterLink>
        <button
          @click="generatePptFromDiv"
          class="text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all"
        >
          PPTX татах
        </button>
      </div>
    </div>

    <!-- All Workers Section -->
    <div class="w-full bg-gray-100 py-12">
      <div class="text-3xl font-semibold text-center mb-8">Манай Баг</div>
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
          <div class="font-semibold font-sans text-4xl">Давуу талууд</div>
          <div class="text-slate-900 text-sm">
            Бид таны хүссэн чанартай боловсролыг хүргэхийн төлөө ажилладаг.
            Манай платформ нь таны хэрэгцээ шаардлагад нийцсэн шилдэг
            шийдлүүдийг санал болгодог.
          </div>
        </div>
        <div>
          <Button variant="secondary">Бүгдийг харах</Button>
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
