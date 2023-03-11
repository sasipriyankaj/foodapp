import { useEffect } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import MainTemplate from "./components/MainTemplate/MainTemplate";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import Register from "./pages/Register/Register";

function App() {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </MainTemplate>
  );
}

export default App;
