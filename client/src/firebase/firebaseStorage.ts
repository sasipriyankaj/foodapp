import { firebaseInitialize } from "./firebaseInit";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  onSnapshot,
  doc,
  setDoc,
} from "firebase/firestore";

// initialize firebase
const app = firebaseInitialize();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const firebaseStorage = () => {
  //all collection
  const menuCollection = collection(db, "menu");

  // ordering menu by their id
  const orderedMenu = query(menuCollection, orderBy("id", "asc"));

  // get menu
  const getMenu = async () => {
    const querySnapshot = await getDocs(orderedMenu);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
    }));

    return data;
  };

  interface ReserveDataProps {
    date: string;
    time: string;
    name: string;
    email: string;
  }

  // reserve table
  const reserveTable = async (data: ReserveDataProps) => {
    console.log(`first`);
    await setDoc(doc(db, "reservations", data.email), data);

    alert(`submitted`);
  };

  return { getMenu, reserveTable };
};

export default firebaseStorage;
