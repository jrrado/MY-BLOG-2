// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-beec0.firebaseapp.com",
  projectId: "blog-app-beec0",
  storageBucket: "blog-app-beec0.appspot.com",
  messagingSenderId: "191950658959",
  appId: "1:191950658959:web:a130a0554f31b417e23ffa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);