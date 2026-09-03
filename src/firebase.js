import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:   "AIzaSyDsIVtb4n6ID2BpuIJKUm_ylKXH-5qlioY",
  authDomain:    "nimii-labs-ai.firebaseapp.com",
  projectId:    "nimii-labs-ai",
  storageBucket: "nimii-labs-ai.firebasestorage.app",
  messagingSenderId:  "979517107445",
  appId:  "1:979517107445:web:f380c618d40a8c2f8829bc",
    measurementId: "G-D0QQGSHBHM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

export const db = getFirestore(app);