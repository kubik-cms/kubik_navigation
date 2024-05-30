import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(_dirname, 'src/index.ts'),
      name: 'navigation',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      output: {
        dir: 'dist',
      },
    },
  },
});