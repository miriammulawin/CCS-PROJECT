<template>
  <div class="sidebar">

    <!-- Header -->
    <div class="d-flex justify-content-between align-items-center px-3 py-3">
      <span class="text-white fw-bold fs-3" style="font-family:Gabarito,sans-serif;">Faculty</span>
      <i class="bi bi-list text-white fs-2" style="cursor:pointer;"></i>
    </div>

  

    <!-- Profile -->
    <div class="profile-section">
      <i class="bi bi-pencil-square profile-edit-icon"></i>
      <div class="d-flex align-items-center gap-3">
        <div class="profile-avatar"></div>
        <div>
          <p class="profile-name">{{ faculty.name }}</p>
          <p class="profile-id">{{ faculty.id }}</p>
        </div>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="sidebar-nav">
      <template v-for="(item, index) in navItems" :key="item.name">
        <div
          class="nav-item-row gap-4"
          :class="{ 'active-nav': activeNav === item.name }"
          @click="setActive(item.name)"
        >
          <i :class="['bi', item.icon]"></i>
          <span>{{ item.label }}</span>
        </div>
        <hr v-if="index < navItems.length - 1" class="nav-divider" />
      </template>
    </nav>

    <!-- Watermark -->
    <div class="sidebar-watermark">
      <img src="../assets/ccs-logo.png" alt="CCS" onerror="this.style.display='none'" />
    </div>

  </div>
</template>

<script>
import "../facultyStyles/sidebar.css"

export default {
  name: 'SidebarNav',
  props: {
    activeNav: { type: String, default: 'Dashboard' }
  },
  emits: ['navigate'],
  data() {
    return {
      faculty: {
        name: 'Miriam B. Mulawin',
        id: '2203375'
      },
      navItems: [
        { name: 'Dashboard',   label: 'Dashboard',   icon: 'bi-grid-fill' },
        { name: 'StudentList', label: 'Student List', icon: 'bi-justify' },
        { name: 'Schedule',    label: 'Schedule',     icon: 'bi-calendar3' },
        { name: 'Events',      label: 'Events',       icon: 'bi-calendar-event' },
        { name: 'SignOut',     label: 'Sign Out',     icon: 'bi-arrow-left-circle' }
      ]
    }
  },
  methods: {
    setActive(name) { this.$emit('navigate', name) }
  }
}
</script>