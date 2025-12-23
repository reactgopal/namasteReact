import React from "react";

const Shimmer = () => {
  const cards = Array.from({ length: 8 });

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
      aria-busy="true"
      aria-label="Loading"
    >
      {cards.map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse bg-white rounded-2xl shadow-sm p-4"
        >
          <div className="h-40 bg-gray-200 rounded-lg w-full" />
          <div className="mt-3">
            <div className="h-3 bg-gray-200 rounded w-1/4 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-2/4 mb-2" />
            <div className="h-3 bg-gray-200 rounded w-3/4 mb-3" />
            <div className="flex items-center gap-2">
              <div className="h-8 bg-gray-200 rounded-full w-20" />
              <div className="h-8 bg-gray-200 rounded-full w-12" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
