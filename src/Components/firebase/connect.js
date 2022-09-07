// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCordLSv_X9Fh0bizCf7_mTZNZQO5qa3C8",
  authDomain: "queue-mangement-941da.firebaseapp.com",
  projectId: "queue-mangement-941da",
  storageBucket: "queue-mangement-941da.appspot.com",
  messagingSenderId: "1015137183481",
  appId: "1:1015137183481:web:766d2cdf9904df811be428",
  measurementId: "G-R909974S91",
  databaseURL:"https://queue-mangement-941da-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app