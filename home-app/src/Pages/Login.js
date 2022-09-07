import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../Utils/UserContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
// import {useEffect} from "react"

function Login() {
  const { setUser } = useContext(UserContext);
  const [input, setInput] = useState({});
  const navigate = useNavigate();

  // useEffect(()=>{
  //   const token = localStorage.removeItem("token");
  // }, []);

  async function Submit() {
    try {
      const res = await axios.post("http://localhost:7000/user/login", input);
      console.log(res);
      toast.success(res.data.message);
      localStorage.setItem("token", res.data.token);
      navigate("/");
      setUser(true);
    } catch (e) {
      toast.error(e.response.data.message);
      console.log(e);
    }
  }

  return (
    <div className="flex justify-center p-10">
      <div className="min-h-screen bg-blue-400 flex justify-center items-center">
        <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
          <div>
            <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
              Login
            </h1>
            <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              enjoy all the services without losing time?
            </p>
          </div>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email Addres"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none "
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Password"
              className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <div className="text-center mt-6">
            <button
              class="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl"
              onClick={Submit}
            >
              LogIn
            </button>
            <p className="mt-4 text-sm">
              Already Have An Account?{" "}
              <span class="underline cursor-pointer"> SignUp</span>
            </p>
          </div>
        </div>

        <div className="w-20 h-40 absolute bg-blue-500 rounded-full bottom-20 right-10 transform rotate-45 hidden md:block"></div>
        <div className="w-20 h-40 absolute bg-blue-400 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
      </div>
    </div>
  );
}

export default Login;
