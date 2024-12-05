// Import des fonctions nécessaires depuis Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC9kuWvYwmbjHZo2qg3WirYD1hEZiXBcMM",
  authDomain: "projetcloud-d6937.firebaseapp.com",
  projectId: "projetcloud-d6937",
  storageBucket: "projetcloud-d6937.appspot.com",
  messagingSenderId: "124242132663",
  appId: "1:124242132663:web:4ed22a9b0545b908161732",
  measurementId: "G-7SPW0YQR5H"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// === GESTION DE L'INSCRIPTION ===
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const role = document.getElementById("signup-role").value; // Rôle choisi par l'utilisateur

    try {
      // Création de l'utilisateur avec email et mot de passe
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Mise à jour du rôle dans le profil utilisateur (stocké dans displayName)
      await updateProfile(user, { displayName: role });

      // Afficher un message de succès
      alert("Compte créé avec succès !");
      
      // Rediriger vers la page de connexion
      window.location.href = "index.html";
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
      document.getElementById("error-message").textContent = "Erreur : " + error.message;
    }
  });
}

// === GESTION DE LA CONNEXION ===
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      // Connexion de l'utilisateur
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Récupérer le rôle depuis displayName
      const role = user.displayName;

      // Vérifier et rediriger selon le rôle
      if (role === "etudiant") {
        alert("Bienvenue, Étudiant !");
        window.location.href = "home.html";
      } else if (role === "enseignant") {
        alert("Bienvenue, Enseignant !");
        window.location.href = "home1.html";
      } else {
        alert("Rôle non défini. Contactez l'administrateur.");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      document.getElementById("error-message").textContent = "Erreur : " + error.message;
    }
  });
}
