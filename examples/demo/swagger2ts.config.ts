import { defineConfig } from "@1szx1/vite-plugin-swagger2ts";

export default defineConfig({
    sources: [
        {
            jsonPath: "./src/assets/示例项目.openapi.json",
            output: "./src/api/openApi.ts",
            glob: {
                namespace: 'ExpProject',
                output: "./src/api/openApi.d.ts",
            }
        }
    ]
})