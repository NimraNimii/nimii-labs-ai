import React from "react";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SidebarFooter({
  usage = 2,
  limit = 3,
  handleLogout,
}) {
  const navigate = useNavigate();

  const percentage = Math.min((usage / limit) * 100, 100);

  return (
    <div className="sidebar-footer">

      {/* Upgrade Card */}
      <div className="sidebar-upgrade-card">

        <div className="sidebar-upgrade-title">
          🚀 Free Plan
        </div>

        <div className="sidebar-upgrade-subtitle">
          {usage} / {limit} Scripts Used
        </div>

        <div className="sidebar-progress">
          <div
            className="sidebar-progress-fill"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>

        <button
          className="sidebar-upgrade-btn"
          onClick={() => navigate("/pricing")}
        >
          Upgrade →
        </button>

      </div>

      {/* Bottom Area */}

      <div className="sidebar-bottom">

        <div className="sidebar-version">
          Nimii Labs AI
          <span> v1.0</span>
        </div>

        <button
          className="sidebar-logout-btn"
          onClick={handleLogout}
        >
          <LogOut size={17} strokeWidth={2} />
          <span>Logout</span>
        </button>

      </div>

    </div>
  );
}