import { auth, db, storage } from "./firebase.js";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

/* 🔐 PROTECCIÓN */
onAuthStateChanged(auth, user => {
  if (!user) window.location.href = "login.html";
});

/* 📤 PUBLICAR */
window.publicar = async function () {
  const mensaje = document.getElementById("mensaje").value;
  const imagen = document.getElementById("imagen").files[0];

  if (!mensaje || !imagen) {
    alert("Completa mensaje e imagen");
    return;
  }

  // Sube la imagen a Storage
  const imgRef = ref(storage, "posts/" + Date.now());
  const snapshot = await uploadBytes(imgRef, imagen);
  const url = await getDownloadURL(snapshot.ref);

  // Obtén el nombre del usuario desde Firestore
  const userDoc = await getDoc(doc(db, "usuarios", auth.currentUser.uid));
  const nombreUsuario = userDoc.exists() ? userDoc.data().nombre : "Anónimo";

  // Guarda el post con nombre incluido
  await addDoc(collection(db, "posts"), {
    uid: auth.currentUser.uid,
    nombre: nombreUsuario,
    mensaje,
    imagen: url,
    fecha: serverTimestamp()
  });

  document.getElementById("mensaje").value = "";
  document.getElementById("imagen").value = "";
};

/* 📥 MOSTRAR POSTS */
const q = query(
  collection(db, "posts"),
  orderBy("fecha", "desc")
);

onSnapshot(q, snapshot => {
  const posts = document.getElementById("posts");
  posts.innerHTML = "";

  snapshot.forEach(doc => {
    const d = doc.data();
    posts.innerHTML += `
      <div class="card">
        <strong>🐱 ${d.nombre}</strong>
        <img src="${d.imagen}" style="width:100%; border-radius:12px;">
        <p>${d.mensaje}</p>
      </div>
    `;
  });
});
