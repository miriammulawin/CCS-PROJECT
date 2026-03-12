<template>
  <div class="topbar">
    <div>
      <div class="topbar-logo-text">CCS</div>
      <div class="topbar-logo-sub">Comprehensive Profiling System</div>
    </div>
    <div class="topbar-actions">
      <i class="bi bi-bell topbar-bell"></i>
      <div class="topbar-search">
        <input type="text" placeholder="" />
        <button><i class="bi bi-search"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import "../facultyStyles/topbar.css"

export default {
  name: 'TopBar'
}
</script>