"use client";
import React from "react";

const LoadingSpinner = ({ size = "medium", color = "blue" }) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  const colorClasses = {
    blue: "border-blue-500",
    white: "border-white",
    gray: "border-gray-500",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={`${sizeClasses[size]} border-2 ${colorClasses[color]} border-t-transparent rounded-full animate-spin`}
      />
    </div>
  );
};

const LoadingScreen = ({ message = "Loading..." }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        <LoadingSpinner size="large" color="white" />
        <p className="text-white text-xl mt-4">{message}</p>
      </div>
    </div>
  );
};

const SectionLoading = ({ message = "Loading section..." }) => {
  return (
    <div className="w-full h-64 flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <LoadingSpinner size="medium" color="blue" />
        <p className="text-gray-600 mt-4">{message}</p>
      </div>
    </div>
  );
};

export { LoadingSpinner, LoadingScreen, SectionLoading };
export default LoadingSpinner;
