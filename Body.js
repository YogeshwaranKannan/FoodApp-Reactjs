import { useEffect, useState } from "react";
import Restaurantcard  from "./RestaurantCard";
import Shimmer from "./shimmer";
import { filterData } from "../utils/helper";
import { Link } from "react-router-dom";
import { promotedsymbol } from "./RestaurantCard";
 

 
const Body= ()=>{
    const[allrestaurants,setAllRestaurant]=useState([]);
    
    const[filteredRestaurant,setFilteredRestaurant] = useState([]);
    console.log(filteredRestaurant);
    const[searchInput,setSearchinput] = useState();

    const Ispromoted = promotedsymbol();

    useEffect(function(){
        getRestaurants();
    } ,[]);
    
    async function getRestaurants() {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );

        const j = await data.json();
        setAllRestaurant(j.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  //props.groupedCard.cardGroupMap.REGULAR.cards
        setFilteredRestaurant(j.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    if (!allrestaurants) return null;
 
    return  allrestaurants.length===0 ? (<Shimmer />) : (
        <>
         <div  className="m p-5 bg-yellow-500 " >
            <input  className="bg-black p-1 text-white"
            type="text" 
            placeholder="Search" 
            value={searchInput} 
            onChange={function(e){
            setSearchinput(e.target.value);
            }}
            /> 
            <button className="mx-4 p-2 bg-zinc-900 text-cyan-50 rounded-xl" 
            onClick={()=>{
                const data = filterData(searchInput,allrestaurants) ;
                setFilteredRestaurant(data);
            }}
            > 
            search </button>
         </div>
          
          <div className="flex flex-wrap bg-slate-600">
          
            {filteredRestaurant.map ((Restaurant)=>{
                return (
                
               <Link to={"/restaurant/"+Restaurant.info.id} key={Restaurant.info.id} >
                
                  {Restaurant.info.isOpen ? (<Ispromoted {...Restaurant.info}/>): (<Restaurantcard  {...Restaurant.info} />) }
               
                </Link> 
            )
            })} 
        </div>
        </>
    );
};
export default Body;