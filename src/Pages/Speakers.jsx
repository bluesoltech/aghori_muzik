import React from "react";
import GSMalik from "../assets/GSMalik.png";
import NMChoudhary from "../assets/N.M. Choudhary.png";
import MThennarasan from "../assets/M.Thennarasan.png";
import vk from "../assets/vk.jpg";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import Hero from "../Components/Hero";
const title = "Our Speakers";
const description = " Meet Our World's Leading Speakers";

const SpeakerCard = ({ name, role, title, imageSrc, link }) => {
  return (
    <div className="bg-[#161928] w-full h-full p-6 shadow-md rounded-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
      <div className="w-[30%] xl:w-[20%]">
        <img
          src={imageSrc}
          alt={name}
          className=" border-[#c8a651] border-[3px] rounded-full !w-24 !h-24 !md:w-32 !md:h-32 object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <a
        href={link}
        className="w-[70%] xl:w-[80%] block text-center md:text-left"
      >
        <div>
          <h3 className="font-semibold w-fit text-white text-xl md:text-2xl hover:text-blue-500 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-gray-500 w-fit text-lg mb-2 hover:text-blue-800 transition-colors duration-300">
            {role}
          </p>
          <p className="text-gray-600 text-lg w-fit  transition-colors duration-300">
            {title}
          </p>
        </div>
      </a>
    </div>
  );
};

const Speakers = () => {
  return (
    <div>
      <div className="w-full pt-10">
        <h1 className="text-center text-5xl font-semibold">Our Speakers</h1>
      </div>
      <div className="p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          <a href="/gsmalik" className="block">
            <SpeakerCard
              name="Mr. GS Malik"
              role="Commissioner of Ahmedabad police"
              title="GS Malik joins office as Police Commissioner of Ahmedabad city"
              imageSrc={GSMalik}
            />
          </a>
          <a href="/nmchoudhary" className="block">
            <SpeakerCard
              name="Mr. N.N.Choaudhari"
              role="Joint Comissioner of Ahmedabad Police"
              imageSrc={NMChoudhary}
              title="N.N.Choaudhari joins office as Police 
          Commissioner of Ahmedabad city"
            />
          </a>
          <a href="/thennarasan" className="block">
            <SpeakerCard
              name="Mr. M. Thennarasan"
              role="Ahmedabad Municipal Corporation"
              title="Municipal Commissioner 
          Ahmedabad belongs to the 
          Gujarat Cadre of IAS (2000 Batch)."
              imageSrc={MThennarasan}
            />
          </a>
          <a href="/praveena" className="block">
            <SpeakerCard
              name="Ms. Praveena D K"
              role="Collector of Ahmedabad"
              title="The state government appoints a 
          Collector under section 8 of the 
          Bombay Land Revenue Code, 1879."
              imageSrc={img3}
            />
          </a>
          <a href="/purohit" className="block">
            <SpeakerCard
              name="Dr. K.S. Purohit"
              role="Subhadra Gastro Hospital"
              title="Dr. K.S. Purohit have the qualification 
          of M.S in surgery, he has expertise in 
          Gastro as well as in Laparoscopic 
          surgeries."
              imageSrc={img2}
            />
          </a>
          <a href="/vishnu" className="block">
            <SpeakerCard
              name="Mr. Vishnu Kamaliya"
              role="Project Director"
              title="Vishnu Kamaliya is ultra-
          marathoner. Provides a 
          marvelious lens to the sport."
              imageSrc={vk}
            />
          </a>
        </div>
        {/* <SpeakerInfoCard /> */}
      </div>
    </div>
  );
};

export default Speakers;
