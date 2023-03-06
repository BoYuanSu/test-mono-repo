import { defineConfig } from 'vite'
import { resolve } from 'path'
import postcssNested from 'postcss-nested'
import UnoCSS from 'unocss/vite'
import transformerDirectives from '@unocss/transformer-directives'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
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
      entry: resolve(__dirname, './style.js'),
      name: 'shared-ui.style',
    },
  },
})
