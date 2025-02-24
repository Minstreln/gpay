import logo from "../assets/logo1.svg";
import { Menu, X, ChevronDown } from "lucide-react";
import { navItems } from "../constants/index";
import { useRef, useState } from "react";

function Navbar() {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  function toggleNavbar() {
    setMobileDrawerOpen(!mobileDrawerOpen);
  }

  return (
    <nav className="sticky top-0 z-50 bg-white py-5">
      <div className="container mx-auto px-4 sm:px-10 lg:px-15">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <img className="h-10 w-auto" src={logo} alt="Logo" />
          </div>

          {/* Desktop Nav */}
          <ul className="hidden space-x-12 font-[Poppins] text-[15px] font-medium tracking-wide text-[#1E293B] lg:flex">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <a
                  className="flex items-center space-x-2 font-[Poppins]"
                  href={item.href}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Login & Download App (Desktop) */}
          <div className="hidden items-center space-x-2 lg:flex">
            <a
              href="#"
              className="rounded-[5px] bg-[#000A62] px-7 py-2 font-[Poppins] text-[16px] font-semibold text-[#FFFFFF] transition-all duration-300 hover:bg-gradient-to-r hover:from-red-400 hover:to-red-900"
            >
              Download App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Sliding from Right) */}
      <div
        className={`fixed inset-y-0 right-0 z-40 h-full w-[60%] bg-white p-8 shadow-lg transition-transform duration-300 ease-in-out ${
          mobileDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleNavbar}
          className="absolute top-5 right-5 text-[#1E293B]"
        >
          <X size={20} />
        </button>

        {/* Nav Items */}
        <ul className="mt-10 space-y-6 font-medium tracking-wide text-[#1E293B]">
          {navItems.map((item, index) => (
            <li key={index} className="relative">
              <button className="flex w-full items-center justify-between font-[Poppins]">
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Login & Download App (Mobile) */}
        <div className="mt-10 flex flex-col space-y-4">
          <a
            href="#"
            className="rounded-[5px] bg-[#000A62] px-2 py-2 font-[Poppins] text-[13px] font-semibold text-[#FFFFFF]"
          >
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
