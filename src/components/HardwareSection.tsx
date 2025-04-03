"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const HardwareSection = () => {
  return (
    <section className="w-full py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 flex flex-col justify-center order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Supports Hardware Based{" "}
              <span className="block text-nyron-primary">Mouse Emulation</span>
            </h2>

            <p className="text-nyron-text mb-6">
              To ensure top security, Nyron supports Hardware-Based Mouse Emulation, allowing invisible mouse movements to third-party systems. The hardware device is spoofed to appear as a standard mouse, ensuring safe and future-proof usage. While Nyron works perfectly without hardware, adding a device provides extra stability and protection against future detection methods. Prebuilt firmware, detailed setup guides, and support for any third-party firmware compatible with KmBox B+ commands are included for seamless integration with Nyron.
            </p>

            <Link
              href="/nyron-ai#information"
              className="inline-flex items-center gap-2 text-nyron-primary hover:text-nyron-primary/80 transition-colors"
            >
              More Info
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>

          <div className="flex-1 flex justify-center md:justify-end order-1 md:order-2">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-4">
                <div className="relative rounded-lg overflow-hidden border border-gray-800 p-3 bg-[#131314] shadow-lg">
                  <Image
                    src="/images/kmbox.png"
                    alt="KMBox Net"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold">KMBOX NET</h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative rounded-lg overflow-hidden border border-gray-800 p-3 bg-[#131314] shadow-lg">
                  <Image
                    src="/images/arduino.png"
                    alt="Arduino Leonardo"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-white text-lg font-semibold">ARDUINO LEONARDO</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareSection;
