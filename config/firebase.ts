import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "redcarpet-asg.firebaseapp.com",
  projectId: "redcarpet-asg",
  storageBucket: "redcarpet-asg.appspot.com",
  messagingSenderId: "86442034063",
  appId: "1:86442034063:web:e741da99f78859aaf641fa",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
