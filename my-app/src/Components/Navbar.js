import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50 ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-wide">
          My<span className="text-indigo-600">Company</span>
        </h1>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {links.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `relative transition duration-300 ${
                  isActive
                    ? "text-indigo-600 after:w-full"
                    : "text-gray-700 hover:text-indigo-600 after:w-0"
                }
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:bg-indigo-600 after:transition-all after:duration-300`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {links.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-base font-medium transition ${
                    isActive
                      ? "text-indigo-600"
                      : "text-gray-700 hover:text-indigo-600"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
