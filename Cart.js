
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart =()=>{
    const cartItems =useSelector((store)=> store.cart.items);
    const dispatch=useDispatch();
    const handleclearCart =()=>{
        dispatch(clearCart());
    };
    return (
        <div className="text-center m-10 p-10 ">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="bg-yellow-500 text-black p-2 font-bold" onClick={handleclearCart}>Clear Cart</button>
            <div className="w-6/12 m-auto"><ItemList props={cartItems}/></div>
             
        </div>
    )
} 
export default Cart;