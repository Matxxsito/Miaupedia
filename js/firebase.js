<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-storage-compat.js"></script>

<script>
const firebaseConfig = {
  apiKey: "AIzaSyCvwYztzOuW5CQ4rCWSgNFLhAifIjxB5eo",
  authDomain: "miaupedia-11d46.firebaseapp.com",
  projectId: "miaupedia-11d46",
  storageBucket: "miaupedia-11d46.firebasestorage.app",
  messagingSenderId: "616954573945",
  appId: "1:616954573945:web:4e5ad40fa3927b518650a8",
  measurementId: "G-YFK9Z79C83"

};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
</script>
