// Import the Firebase SDKs 
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEnBljmW8eWB1xgUszLdvZfSv5OqEeFFY",
  authDomain: "fir-v04-project.firebaseapp.com",
  projectId: "fir-v04-project",
  storageBucket: "fir-v04-project.firebasestorage.app",
  messagingSenderId: "346998630573",
  appId: "1:346998630573:web:b4f4e1ec87732fe0cebe24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Export so other scripts can use it
export { auth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged };
