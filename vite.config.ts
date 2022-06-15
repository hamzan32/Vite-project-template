// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp';
import { getThemeVariables } from 'antd/dist/theme';
// https://vitejs.dev/config/
export default defineConfig({
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
    port : 4001,
  },
   css: {
    preprocessorOptions: {
       less: {
        modifyVars: { 'primary-color': '#13c2c2' },
        modifyVars: getThemeVariables({
          dark: true,
          // compact: true,
        }),
        javascriptEnabled: true,
      },
    },
  },
})
