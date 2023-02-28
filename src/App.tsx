import { Route, Routes } from "react-router";
import "./App.css";
import MainTemplate from "./components/MainTemplate/MainTemplate";
import About from "./pages/About/About";
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
      </Routes>
    </MainTemplate>
  );
}

export default App;
