import { createApp } from "vue";
import App from "./App.vue";

import { createI18n } from "vue-i18n";
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css"; //core css
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css"; //icons
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import categoryComponent from "@/components/category-component.vue";
import tutorialComponent from "@/components/tutorial-component.vue";
import homeComponent from "@/components/home.component.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import notFoundComponent from "@/components/not-found.component.vue";

const i18n = createI18n({
  locale: "es",
  messages: {
    es: {
      greet: "Hola , {username}",
      Category: "Esta es mi categoría ",
      tutorial: "Este es mi tutorial ",
    },
    en: {
      greet: "Hello , {username}",
      Category: "This is my category ",
      tutorial: "this is my tutorial ",
    },
    fr: {
      greet: "Salut , {username}",
      Category: "Ceci est mon catégorie ",
      tutorial: "c'est ma procédure pas à pas",
    },
  },
});

const routes = [
  { path: "/", component: homeComponent },
  { path: "/category", component: categoryComponent },
  { path: "/tutorial", component: tutorialComponent },
  { path: "/:pathMatch(.*)*", component: notFoundComponent },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(i18n);
app.use(PrimeVue);
app.use(router);

app.component("pv-button", Button);
app.component("pv-input-text", InputText);
app.component("pv-calendar", Calendar);

app.mount("#app");
