import "../styles/resetPassword.css";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";

import { auth } from "../firebase";
import Navbar from "../components/navbar";
import "../styles/resetPassword.css";

import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      await sendPasswordResetEmail(
        auth,
        email
      );

      alert(
        "Password reset link sent. Check your inbox."
      );

      setEmail("");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="reset-page">
        <div className="reset-card">

          <div className="reset-badge">
            🔐 Password Recovery
          </div>

          <h1>
            Reset Your Password
          </h1>

          <p>
            Enter the email associated with your account
            and we'll send you a secure reset link.
          </p>

       <form className="reset-form" onSubmit={handleReset}>
  <input
    type="email"
    placeholder="📧 Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
  />

  <button
    type="submit"
    className="reset-btn"
    disabled={loading}
  >
    {loading ? "Sending..." : "Send Reset Link"}
  </button>
</form>


        <div className="reset-footer">
  <p>Remember your password?</p>

  <Link to="/login">
    Back to Login
  </Link>
</div>


<div className="reset-security">
  <ul>
    <li>✓ Secure email verification</li>
    <li>✓ Reset link expires automatically</li>
    <li>✓ No account changes until verified</li>
  </ul>
</div>

        </div>
      </section>
    </>
  );
}