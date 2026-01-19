import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/profile", label: "Profile" },
    { to: "/education", label: "Education" },
    { to: "/career", label: "Career" },
    { to: "/media", label: "Media" },
    { to: "/spiritual", label: "Spiritual" },
    { to: "/learn-python", label: "Learn Python With Me" },
    { to: "/learn-ai", label: "Learn AI With Me" },
    { to: "/philosophy", label: "Random Thoughts About Philosophy" },
    { to: "/blogs", label: "Blogs" }
  ];

  return (
    <>
      {/* HEADER */}
      <header className="w-full shadow-sm bg-white/40 backdrop-blur-md fixed top-0 left-0 z-50">
        <nav className="flex items-center justify-between px-6 py-4">

          {/* Logo */}
          <h1 className="text-lg font-semibold text-gray-800">
            Dr. B.V.R.C Purushottam
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-lg font-light">
            {navLinks.map((link, i) => (
              <NavLink
                key={i}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative pb-1 transition-all duration-300
                  ${isActive ? "font-medium text-gray-900" : "text-gray-700"}
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:bg-gray-800
                  after:transition-all after:duration-300
                  ${isActive ? "after:w-full" : "after:w-0"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl text-gray-800"
          >
            ⋮
          </button>
        </nav>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 left-4 text-2xl text-gray-700"
        >
          ✕
        </button>

        {/* Mobile Nav */}
        <div className="mt-16 flex flex-col gap-6 px-6 text-lg">
          {navLinks.map((link, i) => (
            <NavLink
              key={i}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `pb-2 border-b transition-all
                ${isActive
                  ? "border-gray-900 font-semibold text-gray-900"
                  : "border-gray-300 text-gray-700"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
