import Vue from "vue";
import VueRouter from "vue-router";
import Login from '../views/auth/Login.vue'
import Dashboard from "../views/Dashboard.vue";

Vue.use(VueRouter);

const routes = [
  { path: '', component: Login },
  {
    path: "/app",
    component: Dashboard,
    children: [
      {
        path: '',
        component: () => import('../views/Overview.vue')
      },
      {
        path: 'waiting',
        component: () => import('../views/Waiting.vue')
      },
      {
        path: 'schedule',
        component: () => import('../views/Schedule.vue')
      },
      {
        path: 'patients',
        component: () => import('../views/Patients.vue')
      },
      {
        path: 'notes',
        component: () => import('../views/Notes.vue')
      },
      {
        path: 'chats',
        component: () => import('../views/Chats.vue')
      },
      {
        path: 'profile',
        component: () => import('../views/MyProfile.vue')
      },
      {
        path: 'settings',
        component: () => import('../views/Settings.vue')
      },
      {
        path: 'logout',
        component: () => import('../views/Logout.vue')
      }
    ]
  },

];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
