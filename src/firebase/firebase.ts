import { firebaseInitialize } from "./firebaseInit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

// Initailize the firebase application
const app = firebaseInitialize();

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Register/Sign Up User
const registerUser = (email: string, password: string | number) => {
  createUserWithEmailAndPassword(auth, email, password.toString())
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorMessage = error.message;
      // ..
    });
};

// Log in User
const logInUser = (email: string, password: string | number) => {
  signInWithEmailAndPassword(auth, email, password.toString())
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

// Observe User if user log in
const observeUser = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      const uid = user.uid;
    } else {
      // User is signed out
      // ...
    }
  });
};

// log Out user
const logOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

export { registerUser, logInUser, observeUser, logOut };
