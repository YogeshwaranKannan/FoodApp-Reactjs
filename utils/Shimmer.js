const Shimmer = ()=>{
    return (
        <div className="shimmerboxes">
        {Array(500).fill("").map((e,index)=>
         ( <div className="shimmerCard" key={index}></div> )
        )}
        </div>   
    );
};
export default Shimmer;