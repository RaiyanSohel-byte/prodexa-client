import React from "react";
import { BeatLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <BeatLoader color="#ff6d1f" />
    </div>
  );
};

export default LoadingSpinner;
