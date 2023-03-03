<template>
  <svg
    class="svg-icon"
    :class="{ 'icon-spin': spin }"
    :width="size || width"
    :height="size || height"
    :style="{
      color: color
    }"
  >
    <use :xlink:href="`#icon-${icon}`" />
  </svg>
</template>

<script>
import { defineComponent } from 'vue-demi'
export default defineComponent({
  name: 'SvgIcon',
  props: {
    icon: { type: String, required: true },
    size: { type: [Number, String], default: '' },
    width: { type: [Number, String], default: '1em' },
    height: { type: [Number, String], default: '1em' },
    color: { type: String, default: '' },
    spin: { type: Boolean, default: false },
  },
})
</script>

<style lang="postcss">
.svg-icon {
  fill: currentcolor;

  @apply u-inline-block;

  &.icon-spin {
    animation: icon-spin 2s infinite linear;
  }

  @keyframes icon-spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(359deg);
    }
  }
}
</style>
