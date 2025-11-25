"use client"; // Framer Motion is a client-side library

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/shared/ProductCard";
import { FaBoxes } from "react-icons/fa";
import { motion } from "framer-motion";
import useAxios from "@/hooks/useAxios";
import useAuth from "@/hooks/useAuth";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function Products() {
  const axiosInstance = useAxios();
  const [products, setProducts] = useState([]);
  const { loading, setLoading } = useAuth();
  useEffect(() => {
    setLoading(true);
    axiosInstance.get("/products").then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, [axiosInstance, setLoading]);
  if (loading) {
    return <LoadingSpinner />;
  }
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

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
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {products.map((product) => (
              <motion.div key={product._id} variants={item}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
