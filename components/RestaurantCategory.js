import { useState } from "react";
import ItemList from "./itemList";

const RestaurantCategory = ({props ,showItem,setShowIndex})=>{
 
  const handleclick=()=>{
     setShowIndex();
  };
  return (
    <div>
   
     <div className="w-7/12 p-4 bg-yellow-300 shadow-2xl shadow-black mx-auto my-10  ">
        <div className="flex justify-between cursor-pointer" onClick={handleclick}>
           
          <span className="font-bold ">{props.title} ({props?.itemCards?.length})</span>
          <span>⬇️</span>
        </div>
        <div>
       
        { showItem && <ItemList props={props?.itemCards}/>}
        </div>
         
    </div>
     
    </div>
    
  )
}
export default RestaurantCategory;