import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/Pokecut_1764640482026.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // ensure overlay closes when route changes
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const links = [
    { to: "/Hero", label: "HOME" },
    { to: "/drinks", label: "DRINKS" },
    { to: "/Food", label: "FOOD" },
    { to: "/Coffee", label: "COFFEE BEANS" },
    { to: "/About", label: "ABOUT US" },
    { to: "/contact", label: "CONTACT" },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm font-inter tracking-wide transition ${
      isActive ? "text-[#C3A46D]" : "hover:text-[#C3A46D] text-white/90"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-16">
        <Link
          to="/Hero"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <img src={logo} className="w-36 sm:w-48 md:w-56 lg:w-64" alt="logo" />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden p-2 text-white/90"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <div className="w-7 h-7 relative">
            <span
              className={`absolute h-0.5 w-full bg-white transition ${
                open ? "rotate-45 top-3.5" : "top-1"
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-white transition ${
                open ? "opacity-0" : "top-3.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-full bg-white transition ${
                open ? "-rotate-45 top-3.5" : "top-6"
              }`}
            />
          </div>
        </button>
      </div>

      {/* MOBILE OVERLAY - conditionally rendered so it is removed when closed */}
      {open && (
        <div
          className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-md z-50"
          onClick={() => setOpen(false)} // clicking backdrop closes
          aria-hidden={!open}
        >
          <div
            className="relative flex flex-col h-full"
            onClick={(e) => e.stopPropagation()} // clicks inside don't close unless handled
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 p-2 text-white bg-black/30 rounded-md z-50"
              aria-label="Close menu"
            >
              ✕
            </button>

            <div className="flex flex-col mt-20 space-y-6 p-6 bg-black/95 backdrop-blur">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => {
                    setOpen(false); // closes immediately even if route doesn't change
                  }}
                  className="text-2xl text-white/90 font-inter hover:text-[#C3A46D]"
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
