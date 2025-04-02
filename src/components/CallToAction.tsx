"use client";

import React from "react";
import Link from "next/link";
import { ShoppingCart } from "@phosphor-icons/react";

const CallToAction = () => {
  return (
    <section className="w-full py-16 px-8 md:px-16 bg-gradient-to-b from-[#0c0c0d] to-[#0e0e0f]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Experience the <span className="text-nyron-primary">Future of Aiming</span>?
        </h2>

        <p className="text-nyron-text text-lg mb-8 max-w-2xl mx-auto">
          Join hundreds of satisfied users who have already transformed their gaming experience with Nyron AI. It's time to elevate your gameplay to the next level.
        </p>

        <Link
          href="/nyron-ai"
          className="bg-nyron-primary hover:bg-nyron-primary/90 text-white font-medium py-3 px-8 rounded-md inline-flex items-center gap-2 transition-colors"
        >
          <ShoppingCart size={20} weight="bold" />
          Purchase Now
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
