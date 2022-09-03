import FeatureCars from "../Components/FeatureCars";
import ListCard from "../Components/ListCard";
import HowItWorks from "../Components/HowItWorks";
import Hero from "../Components/Hero";
import { FaArrowRight } from "react-icons/fa";
import axios from "axios";
import {useEffect , useState} from "react"

const Home =() => {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:7000/property/", {
        headers: {
          authorization: token,
        },
      })
      .then((res) => {
      setProperty(res.data.data)});
  }, []);
  return (
    <div>
      {/* hero section */}
      <Hero />

      {/* FeatureCars */}
      <div className="px-20 py-5">
        <h2 className="text-center font-bold text-3xl py-10">
          Find the best property
        </h2>
        <div className=" flex justify-center ">
          {/* <FeatureCars />
          <FeatureCars />
          <FeatureCars /> */}
          {property.map((found) => (
            <ListCard data={found} />
          ))}
          <div className="flex items-center pl-5 ">
            <FaArrowRight size={30} className=" text-blue-700" />
          </div>
        </div>
      </div>
      {/* How it work */}
      <h2 className="text-center font-bold text-2xl pt-20 py-2">
        How it works
      </h2>
      <HowItWorks />
    </div>
  );
}

export default Home;
