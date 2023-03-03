/* eslint-disable node/no-path-concat */
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import transformerDirectives from '@unocss/transformer-directives'
import postcssNested from 'postcss-nested'
import fs from 'fs'
import ElementPlus from 'unplugin-element-plus/vite'

// const fs = require('fs')

const https = () => {
  const useHttps = (process.env.npm_lifecycle_event || '').includes(':https')
  const keyPem = `${__dirname}/localhost-key.pem`
  const certPem = `${__dirname}/localhost.pem`
  if (!useHttps) return {}
  if (!fs.existsSync(keyPem) || !fs.existsSync(certPem)) return {}
  return {
    https: {
      key: fs.readFileSync(keyPem),
      cert: fs.readFileSync(certPem),
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    ElementPlus(),
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
  server: {
    ...https(),
    cors: true,
    port: 3000,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
