import { firebaseInitialize } from "./firebaseInit";
import { getFirestore, collection, getDocs } from "firebase/firestore";


// initialize firebase
const app = firebaseInitialize();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const firebaseStorage = () => {


  // get menu
  const getMenu = async () => {
    const querySnapshot = await getDocs(collection(db, "menu"));
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));
    return data;
  };



  return { getMenu };
};

export default firebaseStorage;
