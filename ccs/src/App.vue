<template>
  <div id="app">
    <FacultyDashboard />
  </div>
</template>

<script>

import FacultyDashboard from './facultyPages/FacultyDashboard.vue'

export default {
  name: 'App',
  components: {
    FacultyDashboard
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #e0e0e0;
}
</style>