<script setup>
definePageMeta({
  layout: "user",
});
</script>

<template>
  <div class="container mx-auto p-8 lg:p-16">
    <!-- Introduction Section -->
    <section class="space-y-4 text-center mb-12 lg:mb-16">
      <h1 class="text-4xl font-bold text-gray-900">MATHMIND-ийн тухай</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Манай платформд тавтай морилно уу. Бид хувь хүмүүсийг дизайн болон хөгжүүлэлтийн ертөнцөд амжилт гаргахад нь туслахад чин сэтгэлээсээ ханддаг. Бид онлайн сургалтуудын өргөн хүрээг санал болгож, суралцагчдыг өөрчлөгдөж буй дижитал орчинд амжилт гаргахад шаардлагатай ур чадвар, мэдлэгээр хангадаг.
      </p>
    </section>

    <!-- Achievements Section -->
    <section class="space-y-6 lg:space-y-8">
      <h2
        class="text-2xl font-semibold text-gray-900 text-center mb-8 lg:mb-12"
      >
        Амжилтууд
      </h2>
      <p class="text-center text-gray-600 mb-8 lg:mb-12">
        Манай шилдэг байдлыг эрхэмлэн зорьсноор бидний замналд чухал амжилтуудыг бүтээсэн. Энд бидний зарим онцлох амжилтуудыг үзүүлж байна.
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
            Мянга мянган хэрэглэгчдийн итгэл
          </h3>
          <p class="text-gray-600">
            Бид дэлхийн өнцөг булан бүрт байгаа мянга мянган суралцагчдын итгэлийг олж авсандаа бахархдаг.
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
            Цогц сургалтууд
          </h3>
          <p class="text-gray-600">
            Бидний сургалтууд нь өргөн хүрээний сэдвийг хамарч, дижитал орчинд тэргүүлэгч байхыг тань дэмжинэ.
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
            Өндөр чанартай контент
          </h3>
          <p class="text-gray-600">
            Бидний контент нь салбарын мэргэжилтнүүдийн бүтээсэн, хамгийн өндөр чанартай байхыг хангадаг.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
</style>