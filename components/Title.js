import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Heading1 = function() {
    return (
        <img className="h-28 p-2"src="https://i.pinimg.com/originals/18/c7/91/18c791f41997042d70072d106e093a6b.jpg" alt="headerlogo" />
    );
 };
export const HeadingComponent = function(){
    const[isLoggedin,setIsLoggedin] = useState(false);
    const isOnline = useOnline();
    const cartItems =useSelector((store)=> store.cart.items);
    return (
     <div className="flex justify-between bg-slate-600 shadow-xl">
     <Heading1 />
     <div className="nav">
        <ul className=" flex p-10 ">
            <Link to="/"><li className="px-5 text-xl font-bold hover:bg-yellow-500">Home</li></Link>
            <Link to="/About"><li  className="px-5 text-xl font-bold hover:bg-yellow-500">About</li></Link>
            <Link to="/Contact"><li  className="px-5 text-xl font-bold hover:bg-yellow-500">Contact</li></Link>
            <Link to="/Cart"><li  className="px-5 text-xl font-bold hover:bg-yellow-500">Cart - {cartItems.length}</li></Link>
        </ul>  
     </div>
     <h2 className="my-10">{isOnline ?   "✅" : "🔴"}</h2>
     <div className="my-10 mr-4 px-5 text-xl font-bold">
     {isLoggedin ? (<button onClick={()=> setIsLoggedin(false)}>Logout</button>) : 
     (<button onClick={()=> setIsLoggedin(true)}>LoggedIn</button>)}
     </div>
    
     </div>
    );
 };
 