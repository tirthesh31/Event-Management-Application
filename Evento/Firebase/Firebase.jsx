import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the authentication function
import { getFirestore } from "firebase/firestore"; // Import Firestore function
import { getDatabase } from "firebase/database"; // Import the database function

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy7Ri-lK8M4IA6RDp_lbiZmyZsgRB6e88",
  authDomain: "financial-application-17298.firebaseapp.com",
  projectId: "financial-application-17298",
  storageBucket: "financial-application-17298.appspot.com",
  messagingSenderId: "684516548687",
  appId: "1:684516548687:web:433567cc0d8814507aca3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize authentication
const database = getDatabase(app); // Get the Realtime Database instance
const db = getFirestore(app); // Initialize Firestore

export { app, auth, database, db }; // Export everything
