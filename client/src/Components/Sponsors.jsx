import React from "react";
import Slider from "react-infinite-logo-slider";
import logo1 from "../assets/img/logo12.png";
import logo2 from "../assets/HappyTeamLogo_white.png";
import logo3 from "../assets/bluesoltech.png"


const clientImages = [
  { src: logo1, alt: "Client Logo" },
  { src: logo2, alt: "Client Logo" },
  { src: logo3, alt: "Client Logo" },

];

const Sponsors = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #161928 40%, #4E598E 100%)",
      }}
      className="p-10 flex justify-center items-center"
    >
      <div className=" p-4  text-center w-[90%] xl:w-[70%]">
        <h1 className="text-center text-5xl font-bold text-[#FFB816] mt-12 mb-4">
          Event Sponsors
        </h1>
        <p className="text-white text-2xl  text-center mb-10">
          Check Who Makes The Event Possible
        </p>
        {/* <Slider
          duration={10}
          pauseOnHover={true}
          infinite={true}
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
        </Slider> */}
        <div className="grid  xl:grid-cols-3 grid-cols-1 mx-auto place-items-center">
          <div className="xl:w-[220px] w-[100px] h-[100px] xl:h-[220px] overflow-hidden flex justify-center items-center mx-auto">
            <img src={logo2} className="object-contain max-w-full max-h-full" alt="Logo" />
          </div>
          <div className="xl:w-[220px] w-[100px] h-[100px] xl:h-[220px] overflow-hidden flex justify-center items-center mx-auto">
            <img src={logo1} className="object-contain max-w-full max-h-full" alt="Logo" />
          </div>
          <div className="xl:w-[220px] w-[100px] h-[100px] xl:h-[220px] overflow-hidden flex justify-center items-center mx-auto">
            <img src={logo3} className="object-contain max-w-full max-h-full" alt="Logo" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sponsors;
