import homeComponent from "@/components/home.component.vue";
import categoryComponent from "@/components/category-component.vue";
import tutorialComponent from "@/components/tutorial-component.vue";
import userListComponent from "@/components/user-list.component.vue";
import notFoundComponent from "@/components/not-found.component.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import CreateUserComponent from "@/components/create-user.component.vue";

const routes = [
  { path: "/", component: homeComponent },
  { path: "/category", component: categoryComponent },
  { path: "/tutorial", component: tutorialComponent },
  { path: "/users", component: userListComponent },
  { path: "/create-user", component: CreateUserComponent },
  { path: "/:pathMatch(.*)*", component: notFoundComponent },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
