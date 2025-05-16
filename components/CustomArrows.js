import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer border border-gray-300 text-[#0F7B9B] bg-gray-100 rounded-full p-3 shadow-lg"
      >
        <FaChevronRight size={20} />
      </div>
    );
  };
  
  // Custom Prev Arrow
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 z-10 cursor-pointer border border-gray-300 text-[#0F7B9B] bg-gray-100 rounded-full p-3 shadow-lg"
      >
        <FaChevronLeft size={20} />
      </div>
    );
  };

  export { NextArrow, PrevArrow };