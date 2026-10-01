import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../assets/images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });
  }, []);

  const products = [
    "Interactive Flat Panels",
    "Large Format Displays",
    "Active LED Walls",
    "Digital Standee",
    "PTZ Cameras",
    "Projectors",
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 md:px-5">
      <div
        data-aos="fade-down"
        className="mx-auto flex max-w-[1480px] items-center justify-between rounded-[20px] border border-black/5 bg-white/90 px-4 py-3 shadow-[0_8px_35px_rgba(0,0,0,0.07)] backdrop-blur-xl md:px-6"
      >
        {/* Logo */}
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="AXLEMTA"
            className="h-[52px] w-auto object-contain md:h-[60px]"
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 lg:flex">
          <Link
            to="/"
            className="px-4 py-2 text-[14px] font-semibold text-zinc-800 transition hover:text-orange-500"
          >
            Home
          </Link>

          <a
            href="#about"
            className="px-4 py-2 text-[14px] font-semibold text-zinc-800 transition hover:text-orange-500"
          >
            About
          </a>

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-[14px] font-semibold text-zinc-800 transition hover:text-orange-500">
              Products
              <ChevronDown
                size={15}
                className={`transition ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-4">
                <div className="overflow-hidden rounded-[18px] border border-zinc-100 bg-white p-2 shadow-2xl">
                  {products.map((item) => (
                    <a
                      key={item}
                      href="#products"
                      className="flex items-center justify-between rounded-xl px-4 py-3 text-[13px] font-medium text-zinc-700 transition hover:bg-orange-50 hover:text-orange-500"
                    >
                      {item}
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a
            href="#solutions"
            className="px-4 py-2 text-[14px] font-semibold text-zinc-800 transition hover:text-orange-500"
          >
            Solutions
          </a>

          <a
            href="#brands"
            className="px-4 py-2 text-[14px] font-semibold text-zinc-800 transition hover:text-orange-500"
          >
            Brands
          </a>

          <a
            href="#contact"
            className="px-4 py-2 text-[14px] font-semibold text-zinc-800 transition hover:text-orange-500"
          >
            Contact
          </a>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full bg-[#ff6b1a] px-6 py-3.5 text-[14px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#eb5d0e] lg:flex"
        >
          Get a Quote
          <ArrowUpRight size={17} />
        </a>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl bg-zinc-100 p-2.5 lg:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-[1480px] rounded-[20px] border border-zinc-100 bg-white p-4 shadow-xl lg:hidden">
          <div className="flex flex-col">
            {[
              ["Home", "/"],
              ["About", "#about"],
              ["Products", "#products"],
              ["Solutions", "#solutions"],
              ["Brands", "#brands"],
              ["Contact", "#contact"],
            ].map(([name, href]) => (
              <Link
                key={name}
                to={href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-zinc-100 px-3 py-3 text-[14px] font-semibold text-zinc-800 last:border-0"
              >
                {name}
              </Link>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-[14px] font-bold text-white"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;