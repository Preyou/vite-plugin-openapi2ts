import { defineConfig } from "@1szx1/vite-plugin-swagger2ts";

export default defineConfig({
    swaggerUrl: "http://abc.com",
    output: "./src/swagger.ts"
})