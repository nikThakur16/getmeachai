"use client"

import "./shimmer.css"; // Make sure to import the CSS for shimmer

const NavbarSkeleton = () => {
  return (
    <div className="flex justify-between items-center h-18 p-4 text-white bg-gray-900">
      {/* Logo skeleton */}
      <div className="h-8 w-40 bg-gray-700 rounded-md shimmer"></div>
      
      {/* Dropdown/User skeleton */}
      <div className="flex items-center gap-2">
        <div className="h-8 w-24 bg-gray-700 rounded-md shimmer"></div>
        <div className="h-8 w-8 bg-gray-700 rounded-full shimmer"></div>
      </div>
    </div>
  );
};

export default NavbarSkeleton;
