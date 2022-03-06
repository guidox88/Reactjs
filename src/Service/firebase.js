// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_Atx_FQbqKG35Eq8kRBKPVFpQyBognmA",
  authDomain: "ecomerce-impresion3d.firebaseapp.com",
  projectId: "ecomerce-impresion3d",
  storageBucket: "ecomerce-impresion3d.appspot.com",
  messagingSenderId: "595525519740",
  appId: "1:595525519740:web:b981e3be27ae33df7cfcf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db