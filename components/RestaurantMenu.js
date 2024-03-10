import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "../utils/Shimmer";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = ()=>{
     
    const {resId} =useParams();
    const restaurant = useRestaurant(resId);
    const[showIndex,setShowIndex]=useState();
    return !restaurant ? (<Shimmer/>): (
      <div className="bg-slate-600 my-2 p-1">
        {restaurant.map((c ,index)=>
         <RestaurantCategory
          props={c?.card?.card} key={index} 
          showItem={index===showIndex ? true : false}
          setShowIndex={()=>setShowIndex(index)} />
        )}
      </div> 
     
    )
}

    
    export default RestaurantMenu;