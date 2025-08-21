import search from '../assets/search_icon.png'
import basket from '../assets/basket_icon.png'
import { useState} from 'react';
import { Link } from 'react-router-dom';
const Navbar= ({setShowLogin}) => {
    const [menu,setMenu]=useState("home");
return(
    <div>
        <header className="flex justify-between p-5 mx-6">
          <Link to="/"><h1 className="text-orange-900 text-2xl font-bold"><i>TheFoodNook</i></h1></Link>  
            <ul className="flex">
          <Link to="/">   <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}><a className="ml-10 text-gray-600 hover:underline hover:decoration-gray-600 hover:underline-offset-4" href="/dish">Home</a></li> </Link>
              <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}><a className="ml-10 text-gray-600  hover:underline hover:decoration-gray-600 hover:underline-offset-4" href="#dish">Menu</a></li>  
                <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}><a className="ml-10 text-gray-600 hover:underline hover:decoration-gray-600 hover:underline-offset-4"href="#mobile">Mobile App</a></li>
                <li onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}><a className="ml-10 text-gray-600 hover:underline hover:decoration-gray-600 hover:underline-offset-4" href="#contact">Contact Us</a></li>
            </ul>
            <div className='flex'>
                <img src={search} alt="search" />
                <Link to="/cart"><img className="ml-10" src={basket} alt="cart" /></Link>
                <button onClick={()=>setShowLogin(true)} className="border w-20 ml-10 border-black text-gray-600  hover:bg-gray-300 rounded-full p-1">Sign in</button>
            </div>
        </header>
            </div>
);
}
export default Navbar;