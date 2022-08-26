import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function NewHome() {
  const [input, setInput] = useState({});

  async function Upload() {
    try {
      const formData = new FormData();
      formData.append("city", input.city);
      formData.append("district", input.district);
      formData.append("rooms", input.rooms);
      formData.append("price", input.price);
      formData.append("phone", input.phone);
      formData.append("address", input.address);
      formData.append("description", input.description);
      formData.append("image", input.image);

      // console.log(formData);
      const res = await axios.post("http://localhost:7000/property", formData);
      console.log(res);
      toast.success(res.data.message);
    } catch (e) {
      toast.error(e.response.data.message);
      console.log(e.response.data.message);
    }
  }
  return (
    <div className="flex justify-center">
      <div className="bg-blue-500 w-2/3 mt-20 rounded-md p-4">
        <div className="flex justify-center">
          <h1 className="font-bold text-2xl text-white">
            Please fill this form
          </h1>
        </div>
        <div className="grid grid-cols-2 mt-10">
          <input
            type="text"
            placeholder="City"
            className="m-2 p-1 text-lg outline-none"
            onChange={(e) => setInput({ ...input, city: e.target.value })}
          />
          <input
            type="text"
            placeholder="District"
            className=" m-2 p-1 text-lg outline-none"
            onChange={(e) => setInput({ ...input, district: e.target.value })}
          />
          <input
            type="Number"
            placeholder="No. of Rooms"
            className=" m-2 p-1 txt-lg outline-none"
            onChange={(e) => setInput({ ...input, rooms: e.target.value })}
          />
          <input
            type="Number"
            placeholder="Price"
            className=" m-2 p-1 text-lg outline-none"
            onChange={(e) => setInput({ ...input, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Phone Number"
            className=" m-2 p-1 text-lg outline-none"
            onChange={(e) => setInput({ ...input, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Address"
            className=" m-2 p-1 text-lg outline-none"
            onChange={(e) => setInput({ ...input, address: e.target.value })}
          />
          <textarea
            placeholder="Description"
            className="m-2 w-fit text-lg pr-40"
            onChange={(e) =>
              setInput({ ...input, description: e.target.value })
            }
          ></textarea>
          <input
            type="file"
            className=" m-2 p-1 text-lg outline-none"
            onChange={(e) => setInput({ ...input, image: e.target.files[0] })}
          />
        </div>
        <div className="flex justify-center ">
          <button className="text-center border-2 color-white" onClick={Upload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewHome;
