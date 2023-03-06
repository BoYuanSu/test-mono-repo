<template>
  <div class="input-text">
    <el-input
      v-model="observeValue"
      v-bind="{...restAttrs}"
      :name="name"
      :suffixIcon="suffix"
      @blur="emits('blur')"
    />
  </div>
</template>

<script setup>
import { useVModel } from '@vueuse/core'
import { h, toRefs, useAttrs } from 'vue-demi'
import SvgIcon from '../SvgIcon/SvgIcon.vue'
const props = defineProps({
  name: { type: String, required: true },
  modelValue: { type: [Object, File, String, Number] },

  error: { type: Boolean, default: false },

  prefixIcon: { type: [String, Object], default: '' },
  suffixIcon: { type: [String, Object], default: '' },

  autocomplete: { type: String, default: '' },

})
const { class: className, ...restAttrs } = useAttrs()

const emits = defineEmits(['update:modelValue', 'blur', 'focus', 'clear', 'click'])

const observeValue = useVModel(props, 'modelValue', emits)

const { suffixIcon } = toRefs(props)
const suffix = {
  render: () => h(
    SvgIcon,
    { icon: suffixIcon.value, size: 20 }),
}

</script>

<style lang="postcss">
.input-text {
  @apply u-w-full;

  .el-input__wrapper {
    &.is-focus {
      @apply u-shadow-none u-border-primary-100 u-border-solid u-border-1 u-py-0;
    }
  }

  .el-input__inner {
    @apply u-h-9;
  }
}
</style>
