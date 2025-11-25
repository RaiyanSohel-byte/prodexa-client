"use client";

import SocialLogin from "@/components/shared/SocialLogin";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <section className="min-h-screen bg-secondary flex items-center justify-center px-4 ">
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 w-full max-w-md border border-primary/10 my-10">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-primary text-center mb-6">
          Create an Account <span className="text-accent">Prodexa</span>
        </h1>

        {/* Form */}
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-primary font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="input input-bordered w-full bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-primary font-medium mb-1">
              Photo URL
            </label>
            <input
              type="url"
              className="input input-bordered w-full bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
              placeholder="https://example.com/photo.jpg"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-primary font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="input input-bordered w-full bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-primary font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              className="input input-bordered w-full bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-accent rounded-lg"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-accent text-secondary w-full mt-4 font-semibold rounded-lg shadow-lg hover:scale-[1.02] transition active:scale-95"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px bg-primary/20 flex-1" />
          <span className="text-primary/50 text-sm">OR</span>
          <div className="h-px bg-primary/20 flex-1" />
        </div>
        <SocialLogin />
        {/* Login Link */}
        <p className="text-center mt-4 text-primary">
          Already have an account?{" "}
          <Link href="/login" className="text-accent hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
}
