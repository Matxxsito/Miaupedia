import { auth, db, storage } from "./firebase.js";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// ELEMENTOS
const mensaje = document.getElementById("mensaje");
const imagen = document.getElementById("imagen");
const publicarBtn = document.getElementById("publicarBtn");
const posts = document.getElementById("posts");

// 🔐 PROTEGER EL FORO
auth.onAuthStateChanged(user => {
  if (!user) {
    window.location.href = "login.html";
  }
});

// ✅ BOTÓN FUNCIONA (PRUEBA REAL)
publicarBtn.addEventListener("click", async () => {
  alert("EL BOTÓN FUNCIONA ✅");
});
