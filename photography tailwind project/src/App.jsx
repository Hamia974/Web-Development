//photography project
function App() {
  return (
<div>
  {/* navbar  */}
<nav className="test-black-900 bg-green-300 flex justify-around p-5 text-xl">
  <p class="italic">ClickCraze</p>
  <ul class="flex">
    <li><a href="" class="ml-20 hover:text-green-600 ">Home</a></li>
    <li><a href="" class="ml-20 hover:text-green-600">Contact Us</a></li>
    <li><a href="" class="ml-20 hover:text-green-600">Services</a></li>
    <li><a href="" class="ml-20 hover:text-green-600">Blogs</a></li>
  </ul>
</nav>
{/* section photography  */}
<section className="p-20 flex justify-center  bg-green-100 gap-10">
  <div class=" flex justify-center items-center">
    <p class="text-2xl">"<span class="text-green-800">Capturing</span> moments <br />
    that tell your story."</p>
</div>
  <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxPedWjxkXJc2auRUiKEWahf_7ONYV_JkFQ&s" alt="photo" />
  </div>
</section>

{/* what is photography  */}
<section class="flex justify-between  bg-green-100 pt-10 pl-36 pr-36 ">
  <div class="w-72 h-96">
   <span class="font-bold text-xl">Photography</span>  is the art, application, and practice of creating images by 
    recording light, either electronically by means of an image sensor,
     or chemically by means of a light-sensitive material such as photographic film.
  </div>
    <div class="w-72 h-96 r">
      <p className="font-extrabold text-4xl">
        What is <span class="text-green-800">Photography?</span>
      </p>
    </div>
</section>
{/* founder section  */}
<section className="flex pl-32 pr-32   bg-green-100 justify-center gap-96">
<div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw-GGOkx-489m2HUSWLpHAYNQeiNWz6oRlqQ&s" alt="" /></div>
<div class="w-72 h-96"><h1 class="font-bold text-4xl mb-10 ">About <span class="text-green-800">Founder</span></h1>
  Joseph Nicéphore Niépce is often recognized as the father of photography. In the early 1820s, he managed to capture the first known permanent photograph, 
  “View from the Window at Le Gras,” using a process called heliography.
</div>
</section>
{/* projects  */}
<section class=" bg-green-100">
  <h1 class="font-bold text-4xl text-center mb-20">Recent Projects</h1>
  <section className=" ml-10 grid grid-cols-3 grid-rows-2 gap-20">
    <div class="h-72 w-72">
<img class="h-68 w-72" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoQPrJvAncDxIlbv-IXDjOL9EEgkUU8qfVw&s" alt="" />
      <p class="mt-2 text-xl text-center">Nature</p>
      </div>
<div>
  <img class="h-68 w-72" src="https://media.greatbigphotographyworld.com/wp-content/uploads/2022/04/4-different-styles-of-fashion-photography-editorial-fashion-scaled.jpg" alt="" />
<p  class="mt-2 text-xl text-center">Fashion</p>
</div>
<div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAk0wroagDxobllZNVrb3Z5vXUS900GgKbCQ&s" alt="" />
<p  class="mt-2 text-xl text-center">Wildlife</p>
  </div> 
  <div>
    <img class="h-68 w-72" src="https://thumbs.dreamstime.com/b/woman-white-dress-standing-majestic-waterfall-nature-s-beauty-serene-scene-captivating-image-captures-flowing-372577572.jpg" alt="" />
    <p  class="mt-2 text-xl text-center">Waterfall</p>
  </div>
  <div>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_UmVswjItkSEWEuYlRxCPxStkJTKcIJulQ&s" alt="" />
    <p  class="mt-2 text-xl text-center">Fancy</p>
  </div>
  <div>
    <img class="h-68 w-72"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR51o24ToDOrqmZws4MB-VudxyKlzxM6-f5tg&s" alt="" />
    <p  class="mt-2 text-xl text-center">Asthetic</p>
  </div>
    </section>
    </section>
    {/* footer  */}
<footer className="flex justify-evenly pt-10 pb-10 bg-green-200">
  <div>
    <p className="font-bold text-xl">SITE MENU</p>
  <ul>
    <li><a class="hover:text-green-600" href="">About Us</a></li>
    <li><a class="hover:text-green-600" href="">Photography</a></li>
    <li><a class="hover:text-green-600" href="">Lens Database</a></li>
    <li><a class="hover:text-green-600" href="">Lens Index</a></li>
  </ul>
  </div>
  <div>
        <p className="font-bold text-xl">REVIEWS</p>
<ul>
    <li><a class="hover:text-green-600" href="">Reviews Archive</a></li>
    <li><a class="hover:text-green-600" href="">Camera Reviews</a></li>
    <li><a class="hover:text-green-600" href="">Lens Review</a></li>
    <li><a class="hover:text-green-600" href="">Index Review</a></li>
  </ul>
  </div>
  <div>
        <p className="font-bold text-xl">MORE</p>
<ul>
    <li><a class="hover:text-green-600" href="">Contact Us</a></li>
    <li><a class="hover:text-green-600" href="">Subscribe</a></li>
    <li><a class="hover:text-green-600" href="">Workshops</a></li>
    <li><a class="hover:text-green-600" href="">Support Us </a></li>
  </ul>
  </div>
</footer>
</div>

  );
}

export default App;
