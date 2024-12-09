import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

export const Banner = () => {
  return (
    <div className="relative bg-gray-900 py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <UtensilsCrossed className="w-16 h-16 mx-auto mb-6 text-green-500" />
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Discover Delicious Recipes
        </h1>
        <p className="text-xl text-gray-300">
          Enter your ingredients and find amazing recipes to cook your next meal
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
    </div>
  );
}