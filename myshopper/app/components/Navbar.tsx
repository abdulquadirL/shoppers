import React from "react";
import { Button } from "../components/ui/button";
import { ShoppingBag } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="w-full py-4 px-4 md:px-8 lg:px-16 flex items-center justify-between bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <ShoppingBag className="h-8 w-8 text-shoppers-green" />
        <span className="text-2xl font-bold">Shoppers</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#how-it-works" className="text-shoppers-dark-gray hover:text-shoppers-green transition-colors">
          How It Works
        </a>
        <a href="#benefits" className="text-shoppers-dark-gray hover:text-shoppers-green transition-colors">
          Benefits
        </a>
        <a href="#testimonials" className="text-shoppers-dark-gray hover:text-shoppers-green transition-colors">
          Testimonials
        </a>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outline" className="hidden md:flex border-shoppers-green text-shoppers-green hover:bg-shoppers-green hover:text-white">
          Log In
        </Button>
        <Button className="bg-shoppers-orange hover:bg-orange-600 text-white">
          Sign Up
        </Button>
      </div>
    </nav>
  );
};
