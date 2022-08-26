import {useContext} from "react"
import { InfoContext } from "./Utilities/InfoContext" 
import {Navigate,Outlet} from "react-router-dom"



function Protect(){

    

    const {info} = useContext(InfoContext)
    

    return info? <Outlet/> : <Navigate to="/login"/>
}

export default Protect;