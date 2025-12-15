import React from "react";

export default function SkeletonEventCard() {
  return (
    <div className="w-full max-w-xs bg-[#0f172a] rounded-3xl overflow-hidden animate-pulse">

      {/* Image Placeholder */}
      <div className="w-full h-64 bg-gray-700"></div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-4">

        {/* Title */}
        <div className="w-3/4 h-6 bg-gray-700 rounded"></div>

        {/* Date */}
        <div className="w-1/2 h-4 bg-gray-700 rounded"></div>

        {/* Location */}
        <div className="w-2/3 h-4 bg-gray-700 rounded"></div>

        {/* Button */}
        <div className="w-40 h-10 bg-gray-700 rounded-xl mt-4"></div>
      </div>
    </div>
  );
}