import { createRouter, createWebHistory } from "vue-router";
import SStories from "../page/success-stories.vue";
import Home from "../page/Home.vue";
import ContactUs from "../page/ContactUs.vue";

const routes = [
  { path: "/", name: "success", component: SStories },
  { path: "/home", name: "home", component: Home },
  { path: "/contact-us", name: "contact-us", component: ContactUs },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
