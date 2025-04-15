<script setup lang="ts"></script>

<template>
  <div class="flex flex-col min-h-80 bg-white">
    <!-- Main Content -->
    <div class="flex-1 h-48 overflow-hidden">
      <!-- Place your main content here -->
    </div>

    <!-- Footer -->
    <footer class="w-full flex flex-col items-center bg-white mb-10">
      <div class="flex flex-row justify-around w-full items-center p-4">
        <!-- Logo and Contact -->
        <div class="flex flex-col text-slate-600">
          <div class="flex gap-2">
            <img src="/images/Logo.png" alt="Logo" class="h-12 w-12 mb-2" />
          </div>
          <div class="flex gap-2">
            <MdiIcon icon="mdiEmailCheckOutline" size="24px" />
            <div>Seksergelen470@gmail.com</div>
          </div>
          <div class="flex gap-2">
            <MdiIcon icon="mdiPhone" size="24px" />
            <div>+976 94231883</div>
          </div>
          <div class="flex gap-2">
            <MdiIcon icon="mdiMapMarker" size="24px" />
            <div>
              Манлай Баатар Дамдинсүрэнгийн Гудамж 45 Apartment 45, BZD - 25 khoroo, Ulaanbaatar 13372
            </div>
          </div>
        </div>

        <!-- Links: Home Section -->
        <div class="flex flex-col text-slate-600">
          <div class="font-bold text-black">Үндсэн</div>
          <div>Боломжууд</div>
          <div>Сургалтууд</div>
          <div>Хамгийн түгээмэл асуултууд</div>
        </div>

        <!-- Links: About Us Section -->
        <div class="flex flex-col text-slate-600">
          <div class="font-bold text-black">Бидний тухай</div>
          <div>Компани</div>
          <div>Бидний амжилт</div>
          <div>Хүрэх зорилго</div>
        </div>
      </div>

      <!-- Bottom Section (if needed) -->
      <div class="text-center p-3 text-slate-600">
        &copy; 2024 MongolSoft and SEK, All rights reserved.
      </div>
    </footer>
  </div>
</template>
