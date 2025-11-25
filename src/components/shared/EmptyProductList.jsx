"use client";

import React from "react";
import { FaBoxOpen } from "react-icons/fa";

const EmptyProductList = ({ message }) => {
  return (
    <div className="text-center py-20 w-full max-w-md mx-auto bg-white rounded-xl  shadow-lg">
      <FaBoxOpen className="text-6xl text-accent mx-auto mb-4" />
      <h3 className="text-3xl font-bold text-accent mb-2">
        {message || "No Products Found"}
      </h3>
      <p className="text-gray-400">
        {message
          ? ""
          : "The product catalog is currently empty. Please check back later."}
      </p>
    </div>
  );
};

export default EmptyProductList;
