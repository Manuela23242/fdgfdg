"use client";

import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full py-16 px-8 md:px-16">
      <div className="max-w-3xl mx-auto md:mx-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          The future of aiming with{" "}
          <span className="block">
            NYRON <span className="text-nyron-primary">AI</span>
          </span>
        </h1>

        <p className="text-nyron-text text-lg mb-8">
          The most advanced AI Powered Aim Assist on the market.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/nyron-ai"
            className="bg-nyron-primary hover:bg-nyron-primary/90 text-white font-medium py-3 px-6 rounded-md inline-flex items-center gap-2 transition-colors"
          >
            Purchase
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>

          <Link
            href="https://discord.gg/nyron"
            target="_blank"
            className="bg-[#1a1a1c] hover:bg-[#252529] text-white font-medium py-3 px-6 rounded-md inline-flex items-center gap-2 transition-colors"
          >
            Join Our Discord
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M524.531 69.836a1.5 1.5 0 0 0-.764-.7A485.065 485.065 0 0 0 404.081 32.03a1.816 1.816 0 0 0-1.923.91 337.461 337.461 0 0 0-14.9 30.6 447.848 447.848 0 0 0-134.426 0 309.541 309.541 0 0 0-15.135-30.6 1.89 1.89 0 0 0-1.924-.91 483.689 483.689 0 0 0-119.688 37.107 1.712 1.712 0 0 0-.788.676C39.068 183.651 18.186 294.69 28.43 404.354a2.016 2.016 0 0 0 .765 1.375 487.666 487.666 0 0 0 146.825 74.189 1.9 1.9 0 0 0 2.063-.676A348.2 348.2 0 0 0 208.12 430.4a1.86 1.86 0 0 0-1.019-2.588 321.173 321.173 0 0 1-45.868-21.853 1.885 1.885 0 0 1-.185-3.126 251.047 251.047 0 0 0 9.109-7.137 1.819 1.819 0 0 1 1.9-.256c96.229 43.917 200.41 43.917 295.5 0a1.812 1.812 0 0 1 1.924.233 234.533 234.533 0 0 0 9.132 7.16 1.884 1.884 0 0 1-.162 3.126 301.407 301.407 0 0 1-45.89 21.83 1.875 1.875 0 0 0-1 2.611 391.055 391.055 0 0 0 30.014 48.815 1.864 1.864 0 0 0 2.063.7A486.048 486.048 0 0 0 610.7 405.729a1.882 1.882 0 0 0 .765-1.352C623.729 277.594 590.933 167.465 524.531 69.836ZM222.491 337.58c-28.972 0-52.844-26.587-52.844-59.239s23.409-59.241 52.844-59.241c29.665 0 53.306 26.82 52.843 59.239 0 32.654-23.41 59.241-52.843 59.241Zm195.38 0c-28.971 0-52.843-26.587-52.843-59.239s23.409-59.241 52.843-59.241c29.667 0 53.307 26.82 52.844 59.239 0 32.654-23.177 59.241-52.844 59.241Z" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
