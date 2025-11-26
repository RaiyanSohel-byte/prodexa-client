"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import useAuth from "@/hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaPlusCircle, FaSignInAlt, FaUserPlus } from "react-icons/fa"; // Added Login/Register icons
import { MdOutlineManageHistory } from "react-icons/md";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const pathName = usePathname();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#10B981", // Modern color for confirmation
      cancelButtonColor: "#EF4444",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              text: "Successfully logged out.",
              icon: "success",
              confirmButtonColor: "#ff6d1f",
            });
          })
          .catch((err) => toast.error(err.code));
      }
    });
  };

  // --- Refined Navigation Links ---
  const links = (
    <>
      {["Home", "About", "Products", "Contact"].map((label) => {
        const href = label === "Home" ? "/" : `/${label.toLowerCase()}`;
        const isActive = pathName === href;
        return (
          <li key={label}>
            <Link
              href={href}
              className={`
                px-3 py-2 text-primary font-semibold transition duration-200 
                hover:text-accent hover:bg-transparent
                ${
                  isActive
                    ? "border-b-2 border-accent text-accent !bg-transparent rounded-none"
                    : "border-b-2 border-transparent"
                }
              `}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </>
  );

  return (
    // --- Sticky Container with Modern Background ---
    <div className="bg-white/95 backdrop-blur-sm shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto navbar text-primary">
        {/* === Left: Logo and Mobile Menu === */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-2 shadow-xl font-semibold border border-gray-100"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Logo />
        </div>

        {/* === Center: Desktop Menu === */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold space-x-1">
            {links}
          </ul>
        </div>

        {/* === Right: Auth/User Controls === */}
        <div className="navbar-end gap-3">
          {user ? (
            <>
              {/* --- User Dropdown --- */}
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar p-0 transition-transform duration-300 hover:scale-105"
                  title={user.displayName || user.email || "User"}
                >
                  <div className="w-10 h-10 rounded-full border-2 border-accent ring-2 ring-offset-2 ring-accent/50 overflow-hidden">
                    <Image
                      src={
                        user.photoURL || "/default-user.png" // Use a local default image path
                      }
                      alt="profile"
                      width={40}
                      height={40}
                      sizes="40px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="mt-4 z-[100] p-4 shadow-2xl menu menu-sm dropdown-content bg-white rounded-xl w-72 border border-gray-100"
                >
                  {/* User Info Header */}
                  <li className="mb-3 border-b pb-3 border-gray-100">
                    <div className="flex flex-col items-center justify-center p-0 hover:bg-transparent">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-2 ring-2 ring-accent/50">
                        <Image
                          src={user.photoURL || "/default-user.png"}
                          alt="profile"
                          width={64}
                          height={64}
                          sizes="64px"
                          className="rounded-full object-cover"
                        />
                      </div>
                      <span className="font-extrabold text-primary text-lg">
                        {user.displayName || "User"}
                      </span>
                      <span className="text-xs text-gray-500 truncate w-full text-center">
                        {user.email}
                      </span>
                    </div>
                  </li>

                  {/* Dashboard Links */}
                  <li className="font-medium">
                    <Link
                      href="/addProducts"
                      className={`text-primary hover:bg-accent/10 ${
                        pathName === "/addProducts"
                          ? "bg-accent/10 text-accent"
                          : ""
                      }`}
                    >
                      <FaPlusCircle className="w-4 h-4" /> Add Products
                    </Link>
                  </li>
                  <li className="font-medium">
                    <Link
                      href="/manageProducts"
                      className={`text-primary hover:bg-accent/10 ${
                        pathName === "/manageProducts"
                          ? "bg-accent/10 text-accent"
                          : ""
                      }`}
                    >
                      <MdOutlineManageHistory className="w-5 h-5" /> Manage
                      Products
                    </Link>
                  </li>

                  {/* Logout Button */}
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-accent text-white btn-sm w-full mt-3 hover:bg-accent/90 transition duration-200"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            // --- Login/Register Buttons ---
            <>
              <Link
                href="/login"
                className="btn btn-ghost text-primary border border-gray-300 hover:bg-accent/10 hover:border-accent transition duration-200 btn-xs lg:btn-sm flex items-center gap-1"
              >
                <FaSignInAlt className="w-4 h-4 hidden sm:inline" /> Login
              </Link>

              <Link
                href="/register"
                className="btn btn-accent text-white hover:bg-accent/90 transition duration-200 btn-xs lg:btn-sm flex items-center gap-1"
              >
                <FaUserPlus className="w-4 h-4 hidden sm:inline" /> Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
