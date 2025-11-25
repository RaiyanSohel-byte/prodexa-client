import Link from "next/link";
import React from "react";
import Image from "next/image";
import placeholder from "../../assets/heroBg.jpg";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Modern Design Desk",
    price: 499.99,
    category: "New Arrival",
    image: "",
    description: "Ergonomic and minimal design for maximum productivity.",
  },
  {
    id: 2,
    name: "AI-Powered Headset",
    price: 199.0,
    category: "Best Seller",
    image: "",
    description:
      "Noise cancellation and voice commands for crystal clear calls.",
  },
  {
    id: 3,
    name: "Smartwatch Elite",
    price: 249.5,
    category: "Trending",
    image: "",
    description: "Track your fitness and manage notifications effortlessly.",
  },
];

const ProductPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/20 text-primary">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* --- Header Group --- */}
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">
            Trending Now
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            Featured Product Showcase
          </h1>
          <p className="mt-4 text-lg text-primary/70">
            Discover the most popular items added by our community. Click to
            view detailed product information.
          </p>
        </header>

        {/* --- Product Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DUMMY_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-xl overflow-hidden
                         transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]
                         flex flex-col h-full"
            >
              {/*Image Optimization and Aspect Ratio */}
              <div className="relative w-full aspect-video overflow-hidden">
                <Image
                  src={product?.image || placeholder}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/*Product Badge (Visual Feedback) */}
                <span
                  className={`absolute top-3 right-3 badge badge-lg font-semibold ${
                    product.category === "New Arrival"
                      ? "badge-accent text-white"
                      : "badge-secondary"
                  }`}
                >
                  {product.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-primary mb-1 truncate">
                  {product.name}
                </h3>

                {/* Price and Description */}
                <p className="text-accent text-3xl font-extrabold mb-3">
                  ${product.price.toFixed(2)}
                </p>
                <p className="text-primary/70 text-base flex-grow mb-4">
                  {product.description}
                </p>

                {/* CTA Button */}
                <Link
                  href={`/products/${product.id}`}
                  className="btn btn-accent btn-block text-secondary mt-auto hover:bg-accent/90"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* --- View All CTA --- */}
        <div className="text-center mt-16">
          <Link
            href="/products"
            className="btn btn-outline btn-lg btn-primary border-2 border-primary hover:bg-primary hover:text-white transition-colors duration-300"
          >
            Browse All Products (40+)
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
