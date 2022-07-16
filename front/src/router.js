import { createWebHistory, createRouter } from "vue-router";
import { authGuard } from "@auth0/auth0-vue";
import Welcome from "./views/Welcome.vue";
import Profile from "./views/Profile.vue";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/protected",
    name: "Profile",
    beforeEnter: authGuard,
    component: Profile,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
