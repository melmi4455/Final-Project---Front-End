import FeatureCars from "../Components/FeatureCars";
import Hero from "../Components/Hero";

function Home() {
  return (
    <div>
      {/* hero section */}
      <Hero />
      {/* FeatureCars */}
      <div className="p-10 ">
        <h2 className="text-center font-bold ">
          Waxad ka helaysa gurihi u danbeyay halkan
        </h2>
        <div className=" flex justify-center">
          <FeatureCars />
        </div>

      </div>
    </div>
  );

       
        
        
    

}

export default Home;
