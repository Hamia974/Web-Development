
function App() { 
  return (
<div>
{/* nav  */}
<nav class="flex justify-around p-3 text-xl" >
  <h1 class="italic">TheFoodBar</h1>
  <ul class="flex">
    <li><a class="ml-20 hover:underline hover:underline-offset-9 decoration-black-800" href="">Home</a></li>
    <li><a class="ml-20 hover:underline hover:underline-offset-9 decoration-black-800" href="">Section</a></li>
    <li><a class="ml-20 hover:underline hover:underline-offset-9 decoration-black-800" href="">About</a></li>
    <li><a class="ml-20 hover:underline hover:underline-offset-9 decoration-black-800" href="">Project</a></li>
  </ul>
</nav>
{/* section  */}
<section className="flex justify-around">
  <div className="flex flex-col justify-center items-center">
<p className="font-bold text-5xl font-serif">
  A Chef In <br />
   Every Tasty <br /> Meal Box
</p>
<div class="mt-10">
<button className="border rounded-full p-2 w-40 text-white
 bg-red-800 hover:text-red-800 hover:bg-red-200">Select Program</button>
 <button className="border ml-10 rounded-full w-40 p-2 text-white
 bg-black hover:text-black hover:bg-white">View Menu</button>
 </div>
  </div>
<div>
  <img src="https://food-guide.canada.ca/sites/default/files/styles/square_400_x_400/public/2020-12/CFGPlate-crop400x400.jpg" alt="" />
</div>
</section>
  
  {/* deliver  */}
  <section className="flex h-[400px]  items-center justify-around bg-black mt-10 p-5">
    <div >
<img src="https://static.vecteezy.com/system/resources/thumbnails/031/415/218/small/top-view-delicious-food-plate-on-a-black-background-ai-generated-photo.jpg" alt="" />
    </div>
    <div class="flex flex-col justify-center items-center">
      <p className="text-4xl text-white">We Deliver Anywhere</p>
      <p className="text-white mt-5">"Discover delicious flavors 
        <br />from around the world, delivered fresh to
        <br /> your doorstep.
Your favorite meals, just a click away!"
</p>
<div class="mt-5">
  <button className="w-40 p-2 border rounded-full text-black bg-white
  hover:bg-lime-200 
  ">Contact Us</button>
  <button className="bg-lime-200 ml-10 rounded-full text-black w-40 p-2 hover:bg-white">View Menu</button>
</div>
    </div>
  </section>
  {/* foody meal  */}
  <section class="mt-10">
    <h1 className="black bg-white text-4xl text-center font-bold font-serif">Why
      <span className="text-red-900"> Foody</span> Meal
    </h1>
    <section className="mt-10 flex justify-around p-4 text-black">
      {/* one  */}
      <div>
<h1 className="text-4xl text-center font-serif font-bold">Variety</h1>
<img src="https://media.istockphoto.com/id/1190330112/photo/fried-pork-and-vegetables-on-white-background.jpg?s=612x612&w=0&k=20&c=TzvLLGGvPAmxhKJ6fz91UGek-zLNNCh4iq7MVWLnFwo=" alt="" className="mt-5 h-48 w-56" />
     <p class="font-bold">We offer a wide range of meals <br />to suit every taste, from local <br /> favorites to international cuisines.
</p>
      </div>
      {/* two  */}
      <div>
<h1 className="text-4xl font-serif font-bold text-center">Quality</h1>
<img src="https://media.istockphoto.com/id/1348318884/photo/plate-of-mexican-food-tacos.jpg?s=612x612&w=0&k=20&c=Vt8vi4-sCaum6YrzAiAkH7lUJK5mtp2zYT3uYw1M7iA=" alt="" className="h-48 mt-5 w-56" />
    <p className="font-bold">
We use only the freshest ingredients <br />to prepare meals that are healthy, <br /> tasty, and satisfying.
    </p>
      </div>
      {/* three  */}
      <div>
<h1 className="text-4xl font-serif text-center font-bold">Simplicity</h1>
<img src="https://previews.123rf.com/images/magone/magone1709/magone170900028/85933236-breakfast-power-plate-for-healthy-eating-isolated-on-white-background-top-view.jpg" alt="" className="mt-5 h-48 w-56" />
      <p className="font-bold">
      Our easy ordering process ensures <br /> you get your meal hassle-free, anytime <br />you want.
      </p>
      </div>
    </section>
  </section>
  {/* footer  */}
  <footer className="flex bg-black text-white mt-10 p-10 justify-around">
    <div>
      <h1 className="text-2xl font-bold">Location</h1>
      <p className="mt-8">Start With Our Fresh Food 
        <br /> Alama iqbal town,Lahore
      </p>
    </div>
    <div>
            <h1 className="text-2xl font-bold">Working Hours</h1>
<p className="mt-8">Monday-Friday:
  <br /> 10:00am-10:00pm
  <br /> Saturday-Sunday:
  <br /> 11:00am-1:00am
</p>
    </div>
    <div>
            <h1 className="text-2xl font-bold">Contact Us</h1>
<p className="mt-8">www.thefoodbar.com 
  <br /> thefoodbar@gmail.com
</p>
    </div>
  </footer>
</div>

  );
}

export default App;
