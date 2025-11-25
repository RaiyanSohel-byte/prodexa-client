"use client";
import useAuth from "@/hooks/useAuth";
import useAxios from "@/hooks/useAxios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FaPlusCircle,
  FaDollarSign,
  FaSortAmountUp,
  FaFolderOpen,
  FaImage,
} from "react-icons/fa";

// Define categories and priorities for dropdowns
const CATEGORIES = [
  { value: "electronics", label: "Electronics" },
  { value: "furniture", label: "Furniture" },
  { value: "apparel", label: "Apparel & Clothing" },
  { value: "home-goods", label: "Home Goods" },
  { value: "books", label: "Books & Media" },
];

const PRIORITIES = [
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
];

const AddProductForm = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();
  const handleSubmit = (e) => {
    e.preventDefault();
    const productInfo = {
      name: e.target.name.value,
      price: e.target.price.value,
      category: e.target.category.value,
      priority: e.target.priority.value,
      image: e.target.image.value,
      stock: "In Stock",
      longDescription: e.target.fullDescription.value,
      shortDescription: e.target.shortDescription.value,
      postedBy: {
        email: user?.email || "none",
        name: user?.displayName || "none",
        photo: user?.photoURL || "none",
      },
    };
    axiosInstance.post("/products", productInfo).then((res) => {
      if (res.data.insertedId) {
        toast.success("Product Submitted");
        e.target.reset();
      }
    });
  };

  return (
    <section className="py-16 lg:py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* --- Header --- */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-accent flex items-center justify-center">
            <FaPlusCircle className="mr-3 text-accent" /> Create New Product
          </h1>
          <p className="mt-2 text-lg text-accent/70">
            Fill out the details below to add a new item to the inventory.
          </p>
        </header>

        {/* --- Form Card --- */}
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* --- Grid Section: Name, Category, Price, Priority --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Product Name */}
              <div>
                <label
                  htmlFor="name"
                  className="label font-semibold text-accent mb-2"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g., Wireless Gaming Headset"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition"
                />
              </div>

              {/* Price */}
              <div>
                <label
                  htmlFor="price"
                  className="label font-semibold text-accent mb-2"
                >
                  Price ($)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FaDollarSign />
                  </span>
                  <input
                    type="number"
                    name="price"
                    required
                    step="0.01"
                    min="0"
                    placeholder="99.99"
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition"
                  />
                </div>
              </div>

              {/* Category Dropdown */}
              <div>
                <label
                  htmlFor="category"
                  className="label font-semibold text-accent mb-2"
                >
                  Category
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FaFolderOpen />
                  </span>
                  <select
                    name="category"
                    required
                    defaultValue=""
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {CATEGORIES.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Priority Dropdown */}
              <div>
                <label
                  htmlFor="priority"
                  className="label font-semibold text-accent mb-2"
                >
                  Priority
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FaSortAmountUp />
                  </span>
                  <select
                    name="priority"
                    required
                    className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition bg-white appearance-none cursor-pointer"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select priority level
                    </option>
                    {PRIORITIES.map((pri) => (
                      <option key={pri.value} value={pri.value}>
                        {pri.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* --- Image and Descriptions Section --- */}

            {/* Product Image */}
            <div>
              <label
                htmlFor="image"
                className="label font-semibold text-accent mb-2"
              >
                Product Image URL
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="text"
                  name="image"
                  className="file-input file-input-bordered file-input-primary w-full transition placeholder:pl-4"
                  placeholder="Product Photo URL"
                />
                <FaImage className="w-6 h-6 text-gray-400 hidden sm:block" />
              </div>
            </div>

            {/* Short Description */}
            <div>
              <label
                htmlFor="shortDescription"
                className="label font-semibold text-accent mb-2"
              >
                Short Description (Max 150 chars)
              </label>
              <textarea
                name="shortDescription"
                required
                maxLength="150"
                rows="3"
                placeholder="A concise, attention-grabbing summary of the product."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition resize-none"
              ></textarea>
            </div>

            {/* Full Description */}
            <div>
              <label
                htmlFor="fullDescription"
                className="label font-semibold text-accent mb-2"
              >
                Full Description (Optional)
              </label>
              <textarea
                name="fullDescription"
                rows="6"
                placeholder="Provide comprehensive details, features, and specifications here."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn btn-lg btn-accent  text-white hover:bg-accent/90 w-full shadow-lg transition duration-300 flex items-center justify-center space-x-2"
            >
              <FaPlusCircle />
              <span>Add Product</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProductForm;
