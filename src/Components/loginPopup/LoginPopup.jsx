import React, { useState } from "react";
import "./loginPopup.css";
import { ClipLoader } from "react-spinners";
import { assets } from "../common/navbar/assets/assets";
import { auth } from "../firebase/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";



const LoginPopup = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [loading, setLoading] = useState(false);
  const [educationLevel, setEducationLevel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (currentState === "Sign Up") {
        // Sign up logic
        await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
          console.log(userCredential);
          // Navigate to User Dashboard after successful signup
          // Change to your dashboard route
        });
      } else {
        // Sign in logic
        await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
          console.log(userCredential);
          // Navigate to User Dashboard after successful login
        // Change to your dashboard route
        });
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      // Handle error (e.g., show error message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h3>{currentState}</h3>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? null : (
            <>
              <input type="text" placeholder="Your Name" required />
              <select
                value={educationLevel}
                onChange={(e) => setEducationLevel(e.target.value)}
                required
              >
                <option value="" disabled>Select Level of Education</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
                <option value="High School">High School</option>
                <option value="Tertiary">Tertiary</option>
              </select>
            </>
          )}
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading
            ? currentState === "Sign Up"
              ? "Creating Account..."
              : "Logging In..."
            : currentState === "Sign Up"
            ? "Create Account"
            : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;


        {/* <button type="submit" disabled={loading}>
  {loading ? <ClipLoader size={20} color="#fff" /> : (currentState === "Sign Up" ? "Create Account" : "Login")}
</button> */}