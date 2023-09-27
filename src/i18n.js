import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: "en",
  messages: {
    en: {
      greet: "Hello , {username}",
      Category: "This is my category ",
      tutorial: "this is my tutorial ",
    },
  },
});

export default i18n;
