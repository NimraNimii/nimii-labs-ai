import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Sparkles,
  FileText,
  Settings,
  Menu,
  X,
} from "lucide-react";

import SidebarItem from "./SidebarItem";
import SidebarFooter from "./SidebarFooter";

import "../../styles/Sidebar.css";

export default function Sidebar({
  handleLogout,
  isOpen = false,
  onOpen = () => {},
  onClose = () => {},
}) {
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* ================= MOBILE TOP BAR ================= */}

      <header className="sidebar-mobile-header">

        <Link
          to="/"
          className="sidebar-mobile-logo"
        >
          <Sparkles
            size={22}
            strokeWidth={2.3}
          />

          <span>Nimii Labs</span>
        </Link>

        <button
          type="button"
          className="sidebar-mobile-menu-btn"
          onClick={isOpen ? onClose : onOpen}
          aria-label="Toggle navigation"
        >
          {isOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </header>

      {/* ================= OVERLAY ================= */}

      <div
        className={`sidebar-overlay ${
          isOpen ? "show" : ""
        }`}
        onClick={onClose}
      />

      {/* ================= SIDEBAR ================= */}

      <aside
        className={`nimii-sidebar ${
          isOpen ? "sidebar-open" : ""
        }`}
      >
        <div className="sidebar-glow"></div>

        {/* Logo */}

        <Link
          to="/"
          className="sidebar-logo-link"
          onClick={onClose}
        >
          <div className="sidebar-logo">

            <div className="sidebar-logo-icon">
              <Sparkles
                size={26}
                strokeWidth={2.4}
              />
            </div>

            <div className="sidebar-logo-text">
              <h2>Nimii Labs</h2>
              <p>AI Creator Studio</p>
            </div>

          </div>
        </Link>

        {/* Navigation */}

        <div className="sidebar-menu">

          <SidebarItem
            active
            icon={
              <Sparkles
                size={18}
                strokeWidth={2.2}
              />
            }
            title="Generate"
            onClick={() => navigateTo("/dashboard")}
          />

          <SidebarItem
            icon={
              <FileText
                size={18}
                strokeWidth={2.2}
              />
            }
            title="My Scripts"
            onClick={() => navigateTo("/my-scripts")}
          />

          <SidebarItem
            icon={
              <Settings
                size={18}
                strokeWidth={2.2}
              />
            }
            title="Settings"
            onClick={() => navigateTo("/settings")}
          />

        </div>

        <SidebarFooter
          navigate={navigate}
          handleLogout={handleLogout}
        />

      </aside>
    </>
  );
}