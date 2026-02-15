import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  // 1. Добавляем базовый путь, чтобы Vercel корректно строил дерево файлов
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    // 2. Очистка старых файлов билда (критично для Vercel, чтобы не было битых ссылок)
    emptyOutDir: true,
    // 3. Отключаем CSS Code Splitting, если ошибка Preload CSS сохраняется
    // Это объединит весь CSS в один файл и гарантированно решит проблему с загрузкой чанков
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        // Упрощаем имена файлов для стабильности кэша
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
})
