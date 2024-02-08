import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  server: {
    port: 3000,
  },
  envDir: "./env",
  plugins: [react(), copy(
    {
      targets: [
        {src: "src/data", dest: "dist"},
        {src: "src/service-worker.js", dest: "dist"},
      ],
      hook: 'writeBundle'
    }
  )],
})
