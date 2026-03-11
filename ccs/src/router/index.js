import { createRouter, createWebHistory } from "vue-router";
import Login from "@/Login.vue";
import FacultyDashboard from "@/facultyPages/FacultyDashboard.vue";
import StudentDashboard from "@/studentPages/StudentDashboard.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/faculty/dashboard",
    name: "FacultyDashboard",
    component: FacultyDashboard,
  },
  {
    path: "/student/dashboard",
    name: "StudentDashboard",
    component: StudentDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
