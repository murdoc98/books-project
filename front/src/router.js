import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from './views/HelloWorld.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: HelloWorld,
  },
  {
    path: "/protected",
    name: "Profile",
    component: HelloWorld,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;