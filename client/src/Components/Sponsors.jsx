import React from "react";
import Slider from "react-infinite-logo-slider";
import logo12 from "../assets/img/logo12.png";

const clientImages = [
  { src: logo12, alt: "Client Logo" },
  { src: logo12, alt: "Client Logo" },
  { src: logo12, alt: "Client Logo" },
  { src: logo12, alt: "Client Logo" },
  { src: logo12, alt: "Client Logo" },
  { src: logo12, alt: "Client Logo" },
  { src: logo12, alt: "Client Logo" },
  { src: logo12, alt: "Client Logo" },
  { src: logo12, alt: "Client Logo" },
  { src: logo12, alt: "Client Logo" },
];

const Sponsors = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #161928 40%, #4E598E 100%)",
      }}
      className="p-10 flex justify-center items-center"
    >
      <div className="w-full p-4 xl:w-[70%] text-center">
        <h1 className="text-center text-5xl font-bold text-[#FFB816] mt-12 mb-4">
          Event Sponsors
        </h1>
        <p className="text-white text-2xl  text-center mb-10">
          Check Who Makes The Event Possible
        </p>
        <Slider
          duration={20}
          pauseOnHover={true}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          {clientImages.map((image, index) => (
            <div
              key={index}
              className="mx-auto w-[150px] h-[150px] overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-[150px] h-[150px] mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Sponsors;
