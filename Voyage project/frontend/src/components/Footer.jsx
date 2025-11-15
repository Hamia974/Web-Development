import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
 <footer className="px-20 py-10 mt-10 flex sm:flex-row flex-col gap-8 justify-around bg-[#474769]/10 text-white bg-cover bg-center bg-[url('https://i.pinimg.com/736x/48/82/72/48827288be1fc553fd7168358bfafebf.jpg')]">
  {/* div 1 */}
 <div className="flex flex-col gap-5 p-3 w-[400px]">
  <p className="italic text-2xl">VOYAGE</p>
  <p className="w-auto">"Voyage is your trusted travel partner, helping you explore the world with comfort, safety,white and unforgettable memories."</p>
<div className="flex gap-2">
<Link to="https://www.facebook.com/" target="_blank"><FaFacebookF className="w-8 h-8 text-white border p-1 border-white"/></Link>
<Link to="https://www.instagram.com/" target="_blank"><FaInstagram className="w-8 h-8 text-white border p-1 border-white"/></Link>
<Link to="https://www.twitter.com/" target="_blank"><FaTwitter className="w-8 h-8 text-white border p-1 border-white"/></Link>
</div>
 </div>
 {/* div 2 */}
 <div className="flex flex-col w-[300px]  p-2">
  <p className="text-3xl mb-5 ">Navigation</p>
  <Link to="/" className="hover:scale-90 transition duration-300 hover:underline">Home</Link>
  <Link to="/packages" className="hover:scale-90 transition duration-300 hover:underline">Packages</Link>
  <Link to="/about" className="hover:scale-90 transition duration-300 hover:underline">About Us</Link>
  <Link to="/contact" className="hover:scale-90 transition duration-300 hover:underline">Contact Us</Link>
 </div>
 {/* div 3 */}
  <div className="flex flex-col w-[300px]  p-2">
  <p className="text-3xl mb-5 ">Quick Link</p>
  <Link to="/" className="hover:scale-90 transition duration-300 hover:underline">Home</Link>
  <Link to="/gallery" className="hover:scale-90 transition duration-300 hover:underline">Gallery</Link>
  <Link to="/blog" className="hover:scale-90 transition duration-300 hover:underline">Blog</Link>
  <Link to="/faq" className="hover:scale-90 transition duration-300 hover:underline">FAQ</Link>
 </div>

{/* div 4 */}
 <div className="flex flex-col w-[300px]  p-2 gap-3">
  <p className="text-3xl ">Work Hours</p>
 <p>10 am - 10pm <br /> Mon-Sat</p>
 <a 
  href="tel:+923001234567" 
  className="bg-[#474769] text-white px-6 py-3 border rounded-full w-[150px] shadow-md hover:bg-[#5b5b85] ">
  Call Us
</a>
 </div>

 </footer>
  );
}

export default Footer;
