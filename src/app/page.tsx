"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UIShowcase from "@/components/UIShowcase";
import HardwareSection from "@/components/HardwareSection";
import PerformanceSection from "@/components/PerformanceSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0e0e0f]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-full h-full opacity-10">
          {/* Webgl background pattern simulation */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-nyron-primary" />
          <div className="absolute top-1/3 left-1/2 w-2 h-2 rounded-full bg-nyron-primary" />
          <div className="absolute top-2/3 left-3/4 w-2 h-2 rounded-full bg-nyron-primary" />
          <div className="absolute top-3/4 left-1/6 w-2 h-2 rounded-full bg-nyron-primary" />
          {/* Lines connecting points */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-nyron-primary/10 to-transparent" />
          <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-nyron-primary/10 to-transparent" />
        </div>
      </div>

      <Header />
      <Hero />
      <Features />
      <UIShowcase />
      <HardwareSection />
      <PerformanceSection />
      <ReviewsSection />
      <FAQSection />
      <CallToAction />
      <Footer />
    </main>
  );
}
