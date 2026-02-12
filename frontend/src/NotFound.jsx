import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import NavBar from "./components/landingComponents/NavBar";
const NotFound=()=>{
    const navigate=useNavigate()
    useEffect(()=>{
    // navigate("/login");
    })
      
    return <>
    <NavBar/>
    <div>
        <div className="row " style={{height:"100px"}}>
            <div className="col-sm-2"></div>
            <div className="col-sm-8"><h1 className="text-mycolor text-center mt-3">Not Found</h1></div>
            <div className="col-sm-2"></div>
        </div>
    </div>
    {/* <h1 className="text-mycolor text-center">Not Found</h1> */}
    </>
    
    
}

export default NotFound;