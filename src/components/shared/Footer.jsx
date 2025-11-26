import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-accent/30">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* --- Main Grid Section (Logo, Links, Socials) --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12 border-b border-gray-700 pb-10">
          {/* Column 1: Logo and Brand Info */}
          <div className="md:col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center text-2xl font-bold">
              <Logo /> {/* Assuming Logo component displays the brand name */}
            </div>
            <p className="text-gray-400 max-w-xs">
              Prodexa provides powerful tools and insights to manage and scale
              your e-commerce product catalog effortlessly.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-accent uppercase tracking-wider mb-3">
              Company
            </h3>
            <nav className="flex flex-col space-y-2 text-gray-400">
              <Link
                href="/"
                className="link link-hover hover:text-white transition"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="link link-hover hover:text-white transition"
              >
                About us
              </Link>
              <Link
                href="/contact"
                className="link link-hover hover:text-white transition"
              >
                Contact
              </Link>
              <Link
                href="/products"
                className="link link-hover hover:text-white transition"
              >
                Products
              </Link>
            </nav>
          </div>

          {/* Column 3: Resources/Support */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-accent uppercase tracking-wider mb-3">
              Support
            </h3>
            <nav className="flex flex-col space-y-2 text-gray-400">
              <Link
                href="/faq"
                className="link link-hover hover:text-white transition"
              >
                FAQ
              </Link>
              <Link
                href="/terms"
                className="link link-hover hover:text-white transition"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="link link-hover hover:text-white transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/help"
                className="link link-hover hover:text-white transition"
              >
                Help Center
              </Link>
            </nav>
          </div>

          {/* Column 4: Social Media Icons */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-accent uppercase tracking-wider mb-3">
              Connect
            </h3>
            <div className="flex space-x-4 text-gray-400">
              {/* Twitter */}
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-white transition transform hover:scale-110"
              >
                <FaXTwitter className="w-6 h-6" />
              </a>
              {/* YouTube  */}
              <a
                href="#"
                aria-label="YouTube"
                className="hover:text-white transition transform hover:scale-110"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
              {/* Facebook  */}
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-white transition transform hover:scale-110"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* --- Footer Bottom (Copyright and Developer Info) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          {/* Copyright */}
          <aside className="mb-4 md:mb-0">
            <p>Copyright © {currentYear} Prodexa Inc. All rights reserved.</p>
          </aside>

          {/* Developer Credit */}
          <aside>
            <a
              className="flex items-center font-medium gap-1 text-gray-400 hover:text-accent transition duration-150"
              href="https://github.com/RaiyanSohel-byte"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developed by <FaGithub className="text-white w-4 h-4" /> Raiyan
              Sohel
            </a>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
