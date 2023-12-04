/* eslint-disable @typescript-eslint/no-unused-vars */

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyACtDnGujEf4yUrvOVnL3xDBj-6OkYWYv0",
  authDomain: "beautybestie-2875e.firebaseapp.com",
  projectId: "beautybestie-2875e",
  storageBucket: "beautybestie-2875e.appspot.com",
  messagingSenderId: "396877867601",
  appId: "1:396877867601:web:d98011711f5ef2e8fd2670",
  measurementId: "G-6EMYM4K3M0"};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);

export {}