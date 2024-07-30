import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import canvasSize from 'canvas-size';


const { success, width, height } = await canvasSize.maxArea();
console.log(success);
// log(results.success ? '🟢' : '🔴', results);

const app = createApp(App)

app.use(router)

app.mount('#app')
