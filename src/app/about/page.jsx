"use client";

import React from "react";
import Image from "next/image";
import {
  FaRocket,
  FaUsers,
  FaCogs,
  FaHandshake,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  {
    icon: <FaRocket />,
    title: "Fast & Efficient",
    description:
      "Manage your products with lightning speed and effortless workflows designed for scale.",
  },
  {
    icon: <FaUsers />,
    title: "Team Collaboration",
    description:
      "Work together with your team in a seamless, real-time environment without conflicts.",
  },
  {
    icon: <FaCogs />,
    title: "Highly Customizable",
    description:
      "Tailor the platform to match your specific workflow, metadata, and branding needs.",
  },
  {
    icon: <FaHandshake />,
    title: "24/7 Expert Support",
    description:
      "Get priority help when you need it from our dedicated team of product experts.",
  },
];

const teamMembers = [
  {
    name: "Alice Smith",
    role: "CEO & Founder",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Bob Jones",
    role: "CTO",
    img: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Carol Williams",
    role: "Head of Product",
    img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "David Brown",
    role: "Lead Designer",
    img: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const stats = [
  { label: "Products Managed", value: "500+" },
  { label: "Active Users", value: "10K+" },
  { label: "Uptime Reliability", value: "99.9%" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const About = () => {
  return (
    <main className="bg-secondary text-primary selection:bg-accent selection:text-white overflow-x-hidden">
      {/* --- Hero Section --- */}
      <section className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-6 md:px-24 bg-base-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#444cf7_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-[100px]"></div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="z-10 max-w-4xl mx-auto"
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-accent/20 rounded-full bg-accent/5 text-accent text-sm font-medium tracking-wide uppercase">
            About Us
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-primary">
            We are building the future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Product Management
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Prodexa is the modern solution for creators and innovators. We
            bridge the gap between messy spreadsheets and complex enterprise
            software.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="group flex items-center justify-center gap-2 btn btn-accent text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all hover:-translate-y-1"
            >
              Get Started
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#team"
              className="btn text-primary hover:bg-primary/5 px-8 py-4 rounded-xl font-semibold transition-all"
            >
              Meet the Team
            </a>
          </div>
        </motion.div>
      </section>

      {/* --- Stats Section --- */}
      <div className="border-y border-base-300 bg-base-100/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-base-300">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="py-12 text-center group hover:bg-primary/5 transition-colors cursor-default"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* --- Features Section --- */}
      <section className="py-24 px-6 md:px-24 bg-gradient-to-b from-base-100 to-secondary/30">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Leaders Choose Prodexa
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your product lifecycle, all in one
              beautifully designed place.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 text-2xl group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* --- Team Section --- */}
      <section id="team" className="py-24 px-6 md:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              The Minds Behind the Magic
            </h2>
            <p className="text-gray-600">
              We are a diverse team of dreamers, builders, and problem solvers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center group"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-accent/30 transition-all duration-300 group-hover:scale-105">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={192}
                      height={192}
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary">
                  {member.name}
                </h3>
                <p className="text-accent font-medium text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-8 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to streamline your workflow?
            </h2>
            <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
              Join thousands of teams who rely on Prodexa to ship faster and
              better. Start your free 14-day trial today.
            </p>
            <a
              href="/register"
              className="inline-block bg-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent-focus hover:scale-105 transition-transform shadow-lg shadow-black/20"
            >
              Start Your Free Trial
            </a>
            <p className="mt-6 text-gray-400 text-sm">
              No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
