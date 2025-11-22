import { Link } from "react-router";
import { Instagram, Facebook, Linkedin, Twitter, ArrowUp } from "lucide-react";

export default function Footers() {
    return (
        <footer className="bg-[#660708] text-[#eae5df] px-10 py-14 md:px-20 flex flex-col gap-16">

            {/* TOP SECTION */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* LOGO + ABOUT */}
                <div className="flex flex-col gap-4">
                    <h1 className="text-5xl font-bold cursor-pointer hover:scale-105 transition">Logo</h1>
                    <p className="opacity-80 leading-relaxed">
                        Discover premium living spaces tailored for comfort and luxury.
                        Designed with passion, delivered with elegance.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-3">
                        {[Instagram, Facebook, Linkedin, Twitter].map((Icon, i) => (
                            <Icon
                                key={i}
                                size={28}
                                className="cursor-pointer hover:scale-110 transition hover:text-white"
                            />
                        ))}
                    </div>
                </div>

                {/* CONTACT SECTION */}
                <div className="flex flex-col gap-4">
                    <strong className="text-3xl font-bold">Contact</strong>

                    <p><strong>Add:</strong> Seestrasse 21, Zurich, Switzerland</p>
                    <p><strong>Email:</strong> tadooo@example.com</p>
                    <p><strong>Tel:</strong> 9941234469</p>
                    <p><strong>Timing:</strong> Mon–Sat 9am–6pm</p>
                </div>

                {/* QUICK LINKS ONLY (Newsletter removed) */}
                <div className="flex flex-col gap-6">

                    <strong className="text-3xl font-bold">Quick Links</strong>

                    <div className="grid grid-cols-2 gap-3">
                        <Link to="/">
                            <p className="cursor-pointer hover:scale-105 transition">Home</p>
                        </Link>
                        <Link to="/About-Us">
                            <p className="cursor-pointer hover:scale-105 transition">About Us</p>
                        </Link>
                        <Link to="/Categories">
                            <p className="cursor-pointer hover:scale-105 transition">Categories</p>
                        </Link>
                        <Link to="/Contact">
                            <p className="cursor-pointer hover:scale-105 transition">Contact</p>
                        </Link>
                    </div>

                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-[#eae5df]/30"></div>

            {/* BOTTOM SECTION */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                <p className="text-lg font-bold">
                    © {new Date().getFullYear()} Space by Signature • All Rights Reserved
                </p>

                {/* Back To Top */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#660708] font-semibold hover:scale-105 transition"
                >
                    <ArrowUp size={18} /> Back to Top
                </button>
            </div>
        </footer>
    );
}
