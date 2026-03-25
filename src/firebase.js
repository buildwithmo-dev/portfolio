import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSAXneJCqJ_2w5ii5spiY0ztdvIJhJNKY",
  authDomain: "portfolio-backend-b6f96.firebaseapp.com",
  projectId: "portfolio-backend-b6f96",
  storageBucket: "portfolio-backend-b6f96.firebasestorage.app",
  messagingSenderId: "67842472041",
  appId: "PASTE1:67842472041:web:b8b00a6c528c9c55890af8_YOURS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
