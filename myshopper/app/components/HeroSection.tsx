import React from "react";
import { Button } from "../components/ui/button";
import { ShoppingCart } from "lucide-react";

const HeroSection:React.FC = () => {
  return (
    <div className="relative w-full bg-gradient-to-br from-white to-shoppers-light-gray py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-shoppers-dark-gray leading-tight mb-4">
            Shop Local Markets <span className="text-shoppers-green">Without The Hassle</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Connect with personal shoppers who pick up your market items and deliver them to your car. Save time, skip the lines, and support local vendors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-shoppers-orange hover:bg-orange-600 text-white text-lg py-6 px-8">
              Get Started
            </Button>
            <Button variant="outline" className="border-shoppers-green text-shoppers-green hover:bg-shoppers-green hover:text-white text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="relative w-full h-80 md:h-96 lg:h-[500px] bg-shoppers-light-orange rounded-lg overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-shoppers-orange/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <ShoppingCart className="h-32 w-32 text-white animate-bounce-slow opacity-70" />
            </div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-shoppers-green flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="font-medium">Your market shopping - delivered to your car in minutes!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
