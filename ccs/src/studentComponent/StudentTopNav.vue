<template>
  <nav :class="[$style.topNav, 'd-flex', 'align-items-center', 'justify-content-between', 'px-3', 'px-md-4', 'w-100']">

    <!-- Left: Brand -->
    <div class="d-flex flex-column justify-content-center">
      <span :class="$style.brandTitle">CCS</span>
      <span :class="$style.brandSub">Comprehensive Profiling System</span>
    </div>

    <!-- Right: Icons -->
    <div class="d-flex align-items-center gap-3">

      <!-- Bell -->
      <div :class="$style.notifWrap">
        <i class="bi bi-bell-fill" :class="$style.actionIcon"></i>
        <span v-if="notifCount" :class="$style.notifBadge">{{ notifCount }}</span>
      </div>

      <!-- Sign out -->
      <i
        class="bi bi-box-arrow-right"
        :class="$style.actionIcon"
        @click="$emit('signout')"
        title="Sign Out"
      ></i>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'StudentTopNav',
  props: {
    notifCount: {
      type: Number,
      default: 0
    }
  },
  emits: ['signout']
}
</script>

<style module src="../studentStyles/StudentTopNav.module.css"></style>