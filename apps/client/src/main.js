import { createApp } from 'vue-demi'

import 'uno.css'
import './style.css'

import ElementPlus from '@/plugins/element-plus'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)

app.mount('#app')
