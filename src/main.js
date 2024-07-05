import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
appId: process.env.VUE_APP_FIREBASE_APP_ID,
measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
};

const firebaseApp = initializeApp(firebaseConfig);
console.log("Firebase is fire !");
export default firebaseApp;

const app = createApp(App)

app.use(router)

app.mount('#app')
