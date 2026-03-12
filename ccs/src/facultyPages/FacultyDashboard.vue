<template>
  <div class="faculty-dashboard">

    <!-- Sidebar -->
    <SidebarNav :activeNav="currentPage" @navigate="currentPage = $event" />

    <!-- Main -->
    <div class="dashboard-main">

      <!-- Topbar -->
      <TopBar />

      <!-- Content -->
      <div class="dashboard-content">

        <!-- Left Column -->
        <div class="dashboard-left">

          <!-- Welcome Banner -->
          <div class="welcome-banner">
            <p class="welcome-title">
              Welcome to the <span class="welcome-ccs">CCS</span>
            </p>
            <p class="welcome-sub">Comprehensive Profiling System</p>
          </div>

          <!-- Announcement -->
          <div class="dashboard-card">
            <div class="card-title">
              <i class="bi bi-megaphone-fill"></i> Announcement
            </div>
            <div class="empty-notice">No announcement yet.</div>
          </div>

          <!-- Events -->
          <div class="dashboard-card">
            <div class="card-title">
              <i class="bi bi-calendar-event-fill"></i> Events
            </div>
            <div class="event-block"></div>
            <div class="event-block"></div>
          </div>

        </div>

        <!-- Right Column -->
        <div class="dashboard-right">
          <div class="calendar-card">

            <!-- Calendar Header -->
            <div class="calendar-header">
              <span class="calendar-day-num">{{ today.day }}</span>
              <div class="calendar-day-info">
                <span class="dow">{{ today.dow }}</span>
                <span class="moy">{{ today.moy }}</span>
              </div>
              <button class="calendar-expand">⤢</button>
            </div>

            <!-- Calendar Lines -->
            <div class="calendar-lines">
              <div v-for="n in 4" :key="n" class="calendar-line"></div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import "../facultyStyles/dashboard.css"
import SidebarNav from "../facultyComponent/SidebarNav.vue"
import TopBar from "../facultyComponent/TopBar.vue"

export default {
  name: "FacultyDashboard",
  components: { SidebarNav, TopBar },
  data() {
    const now = new Date()
    const dows = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    const mons = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
    return {
      currentPage: 'Dashboard',
      today: {
        day: now.getDate(),
        dow: dows[now.getDay()],
        moy: `${mons[now.getMonth()]} ${now.getFullYear()}`
      }
    }
  }
}
</script>
