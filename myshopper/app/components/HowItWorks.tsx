import React from "react";
import { ShoppingCart, User, MapPin, Truck } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Place Your Order",
    description: "Browse local vendors and add items to your cart. Customize your order with special instructions.",
    color: "bg-shoppers-green"
  },
  {
    icon: User,
    title: "Personal Shopper Assigned",
    description: "An experienced shopper accepts your order and communicates with you throughout the process.",
    color: "bg-shoppers-orange"
  },
  {
    icon: MapPin,
    title: "Market Shopping",
    description: "Your shopper visits each vendor, ensuring quality selection of your requested items.",
    color: "bg-shoppers-green"
  },
  {
    icon: Truck,
    title: "Parking Lot Delivery",
    description: "Meet your shopper at the designated pickup spot. They'll bring everything right to your car.",
    color: "bg-shoppers-orange"
  }
];

const HowItWorks:React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-shoppers-dark-gray mb-4">How Shoppers Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Shop from local market vendors without leaving your car. Our easy process connects you with personal shoppers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`${step.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                <step.icon className="h-10 w-10 text-white" />
              </div>
              <span className="inline-block px-4 py-1 bg-shoppers-light-gray rounded-full text-sm font-medium mb-4">
                Step {index + 1}
              </span>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-1/2 left-[25%] w-[50%] h-0.5 bg-gray-300 -z-10"></div>
          <div className="hidden md:flex justify-between absolute top-1/2 left-1/4 right-1/4 -translate-y-1/2 -z-10">
            <div className="w-3 h-3 rounded-full bg-shoppers-green"></div>
            <div className="w-3 h-3 rounded-full bg-shoppers-orange"></div>
            <div className="w-3 h-3 rounded-full bg-shoppers-green"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
