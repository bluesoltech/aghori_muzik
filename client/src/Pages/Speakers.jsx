import React from "react";
import GSMalik from "../assets/GSMalik.png";
import NMChoudhary from "../assets/N.M. Choudhary.png";
import MThennarasan from "../assets/M.Thennarasan.png";
import vk from "../assets/vk.jpg";
import SpeakerInfoCard from "./SpeakerInfoCard";

const SpeakerCard = ({ name, rool, title, imageSrc }) => {
  return (
    <div className="bg-white p-10 shadow-md rounded-lg flex flex-row items-center">
      <img src={imageSrc} alt={name} className="rounded-full w-24 h-24 object-fill" />
      <div className="mt-3 text-center ml-7">
        <h3 className="font-semibold text-[30px] text-start">{name}</h3>
        <p className="text-gray-600 text-[25px] mb-2 text-start">{rool}</p>
        <p className="text-gray-600 text-[25px] text-start">{title}</p>
      </div>
    </div>
  );
};

const Speakers = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center font-bold text-[33px]">Our Speakers</h2>
      <p className="text-center font-bold text-xl mb-8">
        Meet Our World's Leading Speakers
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <SpeakerCard
          name="GS Malik"
          rool="Commissioner of Ahmedabad police"
          title="GS Malik joins office as Police 
          Commissioner of Ahmedabad city"
          imageSrc={GSMalik}
        />

        <SpeakerCard
          name="N.M. Choudhary"
          rool="Joint Comissioner of Ahmedabad Police"
          imageSrc={NMChoudhary}
          title="N.M. Choudhry joins office as Police 
          Commissioner of Ahmedabad city"
        />
        <SpeakerCard
          name="Mr. M. Thennarasan"
          rool="Ahmedabad Municipal Corporation"
          title="Municipal Commissioner 
          Ahmedabad belongs to the 
          Gujarat Cadre of IAS (2000 Batch)."
          imageSrc={MThennarasan}
        />
        <SpeakerCard
          name="Vishnu Kamaliya"
          rool="Project Director"
          title="Vishnu Kamaliya is ultra-
          marathoner. Provides a 
          marvelious lens to the sport."
          imageSrc={vk}
        />
      </div>
      <SpeakerInfoCard />
    </div>
  );
};

export default Speakers;
