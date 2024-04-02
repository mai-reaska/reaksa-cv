import { createApp } from 'vue'
import App from './app.vue'
import './assets/tailwind.css'
import './app.css'
import router from './routers/router'
createApp(App).use(router).mount('#app')
