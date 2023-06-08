import { createApp } from 'vue'
import VueResizeObserver from 'vue-resize-observer'
import App from './App.vue'
import './assets/base.css'
import router from './router'

const app = createApp(App)

app.use(VueResizeObserver)
app.use(router)

app.mount('#app')
