import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [input, setInput] = useState({
    Name: "",
    email: "",
    password: "",
    confirmPassword: "",
    Phone: "",
    address: "",
  });
  const navigate = useNavigate();

  async function Submit() {
    try {
      const res = await axios.post("http://localhost:7000/user/signUp", input);
      console.log(res);
      toast.success(res.data.message);

      navigate("/home");
    } catch (e) {
      console.log(e);
      toast.error(e.response.data.message);
    }
  }
  return (
    <div className="flex justify-center mt-6 ">
      <div className="bg-blue-400 w-2/5 text-center py-4 drop-shadow-md">
        <h1>SignUp</h1>
        <div className="flex flex-col w-3/5 m-auto space-y-2 my-4">
          <input
            type="text"
            placeholder="Full Name"
            className="px-3 py-1 rounded-sm outline-none"
            onChange={(e) => setInput({ ...input, Name: e.target.value })}
          />
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
          <input
            type="password"
            placeholder=" Confirm password"
            className="px-3 py-1 rounded-sm outline-none"
            onChange={(e) =>
              setInput({ ...input, confirmPassword: e.target.value })
            }
          />
          <select
            className="px-3 py-1 rounded-sm outline-none"
            onChange={(e) => setInput({ ...input, role: e.target.value })}
          >
            <option value="user">User</option>
            <option value="owner">Home Owner</option>
          </select>
          <input
            type="text"
            placeholder=" Phone Number"
            className="px-3 py-1 rounded-sm outline-none"
            onChange={(e) => setInput({ ...input, Phone: e.target.value })}
          />
          <input
            type="text"
            placeholder=" Address"
            className="px-3 py-1 rounded-md outline-none"
            onChange={(e) => setInput({ ...input, address: e.target.value })}
          />
        </div>
        <button className="text-center border-2 color-white" onClick={Submit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUp;
