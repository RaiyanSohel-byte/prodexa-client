import React from "react";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex flex-col justify-center items-center text-center px-6">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1633346702973-f0c774e6a473?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to{" "}
          <span className="text-accent drop-shadow-[0_0_8px_var(--color-accent)]">
            Prodexa
          </span>
        </h2>
        <p className="text-lg md:text-xl mb-6 max-w-xl">
          Manage your products efficiently, showcase your best work, and stay
          organized.
        </p>
        <a href="#products" className="btn btn-accent text-secondary">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;
