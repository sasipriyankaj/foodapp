import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import MainTemplate from "./components/MainTemplate/MainTemplate";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import ErrorPayment from "./pages/ErrorPayment/ErrorPayment";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import Register from "./pages/Register/Register";
import Reservation from "./pages/Reservation/Reservation";

function App() {
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
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cancel" element={<ErrorPayment />} />
      </Routes>
    </MainTemplate>
  );
}

export default App;
