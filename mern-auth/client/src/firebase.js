// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-866fc.firebaseapp.com",
  projectId: "mern-auth-866fc",
  storageBucket: "mern-auth-866fc.appspot.com",
  messagingSenderId: "311948943325",
  appId: "1:311948943325:web:aa622b16088b66d4b4e034"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);