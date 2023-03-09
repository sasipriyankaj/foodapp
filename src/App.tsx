import { Route, Routes } from "react-router";
import "./App.css";
import MainTemplate from "./components/MainTemplate/MainTemplate";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import Register from "./pages/Register/Register";
// import { useDispatch } from "react-redux";
// import { fetchMenu } from "./redux/features/menuSlice";
// import type { AppDispatch } from "./redux/store/store";
// import { useEffect } from "react";

function App() {
  // // dispatch function
  // const dispatch: AppDispatch = useDispatch();

  // // load menu when the page load for first time
  // useEffect(() => {
  //   dispatch(fetchMenu());
  // }, [dispatch]);

  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </MainTemplate>
  );
}

export default App;
