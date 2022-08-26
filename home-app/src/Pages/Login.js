import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function OnSubmit() {
    try {
      const res = await axios.post("http://localhost:7000/user/Login", input);
      localStorage.setItem("token", res.data.token);
      console.log(res);
      toast.success(res.data.message);

      navigate("/home");
    } catch (e) {
      console.log(e.message);
      toast.error(e.response.data.message);
    }
  }
  return (
    <div className="flex justify-center mt-6 ">
      <div className="bg-blue-400 w-2/5 text-center py-4 drop-shadow-md">
        <h1>Login</h1>
        <div className="flex flex-col w-3/5 m-auto space-y-2 my-4">
          <input
            type="email"
            placeholder=" Email"
            className="px-3 py-1 rounded-sm outline-none"
            onChange={(e) => setInput({ ...input, email: e.target.value })}
          />
          <input
            type="password"
            placeholder=" Password"
            className="px-3 py-1 rounded-sm outline-none"
            onChange={(e) => setInput({ ...input, password: e.target.value })}
          />
        </div>
        <button
          className="text-center border border-blue-700 p-2 rounded-md"
          onClick={OnSubmit}
        >
          login
        </button>
        <div>
          <h4 className="text-center text-sm text-gray-500 font-bold">
            Do you have an account?{""}
            <br />
            <Link to="/signup">Create a new account</Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Login;
