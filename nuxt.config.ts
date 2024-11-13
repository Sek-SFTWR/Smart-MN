export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "nuxt-mdi",
    "radix-vue/nuxt",
    "@vue-api/nuxt",
  ],
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: "http://127.0.0.1:8000",
    },
  },
});
