import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import Home from "./pages/Home";
import Header from "./pages/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Blogs from "./pages/Blogs";
import Draw from "./pages/Draw";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/draw" element={<Draw />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
