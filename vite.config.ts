import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 修改基础路径，使其适应 GitHub Pages
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});