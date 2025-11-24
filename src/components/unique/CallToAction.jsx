import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary text-secondary text-center px-6">
      <h2 className="text-4xl font-bold mb-4">
        Start Your Product Journey Today
      </h2>
      <p className="max-w-lg mx-auto mb-8 text-lg">
        Sign up now to unlock full access to your dashboard and build a
        beautiful store.
      </p>
      <Link
        href="/register"
        className="btn btn-accent px-10 text-secondary text-lg shadow-lg hover:scale-105 transition"
      >
        Register Now
      </Link>
    </section>
  );
};

export default CallToAction;
