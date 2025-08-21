import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Placeholder=()=>{
    const {getTotalCartAmount}=useContext(StoreContext);
return(
    <div>
        <Navbar/>
        <div className="flex justify-around m-10 my-20">
<div className="w-[600px]">
    <h1 className="font-bold text-3xl font-serif m-2 mb-5">Delivery Information</h1>
    <form action="">
<div className="flex gap-2 m-2">
    <input className="border border-gray-600 rounded-md p-1 " type="text"  placeholder="First Name"/>
        <input className="border border-gray-600 rounded-md p-1" type="text"  placeholder="Last Name"/>
</div>
        <input className="border m-2 border-gray-600 rounded-md p-1 w-[390px]" type="email"  placeholder="Email Address"/>
        <input className="border m-2 border-gray-600 rounded-md p-1 w-[390px]" type="text"  placeholder="Street"/>
<div className="flex gap-2 m-2">
    <input className="border border-gray-600 rounded-md p-1" type="text"  placeholder="City"/>
        <input className="border border-gray-600 rounded-md p-1" type="text"  placeholder="State"/>
</div><div className="flex gap-2 m-2">
    <input className="border  border-gray-600 rounded-md p-1" type="text"  placeholder="Zip Code"/>
        <input className="border border-gray-600 rounded-md p-1" type="text"  placeholder="Country"/>
</div>
        <input className="border m-2 border-gray-600 rounded-md p-1 w-[390px]" type="tel"  placeholder="Phone"/>
</form>
</div>
{/* cart  */}
<div className="w-[400px]">
    <h2 className="text-xl font-bold font-serif mb-5">Cart Total</h2>
    <div className="flex justify-between text-gray-600">
        <p>Subtotal</p>
        <p>${getTotalCartAmount()}</p>
    </div>
<hr className="my-1"/>
 <div className="flex justify-between text-gray-600">
        <p>Delivery fee</p>
        <p>${getTotalCartAmount()==0?0:2}</p>
    </div>
<hr className="my-1"/>
<div className="flex justify-between text-gray-900 my-2">
        <p>Total</p>
        <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+3}</p>
    </div>
    <button className=" w-[200px] p-2 bg-orange-700 text-white border rounded-md">Proceed to Payment</button>
</div>
</div>

        <Footer/>
    </div>
);
    
}
export default Placeholder;