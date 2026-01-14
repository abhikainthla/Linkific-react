import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Top section */}
      <div className="px-4 sm:px-6 md:px-16 lg:px-24 py-12 md:py-14 grid gap-10 md:grid-cols-3">
        
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            MyCompany
          </h1>
          <p className="mt-4 text-sm sm:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        {/* Links */}
        <div className="text-center md:text-left">
          <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">
            Links
          </h2>
          <ul className="mt-4 space-y-2 text-sm sm:text-base">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Case Studies</li>
            <li className="hover:text-white cursor-pointer">How it works</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Areas We Serve</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left">
          <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-wide">
            Contact Us
          </h2>
          <p className="mt-4 text-sm sm:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="mt-2 text-sm sm:text-base font-medium">
            +92 318 3561921
          </p>

          <div className="flex justify-center md:justify-start gap-4 mt-4 text-2xl sm:text-3xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer transition-all" />
            <FaInstagramSquare className="hover:text-pink-500 cursor-pointer transition-all" />
            <FaSquareXTwitter className="hover:text-sky-400 cursor-pointer transition-all" />
            <FaLinkedin className="hover:text-blue-600 cursor-pointer transition-all" />
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-slate-700 py-4 text-center text-sm sm:text-base">
        © 2023 Copyright by <span className="font-semibold">IK Developers</span>. 
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
