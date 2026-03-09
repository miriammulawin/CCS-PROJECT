<template>
  <div
    :class="[
      $style.field,
      { [$style.fieldFocused]: isFocused, [$style.fieldFilled]: hasValue, [$style.fieldError]: !!error }
    ]"
  >
    <input
      :id="inputId"
      v-bind="$attrs"
      :type="computedType"
      :value="modelValue"
      :disabled="disabled"
      :autocomplete="autocomplete"
      :class="$style.input"
      @input="$emit('update:modelValue', $event.target.value)"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />

    <label :for="inputId" :class="$style.label">{{ label }}</label>

    <!-- Password toggle -->
    <button
      v-if="type === 'password'"
      type="button"
      :class="$style.eyeBtn"
      tabindex="-1"
      @click="showPassword = !showPassword"
    >
      <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18"
        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
        <line x1="1" y1="1" x2="23" y2="23"/>
      </svg>
    </button>

    <!-- Error message -->
    <span v-if="error" :class="$style.fieldError" role="alert">{{ error }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  modelValue: { type: String, default: '' },
  label:      { type: String, required: true },
  type:       { type: String, default: 'text' },
  disabled:   { type: Boolean, default: false },
  error:      { type: String, default: '' },
  autocomplete: { type: String, default: 'off' },
  id:         { type: String, default: null },
})

defineEmits(['update:modelValue'])

const isFocused    = ref(false)
const showPassword = ref(false)

const inputId    = computed(() => props.id || `field-${Math.random().toString(36).slice(2, 7)}`)
const hasValue   = computed(() => !!props.modelValue)
const computedType = computed(() => {
  if (props.type !== 'password') return props.type
  return showPassword.value ? 'text' : 'password'
})
</script>

<style module src="../../styles/FloatableInput.module.css" />