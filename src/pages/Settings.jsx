import { useEffect, useState } from "react";
import {
  EmailAuthProvider,
  GoogleAuthProvider,

  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  KeyRound,
  LogOut,
  Mail,
  ShieldCheck,
  Sparkles,
  User,
} from "lucide-react";
import { toast } from "react-toastify";

import { auth } from "../firebase";
import "../styles/settings.css";

export default function Settings() {
  const navigate = useNavigate();

  const [user, setUser] = useState(auth.currentUser);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const providerIds =
    user?.providerData?.map((provider) => provider.providerId) || [];

  const isGoogleUser = providerIds.includes(
    GoogleAuthProvider.PROVIDER_ID
  );

  const isEmailUser = providerIds.includes(
    EmailAuthProvider.PROVIDER_ID
  );

  const providerName = isGoogleUser
    ? "Google"
    : isEmailUser
      ? "Email & Password"
      : "Firebase Authentication";

  const handlePasswordReset = async () => {
    if (!user?.email) {
      toast.error("No email address is available for this account.");
      return;
    }

    try {
      setLoading(true);

      await sendPasswordResetEmail(auth, user.email);

      toast.success(
        "Password reset email sent. Check your inbox."
      );
    } catch (error) {
      console.error("Password reset error:", error);

      toast.error(
        error?.message || "Failed to send password reset email."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout.");
    }
  };

  if (!user) {
    return (
      <div className="settings-page">
        <div className="settings-empty">
          <Sparkles size={30} />
          <h2>You're not signed in</h2>
          <p>
            Please sign in to access your account settings.
          </p>

          <button
            className="settings-primary-btn"
            onClick={() => navigate("/login")}
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="settings-page">
      <main className="settings-container">

        {/* HEADER */}

        <div className="settings-header">
          <button
            type="button"
            className="settings-back-btn"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft size={18} />
            Dashboard
          </button>

          <div className="settings-title-row">
            <div className="settings-title-icon">
              <Sparkles size={24} />
            </div>

            <div>
              <h1>Settings</h1>
              <p>
                Manage your Nimii Labs account and preferences.
              </p>
            </div>
          </div>
        </div>

        {/* ACCOUNT */}

        <section className="settings-card">
          <div className="settings-card-header">
            <div>
              <h2>Account</h2>
              <p>Your account information</p>
            </div>

            <User size={21} />
          </div>

          <div className="settings-info-list">

            <div className="settings-info-row">
              <div className="settings-info-icon">
                <Mail size={18} />
              </div>

              <div className="settings-info-content">
                <span className="settings-label">
                  Email
                </span>

                <span className="settings-value">
                  {user.email || "No email available"}
                </span>
              </div>
            </div>

            <div className="settings-info-row">
              <div className="settings-info-icon">
                <ShieldCheck size={18} />
              </div>

              <div className="settings-info-content">
                <span className="settings-label">
                  Sign-in method
                </span>

                <span className="settings-value">
                  {providerName}
                </span>
              </div>

              <span className="settings-status">
                <CheckCircle2 size={15} />
                Active
              </span>
            </div>

          </div>
        </section>

        {/* SECURITY */}

        <section className="settings-card">
          <div className="settings-card-header">
            <div>
              <h2>Security</h2>
              <p>Manage your account security</p>
            </div>

            <KeyRound size={21} />
          </div>

          <div className="settings-action-row">
            <div>
              <h3>Password</h3>

              <p>
                {isEmailUser
                  ? "Send a secure password reset link to your email."
                  : "Your account uses Google authentication."}
              </p>
            </div>

            {isEmailUser ? (
              <button
                type="button"
                className="settings-secondary-btn"
                onClick={handlePasswordReset}
                disabled={loading}
              >
                {loading
                  ? "Sending..."
                  : "Reset Password"}
              </button>
            ) : (
              <span className="settings-google-badge">
                Google Account
              </span>
            )}
          </div>
        </section>

        {/* PLAN */}

        <section className="settings-card settings-plan-card">
          <div className="settings-card-header">
            <div>
              <h2>Plan</h2>
              <p>Your current Nimii Labs plan</p>
            </div>

            <Sparkles size={21} />
          </div>

          <div className="settings-plan-content">
            <div>
              <span className="settings-plan-badge">
                Free Plan
              </span>

              <h3>Keep creating with Nimii</h3>

              <p>
                Upgrade when you need more generation capacity
                and creator features.
              </p>
            </div>

            <button
              type="button"
              className="settings-primary-btn"
              onClick={() => navigate("/pricing")}
            >
              View Plans →
            </button>
          </div>
        </section>

        {/* LOGOUT */}

        <section className="settings-card settings-danger-card">
          <div className="settings-action-row">
            <div>
              <h2>Sign out</h2>

              <p>
                Sign out of your Nimii Labs account on this device.
              </p>
            </div>

            <button
              type="button"
              className="settings-logout-btn"
              onClick={handleLogout}
            >
              <LogOut size={17} />
              Logout
            </button>
          </div>
        </section>

        <div className="settings-footer">
          Nimii Labs AI <span>v1.0</span>
        </div>

      </main>
    </div>
  );
}