import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import NewRouter from "../views/NewRouter";
import NotFound from "../views/NotFound";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/new-router", name: "NewRouter", component: NewRouter },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
