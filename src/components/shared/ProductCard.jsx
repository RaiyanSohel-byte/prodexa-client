import Image from "next/image";
import Link from "next/link";
import React from "react";
// Assuming placeholder is correctly defined
import placeholder from "../../assets/heroBg.jpg";
import { FaEye, FaRegHeart } from "react-icons/fa"; // Added icons for micro-interactions

const ProductCard = ({ product }) => {
  // Use optional chaining for safe access to properties
  const productId = product?._id;
  const productName = product?.name || "Product Name";
  const productPrice = product?.price || 0;
  const productDescription =
    product?.shortDescription || "A great product with customizable features.";
  const productCategory = product?.category || "General";
  const productImage = product?.image || placeholder;

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-xl overflow-hidden
                 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]
                 flex flex-col h-full border border-gray-100"
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={productImage}
          alt={productName}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <span
          className={`absolute top-3 left-3 badge badge-sm font-semibold text-white 
                      ${
                        productCategory === "New"
                          ? "bg-red-500"
                          : "bg-primary/80"
                      } 
                      shadow-md`}
        >
          {productCategory}
        </span>

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link
            href={`/${productId}`}
            className="btn btn-circle btn-sm bg-white text-primary hover:bg-gray-100 shadow-lg"
            aria-label="Quick View"
          >
            <FaEye className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/${productId}`} className="hover:text-accent transition">
          <h3 className="text-xl font-bold text-primary mb-1 truncate">
            {productName}
          </h3>
        </Link>

        <div className="flex justify-between items-end mb-3">
          <p className="text-2xl font-extrabold text-accent">
            ${productPrice.toFixed(2)}
          </p>

          <p className="text-sm badge badge-success font-bold badge-outline badge-soft">
            {product.stock}
          </p>
        </div>

        {/* Description */}
        <p className="text-primary/70 text-sm line-clamp-2 flex-grow mb-4">
          {productDescription}
        </p>

        {/* --- CTA Button --- */}
        <Link
          href={`/${productId}`}
          className="btn btn-sm btn-accent btn-outline btn-block text-accent mt-auto hover:text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
