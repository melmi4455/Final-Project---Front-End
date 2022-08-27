import FeatureCars from "../Components/FeatureCars";
import HowItWorks from "../Components/HowItWorks";
import Hero from "../Components/Hero";
import { FaArrowRight } from "react-icons/fa";

function Home() {
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
          <FeatureCars />
          <FeatureCars />
          <FeatureCars />
          <FeatureCars />
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
