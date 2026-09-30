import {
  Mail,
  MapPin,
  Phone,
  ArrowUpRight,
} from "lucide-react";

import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#111111] text-white"
    >
      <div className="mx-auto max-w-[1480px] px-5 lg:px-10">

        {/* top statement */}
        <div
          data-aos="fade-up"
          className="flex flex-col justify-between gap-8 border-b border-white/10 py-14 md:flex-row md:items-end"
        >
          <div>
            <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-orange-500">
              AXLEMTA
            </p>

            <h2 className="mt-4 max-w-3xl text-[34px] font-black leading-tight md:text-[46px]">
              Smart technology for
              <span className="text-orange-500">
                {" "}better connected spaces.
              </span>
            </h2>
          </div>

          <a
            href="mailto:axlemta@gmail.com"
            className="flex items-center gap-2 text-[14px] font-bold text-white transition hover:text-orange-500"
          >
            Start a conversation
            <ArrowUpRight size={17} />
          </a>
        </div>

        {/* content */}
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">

          {/* Logo */}
          <div data-aos="fade-up">
            <div className="inline-flex bg-white p-3">
              <img
                src={logo}
                alt="AXLEMTA"
                className="h-[70px] w-auto object-contain"
              />
            </div>

            <p className="mt-6 max-w-sm text-[14px] leading-7 text-zinc-400">
              Interactive displays, LED systems, surveillance, computing and
              professional AV solutions for classrooms, boardrooms and public
              spaces.
            </p>

            <p className="mt-6 text-[12px] font-bold uppercase tracking-[0.16em] text-orange-500">
              Expertise | Creativity | Reliability
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up" data-aos-delay="80">
            <h3 className="text-[14px] font-bold">
              Explore
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {[
                ["Home", "/"],
                ["About", "#about"],
                ["Products", "#products"],
                ["Solutions", "#solutions"],
                ["Brands", "#brands"],
              ].map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  className="text-[13px] text-zinc-400 transition hover:text-orange-500"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div data-aos="fade-up" data-aos-delay="140">
            <h3 className="text-[14px] font-bold">
              Products
            </h3>

            <div className="mt-6 flex flex-col gap-3">
              {[
                "Interactive Flat Panels",
                "LED Walls",
                "Digital Standee",
                "PTZ Cameras",
                "Projectors",
                "Computing Solutions",
              ].map((item) => (
                <a
                  key={item}
                  href="#products"
                  className="text-[13px] text-zinc-400 transition hover:text-orange-500"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-[14px] font-bold">
              Contact
            </h3>

            <div className="mt-6 space-y-5">

              <a
                href="tel:+919355775136"
                className="flex gap-3"
              >
                <Phone
                  size={17}
                  className="mt-1 shrink-0 text-orange-500"
                />

                <div>
                  <p className="text-[12px] text-zinc-500">
                    Phone
                  </p>
                  <p className="mt-1 text-[13px] text-zinc-300">
                    +91 93557 75136
                  </p>
                </div>
              </a>

              <a
                href="tel:+917252004713"
                className="flex gap-3"
              >
                <Phone
                  size={17}
                  className="mt-1 shrink-0 text-orange-500"
                />

                <div>
                  <p className="text-[12px] text-zinc-500">
                    Alternate
                  </p>
                  <p className="mt-1 text-[13px] text-zinc-300">
                    +91 72520 04713
                  </p>
                </div>
              </a>

              <a
                href="mailto:axlemta@gmail.com"
                className="flex gap-3"
              >
                <Mail
                  size={17}
                  className="mt-1 shrink-0 text-orange-500"
                />

                <div>
                  <p className="text-[12px] text-zinc-500">
                    Email
                  </p>
                  <p className="mt-1 text-[13px] text-zinc-300">
                    axlemta@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex gap-3">
                <MapPin
                  size={17}
                  className="mt-1 shrink-0 text-orange-500"
                />

                <div>
                  <p className="text-[12px] text-zinc-500">
                    Address
                  </p>

                  <p className="mt-1 text-[13px] leading-6 text-zinc-300">
                    516, Awas Vikas Colony,
                    <br />
                    Bijnor, U.P. 246701
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-[12px] text-zinc-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} AXLEMTA. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;