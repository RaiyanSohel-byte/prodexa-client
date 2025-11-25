import React from "react";
import ProductCard from "@/components/shared/ProductCard";
import { FaBoxes } from "react-icons/fa"; // Added for visual context

export default async function Products() {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  return (
    <section className="py-16 bg-secondary/10 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent mb-2 flex justify-center items-center">
            <FaBoxes className="mr-2" /> Explore Our Catalog
          </h2>

          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            Product Listing ({products.length || "Loading"})
          </h1>
          <p className="mt-4 text-lg text-primary/70">
            Browse our full range of products. Use the grid below to view
            details and add items to your cart.
          </p>
        </header>

        {products.length === 0 ? (
          <div className="text-center py-20 w-[300px] mx-auto bg-white rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-500 mb-2">
              No Products Found
            </h3>
            <p className="text-gray-400">
              The product catalog is currently empty.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
