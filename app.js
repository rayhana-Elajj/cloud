// Import des fonctions nécessaires depuis Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9kuWvYwmbjHZo2qg3WirYD1hEZiXBcMM",
  authDomain: "projetcloud-d6937.firebaseapp.com",
  databaseURL: "https://projetcloud-d6937-default-rtdb.firebaseio.com",
  projectId: "projetcloud-d6937",
  storageBucket: "projetcloud-d6937.firebasestorage.app",
  messagingSenderId: "124242132663",
  appId: "1:124242132663:web:4ed22a9b0545b908161732",
  measurementId: "G-7SPW0YQR5H"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Gestion de la connexion
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Connexion réussie !");
        window.location.href = "home.html"; // Redirige vers une page principale
      })
      .catch((error) => {
        document.getElementById("error-message").textContent = error.message;
      });
  });
}

// Gestion de l'inscription
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Compte créé avec succès !");
        window.location.href = "./index.html"; // Redirige vers la page de connexion
      })
      .catch((error) => {
        document.getElementById("error-message").textContent = error.message;
      });
  });
}
