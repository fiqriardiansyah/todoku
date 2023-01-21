import { createApp } from 'vue'
import {createPinia} from 'pinia'
import {OhVueIcon, addIcons} from 'oh-vue-icons';
import { HiDotsHorizontal, BiBank } from 'oh-vue-icons/icons';
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

addIcons(HiDotsHorizontal, BiBank)

app.use(router)
app.use(pinia)
app.component('v-icon', OhVueIcon)

app.mount('#app')
