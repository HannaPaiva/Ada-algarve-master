import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [vue()],
  proxy: {
    '/api': {
         target: 'https://localhost:8000',
         changeOrigin: true,
         secure: false,      
         ws: true,
     }
}
})
