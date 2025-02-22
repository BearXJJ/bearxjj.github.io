import "./assets/styles/base.less"

import { createApp } from 'vue'
import App from './App.vue'
import 'boxicons'

import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.mount('#app')
