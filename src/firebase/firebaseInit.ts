// Import the initializeApp Function
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChDyDNeC38ZyJhvZxl6md8b0HpxKG05xU",
  authDomain: "mrchef-cabfc.firebaseapp.com",
  projectId: "mrchef-cabfc",
  storageBucket: "mrchef-cabfc.appspot.com",
  messagingSenderId: "203025914796",
  appId: "1:203025914796:web:800eceffcb8e3165c3f809",
};

// Initialize Firebase
export const firebaseInitialize = () => {
  return initializeApp(firebaseConfig);
};
