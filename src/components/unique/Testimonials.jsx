import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import placeholder from "../../assets/heroBg.jpg";

const TESTIMONIAL_DATA = [
  {
    id: 1,
    quote:
      "Prodexa completely streamlined our inventory management. The transition was seamless, and the performance boost is remarkable. A game-changer for our logistics team.",
    author: "Alex Morgan",
    role: "Logistics Manager, TechCorp",
    avatar:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Fast, secure, and incredibly easy to use. Our small team saved hours every week after switching to Prodexa. Highly recommended for any growing e-commerce business!",
    author: "Marcus Chen",
    role: "CEO, Innovate Gear",
    avatar:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The clean UI and intuitive flow helped us onboard new employees in minutes. It's rare to find a tool that is powerful yet so user-friendly.",
    author: "Jessica Lee",
    role: "Product Lead, Nexus Solutions",
    avatar:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
  },
];

const StarRating = ({ count }) => (
  <div className="flex items-center mb-4">
    {[...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`text-xl transition-colors duration-200 ${
          i < count ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/80 text-primary">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* --- Header Group --- */}
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">
            Social Proof
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            Trusted by Industry Leaders
          </h1>
          <p className="mt-4 text-lg text-primary/70">
            Hear directly from the managers and CEOs who rely on Prodexa daily
            to keep their operations running smoothly.
          </p>
        </header>

        {/* --- Testimonial Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIAL_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-white p-8 rounded-2xl border-t-4 border-accent/20 shadow-lg 
                         hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 
                         flex flex-col h-full"
            >
              {/* Star Rating Component */}
              <StarRating count={t.rating} />

              <p className="text-xl font-medium italic text-primary/90 flex-grow mb-6">
                “{t.quote}”
              </p>

              {/* Author and Role  */}
              <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                {/* Avatar  */}
                <div className="relative w-12 h-12 mr-4 flex-shrink-0">
                  <Image
                    src={t?.avatar || placeholder}
                    alt={t.author}
                    fill
                    sizes="50px"
                    className="rounded-full object-cover shadow-md"
                  />
                </div>

                {/* Author Info */}
                <div>
                  <h4 className="font-bold text-primary">{t.author}</h4>
                  <p className="text-sm text-accent/70">{t.role}</p>
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
