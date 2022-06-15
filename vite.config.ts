// @ts-nocheck
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import { getThemeVariables } from 'antd/dist/theme';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  test: {
    globals: true,
    reporters: ['verbose'],
    coverage: {
      all: true,
      reporter: ['text', 'html', 'lcov'],
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style`,
        },
      ],
    }),
  ],
  server: {
    port: 4001,
    watch: {
      ignored: ['!**/node_modules/**'],
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // modifyVars: { 'primary-color': '#13c2c2' },
        modifyVars: getThemeVariables({
          dark: true,
          // compact: true,
        }),
        javascriptEnabled: true,
      },
    },
  },
});
