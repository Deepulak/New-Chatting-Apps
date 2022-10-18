// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBo3Rj8ti2mY9UIIgvgV74AXVszaymUOTs",

  authDomain: "simple-chat-7f477.firebaseapp.com",

  projectId: "simple-chat-7f477",

  storageBucket: "simple-chat-7f477.appspot.com",

  messagingSenderId: "574288103151",

  appId: "1:574288103151:web:b294be50a78fd5687cfd1a"

};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();