import React from "react";
import { Button } from "../components/ui/button";

export default function CTASection () {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-shoppers-green to-shoppers-light-green text-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Shop With Ease?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join Shoppers today and transform your market shopping experience. Your first delivery fee is on us!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-shoppers-green hover:bg-gray-100 text-lg py-6 px-8">
            Sign Up Now
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
            Become a Shopper
          </Button>
        </div>
      </div>
    </section>
  );
};
