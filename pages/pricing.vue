<script setup>
definePageMeta({
  layout: "user"
});
</script>
<template>
  <div class="max-w-5xl mx-auto px-6 py-12 space-y-12">
    <!-- Header Section -->
    <section class="text-center space-y-4">
      <h1 class="text-4xl font-bold text-gray-900">Үнийн Санал</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        MATHMIND-ийн Үнийн Санал хуудсанд тавтай морилно уу. Бид таны хэрэгцээнд
        тохирсон хоёр төрлийн багц санал болгож байна: Сарын болон Жилийн. Бид
        үйлчлүүлэгчиддээ уян хатан, хүртээмжтэй үнийн сонголтуудыг санал
        болгохыг эрхэмлэдэг. Та хувь хүний хөгжил эсвэл байгууллагын мэргэжлийн
        хөгжлийн шийдлийг хайж байгаа эсэхээс үл хамааран бид таны хэрэгцээнд
        тохирсон төлөвлөгөөтэй. Доорх үнийн сонголтуудаас судалж, өөрт тохирох
        нэгийг нь сонгоно уу.
      </p>
      <div class="flex justify-center mt-6 space-x-4">
        <button
          class="px-4 py-2 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600"
        >
          Сарын
        </button>
        <button
          class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300"
        >
          Жилийн
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
          Үнэгүй Багц
        </h2>
        <p class="text-3xl font-bold text-gray-900 text-center mt-4">
          ₮0<span class="text-base font-medium text-gray-600">/сар</span>
        </p>
        <ul class="mt-6 space-y-3 text-gray-600">
          <li>✔️ Сонгосон үнэгүй хичээлүүдийг үзэх</li>
          <li>✔️ Материал, нөөцөд хязгаартай хандах</li>
          <li>✔️ Энгийн хэрэглэгчийн дэмжлэг</li>
          <li>✔️ Төгсөлтийн гэрчилгээгүй</li>
          <li>✔️ Сурталчилгаатай платформ</li>
          <li>✔️ Үнэгүй багцын хэлэлцүүлэгт оролцох</li>
          <li>✔️ Шинэ хичээл, шинэчлэлтийг эхэлж авах</li>
        </ul>
        <button
          class="w-full mt-6 px-4 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600"
        >
          Эхлэх
        </button>
      </div>

      <!-- Pro Plan Card -->
      <div
        class="bg-white shadow-md rounded-lg p-8 border-t-4 border-amber-500"
      >
        <h2 class="text-xl font-semibold text-gray-800 text-center">
          Про Багц
        </h2>
        <p class="text-3xl font-bold text-gray-900 text-center mt-4">
          ₮79,000<span class="text-base font-medium text-gray-600">/сар</span>
        </p>
        <ul class="mt-6 space-y-3 text-gray-600">
          <li>✔️ Бүх хичээлд хязгааргүй хандах</li>
          <li>✔️ Бүх хичээлийн материал, нөөцөд хязгааргүй хандах</li>
          <li>✔️ Багш нараас тэргүүн зэргийн дэмжлэг авах</li>
          <li>✔️ Хичээл төгсөлтийн гэрчилгээ</li>
          <li>✔️ Сурталчилгаагүй туршлага</li>
          <li>✔️ Про багцын онцгой хэлэлцүүлэгт оролцох</li>
          <li>✔️ Шинэ хичээл, шинэчлэлтийг эхэлж авах</li>
        </ul>
        <button
          class="w-full mt-6 px-4 py-3 bg-amber-500 text-white rounded-lg font-medium hover:bg-amber-600"
        >
          Эхлэх
        </button>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-gray-50 py-10 px-8 rounded-lg space-y-8">
      <div class="text-center">
        <h2 class="text-2xl font-semibold text-gray-900">Түгээмэл Асуултууд</h2>
        <p class="text-gray-600 mt-2">
          Өөр асуулт байна уу? Манай багтай холбогдоно уу
          support@skillbridge.com
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-4">
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="font-semibold text-gray-800 flex justify-between">
              Олон хичээлд зэрэг бүртгүүлж болох уу?
              <span class="text-amber-500">+</span>
            </h3>
            <p class="text-gray-600 mt-2 hidden">
              Тийм! Та олон хичээлд зэрэг бүртгүүлж, өөрийн цагаар үзэх
              боломжтой.
            </p>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="font-semibold text-gray-800 flex justify-between">
              Багш нараас ямар дэмжлэг авах вэ?
              <span class="text-amber-500">+</span>
            </h3>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="font-semibold text-gray-800 flex justify-between">
              Хичээлүүд өөрийн хурдаар үзэх үү, эсвэл тогтсон хуваарьтай юу?
              <span class="text-amber-500">+</span>
            </h3>
          </div>
        </div>
        <div class="space-y-4">
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="font-semibold text-gray-800 flex justify-between">
              Хичээлд урьдчилсан шаардлага байгаа юу?
              <span class="text-amber-500">+</span>
            </h3>
          </div>
          <div class="bg-white p-4 rounded-lg shadow-md">
            <h3 class="font-semibold text-gray-800 flex justify-between">
              Хичээлийн материалыг татаж авч офлайнаар үзэх боломжтой юу?
              <span class="text-amber-500">+</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
