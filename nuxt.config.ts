// https://nuxt.com/docs/api/configuration/nuxt-config

import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  alias: {
    images: fileURLToPath(new URL("./assets/images", import.meta.url)),
  },
  typescript: {
    // typeCheck: true,
    // strict: true
  },
  eslint: {
    config: {
      standalone: false,
      // stylistic: true
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  modules: ["nuxt-icons", "@nuxt/eslint", "@nuxt/image"],

  css: ["@/assets/styles/normalize.scss", "@/assets/styles/index.scss"],
});
