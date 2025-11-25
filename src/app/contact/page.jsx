"use client";
import React from "react";
import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="py-16 bg-secondary/20 text-primary">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.header
          className="mb-16 text-center max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-sm font-semibold tracking-widest uppercase text-accent mb-2"
          >
            Get In Touch
          </motion.h2>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-primary"
          >
            We're Ready to Help You Grow
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-primary/70"
          >
            Whether you have a technical question or need enterprise support,
            the Prodexa team is here. Choose the best way to reach us.
          </motion.p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="lg:col-span-1 space-y-8">
            {/* Sales Contact Card */}
            <motion.div
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-accent transition-shadow duration-300 hover:shadow-2xl"
            >
              <FaUserTie className="text-accent text-3xl mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">
                Sales Inquiries
              </h3>
              <p className="text-primary/70 mb-4">
                Got a large project or need a custom plan? Our sales team can
                help.
              </p>
              <div className="space-y-2 text-primary/90 text-base">
                <p className="flex items-center">
                  <FaPhone className="w-4 h-4 mr-3 text-accent" />
                  <span className="font-semibold">+1 (555) 123-4567</span>
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="w-4 h-4 mr-3 text-accent" />
                  <Link
                    href="mailto:sales@prodexa.com"
                    className="hover:text-accent transition"
                  >
                    sales@prodexa.com
                  </Link>
                </p>
              </div>
            </motion.div>

            {/* Support Contact Card */}
            <motion.div
              variants={cardVariants}
              className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-accent transition-shadow duration-300 hover:shadow-2xl"
            >
              <FaHeadset className="text-accent text-3xl mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">
                Technical Support
              </h3>
              <p className="text-primary/70 mb-4">
                Need help with a technical issue? Visit our dedicated help
                center first.
              </p>
              <div className="space-y-2 text-primary/90 text-base">
                <p className="flex items-center">
                  <FaMapMarkerAlt className="w-4 h-4 mr-3 text-accent" />
                  <Link
                    href="/help"
                    className="hover:text-accent transition font-semibold"
                  >
                    Visit Help Center
                  </Link>
                </p>
                <p className="flex items-center">
                  <FaEnvelope className="w-4 h-4 mr-3 text-accent" />
                  <Link
                    href="mailto:support@prodexa.com"
                    className="hover:text-accent transition"
                  >
                    support@prodexa.com
                  </Link>
                </p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              variants={itemVariants}
              className="pt-4 text-primary/70 text-sm"
            >
              <h4 className="font-semibold text-primary mb-2">
                Our Headquarters
              </h4>
              <p>123 Prodexa Way, Suite 400</p>
              <p>San Francisco, CA 94107</p>
            </motion.div>
          </motion.div>

          {/* --- Column 2: Contact Form with Animation --- */}
          <motion.div
            variants={formVariants}
            className="lg:col-span-2 bg-white p-8 md:p-12 rounded-2xl shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-primary mb-6">
              Send Us a Message
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Form submitted!");
              }}
            >
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition duration-150 outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition duration-150 outline-none"
                  />
                </div>
              </div>

              {/* Subject Dropdown */}
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition duration-150 outline-none bg-white appearance-none"
                >
                  <option value="" disabled>
                    Select a subject...
                  </option>
                  <option value="sales">Sales Inquiry / Custom Pricing</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">General Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition duration-150 outline-none resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-lg btn-accent text-white hover:bg-accent/90 w-full shadow-lg transition duration-300 flex items-center justify-center"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
