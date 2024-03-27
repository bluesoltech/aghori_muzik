import React from "react";
import GSMalik from "../assets/GSMalik.png";
import NMChoudhary from "../assets/N.M. Choudhary.png";
import MThennarasan from "../assets/M.Thennarasan.png";
import vk from "../assets/vk.jpg";
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import SpeakerInfoCard from "./SpeakerInfoCard";
import Hero from "../Components/Hero";
const title = "CONTACT US";
const description = "How can I assist you today? If you have any questions or need help, feel free to ask!";

const SpeakerCard = ({ name, rool, title, imageSrc, link }) => {
  return (
    <div className="bg-white p-10 shadow-md rounded-lg flex flex-row items-center">
      <img src={imageSrc} alt={name} className="rounded-full w-24 h-24 object-fill" />
      <a href={link} className="block">
        <div className="mt-3 text-center ml-7">
          <h3 className="font-semibold text-[30px] text-start">{name}</h3>
          <p className="text-gray-600 text-[25px] mb-2 text-start">{rool}</p>
          <p className="text-gray-600 text-[25px] text-start">{title}</p>
        </div>
      </a>
    </div>
  );
};

const Speakers = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero title={title} description={description} />
      <h2 className="text-center font-bold text-[33px]">Our Speakers</h2>
      <p className="text-center font-bold text-xl mb-8">
        Meet Our World's Leading Speakers
      </p>
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
            rool="Joint Comissioner of Ahmedabad Police"
            imageSrc={NMChoudhary}
            title="N.N.Choaudhari joins office as Police 
          Commissioner of Ahmedabad city"
          />
        </a>
        <a href="/thennarasan" className="block">
          <SpeakerCard
            name="Mr. M. Thennarasan"
            rool="Ahmedabad Municipal Corporation"
            title="Municipal Commissioner 
          Ahmedabad belongs to the 
          Gujarat Cadre of IAS (2000 Batch)."
            imageSrc={MThennarasan}
          />
        </a>
        <a href="/vishnu" className="block">
          <SpeakerCard
            name="Mr. Vishnu Kamaliya"
            rool="Project Director"
            title="Vishnu Kamaliya is ultra-
          marathoner. Provides a 
          marvelious lens to the sport."
            imageSrc={vk}
          />
        </a>
        <a href="/praveena" className="block">
          <SpeakerCard
            name="Ms. Praveena D K"
            rool="Collector of Ahmedabad"
            title="The state government appoints a 
          Collector under section 8 of the 
          Bombay Land Revenue Code, 1879."
            imageSrc={img3}
          />
        </a>
        <a href="/purohit" className="block">
          <SpeakerCard
            name="Dr. K.S. Purohit"
            rool="Subhadra Gastro Hospital"
            title="Dr. K.S. Purohit have the qualification 
          of M.S in surgery, he has expertise in 
          Gastro as well as in Laparoscopic 
          surgeries."
            imageSrc={img2}
          />
        </a>
      </div>
      {/* <SpeakerInfoCard /> */}
    </div>
  );
};

export default Speakers;
