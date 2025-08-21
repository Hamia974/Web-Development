import { useState } from "react";
import { assets } from "../assets/assets";
const Login = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Sign Up");
    return (
        <div id="login">
            <form action="" className="border rounded-md w-96 place-self-center bg-white  ">
                <div className="flex  justify-between m-5">
                    <h1 className="text-xl font-serif font-bold">{currentState}</h1>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="flex flex-col justify-around m-5 gap-5">
                    {currentState === "Login" ? <></> :
                        <input class="border border-gray-300 rounded-md p-1" type="text" placeholder="Your Name" required />

                    }
                    <input class="border border-gray-300 rounded-md p-1" type="email" placeholder="Your Email" required />
                    <input class="border border-gray-300 rounded-md p-1" type="password" placeholder="Password" required />
                    <button class="border border-gray-300 p-1 rounded-md bg-orange-700 text-white" type="submit">
                        {currentState === "Sign Up" ? "Create Account" : "Login"}
                    </button>
                </div>
                <div className="flex mx-5 gap-1">
                    <input type="checkbox" required className="mb-5" />
                    <p className="text-gray-600">By continuing,i agree to the terms of use and privacy policy.</p>
                </div>
                {currentState === "Sign Up" ?
                    <p className="m-5 text-gray-600">Already have an account?<span onClick={() => setCurrentState("Login")} className="hover:underline hover:cursor-pointer text-orange-700">Login here</span></p>
                    : <p className="m-5 text-gray-600">Create a new account?<span onClick={() => setCurrentState("Sign Up")} className="hover:underline hover:cursor-pointer text-orange-700">Click here</span></p>
                }
            </form>
        </div>
    );
}
export default Login;