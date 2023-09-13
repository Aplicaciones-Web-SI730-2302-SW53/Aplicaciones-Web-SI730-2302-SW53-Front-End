import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css"; //core css
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primeicons/primeicons.css"; //icons
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import router from "@/router";
import i18n from "@/i18n";

const app = createApp(App);
app.use(i18n);
app.use(PrimeVue);
app.use(router);

app.component("pv-button", Button);
app.component("pv-input-text", InputText);
app.component("pv-calendar", Calendar);

app.mount("#app");
