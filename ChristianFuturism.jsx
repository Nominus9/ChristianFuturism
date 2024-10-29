import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import "./shader";
import "./style.css";

const ChristianFuturism = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowTopButton(window.scrollY > window.innerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative px-4 md:px-8 py-8">
      {/* Canvas for shader background */}
      <canvas
        id="glCanvas"
        className="fixed top-0 left-0 w-full h-full z-[-1]"
      />

      {/* Header/Nav */}
      <nav className="fixed top-0 right-0 p-8 z-50 flex gap-6">
        <a
          href="#"
          className="text-black hover:text-black/70 transition-colors"
        >
          Home
        </a>
        <a
          href="#"
          className="text-black hover:text-black/70 transition-colors"
        >
          Blog
        </a>
      </nav>

      {/* Main Title & Manifesto Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div
          className="text-center max-w-3xl mx-auto"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <h1 className="text-5xl md:text-7xl mb-6 text-black font-light">
            Christian Futurism
          </h1>
          <h2 className="text-xl md:text-2xl mb-12 text-black/80 font-light">
            Principles & Arguments
          </h2>

          <div className="space-y-6 text-black/80 mb-16">
            <p className="text-lg leading-relaxed">
              An emerging movement bridging timeless faith with advancing
              technology
            </p>
            <ul className="space-y-4 list-inside text-lg text-left">
              <li>
                Embracing technological progress as a divine gift for kingdom
                advancement
              </li>
              <li>
                Integrating Christian ethics into artificial intelligence
                development
              </li>
              <li>
                Building decentralized communities rooted in biblical principles
              </li>
              <li>Fostering spiritual growth through innovative mediums</li>
            </ul>
            <a
              href="#"
              className="inline-block mt-4 text-sm text-black/60 hover:text-black transition-colors"
            >
              Read the full manifesto →
            </a>
          </div>

          {/* Email Subscription moved under manifesto */}
          <div className="inline-flex items-center gap-4 mt-8">
            <input
              type="email"
              placeholder="email@example.com"
              className="px-4 py-2 border border-black/20 rounded focus:outline-none focus:border-black/40 transition-colors"
            />
            <button className="px-4 py-2 border border-black/20 rounded hover:bg-black/5 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Builders Section with enhanced hover effects */}
      <section className="py-24">
        <h3 className="text-2xl text-black font-light mb-16 text-center">
          Christian Futurism Builders
        </h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {[
            {
              icon: (
                <svg
                  viewBox="0 0 100 100"
                  className="w-16 h-16 md:w-24 md:h-24"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M30 50 L70 50 M50 30 L50 70"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              ),
              title: "Sermon AI",
              desc: "Neural networks trained on centuries of Christian wisdom",
            },
            {
              icon: (
                <svg
                  viewBox="0 0 100 100"
                  className="w-16 h-16 md:w-24 md:h-24"
                >
                  <rect
                    x="25"
                    y="25"
                    width="50"
                    height="50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="50" cy="50" r="15" fill="currentColor" />
                </svg>
              ),
              title: "Craft Interface",
              desc: "Building beautiful tools for digital ministry",
            },
            {
              icon: (
                <svg
                  viewBox="0 0 100 100"
                  className="w-16 h-16 md:w-24 md:h-24"
                >
                  <path
                    d="M50 20 L80 40 L80 60 L50 80 L20 60 L20 40 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              ),
              title: "Value Atomics",
              desc: "Encoding Christian values into digital systems",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group text-center relative perspective-1000"
            >
              {/* 3D transform container */}
              <div
                className="relative transition-all duration-500 transform-gpu preserve-3d 
                group-hover:rotate-y-180"
              >
                <div className="p-8 backface-hidden">
                  <div className="transition-transform duration-500 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h4 className="text-xl text-black mt-4 mb-2">{item.title}</h4>
                  <p className="text-black/70">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Space Recordings */}
      <section className="py-24 max-w-3xl mx-auto">
        <h3 className="text-2xl text-black font-light mb-16">
          Links to Space Recordings
        </h3>
        <div className="space-y-8">
          {[
            "AI Art × Christianity",
            "AI × Christianity",
            "Decentralized technology × Christianity",
          ].map((title) => (
            <div
              key={title}
              className="group cursor-pointer transform transition-all duration-300 hover:translate-x-2"
            >
              <div
                className="h-px bg-black/10 mb-4 transition-all duration-300 
                group-hover:bg-black/20 group-hover:h-0.5"
              />
              <h4 className="text-lg text-black">{title}</h4>
              <span className="text-black/60 text-sm">Explore recording</span>
            </div>
          ))}
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-black/5 hover:bg-black/10 rounded-full 
          transition-all duration-300 transform-gpu ${
            showTopButton
              ? "translate-y-0 opacity-100"
              : "translate-y-16 opacity-0"
          }`}
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ChristianFuturism;
