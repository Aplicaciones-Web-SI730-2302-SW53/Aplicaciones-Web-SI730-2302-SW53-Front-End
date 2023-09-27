import categoryComponent from "@/components/category-component.vue";
import tutorialComponent from "@/components/tutorial-component.vue";
import userListComponent from "@/components/user-list.component.vue";
import notFoundComponent from "@/components/not-found.component.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import CreateUserComponent from "@/components/create-user.component.vue";
import UpdateUser from "@/components/update-user.vue";
import loginComponent from "@/components/login.component.vue";
import HomeComponent from "@/components/home.component.vue";

const routes = [
  { path: "/", component: loginComponent },
  { path: "/home", component: HomeComponent },
  { path: "/category", component: categoryComponent },
  { path: "/tutorial", component: tutorialComponent },
  { path: "/users", component: userListComponent },
  { path: "/create-user", component: CreateUserComponent },
  ,
  { path: "/update-user/:id", component: UpdateUser, name: "updateUser" },
  { path: "/:pathMatch(.*)*", component: notFoundComponent },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
