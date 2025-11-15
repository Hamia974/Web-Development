import { Link } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import AdminLogin from "./Adminlogin"; 

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [login,setlogin]=useState(false);

  return (
    <>
      <nav className="bg-[#474769] text-white p-4 px-8 shadow-md sm:gap-0 gap-5 flex justify-between items-center sm:flex-row flex-col">
        <h1 className="text-2xl font-bold">
          <i>Voyage</i>
        </h1>
        <ul className="flex gap-14 font-bold">
          <li><Link to="/" className="hover:border-b-2">Home</Link></li>
          <li><Link to="/packages" className="hover:border-b-2">Packages</Link></li>
          <li><Link to="/itinerary" className="hover:border-b-2">Itinerary</Link></li>
          <li><Link to="/gallery" className="hover:border-b-2">Gallery</Link></li>
          <li><Link to="/blog" className="hover:border-b-2">Blog</Link></li>
          <li><Link to="/about" className="hover:border-b-2">About</Link></li>
          <li><Link to="/contact" className="hover:border-b-2">Contact</Link></li>
          <li><Link to="/faq" className="hover:border-b-2">FAQ</Link></li>
        </ul>

        <div className="flex gap-5">
          {/* Admin button */}
          <button
            onClick={() => setShowAdminLogin(true)}
            className="border bg-white/10 rounded-full w-[100px] p-2 hover:bg-white/40"
          >
            Admin
          </button>

          {/* Sign up button */}
         <button
  className="border bg-white/10 rounded-full w-[100px] p-2 hover:bg-white/40"
  onClick={() => {
    if (login) {
      setlogin(false);
    } else {
      setShowLogin(true);
    }
  }}
>
  {login ? 'Log Out' : 'Sign Up'}
</button>

        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <Login setShowLogin={setShowLogin} setlogin={setlogin} />
        </div>
      )}

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <AdminLogin setShowAdminLogin={setShowAdminLogin} /> 
        </div>
      )}
    </>
  );
}

export default Navbar;
