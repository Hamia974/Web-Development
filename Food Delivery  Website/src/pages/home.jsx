import Navbar from "../components/navbar";
import Main from "../components/main";
import Explore from "../components/explore";
import Dish from "../components/dishes";
import Experience from "../components/mid";
import Footer from "../components/footer";
import { useState } from "react";
import Login from "../components/loginpopup";
const Home=()=> {
  const [category,setcategory]=useState("All");
    const [showLogin,setShowLogin]=useState(false);
  return (
    <div>
          {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <Navbar setShowLogin={setShowLogin}/>
<Main/>
<Explore category={category} setcategory={setcategory}/>
<Dish category={category}/>
<Experience/>
<Footer/>
    </div>
    );
}

export default Home;
