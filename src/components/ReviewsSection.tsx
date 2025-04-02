"use client";

import React from "react";
import { Star } from "@phosphor-icons/react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      text: "+rep best ai aimbot works well and havent gotten banned since 3 months",
      author: "un",
      date: "30/11/2023 06:15 AM"
    },
    {
      id: 2,
      text: "+rep it improved my aim allot. works smoothly which doesnt make it sus with the right settings. recommend for comp players.",
      author: "Anonymous Vouch",
      date: "02/07/2024 10:32 AM"
    },
    {
      id: 3,
      text: "+rep ITS CRAZY GOOD Ive been using Nyron now for 5+ months and can only say its definitely worth the money, because you just dont have do worry about getting banned like you do with other che4ts. WWWWW THANK YOU",
      author: "jay",
      date: "31/08/2023 01:05 AM"
    },
    {
      id: 4,
      text: "+rep best support fast and quick response time W",
      author: "Exotic",
      date: "24/05/2024 08:48 AM"
    },
    {
      id: 5,
      text: "+rep nyron aimbot is works very good got me to plat3 in 2 days in build and i im a zb player",
      author: "itzShadowplayer",
      date: "11/09/2023 06:16 AM"
    },
    {
      id: 6,
      text: "+rep works on face it and vanguard",
      author: "Anonymous Vouch",
      date: "08/03/2023 04:11 AM"
    },
  ];

  return (
    <section id="reviews" className="w-full py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            765+ Customers Gave Their{" "}
            <span className="block text-nyron-primary">Feedback</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#131314] rounded-lg p-6 flex flex-col"
            >
              <div className="mb-3 flex">
                {/* Use static stars instead of mapping over an array */}
                <Star size={18} weight="fill" className="text-nyron-primary" />
                <Star size={18} weight="fill" className="text-nyron-primary" />
                <Star size={18} weight="fill" className="text-nyron-primary" />
                <Star size={18} weight="fill" className="text-nyron-primary" />
                <Star size={18} weight="fill" className="text-nyron-primary" />
              </div>

              <p className="text-nyron-text mb-4 flex-grow">
                {review.text}
              </p>

              <div className="border-t border-gray-800 pt-3 mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">- {review.author}</span>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
