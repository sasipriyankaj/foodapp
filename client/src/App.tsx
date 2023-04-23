import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import MainTemplate from "./components/MainTemplate/MainTemplate";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Delivered from "./pages/Delivered/Delivered";
import Delivery from "./pages/Delivery/Delivery";
import ErrorPayment from "./pages/ErrorPayment/ErrorPayment";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import MyOrder from "./pages/MyOrder/MyOrder";
import MyReservation from "./pages/MyReservation/MyReservation";
import Register from "./pages/Register/Register";
import Reservation from "./pages/Reservation/Reservation";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // Animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/reservation"
          element={
            <PrivateRoute path="/reservation">
              <Reservation />
            </PrivateRoute>
          }
        />
        <Route
          path="/myorder"
          element={
            <PrivateRoute path="/myorder">
              <MyOrder />
            </PrivateRoute>
          }
        />
        <Route
          path="/myreservation"
          element={
            <PrivateRoute path="/myreservation">
              <MyReservation />
            </PrivateRoute>
          }
        />
        <Route
          path="/delivery"
          element={
            <PrivateRoute path="/delivery">
              <Delivery />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/delivered" element={<Delivered />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cancel" element={<ErrorPayment />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </MainTemplate>
  );
}

export default App;
