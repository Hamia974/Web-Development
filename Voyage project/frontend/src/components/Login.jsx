import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Login = ({ setShowLogin,setlogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div id="login">
<form
  className="border rounded-md w-96 place-self-center bg-white shadow-lg"
  onSubmit={(e) => {
    e.preventDefault(); // stops reload
    setlogin(true);
    setShowLogin(false);
  }}
>
        <div className="flex justify-between m-5">
          <h1 className="text-xl font-serif font-bold">{currentState}</h1>
          <RxCross2
            onClick={() => setShowLogin(false)}
            className="cursor-pointer w-5 h-5"
          />
        </div>
        <div className="flex flex-col justify-around m-5 gap-5">
          {currentState === "Login" ? <></> : (
            <input
              className="border border-gray-300 rounded-md p-1"
              type="text"
              placeholder="Your Name"
              required
            />
          )}
          <input
            className="border border-gray-300 rounded-md p-1"
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            className="border border-gray-300 rounded-md p-1"
            type="password"
            placeholder="Password"
            required
          />
          <button
            className="border border-gray-300 p-1 rounded-md bg-[#474769] text-white"
            type="submit" onClick={()=>setlogin(true)}
          >
            {currentState === "Sign Up" ? "Create Account" : "Login"}
          </button>
        </div>

        <div className="flex mx-5 gap-1">
          <input type="checkbox" required className="mb-5" />
          <p className="text-gray-600">
            By continuing, I agree to the terms of use and privacy policy.
          </p>
        </div>

        {currentState === "Sign Up" ? (
          <p className="m-5 text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => setCurrentState("Login")}
              className="hover:underline hover:cursor-pointer text-[#474769]"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="m-5 text-gray-600">
            Create a new account?{" "}
            <span
              onClick={() => setCurrentState("Sign Up")}
              className="hover:underline hover:cursor-pointer text-[#474769]"
            >
              Click here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
