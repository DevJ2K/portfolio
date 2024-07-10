// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_FIREBASE_APP_ID,
	measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

let db;
try {
	// init firebase
	const firebaseApp = initializeApp(firebaseConfig);
	// init firestore
	db = getFirestore(firebaseApp);
	console.log("%c[Success] : " + "%cFirestore is fire !", 'color: #1CFE25;', 'color: #FFEBC8;')
} catch (error) {
	console.log("%c[Error] : " + "%cUnable to init firestore !", 'color: #FF0000;', 'color: #FFA100;')
	// console.log("%c[Error] : " + "%c" + error, 'color: #FF0000;', 'color: #FFA100;')

}
export default db;

// export default firebaseApp;
