import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-0 md:right-2 lg:right- transform -translate-y-1/2 z-10 cursor-pointer border border-gray-300 text-[#0F7B9B] bg-gray-100 rounded-full p-2 shadow-lg"
    >
      <FaChevronRight className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-2 md:left-4 lg:left-6 transform -translate-y-1/2 z-10 cursor-pointer border border-gray-300 text-[#0F7B9B] bg-gray-100 rounded-full p-2 shadow-lg"
    >
      <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
    </div>
  );
};

export { NextArrow, PrevArrow };
