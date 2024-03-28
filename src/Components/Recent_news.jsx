import React from "react";
import img1 from "../assets/img/img-1.jfif";
import img2 from "../assets/img/img-2.jfif";
import img3 from "../assets/img/img-3.jfif";

const Recent_news = () => {
  return (
    <div className="p-10 flex justify-center items-center">
      <div className="w-full mb:p-4 xl:w-[70%] text-center">
        <h1 className="text-center text-5xl font-bold text-[#141a50] md:mt-12 mb:mb-4">
          Recent News
        </h1>
        <p className="text-black text-sm md:text-2xl  text-center md:mb-10">
          Check Who Makes The Event Possible
        </p>
        <div className="grid xl:grid-cols-3 md:grid-cols-1 md:gap-4 items-center justify-items-center w-full">
          <div className="flex justify-center items-center h-48 w-48 xl:w-auto xl:h-auto">
            {" "}
            {/* Adjust size as needed */}
            <img
              src={img1}
              alt="Image 1"
              className="max-h-full max-w-full border-8 border-[#c8a651] rounded-lg"
            />
          </div>
          <div className="flex justify-center items-center h-48 w-48 xl:w-auto xl:h-auto">
            {" "}
            {/* Adjust size as needed */}
            <img
              src={img2}
              alt="Image 2"
              className="max-h-full max-w-full border-8 border-[#c8a651] rounded-lg"
            />
          </div>
          <div className="flex justify-center items-center h-48 w-48 xl:w-auto xl:h-auto">
            {" "}
            {/* Adjust size as needed */}
            <img
              src={img3}
              alt="Image 3"
              className="max-h-full max-w-full border-8 border-[#c8a651] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent_news;
