import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin({ setShowAdminLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Hardcoded admin credentials
    if (email === "admin@voyage.com" && password === "admin123") {
      setError("");
      setShowAdminLogin(false); // close popup
      navigate("/admin"); // redirect to Admin Dashboard
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-[400px]">
      <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>
      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-[#474769] text-white py-2 rounded hover:bg-[#474769]/80 transition"
        >
          Login
        </button>
        <button
          type="button"
          onClick={() => setShowAdminLogin(false)}
          className="mt-2 text-sm text-gray-500 hover:underline"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
