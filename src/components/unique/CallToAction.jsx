"use client";

import Link from "next/link";
import React from "react";
import { FaBolt, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const CallToAction = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-r from-accent to-orange-500 text-white rounded-3xl shadow-2xl">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-white/5 opacity-5 pointer-events-none animate-pulse [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
        {/* Subtitle / Pill */}
        <motion.p
          className="inline-flex items-center gap-2 mb-4 text-sm font-semibold tracking-widest uppercase text-white/90"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
        >
          <FaBolt className="text-yellow-300 text-xl animate-pulse" />
          Limited Time Offer
        </motion.p>

        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg leading-tight tracking-tight"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
        >
          Ready to <span className="text-yellow-300">Launch Your Store?</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="max-w-xl mx-auto mb-10 text-lg md:text-xl font-light opacity-90"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
        >
          Join Prodexa today and get instant access to powerful tools, automated
          workflows, and a thriving community.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
        >
          <Link
            href="/register"
            className="btn btn-lg flex items-center justify-center gap-2 w-full sm:w-auto bg-white text-accent font-bold shadow-xl hover:scale-[1.05] hover:shadow-2xl transition-all duration-300 py-4 px-8 rounded-full"
          >
            Get Started — It's Free
            <FaArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          className="mt-4 text-sm text-white/70"
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeUp}
        >
          No credit card required. Cancel anytime.
        </motion.p>
      </div>

      {/* Decorative Animated Circles */}
      <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-yellow-400/20 blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-white/10 blur-3xl animate-pulse"></div>
    </section>
  );
};

export default CallToAction;
