export function filterData (searchInput,allrestaurants){
    const data=  allrestaurants.filter((restaurant)=>
             
       restaurant?.info?.name.toLowerCase()?.includes(searchInput?.toLowerCase())
     );
   
     return data;
 };