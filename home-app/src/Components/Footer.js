import {BsFacebook,BsWhatsapp,BsTwitter,BsInstagram} from "react-icons/bs"


function Footer () {

    return (
        <div>
            <div className="bg-blue-600 px-40 pb-20 border-t text-white">
                <div className=" grid grid-cols-3">
                    <div className="flex flex-col items-center">
                        <h2 className="font-bold text-lg pb-2 pt-8">Industry</h2>
                        <h3>Apartments</h3>
                        <h3>House Rentals</h3>
                        <h3>House Buyings</h3>
                        </div>
                    <div className="flex flex-col items-center">
                        <h2 className="font-bold text-lg pb-2 pt-8">Blog</h2>
                        <h3>Rent-Blog</h3>
                        <h3>House Rentals-Blog</h3>
                        <h3>Apartment Rentals-Blog</h3>
                        </div>
                    <div className="flex flex-col items-center">
                        <h2 className="font-bold text-lg pb-2 pt-8">Contact Us</h2>
                        <h3>HomeApp@email.com</h3>
                        <h3>+2526344556677</h3>
                        </div>
   
                </div>
                <div className="pt-20 flex justify-end space-x-3">
                    <BsFacebook size={40}/>
                    <BsWhatsapp size={40}/>
                    <BsTwitter size={40}/>
                    <BsInstagram size={40}/>
                    
                    
                    </div>
            </div>
        </div>
    )
}


export default Footer;