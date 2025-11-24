import Link from "next/link";
import React from "react";

const ProductPreview = () => {
  return (
    <section className="py-20 bg-white px-6">
      <h2 className="text-4xl font-bold text-primary text-center mb-8">
        Latest Products
      </h2>
      <p className="text-center text-primary/70 max-w-xl mx-auto mb-12">
        Here’s a sneak peek of what users can add. Fully customizable with your
        backend data.
      </p>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-secondary rounded-xl p-5 shadow-md hover:shadow-xl transition"
          >
            <img
              src="https://via.placeholder.com/400x250.png"
              className="rounded-lg mb-4 w-full"
              alt="Product"
            />
            <h3 className="text-xl font-bold text-primary">Sample Product</h3>
            <p className="text-primary/70 mt-2">
              A short description with clean UI and perfect spacing.
            </p>
            <button className="btn btn-accent mt-4 text-secondary">
              View Details
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/products"
          className="btn btn-outline btn-accent px-10 text-lg"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};

export default ProductPreview;
