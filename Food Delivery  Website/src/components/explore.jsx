
import { menu_list } from "../assets/assets";
const Explore=({category,setcategory})=>{
return(
    <div>
        <section className="mx-6 p-5">
            <h1 className="text-black font-serif font-bold text-3xl">Explore our Menu</h1>
            <p className="text-gray-600 mt-3 text-sm">
                Explore our diverse menu filled with mouth-watering dishes crafted from the freshest
                 ingredients. From <br /> classic favorites to unique specialties, there’s something to 
                 satisfy every craving.Treat yourself to <br />flavors that bring joy to every bite.
            </p>
            <div className="grid grid-cols-4 gap-3 grid-rows-2 lg:grid-rows-1 lg:gap-3 lg:grid-cols-8 lg:mt-3">
{menu_list.map((item,index)=>{
    return(
        <div id="menu" onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index}>
<img 
  onClick={() => setcategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
  src={item.menu_image}
  alt={item.menu_name}
  className={
    category === item.menu_name ? "active" : ""
  }
/>
             <p className="text-gray-600 text-center hover:cursor-pointer hover:underline ">{item.menu_name}</p>
            </div>
    )
}

)}
</div>
            
        </section>
    </div>
);
};
export default Explore;
