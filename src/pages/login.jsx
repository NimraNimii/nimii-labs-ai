import { useEffect, useState } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase";
import Navbar from "../components/navbar";
import { Link, useNavigate } from "react-router-dom";



const googleProvider = new GoogleAuthProvider();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

useEffect(() => {
  const unsubscribe = onAuthStateChanged(
    auth,
    (user) => {
      if (user) {
        navigate("/dashboard");
      }
    }
  );

  return () => unsubscribe();
}, [navigate]);





  // GOOGLE LOGIN
  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  // EMAIL LOGIN
  const login = async () => {
    try {
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setLoading(false);
      navigate("/dashboard");
    } catch (error) {
      setLoading(false);
      alert(error.message);
    }
  };



  return (
    <div className="login-page">
      <Navbar />

      <div className="login-card">
        <h1 className="login-title">
          Welcome Back 🚀
        </h1>

        <p className="login-subtitle">
          Sign in to continue to Nimii Labs
        </p>

        <input
          className="login-input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          className="login-input"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              login();
            }
          }}
        />

     
     
<Link
  to="/reset-password"
  className="forgot-password"
>
  Forgot Password?
</Link>

        

        <button
          className="login-btn primary-btn"
          onClick={login}
          disabled={loading}
        >
          {loading
            ? "Signing In..."
            : "Sign In"}
        </button>


      

<button
  className="login-btn google-btn"
  onClick={googleLogin}
>
  <img
    src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
    alt="Google"
    className="google-icon"
  />
  Continue with Google
</button>


<p
  style={{
    textAlign: "center",
    marginTop: "16px",
    color: "#aaa",
  }}
>
  Don’t have an account?{" "}
  <span
    style={{
      color: "#c084fc",
      cursor: "pointer",
      fontWeight: "600",
    }}
    onClick={() => navigate("/signup")}
  >
    Sign Up
  </span>
</p>


      </div>
    </div>
  );
}