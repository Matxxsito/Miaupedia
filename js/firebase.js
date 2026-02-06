import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJ87L8ACkWKG2bBu-HbG0TgYOQZg5YGQY",
  authDomain: "miaupedia-foro.firebaseapp.com",
  projectId: "miaupedia-foro",
  storageBucket: "miaupedia-foro.firebasestorage.app",
  messagingSenderId: "385468610938",
  appId: "1:385468610938:web:3157051f01e1d6e0e7fec3"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
