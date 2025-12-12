import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

module.exports = defineConfig({
  build: { outDir: './build' },
  plugins: [react()],
});
