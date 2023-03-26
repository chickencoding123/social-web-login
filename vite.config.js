import Path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

/** @type {import('vite').BuildOptions} */
export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ['node_modules', 'typings'],
      insertTypesEntry: true
    })
  ],
  build: {
    minify: false,
    lib: {
      entry: Path.resolve(__dirname, 'lib/index.ts'),
      name: 'index',
      fileName: 'index'
    }
  }
})
