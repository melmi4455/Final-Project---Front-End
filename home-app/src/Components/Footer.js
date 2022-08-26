import { BsFacebook, BsWhatsapp, BsTwitter, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <div className="bg-blue-600 px-40 pb-20 border-t text-white">
        <div className=" grid grid-cols-4">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-lg pb-2 pt-8">Industry</h2>
            <h3>Apartments</h3>
            <h3>House Rentals</h3>
            <h3>House Buyings</h3>
          </div>
          <div className="">
            <h2 className="font-bold text-lg pb-2 pt-8">Blog</h2>
            <h3>House Sales</h3>
            <h3>House Rentals</h3>
            <h3>Apartment Rentals</h3>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-lg pb-2 pt-8">Contact Us</h2>
            <h3>HomeApp@email.com</h3>
            <h3>+2526344556677</h3>
          </div>
          <div className="flex flex-col items-center space-y-3 pt-3">
            <BsFacebook size={20} />
            <BsWhatsapp size={20} />
            <BsTwitter size={20} />
            <BsInstagram size={20} />
          </div>
        </div>
        <div className="flex justify-center items-center pt-20">
          &copy;2022 HomeRental App
        </div>
      </div>
    </div>
  );
}

export default Footer;
