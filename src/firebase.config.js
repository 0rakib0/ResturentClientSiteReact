// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpEqExM1Clwk1nwbWm9_2iGAQJEtaSKDY",
  authDomain: "bistroboss-fcd8d.firebaseapp.com",
  projectId: "bistroboss-fcd8d",
  storageBucket: "bistroboss-fcd8d.appspot.com",
  messagingSenderId: "905081679351",
  appId: "1:905081679351:web:2d86e1cda7015adf1512f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app