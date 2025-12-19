import { useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ LOGO USING new URL() ONLY
  const logoSrc = new URL("../images/logo.png", import.meta.url).href;

  return (
    <>
      {/* NAVBAR CONTAINER */}
      <div className="fixed top-0 left-0 w-full z-50">

        {/* ================= MOBILE NAVBAR ================= */}
        <div className="flex md:hidden items-center justify-between px-4 py-3 bg-linear-to-r from-[#5a0001] to-[#9b0000] shadow-xl">

          {/* LOGO */}
          <img
            src={logoSrc}
            alt="Logo"
            className="h-9 w-auto object-contain  drop-shadow-[0_0px_12px_rgba(212,175,55,0.45)] "
          />

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(!open)}
            className="text-[#f6e7c5] text-3xl font-bold"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-[#5a0001] text-[#eae5df] px-6 py-6 space-y-4 shadow-2xl font-[playfair] font-semibold">
            <Link onClick={() => setOpen(false)} className="block" to="/">
              Home
            </Link>

            <Link onClick={() => setOpen(false)} className="block" to="/About-Us">
              About Us
            </Link>

            <Link onClick={() => setOpen(false)} className="block" to="/Categories">
              Categories
            </Link>
          </div>
        )}

        {/* ================= DESKTOP NAVBAR ================= */}
        <div className="hidden md:flex justify-center py-3 relative font-[playfair]">

          {/* LOGO - LEFT */}
          <img
            src={logoSrc}
            alt="Logo"
            className="absolute left-8 top-1/2 -translate-y-1/2 h-12 w-auto object-contain drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]"
          />

          {/* NAV LINKS */}
          <div
            className="
              flex gap-10 px-10 py-3 rounded-full items-center
              bg-linear-to-br from-[#5a0001]/70 via-[#7b0000]/70 to-[#2c0000]/70
              backdrop-blur-xl
              border border-[#d4af37]/20
              shadow-2xl
              text-xl md:text-2xl text-[#eae5df]
              font-semibold 
            "
          >
            <Link className="hover:scale-110 transition" to="/">
              Home
            </Link>

            <Link className="hover:scale-110 transition" to="/About-Us">
              About
            </Link>

            <Link className="hover:scale-110 transition" to="/Categories">
              Categories
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
