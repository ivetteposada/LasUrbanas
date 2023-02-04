import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDGxVpn-5fvQfSCMssTB7DhY8LfS44PipQ",
  authDomain: "prueba-ucamp.firebaseapp.com",
  projectId: "prueba-ucamp",
  storageBucket: "prueba-ucamp.appspot.com",
  messagingSenderId: "242132515737",
  appId: "1:242132515737:web:bb9173c7271d40fcc2b108",
  measurementId: "G-8Z0XHB3L3P"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;