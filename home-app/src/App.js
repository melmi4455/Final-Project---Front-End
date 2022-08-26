import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Header from "./Components/Header";

import SignUp from "./Pages/SignUp";

import PropertyList from "./Pages/PropertyList";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Components/About";

import { UserContext } from "./Utils/UserContext";
import { useState } from "react";
import Login from "./Pages/Login";
import NewHome from "./Pages/NewHome";
function App() {
  const [user, SetUser] = useState(null);
  return (
    <UserContext.Provider Value={{ user, SetUser }}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/PropertyList" element={<PropertyList />} />

          <Route path="/NewHome" element={<NewHome />} />
        </Routes>

        <About />
        <Footer />

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
