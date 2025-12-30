import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/main.css' // 稍後我們會清空這個檔案或覆寫它

const app = createApp(App)
app.use(router)
app.mount('#app')