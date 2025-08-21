import { useState,useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { assets } from "../assets/assets";
const Fooditem=({id,name,price,description,image})=>{
    const {cartItems,addToCart,removeToCart}=useContext(StoreContext)
return(
            <div className="w-[280px]">
             <div className="bg-cover border rounded-xl h-[200px] w-[280px] bg-center" style={{backgroundImage:`url(${image})`}}>
                {!cartItems[id]
                   ?<img onClick={()=>addToCart(id)} src={assets.add_icon_white}/>
                   :<div className="flex justify-around p-1 w-28 bg-white border rounded-full"> 
                    <img onClick={()=>removeToCart(id)} src={assets.remove_icon_red} alt="" />
                    <p className="text-xl">{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                   </div>
                }
             </div>
                <div className="flex justify-between" >
                    <h1 className="text-black  mt-1 font-bold">{name}</h1> 
                  <div className="bg-cover bg-center border rounded-xl h-7 w-[170px] border-none" style={{backgroundImage:`url(${assets.rating_starts})`}}></div> 
                 </div>
<p className="text-gray-600 text-sm mt-2">{description}</p>
<p className="text-2xl font-semibold text-orange-900">${price}</p>
            </div>
);
}
export default Fooditem;