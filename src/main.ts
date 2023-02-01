import { createApp } from 'vue'
import {createPinia} from 'pinia'
import {OhVueIcon, addIcons} from 'oh-vue-icons';
import { HiDotsHorizontal, BiBank, IoAdd, MdSportskabaddiRound, MdAddiccall, IoClose } from 'oh-vue-icons/icons';
import App from './App.vue'
import router from './router'
import clickOutSide from './directives/clickOutside';

import './assets/main.css'

const app = createApp(App).directive("click-outside", clickOutSide)
const pinia = createPinia()

addIcons(HiDotsHorizontal, BiBank, IoAdd, MdSportskabaddiRound, MdAddiccall, IoClose)

app.use(router)
app.use(pinia)
app.component('v-icon', OhVueIcon)

app.mount('#app')
