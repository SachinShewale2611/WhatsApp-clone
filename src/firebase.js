import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA6NXE9zNZS2Agamv4M3DPUjIyhJ2ZC-mc",
  authDomain: "whatsapp-clone-reactjs-project.firebaseapp.com",
  projectId: "whatsapp-clone-reactjs-project",
  storageBucket: "whatsapp-clone-reactjs-project.appspot.com",
  messagingSenderId: "716937910746",
  appId: "1:716937910746:web:29e12cc2242467df7e08e3",
  measurementId: "G-MLGPGYKZ0V"
}; 

const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };

export default db;
