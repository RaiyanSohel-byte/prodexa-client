import React from "react";
import {
  FaBoxOpen,
  FaRocket,
  FaShieldAlt,
  FaShippingFast,
  FaStar,
  FaTshirt,
} from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-20 bg-secondary px-6">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        Why Prodexa Stands Out
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="p-8 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <FaTshirt className="text-accent text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Stylish Catalog</h3>
          <p className="text-primary/70">
            Create and manage beautiful product listings with ease.
          </p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <FaShippingFast className="text-accent text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Fast & Reliable</h3>
          <p className="text-primary/70">
            Our Next.js frontend ensures blazing-fast performance.
          </p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <FaStar className="text-accent text-4xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Trusted By Users</h3>
          <p className="text-primary/70">
            Highly-rated tools and support to help grow your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
