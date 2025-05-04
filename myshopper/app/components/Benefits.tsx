import React from "react";

export const benefitsList = [
  {
    title: "Save Time",
    description: "Skip the crowds and long lines. Get your market shopping done while you wait in your car.",
    icon: "⏱️"
  },
  {
    title: "Support Local",
    description: "Continue supporting your favorite local vendors without having to navigate the busy market.",
    icon: "🏬"
  },
  {
    title: "Fresh Selection",
    description: "Your personal shopper carefully selects the freshest produce and best quality items.",
    icon: "🥕"
  },
  {
    title: "Transparent Pricing",
    description: "See vendor prices upfront with a small service fee - no hidden costs or markups.",
    icon: "💰"
  },
  {
    title: "Easy Communication",
    description: "Chat directly with your shopper for special requests or substitutions during shopping.",
    icon: "💬"
  },
  {
    title: "Accessibility",
    description: "Perfect for parents with kids in the car, people with limited mobility, or those short on time.",
    icon: "♿"
  }
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-shoppers-light-gray">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-shoppers-dark-gray mb-4">Benefits of Using Shoppers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why more people are choosing Shoppers for their market shopping needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsList.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border-t-4 border-shoppers-green hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
