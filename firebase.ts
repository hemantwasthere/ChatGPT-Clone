// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY!,
//   authDomain: "chatgptclone-d464e.firebaseapp.com",
//   projectId: process.env.FIREBASE_PROJECT_ID!,
//   storageBucket: "chatgptclone-d464e.appspot.com",
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID!,
//   appId: process.env.FIREBASE_APP_ID!
// };

const firebaseConfig = {
  apiKey: "AIzaSyAJZWVzlnIfRLrwXabr8Kd5vq5mYqbs3D4",
  authDomain: "chatgptclone-d464e.firebaseapp.com",
  projectId: "chatgptclone-d464e",
  storageBucket: "chatgptclone-d464e.appspot.com",
  messagingSenderId: "195407512476",
  appId: "1:195407512476:web:6036b3344e32252f547e59"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); // --> singletone pattern encoding
const db = getFirestore(app)

export { db };

