"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

const UIShowcase = () => {
  return (
    <section className="w-full py-16 px-8 md:px-16 bg-[#0c0c0d]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="relative rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
              <Image
                src="/images/ui-screenshot.png"
                alt="Nyron AI Interface"
                width={500}
                height={334}
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unique <span className="text-nyron-primary">UI</span>
            </h2>

            <p className="text-nyron-text mb-6">
              Clean and user-friendly interface that makes it easy for you to understand how to configure settings to your liking. We provide plenty of customizable/unique features and try to implement new features based on customer suggestions for future updates as soon as possible.
            </p>

            <Link
              href="/nyron-ai#features"
              className="inline-flex items-center gap-2 text-nyron-primary hover:text-nyron-primary/80 transition-colors"
            >
              See All Features
              <ArrowRight size={16} weight="bold" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIShowcase;
