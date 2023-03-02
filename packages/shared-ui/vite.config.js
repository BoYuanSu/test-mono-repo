import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import postcssNested from 'postcss-nested'
import UnoCSS from 'unocss/vite'
import transformerDirectives from '@unocss/transformer-directives'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      transformers: [
        transformerDirectives(), // https://github.com/unocss/unocss/issues/1570
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [
        postcssNested,
      ],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, './index.js'),
      name: 'shared-ui',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
