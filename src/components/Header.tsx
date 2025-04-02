"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowSquareOut } from "@phosphor-icons/react";

const Header = () => {
  return (
    <header className="w-full py-4 px-8 md:px-16 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="Nyron Logo" width={30} height={30} />
          <h1 className="text-white text-xl font-medium">Nyron</h1>
        </Link>

        <div className="bg-nyron-primary text-white text-xs py-1 px-3 rounded-full ml-2 flex items-center gap-1">
          <span className="font-medium">Verified Seller Since 2021</span>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-white hover:text-nyron-primary transition-colors">
          HOME
        </Link>
        <Link href="/products" className="text-white hover:text-nyron-primary transition-colors">
          PRODUCTS
        </Link>
        <Link href="/#reviews" className="text-white hover:text-nyron-primary transition-colors">
          REVIEWS
        </Link>
        <Link href="/#faq" className="text-white hover:text-nyron-primary transition-colors">
          FAQ
        </Link>
        <Link
          href="https://discord.gg/nyron"
          target="_blank"
          className="text-nyron-primary hover:text-white transition-colors flex items-center gap-1"
        >
          DISCORD
          <ArrowSquareOut size={16} weight="bold" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
