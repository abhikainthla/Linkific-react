import { FaFacebook, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="px-6 py-14 md:px-16 lg:px-24 grid gap-10 md:grid-cols-3">
        
        <div>
          <h1 className="text-xl font-bold text-white">MyCompany</h1>
          <p className="mt-4 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white uppercase tracking-wide">
            Links
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Case Studies</li>
            <li className="hover:text-white cursor-pointer">How it works</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Areas We Serve</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold text-white uppercase tracking-wide">
            Contact Us
          </h2>
          <p className="mt-4 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="mt-2 text-sm font-medium">+92 318 3561921</p>

          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagramSquare className="hover:text-pink-500 cursor-pointer" />
            <FaSquareXTwitter className="hover:text-sky-400 cursor-pointer" />
            <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="border-t border-slate-700 py-4 text-center text-sm">
        © 2023 Copyright by <span className="font-semibold">IK Developers</span>.
        All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
