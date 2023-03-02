import { defineConfig, presetAttributify } from 'unocss'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno({ prefix: 'u-' }),
  ],
})
