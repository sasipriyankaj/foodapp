import { firebaseInitialize } from "./firebaseInit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { errorUser, getUser, loadingUser } from "../redux/features/userSlice";
import { useNavigate, useLocation } from "react-router-dom";

// ES6 Modules or TypeScript
import Swal from "sweetalert2";

// From type
interface FromType {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: null;
}

// Initialize Firebase Authentication and get a reference to the service
const app = firebaseInitialize();
const auth = getAuth(app);

const firebaseAuth = () => {
  // google provider
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  // redux dispatch
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();

  // Observe User if user log in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          getUser({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      } else {
        dispatch(getUser({}));
      }
      // setLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  // Register/Sign Up User
  const registerUser = (
    name: string,
    email: string,
    password: string | number,
    from: FromType
  ) => {
    // loading start
    dispatch(loadingUser());

    createUserWithEmailAndPassword(auth, email, password.toString())
      .then((userCredential) => {
        // update profile with name and image
        if (auth.currentUser) {
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              dispatch(getUser({ displayName: name, email }));

              // show the successs message
              Swal.fire({
                icon: "success",
                title: "Registered successfully",
                text: "You have successfully registered in our Website!",
              });

              console.log(from);
              // redirect the user to the 'from' location if it exists, or to the default route otherwise
              navigate(from ? from.pathname : "/", { replace: true });
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(errorUser());

        // show the error message
        Swal.fire({
          icon: "error",
          title: "Something Wrong!",
          text: errorMessage,
        });
      });
  };

  // Log in User
  const logInUser = (
    email: string,
    password: string | number,
    from: FromType
  ) => {
    signInWithEmailAndPassword(auth, email, password.toString())
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // show the successs message
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You successfully Logged in our Website!",
        });

        // redirect the user to the 'from' location if it exists, or to the default route otherwise
        navigate(from ? from.pathname : "/", { replace: true });
      })
      .catch((error) => {
        let errorMessage = error.message;
        const errorCode = error.code;

        // if user not found show this message
        if (errorCode === "auth/user-not-found") {
          errorMessage = "User Not Found!";
        }

        // show the error message
        Swal.fire({
          icon: "error",
          title: "Something Wrong!",
          text: errorMessage,
        });
      });
  };

  // google login
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // The signed-in user info.
        const { displayName, email, photoURL } = result.user;

        // send the user data to the store
        dispatch(getUser({ displayName, email, photoURL }));

        // show the successs message
        Swal.fire({
          icon: "success",
          title: "Successfully logged In!",
          text: "You have successfully logged in our Website!",
        });
        // check if the state object contains a 'from' location
        const { from = { pathname: "/" } } = location.state || {};

        // redirect the user to the 'from' location if it exists, or to the default route otherwise
        navigate(from ? from.pathname : "/", { replace: true });
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;

        // show the error message
        Swal.fire({
          icon: "error",
          title: "Something Wrong!",
          text: errorMessage,
        });
      });
  };

  // log Out user
  const logOut = (): void => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(getUser({}));
        // show the successsfully logout message
        Swal.fire({
          icon: "success",
          title: "Successfully logged out",
          text: "Hopefully we will see you again!",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { registerUser, logOut, logInUser, googleLogin };
};

export default firebaseAuth;
