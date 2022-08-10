function Login() {
    return (
        
    <div  className="flex justify-center">
        <div className="bg-blue-500 w-1/3 mt-20 rounded-md drop-shadow-lg">
            <div className="flex justify-center font-bold text-2xl mt-2 text-gray-100">Login</div>
            <div>
                <div className="flex flex-col w-auto items-center pt-10 pb-10 space-y-2">
                    <input type="text" placeholder="Username/Email" className="rounded-sm px-3 py-1"></input>
                    <input type="password" placeholder="Password" className="rounded-sm px-3 py-1"></input>
                    <div className="pl-60  text-gray-100 text-md">
                    Forgot Password?
                    </div>
                </div>
                
                <div className="flex justify-center mb-2 text-md mb-3">
                    <button className="btn">LOGIN</button>
                </div>
                <div className="flex justify-center mb-5">
                    <p className="text-gray-100 text-lg font-bold">Don't have an account? Sign Up here!</p>
                </div>
            </div>
            </div>
    </div>
    )
}






export default Login