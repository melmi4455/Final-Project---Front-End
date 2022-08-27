import "./App.css";
import {useState,useEffect} from "react"
import { InfoContext } from "./Utilities/InfoContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import SignUp from "./Pages/SignUp";
import UpdateProfile from "./Pages/Owner/UpdateProfile";
import NewHome from "./Pages/Owner/NewHome";
import PropertyList from "./Pages/PropertyList";
import Protect from "./Protect"
import Footer from "./Components/Footer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./Components/About";
import Login from "./Pages/Login";
import axios from "axios";


function App() {
const [info,setInfo] = useState(false);
const [loading,setLoading]=useState(true);
useEffect(() =>
{
  
  const token = localStorage.getItem("token");
  axios.get("http://localhost:7000/user/check", {
    headers:{authentication:token},
  }).then(()=> {
    setInfo(true);
  })
  .catch((e)=>{
    setInfo(false);
  });
  setLoading(false);
}, []);
if(loading) return <h1>Loading ...</h1>;
console.log(info)


  return (
    <div>
      <InfoContext.Provider value={{info,setInfo}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<PropertyList />} />
          <Route path="/owner" element={<Protect />}  >
          <Route path="updateprofile" element ={<UpdateProfile/>} />
          <Route path="NewHome" element={<NewHome />} />
          </Route>
          
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
      </InfoContext.Provider>
    </div>
    )
    }
  


export default App;
