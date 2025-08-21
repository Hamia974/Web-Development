import header from '../assets/header_img.png';
import Dish from './dishes';
const Main = () => {
  return (
    <div>
      <section className="mx-6 flex flex-col justify-center bg-cover bg-center h-[430px]"  style={{ backgroundImage: `url(${header})` }}    >
      <div className=" ml-10 w-[500px]">
      <h1 className="text-white  font-sans font-bold text-4xl">
Order your <br />
favourite food here
      </h1>
      <p className="text-white mt-5 text-xl">
Discover delicious meals made with fresh ingredients, served with love and care.
         </p>
<button
  onClick={() => {
    document.getElementById("dish").scrollIntoView({ behavior: "smooth" });
  }}
  className="mt-3 p-2 w-28 bg-white text-black border rounded-full hover:bg-gray-300"
>
  View Menu
</button>
      </div>
      </section>
    </div>
  );
};
export default Main;
