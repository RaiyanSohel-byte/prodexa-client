import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary px-6">
      <h2 className="text-4xl font-bold text-primary text-center mb-12">
        What Users Say
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
          <FaStar className="text-yellow-400 text-4xl mb-2" />
          <p className="text-primary mb-4">
            “Prodexa helped me organize everything. The UI is clean and
            intuitive.”
          </p>
          <h4 className="font-bold text-primary">— Alex Morgan</h4>
        </div>

        <div className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition">
          <FaStar className="text-yellow-400 text-4xl mb-2" />
          <p className="text-primary mb-4">
            “Fast, secure, and easy to use. Highly recommended!”
          </p>
          <h4 className="font-bold text-primary">— Sarah Williams</h4>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
