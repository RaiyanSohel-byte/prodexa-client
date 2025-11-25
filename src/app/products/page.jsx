"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/shared/ProductCard";
import { FaBoxes, FaRedoAlt } from "react-icons/fa";
import useAxios from "@/hooks/useAxios";
import useAuth from "@/hooks/useAuth";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

// Example categories
const CATEGORIES = [
  "All",
  "Electronics",
  "Furniture",
  "Apparel",
  "Home Goods",
  "Books",
];

export default function Products() {
  const axiosInstance = useAxios();
  const { loading, setLoading } = useAuth();

  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get("/products");
        setProducts(res.data || []);
        setAllProducts(res.data || []);
      } catch (err) {
        console.error(err);
        setProducts([]);
        setAllProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [axiosInstance, setLoading]);

  if (loading) return <LoadingSpinner />;

  // Filter products based on search and category
  const filteredProducts = allProducts.filter((p) => {
    const matchesCategory =
      selectedCategory === "All" ||
      (p.category &&
        p.category.toLowerCase() === selectedCategory.toLowerCase());
    const matchesSearch =
      !searchTerm ||
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (p.shortDescription &&
        p.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.searchText.value.trim();
    setSearchTerm(value);
  };

  // Reset filters
  const handleReset = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <section className="py-16 bg-secondary/10 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <header className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent mb-2 flex justify-center items-center">
            <FaBoxes className="mr-2" /> Explore Our Catalog
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">
            Product Listing ({filteredProducts.length})
          </h1>
          <p className="mt-4 text-lg text-primary/70">
            Browse our full range of products. Use the search or filter options
            below.
          </p>
        </header>

        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
          <form onSubmit={handleSearch} className="flex flex-1 gap-4">
            <input
              type="text"
              name="searchText"
              placeholder="Search products..."
              defaultValue={searchTerm}
              className="w-full md:w-1/2 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition"
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-accent text-white rounded-lg"
            />
          </form>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/4 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-accent transition bg-white cursor-pointer"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg font-semibold hover:bg-accent/90 transition cursor-pointer"
          >
            <FaRedoAlt /> Reset
          </button>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 w-[300px] mx-auto bg-white rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-gray-500 mb-2">
              No Products Found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter options.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
