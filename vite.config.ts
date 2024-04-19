import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import swagger2TsPlugin from './src'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    swagger2TsPlugin({
            jsonUrl: "http://127.0.0.1:4523/export/openapi/8?version=3.1", // swagger-resources URL
            output: "./types/auto/openapi", // not require, default './src/swagger.ts'
            glob:{
              namespace:'Api',
              output:'./types/auto/auto-types.d.ts'
            }
        })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
