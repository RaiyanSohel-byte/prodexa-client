"use client";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

import React from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const router = useRouter();
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Successful");
        router.push("/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <button
      onClick={handleGoogleLogin}
      className="btn btn-accent btn-outline text-accent w-full font-semibold rounded-lg shadow-sm hover:scale-[1.02] transition active:scale-95 hover:text-white"
    >
      <FaGoogle /> Login With Google
    </button>
  );
};

export default SocialLogin;
