import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {


    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {

        dispatch(clearCart());

    }


return (
    <div className="m-4 p-4 text-center ">
        <h1 className="font-bold text-lg">Cart</h1>
        
        <div>
        <button className="bg-gray-700 text-white rounded-lg p-2 m-2" onClick={handleClearCart}> Clear Cart</button>
            <ItemList items={cartItems}/>

            {cartItems.length === 0 && <h1>Your cart is empty... Please!! add items to your cart</h1>}
        </div>
        
        
    </div>
)
}

export default Cart;