// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk2N9CAXehq8Z7NSdI3PQb1p4ApkUKpec",
  authDomain: "politikjobs.firebaseapp.com",
  projectId: "politikjobs",
  storageBucket: "politikjobs.appspot.com",
  messagingSenderId: "497735609687",
  appId: "1:497735609687:web:3f36411703a38a728b6212"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;