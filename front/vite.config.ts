import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() as never],
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: 'verbose',
    coverage: {
      provider: 'v8',
      reportsDirectory: './tests/unit/coverage',
      reporter: ['text', 'json', 'html'],
      all: true,
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
