import {
  ArrowRight,
  ArrowUpRight,
  Monitor,
  Camera,
  Laptop,
  Projector,
  Presentation,
  GraduationCap,
  Building2,
  ShieldCheck,
  Check,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

const Home = () => {
  const products = [
    {
      no: "01",
      title: "Interactive Flat Panels",
      desc: "Advanced interactive displays for smart classrooms, boardrooms, training rooms and collaborative spaces.",
      meta: '65" / 75" / 86" / 98" / 105" / 110"',
      icon: Monitor,
    },
    {
      no: "02",
      title: "Large Format Displays",
      desc: "Professional commercial displays for institutions, corporate environments and digital communication.",
      meta: "Professional Display Systems",
      icon: Presentation,
    },
    {
      no: "03",
      title: "Active LED Walls",
      desc: "Indoor and outdoor LED systems engineered for high-impact visual communication.",
      meta: "P1 / P1.8 / P2.5 / P4 / P6 / P8 / P10",
      icon: Monitor,
    },
    {
      no: "04",
      title: "PTZ & Surveillance Cameras",
      desc: "Professional camera systems with powerful optical zoom for classrooms, conferences and monitoring.",
      meta: "10X / 12X / 20X / 30X Optical Zoom",
      icon: Camera,
    },
    {
      no: "05",
      title: "Projectors & Lecterns",
      desc: "Presentation systems built for lecture halls, institutions, conference rooms and training environments.",
      meta: "Professional AV Systems",
      icon: Projector,
    },
    {
      no: "06",
      title: "Computing Solutions",
      desc: "Desktop, laptop and all-in-one systems for labs, offices and institutional deployments.",
      meta: "Desktop / Laptop / AIO",
      icon: Laptop,
    },
  ];

  const solutions = [
    {
      no: "01",
      title: "Smart Classroom",
      text: "Interactive flat panels, PTZ cameras, teaching tools and presentation technology combined into one connected learning ecosystem.",
      icon: GraduationCap,
    },
    {
      no: "02",
      title: "Corporate Boardroom",
      text: "Professional displays, cameras and AV systems that simplify meetings, presentations and remote collaboration.",
      icon: Building2,
    },
    {
      no: "03",
      title: "Digital Signage",
      text: "LED walls, commercial screens and digital standees for retail, institutions, events and public spaces.",
      icon: Monitor,
    },
    {
      no: "04",
      title: "Surveillance & Security",
      text: "Camera and monitoring solutions designed for institutional, educational and commercial environments.",
      icon: ShieldCheck,
    },
    {
      no: "05",
      title: "Computer Labs",
      text: "Integrated desktops, laptops and all-in-one systems designed for computer labs and training environments.",
      icon: Laptop,
    },
    {
      no: "06",
      title: "Presentation & AV",
      text: "Projectors, electronic lecterns, displays and related AV infrastructure for professional presentation spaces.",
      icon: Presentation,
    },
  ];

  return (
    <main className="overflow-hidden bg-[#fffaf7]">

      {/* HERO */}
      <section className="relative min-h-screen pt-32">
        <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-orange-200/30 blur-[120px]" />
        <div className="absolute -right-40 top-10 h-[600px] w-[600px] rounded-full bg-orange-100/60 blur-[130px]" />

        <div className="relative mx-auto grid min-h-[82vh] max-w-[1480px] items-center gap-16 px-5 py-16 lg:grid-cols-[1.12fr_0.88fr] lg:px-10">

          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-3">
              <span className="h-[2px] w-10 bg-orange-500" />
              <span className="text-[12px] font-bold uppercase tracking-[0.22em] text-orange-500">
                Innovation For All
              </span>
            </div>

            <h1 className="mt-7 max-w-[900px] text-[50px] font-black leading-[0.98] tracking-[-0.045em] text-zinc-950 md:text-[70px] xl:text-[88px]">
              Technology that makes
              <span className="block text-orange-500">
                every space smarter.
              </span>
            </h1>

            <p className="mt-8 max-w-[680px] text-[16px] leading-8 text-zinc-600 md:text-[18px]">
              AXLEMTA delivers smart classroom, boardroom, digital display,
              surveillance, computing and professional AV solutions for
              connected modern environments.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#products"
                className="group flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 text-[14px] font-bold text-white transition hover:-translate-y-1"
              >
                Explore Products
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href="#contact"
                className="group flex items-center gap-2 px-2 py-4 text-[14px] font-bold text-zinc-900"
              >
                Discuss your requirement
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:rotate-45"
                />
              </a>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="150"
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto h-[570px] max-w-[520px]">

              <div className="absolute right-0 top-0 h-[410px] w-[410px] rounded-full bg-orange-500" />

              <div className="absolute left-0 top-[72px] w-[420px] bg-zinc-950 p-10 text-white shadow-2xl">
                <Monitor size={46} className="text-orange-500" />

                <p className="mt-20 text-[12px] uppercase tracking-[0.2em] text-orange-400">
                  Connected Spaces
                </p>

                <h2 className="mt-4 text-[40px] font-black leading-tight">
                  Learn.
                  <br />
                  Present.
                  <br />
                  Collaborate.
                </h2>

                <p className="mt-5 text-[14px] leading-7 text-zinc-400">
                  One integrated ecosystem for education, business and public
                  communication.
                </p>
              </div>

              <div className="absolute bottom-0 right-0 bg-white px-7 py-6 shadow-xl">
                <p className="text-[30px] font-black text-orange-500">
                  10+
                </p>
                <p className="text-[12px] font-semibold text-zinc-500">
                  Product Categories
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* QUICK SPECS */}
      <section className="border-y border-zinc-200 bg-white py-10">
        <div
          data-aos="fade-up"
          className="mx-auto grid max-w-[1480px] gap-8 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-10"
        >
          {[
            ["65″ – 110″", "Interactive Displays"],
            ["P1 – P10", "LED Pixel Pitch"],
            ["10X – 30X", "PTZ Optical Zoom"],
            ["A & C Type", "Digital Standee"],
          ].map(([big, small]) => (
            <div
              key={big}
              className="border-l border-zinc-200 pl-5 first:border-l-0 first:pl-0"
            >
              <p className="text-[26px] font-black text-zinc-950">
                {big}
              </p>

              <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.12em] text-zinc-500">
                {small}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white py-24">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10">

          <div className="grid gap-10 lg:grid-cols-[0.38fr_1.62fr]">

            <div data-aos="fade-right">
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-orange-500">
                About AXLEMTA
              </p>

              <div className="mt-8 h-[110px] w-px bg-gradient-to-b from-orange-500 to-transparent" />
            </div>

            <div data-aos="fade-up">
              <h2 className="max-w-[1050px] text-[40px] font-black leading-[1.08] tracking-[-0.035em] text-zinc-950 md:text-[58px]">
                We create technology environments where
                <span className="text-orange-500">
                  {" "}people, ideas and spaces connect.
                </span>
              </h2>

              <div className="mt-10 grid gap-10 border-t border-zinc-200 pt-9 md:grid-cols-2">
                <p className="text-[15px] leading-8 text-zinc-600">
                  AXLEMTA provides integrated display, AV, computing and
                  surveillance solutions for educational institutions,
                  corporate spaces and public environments.
                </p>

                <p className="text-[15px] leading-8 text-zinc-600">
                  Our approach combines modern hardware, practical integration
                  and dependable support to build technology systems that are
                  easy to use and ready for everyday work.
                </p>
              </div>

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {[
                  ["01", "Expertise"],
                  ["02", "Creativity"],
                  ["03", "Reliability"],
                ].map(([no, title]) => (
                  <div
                    key={title}
                    className="flex items-center gap-4 border-t border-zinc-200 pt-5"
                  >
                    <span className="text-[12px] font-bold text-orange-500">
                      {no}
                    </span>

                    <span className="text-[15px] font-bold text-zinc-950">
                      {title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-28">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10">

          <div
            data-aos="fade-up"
            className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-orange-500">
                Product Portfolio
              </p>

              <h2 className="mt-5 text-[42px] font-black tracking-[-0.03em] text-zinc-950 md:text-[58px]">
                Built for modern spaces.
              </h2>
            </div>

            <p className="max-w-md text-[14px] leading-7 text-zinc-500">
              From interactive displays to complete AV and computing
              infrastructure, our portfolio covers the essential technology
              behind connected environments.
            </p>
          </div>

          <div className="border-t border-zinc-300">
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <div
                  key={product.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                  className="group grid gap-5 border-b border-zinc-300 py-9 transition lg:grid-cols-[70px_1.1fr_1.45fr_0.9fr_40px] lg:items-center"
                >
                  <p className="text-[12px] font-bold text-orange-500">
                    {product.no}
                  </p>

                  <div className="flex items-center gap-4">
                    <Icon
                      size={25}
                      className="text-orange-500"
                    />

                    <h3 className="text-[21px] font-black text-zinc-950">
                      {product.title}
                    </h3>
                  </div>

                  <p className="text-[14px] leading-7 text-zinc-500">
                    {product.desc}
                  </p>

                  <p className="text-[12px] font-semibold uppercase leading-6 tracking-wide text-zinc-500">
                    {product.meta}
                  </p>

                  <ArrowUpRight
                    size={20}
                    className="text-zinc-400 transition group-hover:rotate-45 group-hover:text-orange-500"
                  />
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* SOLUTIONS - STICKY LEFT */}
      <section
        id="solutions"
        className="relative bg-[#151515] text-white"
      >
        <div className="mx-auto grid max-w-[1480px] lg:grid-cols-[0.85fr_1.15fr]">

          {/* Sticky column */}
          <div className="relative border-r border-white/10 px-5 lg:px-10">
            <div className="sticky top-[120px] flex min-h-[calc(100vh-120px)] items-center py-20">
              <div data-aos="fade-right">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-orange-400">
                  Our Solutions
                </p>

                <h2 className="mt-5 max-w-[480px] text-[42px] font-black leading-[1.04] tracking-[-0.035em] md:text-[60px]">
                  More than
                  <span className="block text-orange-500">
                    just products.
                  </span>
                </h2>

                <p className="mt-6 max-w-[430px] text-[15px] leading-8 text-zinc-400">
                  AXLEMTA combines products into practical technology
                  ecosystems designed around how your space actually works.
                </p>

                <div className="mt-10 flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-zinc-500">
                  <span className="h-2 w-2 rounded-full bg-orange-500" />
                  Scroll to explore solutions
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling right */}
          <div>
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <div
                  key={solution.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                  className="grid min-h-[300px] gap-7 border-b border-white/10 px-5 py-12 lg:grid-cols-[75px_1fr] lg:px-12 lg:py-16"
                >
                  <div className="pt-1">
                    <Icon
                      size={32}
                      className="text-orange-500"
                    />
                  </div>

                  <div>
                    <p className="text-[12px] font-semibold text-zinc-600">
                      {solution.no}
                    </p>

                    <h3 className="mt-4 text-[28px] font-black tracking-[-0.02em] md:text-[34px]">
                      {solution.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-[15px] leading-8 text-zinc-400">
                      {solution.text}
                    </p>

                    <div className="mt-8 h-px w-20 bg-orange-500/60" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* IFP */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10">

          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div data-aos="fade-right">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-orange-500">
                Interactive Flat Panel
              </p>

              <h2 className="mt-5 text-[42px] font-black leading-[1.08] tracking-[-0.035em] text-zinc-950 md:text-[58px]">
                One display.
                <br />
                Endless
                <span className="text-orange-500"> possibilities.</span>
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-8 text-zinc-600">
                Designed for modern classrooms and workspaces with powerful
                performance, large-format visibility and intuitive
                collaboration features.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {[
                  "Latest Android Platform",
                  "Up to 8GB RAM",
                  "128GB Storage",
                  "65″ to 110″ Display Range",
                  "Smart Classroom Ready",
                  "Corporate Collaboration",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-[14px] font-semibold text-zinc-700"
                  >
                    <Check
                      size={17}
                      className="text-orange-500"
                    />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {["65", "75", "86", "98", "105", "110"].map((size) => (
                  <span
                    key={size}
                    className="border-b-2 border-orange-500 pb-1 text-[22px] font-black text-zinc-950"
                  >
                    {size}"
                  </span>
                ))}
              </div>
            </div>

            <div
              data-aos="zoom-in"
              className="relative flex min-h-[500px] items-center justify-center"
            >
              <div className="absolute h-[430px] w-[430px] rounded-full bg-orange-500" />

              <div className="relative z-10 w-[85%] max-w-[560px] bg-zinc-950 p-5 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-orange-400 to-orange-600 p-7 text-white">
                  <Monitor size={40} />

                  <div className="mt-20">
                    <p className="text-[12px] uppercase tracking-[0.2em]">
                      Interactive Display
                    </p>

                    <h3 className="mt-3 text-[32px] font-black">
                      Engage.
                      <br />
                      Educate.
                      <br />
                      Collaborate.
                    </h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* LED */}
      <section className="py-28">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10">

          <div className="grid gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">

            <div data-aos="fade-up">
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-orange-500">
                LED Display Technology
              </p>

              <h2 className="mt-5 max-w-3xl text-[42px] font-black leading-tight tracking-[-0.03em] text-zinc-950 md:text-[58px]">
                Built to be seen.
                <span className="block text-orange-500">
                  Indoor or outdoor.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-[15px] leading-8 text-zinc-600">
                High-impact LED solutions suitable for institutions,
                auditoriums, events, commercial environments and public
                communication.
              </p>
            </div>

            <div
              data-aos="fade-left"
              className="border-l border-zinc-300 pl-8 md:pl-10"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-zinc-500">
                Available Pixel Pitch
              </p>

              <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-7 sm:grid-cols-4">
                {[
                  ["P1", "Ultra Fine"],
                  ["P1.8", "Fine Pitch"],
                  ["P2.5", "Indoor"],
                  ["P4", "Indoor"],
                  ["P6", "Medium"],
                  ["P8", "Outdoor"],
                  ["P10", "Outdoor"],
                ].map(([pitch, label]) => (
                  <div key={pitch}>
                    <p className="text-[26px] font-black text-zinc-950">
                      {pitch}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-zinc-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-9 max-w-xl text-[14px] leading-7 text-zinc-500">
                Multiple pitch options help match display clarity, size and
                viewing distance according to project requirements.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DIGITAL STANDEE */}
      <section className="bg-orange-500 py-24 text-white">
        <div className="mx-auto grid max-w-[1480px] gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">

          <div data-aos="fade-right">
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-orange-100">
              Digital Signage
            </p>

            <h2 className="mt-5 max-w-2xl text-[44px] font-black leading-[1.04] tracking-[-0.035em] md:text-[60px]">
              Make every message
              <span className="block">
                impossible to miss.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-[15px] leading-8 text-orange-50/90">
              Digital standees for retail spaces, institutions, events,
              receptions and modern commercial environments.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="grid gap-10 border-l border-white/30 pl-8 md:grid-cols-2 md:pl-10"
          >
            {/* Types */}
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-orange-100">
                Standee Types
              </p>

              <div className="mt-6 space-y-5">
                <div>
                  <p className="text-[31px] font-black">
                    A Type
                  </p>
                  <p className="mt-1 text-[12px] text-orange-100">
                    Standard digital standee format
                  </p>
                </div>

                <div className="h-px w-full bg-white/20" />

                <div>
                  <p className="text-[31px] font-black">
                    C Type
                  </p>
                  <p className="mt-1 text-[12px] text-orange-100">
                    Alternate premium standee format
                  </p>
                </div>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-orange-100">
                Display Sizes
              </p>

              <div className="mt-6 grid grid-cols-2 gap-y-6">
                {[
                  ["32″", "Compact"],
                  ["43″", "Medium"],
                  ["55″", "Large"],
                  ["65″", "XL"],
                ].map(([size, label]) => (
                  <div key={size}>
                    <p className="text-[31px] font-black">
                      {size}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-orange-100">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY */}
      <section className="bg-white py-28">
        <div className="mx-auto max-w-[1480px] px-5 lg:px-10">

          <div
            data-aos="fade-up"
            className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-orange-500">
                Why AXLEMTA
              </p>

              <h2 className="mt-5 text-[42px] font-black leading-tight text-zinc-950 md:text-[56px]">
                One partner.
                <br />
                Complete
                <span className="text-orange-500"> technology.</span>
              </h2>

              <p className="mt-6 max-w-md text-[14px] leading-7 text-zinc-500">
                From product selection to deployment, AXLEMTA helps simplify
                complete technology requirements under one roof.
              </p>
            </div>

            <div className="border-t border-zinc-300">
              {[
                "Complete AV & Display Solutions",
                "Modern Technology Portfolio",
                "Flexible Product Configurations",
                "Installation & Integration Support",
                "Solutions Built Around Your Space",
                "Dependable After-Sales Support",
              ].map((item, index) => (
                <div
                  key={item}
                  className="group flex items-center justify-between border-b border-zinc-300 py-5"
                >
                  <p className="text-[14px] font-bold text-zinc-900 transition group-hover:text-orange-500">
                    {item}
                  </p>

                  <span className="text-[12px] text-orange-500">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* BRANDS */}
      <section id="brands" className="border-y border-zinc-200 py-20">
        <div
          data-aos="fade-up"
          className="mx-auto max-w-[1480px] px-5 text-center lg:px-10"
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-orange-500">
            Deals In
          </p>

          <h2 className="mt-5 text-[38px] font-black text-zinc-950 md:text-[50px]">
            Technology from trusted brands.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] leading-7 text-zinc-500">
            We work across multiple technology brands to offer flexible
            solutions according to project requirements and budgets.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {[
              "Techamnt",
              "LG",
              "ViewSonic",
              "Study'n'Learn",
            ].map((brand) => (
              <span
                key={brand}
                className="text-[24px] font-black text-zinc-400 transition hover:text-orange-500"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fffaf7] py-28">
        <div
          data-aos="zoom-in"
          className="mx-auto max-w-[1480px] px-5 text-center lg:px-10"
        >
          <Sparkles
            size={28}
            className="mx-auto text-orange-500"
          />

          <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.2em] text-orange-500">
            Start Your Project
          </p>

          <h2 className="mx-auto mt-5 max-w-4xl text-[42px] font-black leading-tight tracking-[-0.035em] text-zinc-950 md:text-[62px]">
            Ready to build a smarter classroom,
            boardroom or digital space?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-zinc-600">
            Tell us what you need and AXLEMTA will help you plan the right
            technology solution for your space.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-[14px] font-bold text-white transition hover:-translate-y-1"
          >
            Talk to Our Team
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

    </main>
  );
};

export default Home;