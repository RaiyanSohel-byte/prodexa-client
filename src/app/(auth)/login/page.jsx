"use client";

import SocialLogin from "@/components/shared/SocialLogin";
import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="min-h-[calc(100vh-50px)] bg-secondary flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 w-full max-w-md border border-primary/10">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-primary text-center mb-6">
          Welcome to <span className="text-accent">Prodexa</span>
        </h1>

        {/* Form */}
        <form className="space-y-5">
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

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-accent hover:underline text-sm"
            >
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-accent text-secondary w-full mt-4 font-semibold rounded-lg shadow-lg hover:scale-[1.02] transition active:scale-95"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px bg-primary/20 flex-1" />
          <span className="text-primary/50 text-sm">OR</span>
          <div className="h-px bg-primary/20 flex-1" />
        </div>
        <SocialLogin />

        {/* Register Link */}
        <p className="text-center text-primary mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-accent hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
}
