import React from "react";

const Hero = ({ title, description }) => {
  return (
    <div style={{ backgroundImage: 'linear-gradient(to right, #161928 40%, #4E598E 100%)'}} className="flex flex-col items-center justify-center overflow-hidden mx-auto my-4 text-white p-10 h-[400px]">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-white text-lg xl:text-3xl font-bold text-center md:my-2">
          <span className="text-white">{title.toUpperCase()}</span>
        </h1>
        <p className="md:text-xl font-bold xl:w-[60%] text-justify mx-auto md:mb-10 text-pink-500">
          {description}
        </p>
      </div>
    </div>

  );
};

export default Hero;