import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-3">

      {/* Logo */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl font-extrabold 
        bg-gradient-to-r from-[#5a0001] via-[#8b0000] to-[#d4af37]
        bg-clip-text text-transparent cursor-pointer
        hover:scale-110 transition duration-300 drop-shadow-lg">
        Logo
      </div>

      {/* Main Navbar Container */}
      <div
        className="flex items-center justify-center 
        bg-gradient-to-br from-[#5a0001]/70 via-[#7b0000]/70 to-[#2c0000]/70 
        backdrop-blur-xl px-10 py-3 rounded-3xl shadow-2xl 
        border border-[#d4af37]/20 
        transition-all duration-500
        w-[90%] md:w-[40%]"
      >

        {/* Menu Items */}
        <div className="flex items-center text-lg md:text-xl 
          text-[#eae5df] gap-6 md:gap-10 font-semibold transition-all">

          <Link className="hover:scale-110 transition duration-300" to="/">
            Home
          </Link>

          <Link className="hover:scale-110 transition duration-300" to="/About-Us">
            About Us
          </Link>

          <Link className="hover:scale-110 transition duration-300" to="/Categories">
            Categories
          </Link>

        </div>
      </div>
    </div>
  );
}
