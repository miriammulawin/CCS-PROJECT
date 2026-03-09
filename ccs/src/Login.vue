<template>
  <div :class="$style.page">
    <div :class="$style.card">

      <!-- ── Left panel ── -->
      <div :class="$style.formPanel">

        <!-- Branding -->
        <div :class="$style.brand">
          <img
            src="./assets/CCS_Banner.png"
            alt="UC CCS Logo"
            :class="$style.brandImg"
            @error="handleLogoError"
          />
        </div>

        <h1 :class="$style.heading">CCS Comprehensive Profiling Portal</h1>

        <!-- Login form -->
        <form :class="$style.form" novalidate @submit.prevent="handleLogin">

          <FloatableInput
            id="email"
            v-model="form.email"
            label="Email address"
            type="email"
            autocomplete="email"
            :error="errors.email"
            :disabled="isLoading"
          />

          <FloatableInput
            id="password"
            v-model="form.password"
            label="Password"
            type="password"
            autocomplete="current-password"
            :error="errors.password"
            :disabled="isLoading"
          />

          <!-- Server error -->
          <transition name="fade-slide">
            <div v-if="serverError" :class="$style.serverError" role="alert">
              {{ serverError }}
            </div>
          </transition>

          <!-- Forgot password -->
          <div :class="$style.forgotRow">
            <a href="#" :class="$style.forgotLink" @click.prevent="$emit('forgot-password')">
              Forgot Password?
            </a>
          </div>

          <!-- Login button -->
          <AppButton
            type="submit"
            variant="primary"
            size="lg"
            :block="true"
            :loading="isLoading"
          >
            LOGIN
          </AppButton>

        </form>
      </div>

      <!-- ── Right panel ── -->
      <div :class="$style.heroPanel">
        <img
          src="./assets/CCS_CPS_Login_Picture.png"
          alt="CCS Visual"
          :class="$style.heroImage"
          @error="handleHeroError"
        />
        <div :class="$style.heroOverlay" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import FloatableInput from '@/components/ui/FloatableInput.vue'
import AppButton from '@/components/ui/AppButton.vue'

const emit = defineEmits(['login-success', 'forgot-password'])
const router = useRouter()

const form = reactive({ email: '', password: '' })
const errors = reactive({ email: '', password: '' })
const isLoading = ref(false)
const serverError = ref('')

function validate() {
  errors.email = ''
  errors.password = ''
  let valid = true

  if (!form.email.trim()) {
    errors.email = 'Email address is required.'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
    valid = false
  }

  if (!form.password) {
    errors.password = 'Password is required.'
    valid = false
  } else if (form.password.length < 6) {
    errors.password = 'Password must be at least 6 characters.'
    valid = false
  }

  return valid
}

async function handleLogin() {
  serverError.value = ''
  if (!validate()) return

  isLoading.value = true
  try {
    await new Promise((r) => setTimeout(r, 1500))
    emit('login-success', { email: form.email })
    router.push({ name: 'FacultyDashboard' })
  } catch (err) {
    serverError.value = err?.message || 'Invalid credentials. Please try again.'
  } finally {
    isLoading.value = false
  }
}

function handleLogoError(e) { e.target.style.display = 'none' }
function handleHeroError(e) { e.target.style.display = 'none' }
</script>

<style module src="./styles/Login.module.css" />

<style>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>