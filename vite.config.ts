// @ts-nocheck
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';
import { getThemeVariables } from 'antd/dist/theme';
import path from 'path';
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
      sassLoader: {
        includePaths: [path.resolve(__dirname, './template.scss')],
      },
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
            // dark: true,
            compact: true,
          }),
          javascriptEnabled: true,
        },
      },
    },
  });
};
