"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, Info, GameController, Desktop, Check } from "@phosphor-icons/react";

const ProductPage = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>("3x_months");

  const plans = [
    {
      id: "1x_week",
      title: "1x Week",
      price: "€19.90",
      popular: false
    },
    {
      id: "1x_month",
      title: "1x Month",
      price: "€34.90",
      popular: false
    },
    {
      id: "3x_months",
      title: "3x Months",
      price: "€54.90",
      popular: true
    },
    {
      id: "lifetime",
      title: "Lifetime",
      price: "€89.90",
      popular: false,
      label: "Bestseller"
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-[#0e0e0f]">
      <Header />

      <section className="pt-8 pb-16 px-8 md:px-16">
        <div className="max-w-6xl mx-auto mt-12">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="w-full lg:w-1/2">
              <h1 className="text-4xl font-bold mb-4">
                NYRON <span className="text-nyron-primary">AI</span>
              </h1>

              <div className="rounded-lg overflow-hidden border border-gray-800 bg-[#131314] mb-8">
                <Image
                  src="/images/ui-screenshot.png"
                  alt="Nyron AI Interface"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-[#131314] rounded-lg p-4 flex flex-col items-center border border-gray-800">
                  <Info size={24} className="text-nyron-primary mb-2" />
                  <span className="text-center">Information</span>
                </div>
                <div className="bg-[#131314] rounded-lg p-4 flex flex-col items-center border border-gray-800">
                  <GameController size={24} className="text-nyron-primary mb-2" />
                  <span className="text-center">Adaptability</span>
                </div>
                <div className="bg-[#131314] rounded-lg p-4 flex flex-col items-center border border-gray-800">
                  <Desktop size={24} className="text-nyron-primary mb-2" />
                  <span className="text-center">Installation</span>
                </div>
                <div className="bg-[#131314] rounded-lg p-4 flex flex-col items-center border border-gray-800">
                  <ShoppingCart size={24} className="text-nyron-primary mb-2" />
                  <span className="text-center">Purchase</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="p-6 bg-[#131314] rounded-lg border border-gray-800 mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
                  <span className="text-green-500 font-medium">INSTANT DELIVERY</span>
                </div>

                <div className="space-y-3">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`flex justify-between items-center p-4 rounded-md cursor-pointer ${
                        selectedPlan === plan.id
                          ? "bg-nyron-primary/20 border border-nyron-primary"
                          : "bg-[#1a1a1c] border border-transparent hover:border-gray-700"
                      }`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          selectedPlan === plan.id ? "bg-nyron-primary" : "bg-gray-700"
                        }`}>
                          {selectedPlan === plan.id && <Check size={14} weight="bold" />}
                        </div>
                        <span>{plan.title}</span>
                        {plan.label && (
                          <span className="text-xs px-2 py-1 rounded-full bg-nyron-primary/20 text-nyron-primary">
                            {plan.label}
                          </span>
                        )}
                      </div>
                      <span className="font-semibold">{plan.price}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-6 bg-nyron-primary hover:bg-nyron-primary/90 text-white font-medium py-3 rounded-md flex items-center justify-center gap-2 transition-colors">
                  <ShoppingCart size={20} weight="bold" />
                  PURCHASE NOW
                </button>
              </div>

              <div className="p-6 bg-[#131314] rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Supported OS</span>
                    <span>Windows 10/11</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Supported GPU</span>
                    <span>NVIDIA/AMD/INTEL</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Supported Setups</span>
                    <span>Single/Dual-PC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cloud Gaming Support</span>
                    <span>Yes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Controller Support</span>
                    <span>Yes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Supported Resolutions</span>
                    <span>All</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-8 md:px-16 bg-[#0c0c0d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">User Security</h2>

          <p className="text-nyron-text mb-6">
            Unlike other providers, each Nyron user receives a unique and private software build to prevent third party signature scans. This ensures that even if one user gets banned, everyone else remains completely safe.
          </p>

          <h2 className="text-3xl font-bold mb-8 mt-12">Extra Hardware</h2>

          <p className="text-nyron-text mb-6">
            Recommended for extra safety. If buying from Nova, you will receive an all-in-one Arduino hardware device with pre-flashed firmware—just plug and play. For all other hardware devices, Nyron provides detailed setup instructions.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
            <div className="bg-[#131314] rounded-lg p-4 flex flex-col items-center border border-gray-800">
              <div className="w-24 h-24 flex items-center justify-center mb-3">
                <Image
                  src="/images/arduino.png"
                  alt="Arduino Basic"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-center">Arduino Basic (for 1-PC Setups)</span>
            </div>

            <div className="bg-[#131314] rounded-lg p-4 flex flex-col items-center border border-gray-800">
              <div className="w-24 h-24 flex items-center justify-center mb-3">
                <Image
                  src="/images/arduino.png"
                  alt="Arduino Hidra"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-center">Arduino Hidra (1-PC & 2-PC)</span>
            </div>

            <div className="bg-[#131314] rounded-lg p-4 flex flex-col items-center border border-gray-800">
              <div className="w-24 h-24 flex items-center justify-center mb-3">
                <Image
                  src="/images/kmbox.png"
                  alt="Kmbox Net"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-center">Kmbox Net</span>
            </div>

            <div className="bg-[#131314] rounded-lg p-4 flex flex-col items-center border border-gray-800">
              <div className="w-24 h-24 flex items-center justify-center mb-3">
                <Image
                  src="/images/kmbox.png"
                  alt="Kmbox B+"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-center">Kmbox B+</span>
            </div>

            <div className="bg-[#131314] rounded-lg p-4 flex flex-col items-center border border-gray-800">
              <div className="w-24 h-24 flex items-center justify-center mb-3">
                <Image
                  src="/images/makcu.png"
                  alt="Makcu"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <span className="text-sm text-center">Makcu</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductPage;
