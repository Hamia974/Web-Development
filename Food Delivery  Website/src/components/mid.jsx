import playstore from '../assets/play_store.png'
import appstore from '../assets/app_store.png'
const Experience=()=>{
return(
    <div id="mobile">
        <section className="flex flex-col justify-center items-center p-10 ">
            <h1 className="text-5xl text-black text-center leading-tight font-serif font-extrabold">
                For Better Experience Download <br />
                TheFoodNook App
                <div className="flex justify-around p-10">
                    <img src={playstore} alt="" />
                    <img src={appstore} alt="" />
                </div>
            </h1>
        </section>
    </div>
);
};
export default Experience;