 import { IMG_CDN_URL } from "../config";
const Restaurantcard =  ({
    name,
    cuisines,
    cloudinaryImageId,
    avgRatingString,
  })=>{
   
    return( 
        <div className="m-2 p-2 bg-black w-[200px] shadow-black shadow-2xl rounded-lg">
         
            <img src={IMG_CDN_URL+cloudinaryImageId} />
            <h2 className="font-bold text-2xl text-white">{name} </h2> 
            <h3 className="text-yellow-500">{cuisines.join(", ")}</h3>
            <h4 className="text-white"> ⭐ {avgRatingString}</h4>
        </div> 
    );
};
export const promotedsymbol = ()=>{
    return (props)=>{
        return (
            <div >
                <label className="absolute bg-white text-black font-bold mx-3 my-2" >Open</label>
                < Restaurantcard  {...props}/>
            </div>
        )
    }
}
export default Restaurantcard;