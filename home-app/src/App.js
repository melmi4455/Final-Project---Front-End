import "./App.css";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import SignUp from "./Pages/SignUp";
import MyLists from "./Pages/Owner/MyLists";
import NewHome from "./Pages/Owner/NewHome";
import PropertyList from "./Pages/PropertyList";
import Protect from "./Protect";
import Footer from "./Components/Footer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Components/About";
import Login from "./Pages/Login";
import axios from "axios";
import { UserContext } from "./Utils/UserContext";
import OwnerPage from "./Pages/Owner/OwnerPage";

// import house context propiver

function App() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //check if user is signup
    //if user is signup setuser  true

    const token = localStorage.getItem("token");
    if (token) {
      setUser(true);
    }
    setLoading(false);
  }, []);

  if (loading) return <h3>loading</h3>;

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            <Route path="/PropertyList" element={<PropertyList />} />

            <Route path="/owner" element={<Protect />}>
              <Route path="newhome" element={<NewHome />} />
            </Route>

            <Route path="/NewHome" element={<Protect />} />
            <Route path="/owner/NewHome" element={<NewHome />} />
            <Route path="/owner/MyLists" element={<MyLists />} />
            {/* </Route> */}
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
    </div>
  );
}

export default App;
