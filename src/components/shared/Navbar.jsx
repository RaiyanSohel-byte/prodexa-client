"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import useAuth from "@/hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaPlusCircle } from "react-icons/fa";
import { MdOutlineManageHistory } from "react-icons/md";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const pathName = usePathname();

  const links = (
    <>
      <li>
        <Link
          href="/"
          className={
            pathName === "/" ? "border-b-2 border-accent rounded-none" : ""
          }
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={
            pathName === "/about" ? "border-b-2 border-accent rounded-none" : ""
          }
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/products"
          className={
            pathName === "/products"
              ? "border-b-2 border-accent rounded-none"
              : ""
          }
        >
          Products
        </Link>
      </li>

      <li>
        <Link
          href="/contact"
          className={
            pathName === "/contact"
              ? "border-b-2 border-accent rounded-none"
              : ""
          }
        >
          Contact
        </Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#d33",
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

  return (
    <div className="bg-secondary shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto navbar text-accent">
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow font-semibold"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
        </div>

        {/* Right Side */}
        <div className="navbar-end gap-3">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-12 rounded-full border-2 border-accent">
                    <Image
                      src={
                        user.photoURL ||
                        "https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      }
                      alt="profile"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="mt-3 z-[100] p-4 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-60"
                >
                  <li className="mb-2 text-center">
                    <Image
                      src={user.photoURL || "/default-user.png"}
                      alt="profile"
                      width={60}
                      height={60}
                      className="rounded-full mx-auto"
                    />
                  </li>

                  <li className="text-center font-bold text-primary">
                    {user.displayName || "User"}
                  </li>

                  <li className="text-center text-sm text-gray-500 mb-2">
                    {user.email}
                  </li>
                  <li className="font-semibold">
                    <Link
                      href="/addProducts"
                      className={
                        pathName === "/addProducts"
                          ? "border-b-2 border-accent rounded-none"
                          : ""
                      }
                    >
                      <FaPlusCircle /> Add Products
                    </Link>
                  </li>
                  <li className="font-semibold">
                    <Link
                      href="/manageProducts"
                      className={
                        pathName === "/manageProducts"
                          ? "border-b-2 border-accent rounded-none"
                          : ""
                      }
                    >
                      <MdOutlineManageHistory /> Manage Products
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogOut}
                      className="btn btn-accent text-white btn-sm w-full mt-2"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="btn btn-accent btn-outline btn-xs lg:btn-md hover:text-secondary"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="btn btn-accent btn-xs lg:btn-md text-secondary"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
