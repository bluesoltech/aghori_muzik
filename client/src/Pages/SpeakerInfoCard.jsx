import React from 'react';
import GSMalik from "../assets/GSMalik.png";

const SpeakerInfoCard = () => {
  return (
    <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg">
      <img className="w-full" src={GSMalik} alt="GS Malik" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">GS Malik</div>
        <p className="text-gray-700 text-base">
          Commissioner of Ahmedabad police
        </p>
        <p className="text-gray-700 text-base mt-4">
          GS Malik joined the Police Service on 8 January 1994. Malik is
          B.Tech. (Elect.), L.L.B. by education.
        </p>
        <p className="text-gray-700 text-base mt-4">
          Ahmedabad: Gyanender Singh Malik took charge of the office of the
          city police commissioner of Ahmedabad today afternoon. He received
          the guard of honor as he arrived at the Police Commissioner office at
          Shahibaug area of the city.
        </p>
        <div className="mt-4">
          <p className="text-gray-700 text-sm font-bold">Address:</p>
          <p className="text-gray-700 text-sm">
            Delhi Darwaja Road, Shahibaug, Ahmedabad - 380004 (Near Petrol
            Pump and Shahibaug Under Bridge)
          </p>
          <p className="text-gray-700 text-sm font-bold">Email:</p>
          <p className="text-gray-700 text-sm"> cp-ahd@gujarat.gov.in</p>
          <p className="text-gray-700 text-sm font-bold">Contact:</p>
          <p className="text-gray-700 text-sm">079 - 25633636</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerInfoCard;

