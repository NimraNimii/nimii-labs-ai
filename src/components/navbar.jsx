import { Link } from "react-router-dom";
import "../styles/navbar.css";
import NimiiLogo from "./NimiiLogo";




export default function navbar() {
  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        



<Link to="/" className="brand-logo">
  <NimiiLogo size={56} />

  <span className="brand-name">
    Nimii Labs
  </span>
</Link>




        <span className="early-access-badge">
          NO CREDIT CARD REQUIRED
        </span>
      </div>

      {/* CENTER */}
     
<div className="nav-links">
  <Link to="/how-it-works">
    How It Works
  </Link>

  <Link to="/pricing">
    Pricing
  </Link>

<a href="/#faq">FAQ</a>
    
</div>

      {/* RIGHT */}
      <div className="nav-actions">
        <Link to="/login">
          <button className="login-btn">
            Log in
          </button>
        </Link>
        

     <Link to="/signup" className="primary-nav-btn">
    Start Free <span>→</span>
</Link>


    
      </div>
    </nav>
  );
}