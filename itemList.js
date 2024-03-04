import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { addItems } from "../utils/cartSlice";

const ItemList = ({props})=>{
  const dipatch = useDispatch();
  const handleAddItems = (props)=>{
     dipatch(addItems(props));
  }
   
  return (
    <div>
    {props.map((c)=>(
    <div  key={c?.card?.info?.id} className="p-2 m-2 border-b-2 border-black flex justify-between  ">
    <div className="w-9/12">
    
        <div className="flex justify-between  ">
    
            <span className="font-bold">{c?.card?.info?.name} -₹{c?.card?.info?.defaultPrice/100}</span> 
        </div>
        <p className="text-xs text-left">{c?.card?.info?.description}</p>        
    </div>
    <div className="m-2">
         <div> <button className="absolute m-6  text-white bg-black rounded-lg  p-1" onClick={()=>handleAddItems(c)}> ADD + </button></div>
         <img src={IMG_CDN_URL+c?.card?.info?.imageId} className="w-[100px]" ></img>
    </div>
   
    </div>
    
    )

    )}
    
    </div>
  )
}
export default ItemList;