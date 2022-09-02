// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
  import { getFirestore, doc, getDoc, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";
  // TODO: Replace the following with your app's Firebase project configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB6O4MPsFTpYMHateIUqyqEnBk_EDMiojc",
    authDomain: "hrsadmin-66d77.firebaseapp.com",
    projectId: "hrsadmin-66d77",
    storageBucket: "hrsadmin-66d77.appspot.com",
    messagingSenderId: "1021943884761",
    appId: "1:1021943884761:web:956f22915afb7aedfc87c8",
    measurementId: "G-E2H42M4NYE"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  

const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})