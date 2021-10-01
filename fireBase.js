// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASQBPMw_f7cif7o2rqz-HkpIDQwW96u5A",
  authDomain: "my-work-app-edf77.firebaseapp.com",
  projectId: "my-work-app-edf77",
  storageBucket: "my-work-app-edf77.appspot.com",
  messagingSenderId: "625565609376",
  appId: "1:625565609376:web:6e967c6eb367492c8808c5",
  measurementId: "G-Z2162V7M9K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
