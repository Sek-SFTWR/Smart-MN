<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 2s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>
