import React from "react";
import {
  FaTshirt,
  FaShippingFast,
  FaStar,
  FaShieldAlt,
  FaRocket,
  FaBolt,
} from "react-icons/fa";
import { FaCubes } from "react-icons/fa6";

const FEATURE_DATA = [
  {
    icon: FaCubes,
    title: "Centralized Product Hub",
    description:
      "Maintain a single source of truth for all product data (PIM), ensuring consistency across channels.",
    color: "text-blue-500",
  },
  {
    icon: FaBolt,
    title: "Blazing Fast Performance",
    description:
      "Our Next.js architecture delivers unparalleled loading speeds and responsiveness, maximizing conversion.",
    color: "text-yellow-500",
  },
  {
    icon: FaShieldAlt,
    title: "Enterprise-Grade Security",
    description:
      "Robust security layers protect your sensitive product data and user information at all times.",
    color: "text-green-500",
  },
  {
    icon: FaRocket,
    title: "Scalable Infrastructure",
    description:
      "Handle unlimited product listings and massive traffic spikes without degradation in service.",
    color: "text-red-500",
  },
  {
    icon: FaStar,
    title: "Highly-Rated Support",
    description:
      "Access to 24/7 expert support and a comprehensive knowledge base to solve any challenge.",
    color: "text-purple-500",
  },
  {
    icon: FaShippingFast,
    title: "Seamless Integration",
    description:
      "Connect instantly with major e-commerce platforms, ERPs, and marketing tools.",
    color: "text-teal-500",
  },
];

const Features = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/80 text-primary">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* --- Header Group --- */}
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">
            Why Prodexa
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            The Difference is in the Details
          </h1>
          <p className="mt-4 text-lg text-primary/70">
            We focus on core features that drive real business growth and
            operational efficiency, not just vanity metrics.
          </p>
        </header>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURE_DATA.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white border-t-4 border-transparent rounded-xl shadow-lg 
                           hover:shadow-2xl hover:border-accent transition-all duration-500 transform hover:-translate-y-1"
              >
                <div
                  className={`p-3 w-max rounded-full ${feature.color} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`text-3xl ${feature.color}`} />
                </div>

                <h3 className="text-xl font-bold mb-3 text-primary">
                  {feature.title}
                </h3>
                <p className="text-primary/70 text-base">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
