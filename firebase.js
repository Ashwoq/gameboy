import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCti7II9iwJI9EefKZ4xxPi74V1aKHhDec",
  authDomain: "gameboy-ad.firebaseapp.com",
  projectId: "gameboy-ad",
  storageBucket: "gameboy-ad.appspot.com",
  messagingSenderId: "746014738911",
  appId: "1:746014738911:web:33a44f9b90e1a423b15c6a",
  measurementId: "G-VFDFXX15JB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
