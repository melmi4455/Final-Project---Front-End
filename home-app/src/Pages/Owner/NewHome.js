function NewHome () {
    return (
        <div className="flex justify-center">
            <div className="bg-blue-500 w-2/3 mt-20 rounded-md p-4">
                <div className="flex justify-center">
                    <h1 className="font-bold text-2xl">Please fill this form</h1>
                </div>
                <div className="grid grid-cols-2 mt-10">
                    <input type="text" placeholder="City" className="m-2 p-1 text-lg "/>
                    <input type="text" placeholder="District" className=" m-2 p-1 text-lg"/>
                    <input type="text" placeholder="No. of Rooms" className=" m-2 p-1 txt-lg"/>
                    <input type="text" placeholder="Price" className=" m-2 p-1 text-lg"/>
                    <input type="number" placeholder="Phone Number" className=" m-2 p-1 text-lg"/>
                    <input type="text" placeholder="Address" className=" m-2 p-1 text-lg"/>
                    <textarea placeholder="Description" className="m-2 w-fit text-lg pr-40"></textarea>
                    <input type="file"  className=" m-2 p-1 text-lg"/>
                    </div>
            </div>
        </div>
    )
}


export default NewHome;