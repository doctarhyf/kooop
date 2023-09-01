// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQjVHy5UrXMBYu5fFq0Atd1IOSsAO9_W4",
  authDomain: "kooop-399b4.firebaseapp.com",
  projectId: "kooop-399b4",
  storageBucket: "kooop-399b4.appspot.com",
  messagingSenderId: "861642362756",
  appId: "1:861642362756:web:c018549fb9a12228a517d1",
  measurementId: "G-5808DTTJXS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const Firestore = getFirestore(app);
let db = Firestore;

export { db };

console.log("db", db);
