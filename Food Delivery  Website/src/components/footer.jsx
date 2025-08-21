import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedin from '../assets/linkedin_icon.png'

const Footer=()=>{
return(
    <div id="contact">
        <footer className="bg-black sm:flex sm:justify-around p-10 text-white">
            <div>
                            <h1 className="text-orange-900 text-3xl font-serif font-semibold"><i>TheFoodNook</i></h1>
                             <p className="text-white mt-5 text-xl">
Discover delicious meals made with fresh ingredients, <br />served with love and care.
         </p>
         <div className="flex gap-5 mt-5">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
         </div>
            </div>
            <div>
                <h1 className="text-3xl font-serif font-semibold mb-3">Company</h1>
                <ul>
                    <li><a class="hover:underline hover:decoration-white" href="">Home</a></li>
                    <li><a class="hover:underline hover:decoration-white" href="">About Us</a></li>
                    <li><a class="hover:underline hover:decoration-white"  href="">Delivery</a></li>
                    <li><a class="hover:underline hover:decoration-white" href="">Privacy Policy</a></li>
                </ul>
            </div>
            <div>
                                <h1 className="text-3xl font-serif font-semibold mb-3 ">Get in Touch</h1>
                                <p>+92-31111178</p>
                                <p>www.thefoodnook.com</p>
                                <p>thefoodnook@gmail.com</p>
            </div>
        </footer>
    </div>
);
};
export default Footer;