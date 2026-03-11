<template>
  <div :class="[$style.dashboardWrapper, 'd-flex', 'flex-row']">

    <!-- Sidebar (full height, left column) -->
    <StudentSidebar
      :activeNav="currentNav"
      @navigate="currentNav = $event"
    />

    <!-- Right column: TopNav + Main stacked -->
    <div class="d-flex flex-column flex-grow-1">

      <!-- Top Nav -->
      <StudentTopNav :notifCount="3" @signout="handleSignOut" />

      <!-- Main content -->
      <main :class="[$style.mainContent, 'flex-grow-1', 'p-3', 'p-lg-4']">

        <h4 :class="[$style.pageTitle, 'mb-3']">Student Dashboard</h4>

        <div :class="[$style.contentCard, 'p-4', 'rounded']">
          <h5 :class="$style.welcomeHeading">
            Welcome to the <span :class="$style.accentCCS">CCS</span>
          </h5>
          <p :class="[$style.welcomeSub, 'mb-0']">Comprehensive Profiling System</p>
        </div>

      </main>
    </div>

  </div>
</template>

<script>
import StudentSidebar from '../studentComponent/StudentSidebar.vue'
import StudentTopNav  from '../studentComponent/StudentTopNav.vue'

export default {
  name: 'StudentDashboard',
  components: { StudentSidebar, StudentTopNav },
  data() {
    return {
      currentNav: 'Dashboard'
    }
  },
  methods: {
    handleSignOut() {
      this.$router.push('/')
    }
  }
}
</script>

<style module src="../studentStyles/StudentDashboard.module.css"></style>