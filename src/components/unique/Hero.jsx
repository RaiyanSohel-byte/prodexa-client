"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import heroBg from "../../assets/heroBg.jpg";

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative h-screen max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroBg}
        alt="Modern office setup with glowing monitor and dark background"
        fill
        priority
        className="object-cover transition-opacity duration-1000"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80"></div>

      {/* --- Content Area --- */}
      <div className="relative z-20 text-white max-w-6xl mx-auto px-4 py-24 text-center">
        {/* Subtitle */}
        <motion.p
          className="mb-6 text-sm font-medium inline-block px-4 py-1.5 border border-accent/60 rounded-full bg-accent/5 text-accent tracking-wide uppercase"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          Product Lifecycle Management
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="text-4xl lg:text-7xl font-extrabold mb-6 leading-tight"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          Unlock the Power <br />
          <span className="text-accent inline-block drop-shadow-xl transition-all duration-300 hover:scale-[1.01]">
            Prodexa.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg md:text-xl mb-10 max-w-3xl mx-auto font-light opacity-90"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
        >
          The ultimate platform designed to streamline product creation,
          optimize your inventory, and connect your team with a single source of
          truth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center items-center gap-4"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
        >
          <Link
            href="/products"
            className="btn  btn-accent text-secondary shadow-lg shadow-accent/50 hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
          >
            Explore Products
          </Link>
          <Link
            href="/contact"
            className="btn  btn-outline text-white border-white hover:bg-white hover:text-black transition-colors duration-300"
          >
            Contact Sales
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
