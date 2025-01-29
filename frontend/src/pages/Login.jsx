import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../assets/paxful.jpeg"; // Make sure this path is correct

// Importing the eye icons (you can use any icon library you prefer, e.g., FontAwesome or Heroicons)
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Login successful! Please verify the code.");
        navigate("/verify"); // This should navigate you to the /verify page
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      {/* Paxful Logo and Name at the top left */}
      <div className="absolute top-4 left-4 flex items-center">
        <img 
          src={logo} // Replace with your logo's path
          alt="Paxful Logo"
          className="w-10 h-10 mr-2" // Adjust size of the logo
        />
        <span className="text-3xl font-semibold ml-2 text-white">Paxful</span>
      </div>

      <div className="w-full max-w-md p-8 space-y-6 bg-black text-white">
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p className="text-gray-400">
          Don't have an account? <a href="#" className="text underline">Sign up</a>
        </p>

        <div>
          <label className="block text-gray-400">Email / Phone Number</label>
          <input
            type="text"
            placeholder="Email / Phone Number"
            className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-800 focus:outline-none focus:border-green-500 mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-gray-400">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"} // Conditionally change input type
              placeholder="Password"
              className="w-full p-3 rounded-xl bg-zinc-800 border border-zinc-800 focus:outline-none focus:border-green-500 mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Icon to toggle password visibility */}
            <span
              onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            >
              {showPassword ? (
                <FaEyeSlash className="text-gray-400" size={20} />
              ) : (
                <FaEye className="text-gray-400" size={20} />
              )}
            </span>
          </div>
        </div>

        <div className="text-right">
          <a href="#" className="text-gray-400 underline">Forgot password?</a>
        </div>

        <button
          onClick={handleLogin}
          style={{ backgroundColor: '#AAFF00' }}
          className="w-full py-3 rounded-full text-black font-bold hover:bg-green-600"
        >
          Sign in
        </button>
      </div>

      <ToastContainer />
    </div>
  );
}
