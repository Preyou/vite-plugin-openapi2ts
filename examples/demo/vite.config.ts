import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Swagger2Ts from "@1szx1/vite-plugin-swagger2ts";
import Restart from "vite-plugin-restart";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Swagger2Ts(),
    Restart({
      restart: ["../../dist/*.js"]
    })
  ]
});
