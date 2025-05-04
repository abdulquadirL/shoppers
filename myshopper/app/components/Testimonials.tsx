import React from "react";

const testimonials = [
  {
    quote: "As a busy mom, Shoppers has been a game-changer. I can get all my market favorites without unbuckling the kids!",
    author: "Sarah M.",
    role: "Mother of three",
    image: "https://i.pravatar.cc/150?img=32"
  },
  {
    quote: "I work long hours but still want fresh market goods. With Shoppers, I can pick up my order on my way home.",
    author: "James L.",
    role: "IT Professional",
    image: "https://i.pravatar.cc/150?img=53"
  },
  {
    quote: "After my surgery, I couldn't walk around the market. Shoppers let me continue supporting my favorite vendors.",
    author: "Elena R.",
    role: "Retired Teacher",
    image: "https://i.pravatar.cc/150?img=47"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-shoppers-dark-gray mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from people who've simplified their market shopping with Shoppers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-shoppers-light-gray p-8 rounded-lg relative"
            >
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 text-6xl text-shoppers-green opacity-20">
                "
              </div>
              <p className="italic text-gray-700 mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 border-2 border-shoppers-green"
                />
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
// This component displays testimonials from users of the Shoppers app. Each testimonial includes a quote, the author's name, their role, and an image. The section is styled with a light gray background and rounded cards for each testimonial.