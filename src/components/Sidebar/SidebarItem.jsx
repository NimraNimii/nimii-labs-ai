import React from "react";

export default function SidebarItem({
  icon,
  title,
  active = false,
  onClick,
  menuBtn,
  menuBtnActive,
}) {
  return (
    <button
      onClick={onClick}
      className={`sidebar-item ${active ? "active" : ""}`}
      style={active ? menuBtnActive : menuBtn}
    >
      <div className="sidebar-item-icon">
    {icon}
</div>

      <span className="sidebar-item-text">
        {title}
      </span>

      {active && <span className="sidebar-active-indicator"></span>}
    </button>
  );
}