<template>
  <div class="sidebar">


    <div class="sidebar-header d-flex justify-content-between align-items-center px-3 py-2">
      <span class="text-white fw-bold">Faculty</span>
      <i class="bi bi-list text-white fs-5" style="cursor:pointer;"></i>
      
    </div>
    <hr>

  </div>
</template>

<script>
import "../facultyStyles/sidebar.css"

export default {
  name: 'SidebarNav',
  props: {
    activeNav: {
      type: String,
      default: 'Dashboard'
    }
  },
  emits: ['navigate'],
  data() {
    return {
      faculty: {
        name: 'Miriam B. Mulawin',
        id: '2251276'
      },
      navItems: [
        { name: 'Dashboard', label: 'Dashboard', icon: 'bi-grid-fill' },
        { name: 'StudentList', label: 'Student List', icon: 'bi-list-ul' },
        { name: 'Schedule', label: 'Schedule', icon: 'bi-calendar3' },
        { name: 'Events', label: 'Events', icon: 'bi-calendar-event' },
        { name: 'SignOut', label: 'Sign Out', icon: 'bi-clock' }
      ]
    }
  },
  methods: {
    setActive(name) {
      this.$emit('navigate', name)
    }
  }
}
</script>