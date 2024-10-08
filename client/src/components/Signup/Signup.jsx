import React, { useState } from "react";
import googleIcon from "../../resources/googleIcon.svg";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // validate email
  const validateEmail = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    // Clear previous error message
    setErrorMessage("");
    setSuccessMessage("");

    // Check for valid email
    if (!validateEmail()) {
      setErrorMessage("Enter a valid email");
      return;
    }

    // Check password length
    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters long");
      return;
    }

    // Data to send to the backend
    const signupData = { email, password };

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      // Handle backend response
      if (response.ok) {
        setSuccessMessage("Signup successful!");
        setEmail("");
        setPassword("");
      } else {
        const result = await response.json();
        setErrorMessage(result.error || "Signup failed. Please try again!");
      }
    } catch (error) {
      setErrorMessage("Error connecting to the server. Please try again!");
    }
  };

  return (
    <>
      <div className="flex justify-between items-center ml-[20px] mr-[20px]">
        <p className="text-[#7646A6] text-4xl font-sans font-bold">Propeller</p>
        <button className="mt-[20px] mb-[20px] font-sans text-white font-medium border border-gray-500 bg-[#7646A6] rounded-md p-3 hover:text-black hover:bg-white">
          Sign in
        </button>
      </div>
      <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-[#9D7ABF]">
        <div className="bg-white p-12 pr-16 pl-16 border rounded-md border-gray-500">
          <div className="pb-[30px]">
            <span className="text-[44px] font-sans font-[380]">
              Sign up for free
            </span>
          </div>

          {/* Error and Success Messages */}
          {errorMessage && (
            <div className="mb-2 text-red-500">{errorMessage}</div>
          )}
          {successMessage && (
            <div className="mb-2 text-green-500">{successMessage}</div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div>
              <p className="text-base font-sams font-medium pb-1">Email</p>
              <input
                className="p-2 pr-24 border-[1.2px] rounded-md border-gray-400 hover:border-[#7646A6]"
                type="email"
                placeholder="Your Email Here"
                value={email} // Bind value to state
                onChange={(e) => setEmail(e.target.value)} // Update state on change
              />
            </div>

            {/* Password Input */}
            <div className="pt-4">
              <p className="text-base font-sams font-medium pb-1">Password</p>
              <input
                className="p-2 pr-24 border-[1.2px] rounded-md border-gray-400 hover:border-[#7646A6]"
                type="password"
                placeholder="Password"
                value={password} // Bind value to state
                onChange={(e) => setPassword(e.target.value)} // Update state on change
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center items-center pt-6 ml-[-10px]">
              <button
                type="submit"
                className="text-white text-[18px] font-sans font-semibold border rounded-md p-3 pl-[115px] pr-[120px] bg-[#7646A6] hover:text-[#7646A6] hover:bg-white hover:border-gray-600"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Google Sign Up */}
          <div className="border-b-2 border-gray-600 pt-4"></div>
          <div className="flex justify-center items-center space-x-1 mt-4 p-2 text-[18px] border border-gray-400 rounded-md hover:text-white hover:font-medium hover:bg-black">
            <img
              className="pt-1"
              src={googleIcon}
              alt="Google Icon"
              width={30}
            />
            <button>Sign up with Google</button>
          </div>

          <p className="w-[280px] pt-2 text-[10px] text-gray-600 font-semibold">
            By signing up, you agree with Propeller's{" "}
            <a className="text-blue-600 cursor-pointer">Terms & Conditions</a>{" "}
            and <a className="text-blue-600 cursor-pointer">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
