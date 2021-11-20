import Path             from 'path';
import { defineConfig } from 'vite';
import SolidPlugin      from 'vite-plugin-solid';

export default defineConfig({
  base    : './',
  plugins : [SolidPlugin()],
  resolve : {
    alias : {
      '@' : Path.resolve(__dirname, './src'),
    },
  },
  build   : {
    target                : 'esnext',
    polyfillDynamicImport : false,
  },
});
