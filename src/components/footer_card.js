import { Link } from "react-router";
import { Instagram, Facebook, Linkedin, Twitter, ArrowUp } from "lucide-react";

export default function Footers() {
  return (
    <footer className="
      bg-[#660708]
      text-[#eae5df]
      px-6 sm:px-10 md:px-20
      py-12 md:py-16
      flex flex-col gap-14
    ">

      {/* TOP SECTION */}
      <div className="
        grid grid-cols-1
        md:grid-cols-3
        gap-14 md:gap-10
      ">

        {/* LOGO + ABOUT */}
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">

          <img
            src={new URL("../images/SPACE-Logo.png", import.meta.url).href}
            className="
              w-36 sm:w-44 md:w-48
              mb-3
              drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]
            "
            alt="Space Logo"
          />

          <p className="
            opacity-80
            leading-relaxed
            font-[Cinzel]
            font-light
            max-w-sm
          ">
            Discover premium living spaces tailored for comfort and luxury.
            Designed with passion, delivered with elegance.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4">
            {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
              <Icon
                key={i}
                size={26}
                className="
                  cursor-pointer
                  hover:scale-110
                  transition
                  hover:text-white
                "
              />
            ))}
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="
          flex flex-col gap-4
          items-center md:items-start
          text-center md:text-left
        ">
          <strong className="text-2xl md:text-3xl font-semibold font-[Playfair]">
            Contact
          </strong>

          <p className="font-[Montserrat] font-light text-sm sm:text-base">
            <strong className="font-[Playfair] text-lg">Add:</strong> Seestrasse 21, Zurich, Switzerland
          </p>
          <p className="font-[Montserrat] font-light text-sm sm:text-base">
            <strong className="font-[Playfair] text-lg">Email:</strong> tadooo@example.com
          </p>
          <p className="font-[Montserrat] font-light text-sm sm:text-base">
            <strong className="font-[Playfair] text-lg">Tel:</strong> 9941234469
          </p>
          <p className="font-[Montserrat] font-light text-sm sm:text-base">
            <strong className="font-[Playfair] text-lg">Timing:</strong> Mon–Sat 9am–6pm
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="
          flex flex-col gap-6
          items-center md:items-start
          text-center md:text-left
        ">
          <strong className="text-2xl md:text-3xl font-semibold font-[Playfair]">
            Quick Links
          </strong>

          <div className="
            grid grid-cols-2
            gap-x-8 gap-y-3
            font-[Montserrat]
            font-light
            text-sm sm:text-base
          ">
            <Link to="/" className="hover:scale-105 transition">Home</Link>
            <Link to="/About-Us" className="hover:scale-105 transition">About Us</Link>
            <Link to="/Categories" className="hover:scale-105 transition">Categories</Link>
            <Link to="/Contact" className="hover:scale-105 transition">Contact</Link>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-[#eae5df]/30"></div>

      {/* BOTTOM SECTION */}
      <div className="
        flex flex-col-reverse md:flex-row
        justify-between
        items-center
        gap-6
      ">

        <p className="
          text-sm sm:text-base md:text-lg
          font-semibold
          font-[Cinzel]
          text-center md:text-left
        ">
          © {new Date().getFullYear()} Space by Signature • All Rights Reserved
        </p>

        {/* BACK TO TOP */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="
            flex items-center gap-2
            px-4 py-2
            rounded-lg
            bg-white
            text-[#660708]
            font-semibold
            hover:scale-105
            transition
            font-[Playfair]
          "
        >
          <ArrowUp size={18} />
          Back to Top
        </button>
      </div>
    </footer>
  );
}
