import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import canvasSize from 'canvas-size';


const initCanvasSize = async () => {
	const { success, width, height } = await canvasSize.maxArea();
	// console.log(":" + success);
	if (success) {
		// console.log(width);
		// console.log(height);
		document.getElementById("__maxWidth").innerHTML = width;
		document.getElementById("__maxHeight").innerHTML = height;
	}
}

initCanvasSize();

const app = createApp(App)

app.use(router)

app.mount('#app')
