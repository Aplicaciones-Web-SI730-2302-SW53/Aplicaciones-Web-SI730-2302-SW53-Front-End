import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import {createI18n } from 'vue-i18n'

const i18n =  createI18n({
    locale:'en',
    messages:{
        es:{
            'Category':'Esta es mi categoría ',
            'tutorial':'Este es mi tutorial '
        },
        en:{
            'Category':'This is my category ',
            'tutorial':'this is my tutorial '
        },
        fr:{
            'Category':'Ceci est mon catégorie ',
            'tutorial':'c\'est ma procédure pas à pas'
        }
    }
})

const app =createApp(App);
app.use(i18n);

app.mount('#app')
