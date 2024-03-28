import React from 'react';
import Hero from '../Components/Hero';
const title = "CONTACT US";
const description = "How can I assist you today? If you have any questions or need help, feel free to ask!";

const SpeakerInfoCard = ({ speaker }) => {
  return (
    <div>
      <Hero title={title} description={description} />
      <div style={{ backgroundImage: 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)' }}>
        <div className="max-w-md mx-auto rounded overflow-hidden shadow-lg" style={{ backgroundImage: 'linear-gradient(to right, #161928 40%, #4E598E 100%)' }}>
          <img className="w-full" src={speaker.image} alt={speaker.name} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-white">{speaker.name}</div>
            <p className="text-white text-base">
              {speaker.role}
            </p>
            {speaker.bio.map((paragraph, index) => (
              <p className="text-white text-base mt-4" key={index}>
                {paragraph}
              </p>
            ))}
            <div className="mt-4">
              <p className="text-white my-1 text-sm font-bold">Address:</p>
              <p className="text-white my-1 text-sm">{speaker.address}</p>
              <p className="text-white my-1 text-sm font-bold">Email:</p>
              <p className="text-white my-1 text-sm">{speaker.email}</p>
              <p className="text-white my-1 text-sm font-bold">Contact:</p>
              <p className="text-white my-1 text-sm">{speaker.contact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakerInfoCard;
