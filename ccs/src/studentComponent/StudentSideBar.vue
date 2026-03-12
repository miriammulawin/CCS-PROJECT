<template>
  <!-- Collapsed: icons-only strip -->
  <div v-if="isCollapsed" :class="[$style.sidebarCollapsed, 'd-flex', 'flex-column', 'align-items-center']">

    <div :class="[$style.collapsedToggle, 'd-flex', 'justify-content-center', 'w-100', 'py-3']">
      <i class="bi bi-list" :class="$style.menuIcon" @click="isCollapsed = false"></i>
    </div>

    <hr class="w-100 my-0" :class="$style.collapsedDivider" />

    <nav class="d-flex flex-column align-items-center w-100 py-2">
      <div
        v-for="item in navItems"
        :key="item.name"
        :class="[
          $style.collapsedNavItem,
          activeNav === item.name ? $style.collapsedNavActive : '',
          'd-flex', 'justify-content-center', 'align-items-center', 'mb-2'
        ]"
        @click="setActive(item.name)"
        :title="item.label"
      >
        <i :class="['bi', item.icon, $style.collapsedNavIcon]"></i>
      </div>
    </nav>

  </div>

  <!-- Expanded sidebar -->
  <div v-else :class="[$style.sidebar, 'd-flex', 'flex-column']">

    <!-- Header -->
    <div :class="[$style.sidebarHeader, 'd-flex', 'justify-content-between', 'align-items-center', 'px-3', 'py-2']">
      <span :class="$style.sidebarTitle">Student</span>
      <i class="bi bi-list" :class="$style.menuIcon" @click="isCollapsed = true"></i>
    </div>

    <!-- Profile Card -->
    <div :class="[$style.profileCard, 'mx-2', 'px-3', 'py-3']">
      <div class="d-flex justify-content-center mb-2">
        <div :class="$style.avatar">
          <img v-if="student.avatarUrl" :src="student.avatarUrl" :alt="student.name" :class="$style.avatarImg" />
          <i v-else class="bi bi-person-fill" :class="$style.avatarIcon"></i>
        </div>
      </div>
      <div class="text-center">
        <p :class="$style.studentName">{{ student.name }}</p>
        <p :class="$style.studentId">{{ student.id }}</p>
        <hr :class="[$style.profileDivider, 'my-2']" />
        <p :class="$style.studentMeta">Type: {{ student.type }}</p>
        <p :class="$style.studentMeta">Status: {{ student.status }}</p>
        <p :class="$style.studentMeta">Current Year Level: {{ student.year }}</p>
        <p :class="[$style.studentMeta, 'mb-0']">Section/s Enrolled: {{ student.section }}</p>
      </div>
    </div>

    <!-- Nav Items -->
    <div :class="[$style.navWrapper]">
      <div
        v-for="item in navItems"
        :key="item.name"
        :class="[
          $style.navItem,
          activeNav === item.name ? $style.activeNav : '',
          'd-flex', 'align-items-center', 'px-3', 'py-2', 'mb-2'
        ]"
        @click="setActive(item.name)"
      >
        <i :class="['bi', item.icon, $style.navIcon, 'me-2']"></i>
        <span :class="$style.navLabel">{{ item.label }}</span>
        <span v-if="item.badge" :class="[$style.navBadge, 'ms-auto']">{{ item.badge }}</span>
      </div>
    </div>

    <!-- Spacer -->
    <div class="flex-grow-1"></div>

    <!-- Logo Watermark -->
    <div :class="[$style.logoWrap, 'd-flex', 'flex-column', 'align-items-center', 'pb-3', 'gap-1']">
      <div :class="$style.logoCircle">
        <i class="bi bi-mortarboard-fill" :class="$style.logoIcon"></i>
      </div>
      <span :class="$style.logoLabel">CCS</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'StudentSidebar',
  props: {
    activeNav: {
      type: String,
      default: 'Dashboard'
    }
  },
  emits: ['navigate'],
  data() {
    return {
      isCollapsed: false,
      student: {
        name: 'Jessa V. Cariñaga',
        id: '2001518',
        type: 'Regular',
        status: 'Enrolled',
        year: '4th Year',
        section: '4IT-D',
        avatarUrl: null
      },
      navItems: [
        { name: 'Dashboard',       label: 'Dashboard',        icon: 'bi-grid-fill'      },
        { name: 'Events',          label: 'Events',           icon: 'bi-calendar-event' },
        { name: 'Schedule',        label: 'Schedule',         icon: 'bi-calendar3'      },
        { name: 'CollegeResearch', label: 'College Research', icon: 'bi-journal-text'   },
        { name: 'Profile',         label: 'Profile',          icon: 'bi-person'         },
        { name: 'Clearance',       label: 'Clearance',        icon: 'bi-patch-check'    }
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

<style module src="../studentStyles/StudentSidebar.module.css"></style>