"use client";

import React from "react";
import Image from "next/image";

const PerformanceSection = () => {
  return (
    <section className="w-full py-16 px-8 md:px-16 bg-[#0c0c0d]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="relative rounded-lg overflow-hidden border border-gray-800 p-4 bg-[#131314] shadow-2xl">
              <div className="absolute top-2 left-2 bg-[#0c0c0d] px-3 py-1 rounded text-sm">
                <span className="text-white font-medium">NYRON</span>
                <span className="text-green-500 ml-2">227 FPS</span>
              </div>
              <Image
                src="/images/performance-chart.png"
                alt="Nyron Performance Chart"
                width={400}
                height={220}
                className="object-contain"
              />
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Insane <span className="text-nyron-primary">Performance</span>
            </h2>

            <p className="text-nyron-text mb-6">
              Nyron is perfectly optimized to run multithreaded, which is why it even supports older GPUs. Using Nyron does not affect your input delay and requires minimal GPU usage. We have ensured that everything, including Aim Tracking, runs smoothly. Additionally, we provide tips to maximize performance, guaranteeing the best possible user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
