"use client"
import React from "react";
import "../navbar/shimmer.css";

const HomeSkeleton = () => {
  return (
    <>
      {/* Hero Section Skeleton */}
      <div className="flex flex-col gap-4 items-center justify-center h-[44vh]">
        <div className="flex gap-2 items-center text-6xl font-bold">
          <div className="h-10 w-64 bg-gray-700 rounded-md shimmer"></div>
          <span>
            <div className="w-12 h-12 bg-gray-700 rounded-full shimmer"></div>
          </span>
        </div>
        <div className="h-6 w-96 bg-gray-700 rounded-md shimmer"></div>
        <div className="flex gap-2">
          <div className="h-10 w-32 bg-gray-700 rounded-md shimmer"></div>
          <div className="h-10 w-32 bg-gray-700 rounded-md shimmer"></div>
        </div>
      </div>
      <div className="bg-white h-1 opacity-10 my-4"></div>
      {/* Cards Section Skeleton */}
      {[1, 2].map((section) => (
        <div key={section} className="text-white container mx-auto py-28">
          <div className="h-8 w-80 mx-auto mb-14 bg-gray-700 rounded-md shimmer"></div>
          <div className="flex items-center justify-around">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col items-center space-y-3">
                <div className="w-24 h-24 bg-gray-700 rounded-full shimmer"></div>
                <div className="h-6 w-24 bg-gray-700 rounded-md shimmer"></div>
                <div className="h-4 w-32 bg-gray-700 rounded-md shimmer"></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeSkeleton; 