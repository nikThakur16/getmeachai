import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute  lg:right-[-50px] md:right-[15px] right-[-10px] top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 cursor-pointer border border-gray-300 text-[#0F7B9B] bg-gray-100 rounded-full md:p-1 p-[5px] shadow-lg"
      >
        <FaChevronRight className="lg:size-6 md:size-5 size-4" />
      </div>
    );
  };
  
  // Custom Prev Arrow
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        onClick={onClick}
        className="absolute lg:left-[-50px] md:left-[17px] left-[10px] top-1/2 transform -translate-y-1/2 -translate-x-1/2 z-10 cursor-pointer border border-gray-300 text-[#0F7B9B] bg-gray-100 rounded-full md:p-1 p-[5px] shadow-lg"
      >
        <FaChevronLeft className="lg:size-6 md:size-5 size-4" />
      </div>
    );
  };

  export { NextArrow, PrevArrow };