import { firebaseInitialize } from "./firebaseInit";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  onSnapshot,
  doc,
  addDoc,
  Timestamp,
  deleteDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { CartItem } from "../redux/features/menuSlice";
import { v4 as uuidv4 } from "uuid";

// Data Types
interface ReserveDataProps {
  date: string;
  time: string;
  name: string;
  email: string;
}
export interface OrderDataProps {
  cart: CartItem[];
  city: string;
  road: string;
  deliveryInfo: string;
  phone: string;
  email: string;
  user: {
    displayName: string;
    email: string;
    photoURL: string;
  };
}

export interface ReservationData {
  date: string;
  dateInfo: {
    seconds: number;
    nanoseconds: number;
  };
  createdAt: {
    seconds: number;
    nanoseconds: number;
  };
  email: string;
  id?: string;
  message: string;
  name: string;
  phone: string;
  time: string;
  person: string;
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
    const id = uuidv4();
    const reserveData = {
      ...data,
      dateInfo: Timestamp.fromDate(new Date()),
      id,
      createdAt: serverTimestamp(),
    };
    await setDoc(doc(db, "reservations", id), reserveData);
  };

  // get Reservations
  const getReservation = async (email: string) => {
    const querySnapshot = await getDocs(
      query(
        collection(db, "reservations"),
        where("email", "==", email),
        orderBy("createdAt", "desc")
      )
    );
    const myReservations: ReservationData[] = querySnapshot.docs.map(
      (doc) => doc.data() as ReservationData
    );



    return myReservations;
  };

  // set Order
  const setOrder = async (data: OrderDataProps) => {
    const id = uuidv4();
    const orderData = {
      ...data,
      dateInfo: Timestamp.fromDate(new Date()),
      id,
      createdAt: serverTimestamp(),
    };
    await setDoc(doc(db, "orderlist", id), orderData);
  };

  // get all Order
  const getOrders = async (email: string) => {
    const q = query(
      collection(db, "orderlist"),
      where("email", "==", email),
      orderBy("createdAt", "desc")
    );
    let orders: object[] = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      orders.push(doc.data());
    });
    return orders;
  };

  // delete Order
  const orderDelete = async (id: string) => {
    await deleteDoc(doc(db, "orderlist", id));
  };

  // delete reservation
  const deleteReservation = async (id: string) => {
    await deleteDoc(doc(db, "reservations", id));
  };

  return {
    getMenu,
    reserveTable,
    setOrder,
    getOrders,
    orderDelete,
    getReservation,
    deleteReservation,
  };
};

export default firebaseStorage;
