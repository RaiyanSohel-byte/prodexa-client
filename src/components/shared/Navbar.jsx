"use client";
import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import useAuth from "@/hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/addProducts">Add Products</Link>
      </li>
      <li>
        <Link href="/manageProducts">Manage Products</Link>
      </li>
    </>
  );
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
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
              text: "Your have been logged out.",
              icon: "success",
            });
          })
          .catch((err) => {
            toast.error(err.code);
          });
      }
    });
  };

  return (
    <div className="navbar bg-secondary/50 shadow-sm text-accent">
      <div className="navbar-start">
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
            className="font-semibold menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        {/* logo */}
        <Logo />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
      </div>

      <div className="navbar-end gap-3">
        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-accent text-secondary"
          >
            Log Out
          </button>
        ) : (
          <>
            {" "}
            <Link
              href="/login"
              className="btn btn-accent btn-outline hover:text-secondary"
            >
              Login
            </Link>
            <Link href="/register" className="btn btn-accent text-secondary">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
