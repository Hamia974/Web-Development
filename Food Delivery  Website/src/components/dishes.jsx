import { StoreContext } from "../context/StoreContext";
import { useContext } from "react";
import Fooditem from "./fooditem";

const Dish=({category})=>{
   const {food_list}=useContext(StoreContext);
return(
    <div id="dish">
        <section className="mx-6 p-5">
            <h1 className="text-black font-serif font-bold text-3xl mb-3">Top Dishes Near You</h1>
            <div className="grid xl:grid-rows-8 xl:grid-cols-4 xl:gap-5 grid-rows-16 grid-cols-2">
{food_list.map((item,index)=>{
   {console.log(category,item.category);} 
   if(category==="All" || category===item.category){
return <Fooditem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
   }
   return null;
})}
          </div>
        </section>
    </div>
);
};
export default Dish;