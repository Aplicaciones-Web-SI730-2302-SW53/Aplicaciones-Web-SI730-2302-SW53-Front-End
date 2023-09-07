import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import {createI18n } from 'vue-i18n'
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css' //core css
import 'primevue/resources/themes/arya-orange/theme.css'
import 'primeicons/primeicons.css' //icons

import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';


const i18n =  createI18n({
    locale:'fr',
    messages:{
        es:{
            'greet':'Hola , {username}',
            'Category':'Esta es mi categoría ',
            'tutorial':'Este es mi tutorial '
        },
        en:{
            'greet':'Hello , {username}',
            'Category':'This is my category ',
            'tutorial':'this is my tutorial '
        },
        fr:{
            'greet':'Salut , {username}',
            'Category':'Ceci est mon catégorie ',
            'tutorial':'c\'est ma procédure pas à pas'
        }
    }
})

const app =createApp(App);
app.use(i18n);
app.use(PrimeVue);


app.component('pv-button',Button)
app.component('pv-input-text',InputText)
app.component('pv-calendar',Calendar)

app.mount('#app')
