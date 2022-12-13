import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAR9MGvKVKUQ66jtQztUZ9xw__OhwbC4kk",
  authDomain: "glidevendors.firebaseapp.com",
  projectId: "glidevendors",
  storageBucket: "glidevendors.appspot.com",
  messagingSenderId: "229097165374",
  appId: "1:229097165374:web:c93b7a18d1306b7b75776f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

export default app





