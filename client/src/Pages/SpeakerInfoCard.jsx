import React from 'react';

const SpeakerInfoCard = ({ speaker }) => {
  return (
    <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg">
      <img className="w-full" src={speaker.image} alt={speaker.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{speaker.name}</div>
        <p className="text-gray-700 text-base">
          {speaker.role}
        </p>
        {speaker.bio.map((paragraph, index) => (
          <p className="text-gray-700 text-base mt-4" key={index}>
            {paragraph}
          </p>
        ))}
        <div className="mt-4">
          <p className="text-gray-700 text-sm font-bold">Address:</p>
          <p className="text-gray-700 text-sm">{speaker.address}</p>
          <p className="text-gray-700 text-sm font-bold">Email:</p>
          <p className="text-gray-700 text-sm">{speaker.email}</p>
          <p className="text-gray-700 text-sm font-bold">Contact:</p>
          <p className="text-gray-700 text-sm">{speaker.contact}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerInfoCard;
