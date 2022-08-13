function Home () {
    return (
        <div>
            <div className="flex justify-between px-4 py-3 items-center drop shadow-md border-b">
            <div>
            <img src= "../Logo.jpg" alt="images" className="h-20"  />
            </div>
            <div className="flex space-x-6 font-bold text-lg">
                <ul>Home</ul>
                <ul>List</ul>
                <ul>Contact</ul>
            </div>
            <div>
                <button className="btnNav">Register</button>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-5 px-10 pt-20">
            <div className="p-5 ">
                <h1 className="font-bold pb-2 text-4xl mt-20 mb-10">The bridge between Renters and Real State Owners</h1>
                <h3 className="text-2xl">
                  Etiam consequat nulla sit amet ligula fermentum dictum. Sed enim orci, imperdiet at euismod vel, egestas ut purus. In hac habitasse platea dictumst. Sed aliquam nisl metus, non viverra enim gravida vitae. Vestibulum aliquam lorem vel erat fermentum dictum. Praesent mollis leo id turpis lobortis ornare. Vestibulum auctor ex erat, sed auctor mauris blandit eget. Vestibulum ut gravida enim, a accumsan tortor. Nunc quis mauris sit amet nisl viverra porta eu nec nibh.</h3>
                </div>
            <div className="p-5 flex justify-center ">
            <img src= "../Home-org.jpg" alt="images" className="h-full"  />
            </div>

        </div>
        <div className="flex justify-center text-4xl font-bold pb-10">
            <h3>Our Services</h3>
        </div>
        <div className="grid grid-cols-2">
            <div className="flex items-center mb-10 ">
               <img src="./search-Home.png" alt="images" className="h-36 px-10"/>
               <div className="-space-y-16">
               <h3 className="text-2xl font-bold mb-20">Apartments and Houses for Rent</h3>
               <h3 className="pb-8">With our immense real-time rental database and advanced search,we make it easy to find the perfect Apartment and House for you to rent!</h3>
               <button className=" bg-gray-200 p-2 ml-28 text-black font-bold rounded-2xl px-10 drop-shadow-lg border">Search Here</button>
               </div>
            </div>
            <div className="flex items-center mb-10 mr-5">
            <img src="./Home-rent.jpg" alt="images" className="h-40 px-10"/>
               <div className="-space-y-16">
               <h3 className="text-2xl font-bold mb-20">Renting your House/Apartment?</h3>
               <h3 className="pb-8">With our immense real-time rental database and advanced search,we make it easy to upload your perfect Apartment and House for you to rent!</h3>
               <button className=" bg-gray-200 p-2 ml-28 text-black font-bold rounded-2xl px-10 drop-shadow-lg border">Upload Here</button>
               </div>
            </div>
        </div>
        </div>
        
        
    )
}


export default Home;