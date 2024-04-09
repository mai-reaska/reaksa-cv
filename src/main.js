import { createApp } from 'vue'
import app from './app.vue'
import './assets/tailwind.css'
import './app.css'
import router from './routers/router'
createApp(app).use(router).mount('#app')
