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
  Timestamp,
} from "firebase/firestore";

// Data Types
interface ReserveDataProps {
  date: string;
  time: string;
  name: string;
  email: string;
}
interface OrderDataProps {
  cart: object[];
  city: string;
  road: string;
  deliveryInfo: string;
  phone: string;
  user: {
    displayName: string;
    email: string;
    photoURL: string;
  };
}

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

  // reserve table
  const reserveTable = async (data: ReserveDataProps) => {
    await setDoc(doc(db, "reservations", data.email), data);
  };

  // set Order
  const setOrder = async (data: OrderDataProps) => {
    const orderData = {
      ...data,
      date: Timestamp.fromDate(new Date()),
    };
    await setDoc(doc(db, "orderlist", data.user.email), orderData);
  };
  return { getMenu, reserveTable, setOrder };
};

export default firebaseStorage;
