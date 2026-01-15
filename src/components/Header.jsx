import { Link } from "react-router-dom";
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
    { to: "/blogs", label: "Blogs" }
  ];

  return (
    <>
      {/* HEADER */}
      <header className="w-full shadow-sm bg-white/40 backdrop-blur-md fixed top-0 left-0 z-50">
        <nav className="flex items-center justify-between px-6 py-4">
          
          {/* Logo / Brand */}
          <h1 className="text-lg font-semibold text-gray-800">
            Dr. B.V.R.C Purushottam
          </h1>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-lg font-light text-gray-800">
            {navLinks.map((link, i) => (
              <Link key={i} to={link.to}>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu (3 dots) */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-2xl text-gray-800"
          >
            ⋮
          </button>
        </nav>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SLIDE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 left-4 text-2xl text-gray-700"
        >
          ✕
        </button>

        {/* Nav Items */}
        <div className="mt-16 flex flex-col gap-6 px-6 text-lg font-medium text-gray-800">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.to}
              onClick={() => setOpen(false)}
              className="border-b pb-2"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
