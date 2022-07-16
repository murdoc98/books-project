import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "./views/HelloWorld.vue";
import { authGuard } from "@auth0/auth0-vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
    meta: {
      isPublic: true,
    },
  },
  {
    path: "/protected",
    name: "Profile",
    beforeEnter: authGuard,
    component: HelloWorld,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
