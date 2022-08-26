import React, { useState } from "react";
import { useContext } from "react";
import { InfoContext } from "../Utilities/InfoContext";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import {useEffect} from "react"



function Login() {
  const [input,setInput] = useState({});
  const navigate = useNavigate();
  const {setInfo} = useContext(InfoContext);

//   useEffect(()=>{
//     const token = localStorage.removeItem("token");
//   }, []);

  async function bySubmit() {
    try {
        const res = await axios.post("http://localhost:7000/user/login", input);
        console.log(res);
        toast.success(res.data.message);
        localStorage.setItem("token" , res.data.token);
        navigate("/owner/newhome");
        setInfo(true);
      } catch (e) {
        toast.error(e.response.data.message);
      }

  }


    return (
        
    <div  className="flex justify-center">
        <div className="bg-blue-500 w-1/3 mt-20 rounded-md drop-shadow-lg">
            <div className="flex justify-center font-bold text-2xl mt-2 text-gray-100">Login</div>
            <div>
                <div className="flex flex-col w-auto items-center pt-10 pb-10 space-y-2">
                    <input type="text" placeholder="Username/Email" className="rounded-sm px-3 py-1"
                    onChange={(e)=> setInput({...input , email:e.target.value})}></input>
                    <input type="password" placeholder="Password" className="rounded-sm px-3 py-1" 
                    onChange={(e)=> setInput({...input , password:e.target.value})}></input>
                    <div className="pl-60  text-gray-100 text-md">
                    Forgot Password?
                    </div>
                </div>
                
                <div className="flex justify-center text-white  mb-2 text-md mb-3">
                    <button className="font-bold text-blue-500 bg-white rounded-md p-2" onClick={bySubmit}>LOGIN</button>
                </div>
                <div className="flex justify-center mb-5">
                    <p className="text-gray-100 text-lg font-bold">Don't have an account?<Link to="/signup">Sign Up here!</Link></p>
                </div>
            </div>
            </div>
    </div>
    )
}






export default Login