import './assets/main.css'
import elementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
.use(elementPlus,{})
.use(router)
.mount('#app')
