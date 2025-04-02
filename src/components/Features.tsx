"use client";

import React from "react";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      icon: "/icons/arrow.svg",
      title: "4500+ PRODUCTS SOLD",
      description: "Trusted by 850+ active users, Nyron has sold more than 4500 products.",
    },
    {
      icon: "/icons/products.svg",
      title: "10+ GAMES SUPPORTED",
      description: "Nyron works for many games with our universal model, no extra payments for other games.",
    },
    {
      icon: "/icons/security.svg",
      title: "UNIQUE SECURITY",
      description: "Benefit from unique, private builds and undetectable external object detection to stay secure.",
    },
    {
      icon: "/icons/easy.svg",
      title: "EASY TO USE",
      description: "User friendly UI, simple installation, and 24/7 customer support.",
    },
  ];

  return (
    <section className="w-full py-16 px-8 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="bg-[#131314] p-6 rounded-lg flex flex-col">
            <div className="mb-4">
              <Image src={feature.icon} alt={feature.title} width={24} height={24} />
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-nyron-text text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
