// components/LoadingSpinner.jsx
import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingSpinner = ({ text }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <ClipLoader
        color="#818CF8" // light-button color
        size={60}
        loading={true}
      />
      <p className="text-light-text dark:text-dark-text font-medium">
        {text || "Cargando servicios de salud..."}
      </p>
    </div>
  );
};

export default LoadingSpinner;
