import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import {clearCart} from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch=useDispatch();
  const handleCart=()=>{
    dispatch(clearCart());
  }
  return (
    <div>
      <h1 className="font-bold m-2 text-3xl">Cart Details - {cartItems.length}</h1>
      <button className="bg-green-100 p-2 m-2" onClick={()=>handleCart()}>Clear Cart</button>
      {cartItems.map((value) => {
        return <FoodItem key={value} food={value} />;
      })}
      {/* <FoodItem food={cartItems[0]} /> */}
    </div>
  );
};

export default Cart;
