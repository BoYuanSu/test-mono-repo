
<template>
  <el-button
    class="base-button"
    :class="{
      'btn-primary': type === 'primary',
      'btn-secondary': type === 'secondary',
      'btn-plain': type === 'plain',
      'btn-disabled': disabled,
    }"
    :disabled="disabled"
    v-bind="{...attrs}"
  >
    <slot />
  </el-button>
</template>

<script setup>
import { useAttrs } from 'vue-demi'

const props = defineProps({
  type: { type: String, default: 'primary' },
  disabled: { type: Boolean, default: false },
})

const attrs = useAttrs()

</script>

<style lang="postcss" src="./style.css"></style>
