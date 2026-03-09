<template>
  <div class="faculty-dashboard">
    <SidebarNav />
  </div>
</template>

<script>
import "../facultyStyles/dashboard.css"
import SidebarNav from "../facultyComponent/SidebarNav.vue"

export default {
  name: "FacultyDashboard",
  components: {
    SidebarNav
  }
}
</script>