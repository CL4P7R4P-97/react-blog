// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRtCFgtdJ17JIxBTEBLW_X6NweiUlh1po",
  authDomain: "react-blog-test1.firebaseapp.com",
  projectId: "react-blog-test1",
  storageBucket: "react-blog-test1.appspot.com",
  messagingSenderId: "519143358859",
  appId: "1:519143358859:web:af268fbe1d2fe019322f8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
