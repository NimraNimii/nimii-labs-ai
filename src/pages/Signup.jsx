import "../styles/signup.css";

import { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import Navbar from "../components/navbar";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [acceptTerms, setAcceptTerms] =
    useState(false);

  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate("/dashboard");
        }
      });

    return () => unsubscribe();
  }, [navigate]);

  const handleSignup = async (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    if (!acceptTerms) {
      setError(
        "Please accept the Terms and Privacy Policy."
      );
      return;
    }

    try {
      setLoading(true);

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/dashboard");
    } catch (error) {
      if (
        error.code ===
        "auth/email-already-in-use"
      ) {
        setError(
          "An account already exists with this email."
        );
      } else if (
        error.code ===
        "auth/invalid-email"
      ) {
        setError(
          "Please enter a valid email."
        );
      } else {
        setError(
          "Something went wrong. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    console.log(
      "Google signup coming soon"
    );
  };

  return (
    <>
      <Navbar />

      <section className="auth-page">
        <div className="auth-card">
          <div className="auth-header">
            <span className="auth-badge">
              Start for Free
            </span>

            <h1>Create your account</h1>

            <p>
              Start generating
              higher-performing content
              in seconds.
            </p>
          </div>

          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleSignup}
          >
            Continue with Google
          </button>

          <div className="auth-divider">
            <span>or</span>
          </div>

          {error && (
            <div className="auth-error">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSignup}
            className="signup-form"
          >
            <div className="form-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(
                    e.target.value
                  )
                }
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <div className="password-field">
                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                >
                  {showPassword
                    ? "Hide"
                    : "Show"}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label>
                Confirm Password
              </label>

              <div className="password-field">
                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm password"
                  value={
                    confirmPassword
                  }
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword
                    ? "Hide"
                    : "Show"}
                </button>
              </div>
            </div>

            <p className="password-note">
              Must contain at least 6
              characters.
            </p>

            <label className="terms-row">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) =>
                  setAcceptTerms(
                    e.target.checked
                  )
                }
              />

              <span>
                I agree to the{" "}
                <Link to="/terms">
                  Terms
                </Link>{" "}
                and{" "}
                <Link to="/privacy">
                  Privacy Policy
                </Link>
              </span>
            </label>

            <button
              type="submit"
              className="signup-btn"
              disabled={loading}
            >
              {loading
                ? "Creating account..."
                : "Create account"}
            </button>
          </form>

          <div className="auth-footer">
            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Log in
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}