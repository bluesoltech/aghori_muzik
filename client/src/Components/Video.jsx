import React from "react";
import Aghoriconcert from "../assets/video/Aghoriconcert.mp4";

const Video = () => {
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
      }}
      className="w-full h-fit items-center justify-center p-4 "
    >
      <div className="flex items-center justify-center md:mt-20 w-full">
        {/* Responsive Video Container */}
        <div className="border-4 border-gray-700 rounded-lg w-full h-auto">
          {/* Autoplay and Muted Video */}
          <video
            autoPlay
            muted
            controls
            style={{ width: "100%", height: "auto" }}
            src={Aghoriconcert}
          ></video>
        </div>
      </div>
      {/* Event Description */}
      <div className="flex flex-col justify-center items-center p-4">
        <div className="w-full p-4 xl:w-[70%] text-center">
          <h1 className="text-center text-5xl font-bold text-[#2A304C] mt-12 mb-4">
            Ahmedabad Rakshak Utsav 2024
          </h1>
          <p className="text-[#2A304c] text-2xl font-bold text-center">
            Ek Shaam Ahmedabad city Police Ke Naam
          </p>
          <p className="text-[#2A304c] text-lg text-center mt-5">
            In Ahmedabad’s center, where safety is a priority, we offer our
            sincere thanks to the hardworking Ahmedabad City Police Department.
            Their constant commitment protects us from crime, giving us peace.
            As we come together tonight to honor their courage, Blue Soletech
            LLP is excited to bring you an evening filled with the lively music
            of Aghori. We celebrate their outstanding work with awards and
            recognition, shining a light on a safer future.
          </p>
          <p className="text-[#2A304c] text-lg text-center mt-5">
            "Our mission echoes with the applause for their tireless efforts,
            while our vision embraces a community united in appreciation."
          </p>
          <p className="text-[#2A304c] text-lg text-center mt-5">
            "Aapki Suraksha, Humari Zimmedari: Ahmedabad City Police"
          </p>
        </div>
        <button className="text-sm font-semibold leading-6 text-white bg-gradient-to-r from-[#161928] to-[#4E598E] px-4 py-2 rounded-lg">
          Purchase Ticket
        </button>
      </div>
    </div>
  );
};

export default Video;
