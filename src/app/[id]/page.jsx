"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaWarehouse,
  FaTag,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const stagger = {
  show: { transition: { staggerChildren: 0.15 } },
};

const ProductDetailsPage = ({ params }) => {
  const { id } = useParams();
  const [p, setP] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/products/${id}`);
        const data = await res.json();
        setP(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!p) {
    return <LoadingSpinner />;
  }

  return (
    <motion.section
      className="py-16 bg-gray-50 min-h-screen"
      initial="hidden"
      animate="show"
      variants={fadeIn}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* --- Back Button --- */}
        <motion.div variants={fadeUp} className="mb-8">
          <Link
            href="/products"
            className="text-2xl flex items-center text-primary hover:text-accent font-semibold"
          >
            <FaArrowLeft className="mr-2" /> Back to Products
          </Link>
        </motion.div>

        {/* --- Product Card --- */}
        <motion.div
          variants={stagger}
          className="bg-white rounded-xl shadow-2xl p-6 md:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* --- Large Image --- */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-3 relative aspect-video lg:h-[500px] w-full rounded-lg shadow-xl overflow-hidden"
            >
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src={
                    p.image ||
                    "https://via.placeholder.com/1200x800.png?text=Product+Image"
                  }
                  alt={p.name || "Product"}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* --- Details --- */}
            <div className="lg:col-span-2 space-y-6">
              {/* Title */}
              <motion.div variants={fadeUp}>
                <span className="badge badge-lg badge-accent badge-outline badge-soft text-accent font-semibold mb-2">
                  {(p.category || "CATEGORY").toUpperCase()}
                </span>

                <span
                  className={`ml-2 badge badge-lg font-semibold mb-2 ${
                    p.priority === "high"
                      ? "badge-error badge-outline badge-soft"
                      : p.priority === "medium"
                      ? "badge-warning badge-outline badge-soft"
                      : "badge-success badge-outline badge-soft"
                  }`}
                >
                  {(p.priority + " Priority").toUpperCase()}
                </span>

                <h1 className="text-4xl font-extrabold text-primary leading-tight">
                  {p.name}
                </h1>

                <p className="text-lg text-primary/70 mt-2 italic">
                  {p.shortDescription}
                </p>
              </motion.div>

              {/* Price */}
              <motion.div
                variants={fadeUp}
                className="border-t border-b border-gray-200 py-4"
              >
                <h2 className="text-5xl font-extrabold text-accent mb-2">
                  ${Number(p.price).toFixed(2)}
                </h2>
              </motion.div>

              {/* Metadata */}
              <motion.div
                variants={fadeUp}
                className="space-y-3 text-primary/80"
              >
                <h3 className="text-lg font-semibold text-primary">
                  Product Metadata
                </h3>

                {/* Stock */}
                <p className="flex items-center text-base">
                  <FaWarehouse className="w-4 h-4 mr-3 text-green-500" />
                  Stock Status:
                  <span
                    className={`font-bold ml-2 ${
                      p.stock === "In Stock" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {p.stock}
                  </span>
                </p>

                {/* Category */}
                <p className="flex items-center text-base">
                  <FaTag className="w-4 h-4 mr-3 text-purple-500" />
                  Category:
                  <span className="ml-2">{p.category}</span>
                </p>

                {/* Posted Date */}
                <p className="flex items-center text-base">
                  <FaCalendarAlt className="w-4 h-4 mr-3 text-blue-500" />
                  Posted On:
                  <span className="ml-2">{p.postedAt}</span>
                </p>

                {/* --- Posted By User Card --- */}
                <motion.div
                  variants={fadeUp}
                  className="flex items-center gap-4 mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200"
                >
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border">
                    <Image
                      src={p.postedBy?.photo || "/default-user.png"}
                      alt={p.postedBy?.name || "User"}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-primary">
                      {p.postedBy?.name}
                    </h4>

                    <p className="flex items-center text-primary/70 text-sm">
                      <FaEnvelope className="w-3 h-3 mr-2 text-red-500" />
                      {p.postedBy?.email}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* --- Full Description --- */}
          <motion.div
            variants={fadeUp}
            className="mt-12 pt-8 border-t border-gray-200"
          >
            <h2 className="text-3xl font-bold text-primary mb-4">
              Full Description
            </h2>

            <div className="prose max-w-none text-primary/80">
              <p className="text-lg leading-relaxed">{p.longDescription}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProductDetailsPage;
