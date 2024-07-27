import { createRouter, createWebHistory } from "vue-router";
import Home from "../page/Home.vue";
import SStories from "../page/success-stories.vue";
import ContactUs from "../page/ContactUs.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/success", name: "success", component: SStories },
  { path: "/contact-us", name: "contact-us", component: ContactUs },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
