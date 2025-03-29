import React from "react";

const Shimmer = () => {
  return (
    <div className="animate-pulse max-w-sm w-full bg-white p-6 rounded-lg shadow-md">
      {/* Shimmer Card */}
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
        <div className="flex-1">
          <div className="h-4 bg-gray-300 rounded-md mb-2"></div>
          <div className="h-4 bg-gray-300 rounded-md mb-4"></div>
          <div className="h-4 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
