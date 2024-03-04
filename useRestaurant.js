import { useState ,useEffect} from "react";
import { FETCH_MENU_URL } from "../config";
const useRestaurant =(resId)=>{
const [restaurant,setrestaurant] =useState(null);
console.log(restaurant);
useEffect(()=>{
    getInfo();
  },[])
  
  async function getInfo(){
      const data = await fetch(
          FETCH_MENU_URL+resId
        );
       
      const j = await data.json();
      setrestaurant(j?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards .filter((c)=>
      c?.card?.card?.["@type"]===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )); 
  }
  return restaurant;
}
export default useRestaurant;