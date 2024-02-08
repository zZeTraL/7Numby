import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  server: {
    port: 3000,
  },
  plugins: [react(), copy(
    {
      targets: [
        {src: "src/data", dest: "dist"},
      ],
      hook: 'writeBundle'
    }
  )],
})
