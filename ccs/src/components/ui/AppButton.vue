<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      styles.btn,
      styles[`btn--${variant}`],
      styles[`btn--${size}`],
      { [styles['btn--loading']]: loading, [styles['btn--block']]: block }
    ]"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" :class="styles.spinner" aria-hidden="true"></span>
    <span :class="[styles.label, { [styles['label--hidden']]: loading }]">
      <slot />
    </span>
  </button>
</template>

<script setup>
import styles from '@/styles/AppButton.module.css'

defineOptions({ inheritAttrs: false })

defineProps({
  type: {
    type: String,
    default: 'button',
    validator: (v) => ['button', 'submit', 'reset'].includes(v),
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'outline', 'ghost', 'danger'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
})

defineEmits(['click'])
</script>