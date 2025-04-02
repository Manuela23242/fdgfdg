"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-8 md:px-16 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400">
          <div className="flex gap-2 items-center">
            <span className="text-gray-400">PayPal</span>
            <span className="mx-2 text-gray-600">|</span>
            <span className="text-gray-400">CRYPTOCURRENCY</span>
            <span className="mx-2 text-gray-600">|</span>
            <span className="text-gray-400">CARD</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="text-sm text-gray-500">
            <Link href="/" className="text-gray-500 hover:text-nyron-primary">
              Nyron
            </Link>
            <span className="mx-2">•</span>
            <span>Copyright © 2025</span>
            <span className="mx-2">•</span>
            <span>All Rights Reserved</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/terms-of-service" className="text-gray-500 hover:text-nyron-primary">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-gray-500 hover:text-nyron-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
