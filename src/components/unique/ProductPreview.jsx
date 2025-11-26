import Link from "next/link";
import React from "react";
import Image from "next/image";
import placeholder from "../../assets/heroBg.jpg";
import ProductCard from "../shared/ProductCard";

const ProductPreview = async () => {
  const res = await fetch("https://prodexa-server.vercel.app/latestProducts");
  const products = await res.json();
  return (
    <section className="py-24 lg:py-32 bg-secondary/20 text-primary">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* --- Header Group --- */}
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">
            Trending Now
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            Latest Product Showcase
          </h1>
          <p className="mt-4 text-lg text-primary/70">
            Discover the most popular items added by our community. Click to
            view detailed product information.
          </p>
        </header>

        {/* --- Product Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>

        {/* --- View All CTA --- */}
        <div className="text-center mt-16">
          <Link
            href="/products"
            className="btn btn-outline btn-lg btn-accent border-2 border-accent hover:bg-accent hover:text-white transition-colors duration-300"
          >
            Browse All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
