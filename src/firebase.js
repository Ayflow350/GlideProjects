import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDQtcv6gN3QLgfoJStROa-NUcg2s5tZS-Q",
  authDomain: "billy-241f5.firebaseapp.com",
  projectId: "billy-241f5",
  storageBucket: "billy-241f5.appspot.com",
  messagingSenderId: "329108487664",
  appId: "1:329108487664:web:bd010aeda605457e31b135"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);

export default app





