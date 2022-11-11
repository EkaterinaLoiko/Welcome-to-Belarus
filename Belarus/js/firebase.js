import {getAuth} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";

 const firebaseConfig = {
   apiKey: "AIzaSyADXlOWv8XSW51wh682WBTB9m0eYwuK1aQ",
   authDomain: "belarus-5796b.firebaseapp.com",
   projectId: "belarus-5796b",
   storageBucket: "belarus-5796b.appspot.com",
   messagingSenderId: "689855327341",
   appId: "1:689855327341:web:a14a1a17a12dc4c53f6364"
 };

 
 const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);