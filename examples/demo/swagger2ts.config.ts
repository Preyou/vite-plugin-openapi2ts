import { defineConfig } from "@1szx1/vite-plugin-swagger2ts";

export default defineConfig({
    sources: [
        {
            jsonUrl: "http://xxx.com",
            formatDocs(docs) {
                docs.basePath = ''
                return docs
            },
            output: "./src/swagger1.ts"
        },
        {
            swaggerUrl: "http://xxx.com",
            output: "./src/swagger2.ts"
        }
    ]
})