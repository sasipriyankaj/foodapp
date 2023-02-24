import { Route, Routes } from "react-router";
import "./App.css";
import MainTemplate from "./components/MainTemplate/MainTemplate";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";

function App() {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </MainTemplate>
  );
}

export default App;
