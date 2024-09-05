import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';
import localdata from './local-data.json'
import aboutdata from './about-data.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    viteCompression({
      // Options pour gzip
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false, // Ne pas supprimer les fichiers originaux
    }),
    viteCompression({
      // Options pour Brotli
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: false, // Ne pas supprimer les fichiers originaux
    })
  ],
  define: {
    'downloadProject': JSON.stringify("https://download-directory.github.io/?url=https://github.com/DevJ2K/app_computorv1/tree/main/backend/computorv1"),
    'localData': localdata,
    'aboutData': aboutdata
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
