"use client";

import Link from "next/link";
import React from "react";
import { FaBolt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

// Replace this with your actual image URL or import
const backgroundImage =
  "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const CallToAction = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15 + 0.1,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  return (
    <section className="relative my-10 py-28 lg:py-40 overflow-hidden rounded-3xl shadow-3xl mx-auto max-w-7xl">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-300/10 rounded-full blur-[100px] opacity-70 z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[80px] opacity-70 z-10"></div>

      <div className="container mx-auto max-w-4xl px-4 text-center relative z-20">
        {/* Subtitle / Pill */}
        <motion.p
          className="inline-flex items-center justify-center gap-2 mb-4 text-sm font-bold tracking-widest uppercase py-1 px-4 rounded-full bg-white/20 backdrop-blur-sm shadow-md text-white/95"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          <FaBolt className="text-accent text-lg" />
          LIMITED ACCESS OFFER
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter text-gray-100 drop-shadow-lg"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          Ready to{" "}
          <span className="text-accent drop-shadow-md">Launch Your Store?</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="max-w-2xl mx-auto mb-12 text-xl md:text-2xl font-light opacity-90 text-gray-200"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
        >
          Join Prodexa today and get instant access to powerful tools, automated
          workflows, and a thriving e-commerce community—
          <strong>100% risk-free.</strong>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
        >
          <motion.a
            href="/register"
            whileHover={buttonHover}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 bg-white text-accent font-extrabold shadow-2xl transition-all duration-300 py-4 px-10 rounded-full text-xl"
          >
            Get Started — It's Free
            <FaArrowRight className="ml-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          className="mt-6 text-base font-medium text-white/70"
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeUp}
        >
          No credit card required. Cancel anytime.{" "}
          <span className="text-white/90">Sign up in seconds!</span>
        </motion.p>
      </div>
    </section>
  );
};

export default CallToAction;
