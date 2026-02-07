import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
  registerBtn.addEventListener("click", async () => {
    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );

      await setDoc(doc(db, "usuarios", cred.user.uid), {
        nombre: nombre.value,
        email: email.value,
        creado: new Date()
      });

      window.location.href = "login.html";

    } catch (error) {
      alert(error.message);
    }
  });
}
