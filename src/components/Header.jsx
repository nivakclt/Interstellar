import { NavLink } from "react-router";
import { Radio, Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "MISSION", path: "/" },
    { label: "ENDURANCE", path: "/endurance" },
    { label: "WORMHOLE", path: "/wormhole" },
    { label: "CREW", path: "/crew" },
    { label: "LOG", path: "/mission-log" },
    { label: "ARCHIVE", path: "/archive" },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink
          to="/"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <div className="brand-symbol">E</div>

          <div className="brand-text">
            <span className="brand-main">
              ENDURANCE
            </span>

            <span className="brand-sub">
              COOPER STATION
            </span>
          </div>
        </NavLink>

        <nav className="desktop-nav">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-status">
          <Radio size={13} />

          <span>UPLINK</span>

          <i />
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>
      </div>

      <div
        className={`mobile-nav ${
          menuOpen ? "open" : ""
        }`}
      >
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `mobile-nav-link ${
                isActive ? "active" : ""
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}

export default Header;