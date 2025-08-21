import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
const Cart=()=>{
    const {cartItems,food_list,removeToCart,getTotalCartAmount}=useContext(StoreContext);
    const navigate=useNavigate();
    return(
        <div>
    <Navbar />

    <div className="m-10" >
<div>
        <div className=" grid mx-20 grid-cols-6 mb-5">
        <p className="text-gray-600">Items</p>
             <p className="text-gray-600">Title</p>
        <p className="text-gray-600">Price</p>
        <p className="text-gray-600">Quantity</p>
        <p className="text-gray-600">Total</p>
        <p className="text-gray-600">Remove</p>
        </div>
<hr className="mx-10" />
{food_list.map((item,index)=>{
    if(cartItems[item._id]>0){
return(
    <div>
    <div className="grid mx-20 my-3 grid-cols-6"> 
        <img className="w-12 h-12" src={item.image} alt="" />
        <p>{item.name}</p>
        <p>${item.price}</p>
        <p>{cartItems[item._id]}</p>
        <p>${item.price*cartItems[item._id]}</p>
        <p onClick={()=>removeToCart(item._id)} className="cursor-pointer">X</p>
    </div>
    <hr />
    </div>
);
    }
})}
</div>
</div>

<div className="sm:flex sm:justify-around sm:m-20">
{/* cart total  */}
<div className="w-[400px]">
    <h2 className="text-xl font-bold font-serif">Cart Total</h2>
    <div className="flex justify-between text-gray-600">
        <p>Subtotal</p>
        <p>${getTotalCartAmount()}</p>
    </div>
<hr className="my-1"/>
 <div className="flex justify-between text-gray-600">
        <p>Delivery fee</p>
        <p>${getTotalCartAmount()===0?0:3}</p>
    </div>
<hr className="my-1"/>
<div className="flex justify-between text-gray-900 my-2">
        <p>Total</p>
        <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+3}</p>
    </div>
    <button onClick={()=>navigate('/order')} className=" w-[200px] p-2 bg-orange-700 text-white border rounded-md">Proceed to Checkout</button>
</div>

{/* promo  */}
<div className="w-[400px] p-2">
    <p className="text-gray-600 mb-2">If you have a promo code,Enter it here</p>
    <div className="flex">
        <input type="text" className="border w-[250px] p-1 bg-gray-100 rounded-md" placeholder="promo code"/>
    <button className=" w-[120px] p-1 bg-black text-white border rounded-md">Submit</button>
    </div>
</div>
</div>
<Footer />
        </div>
    );
}
export default Cart;