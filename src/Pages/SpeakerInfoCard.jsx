import React from 'react';
import Hero from '../Components/Hero';

// Constants for reusability and easier modifications
const title = "CONTACT US";
const description = "How can I assist you today? If you have any questions or need help, feel free to ask!";
const cardBackgroundGradient = 'linear-gradient(to right, #161928 40%, #4E598E 100%)';
const containerBackgroundGradient = 'linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)';

const SpeakerInfoCard = ({ speaker }) => {
  return (
    <>
      <Hero title={title} description={description} />
      <div style={{ backgroundImage: containerBackgroundGradient }}>
        <article className="max-w-xl mx-auto rounded overflow-hidden shadow-lg" style={{ backgroundImage: cardBackgroundGradient }}>
          <img className="w-full" src={speaker.image} alt={speaker.name} />
          <div className="px-6 py-4">


            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-white">
                {speaker.name}
              </div>
              <p className="text-white text-base">{speaker.role}</p>
              {speaker.bio.map((paragraph, index) => (
                <p className="text-white text-base mt-4" key={index}>
                  {paragraph}
                </p>
              ))}
              <div className="mt-4">
                <ContactDetail title="Address" detail={speaker.address} />
                <ContactDetail title="Email" detail={speaker.email} />
                <ContactDetail title="Contact" detail={speaker.contact} />
              </div>
            </div>
            </div>
        </article>
      </div>
    </>
  );
};

// Component for rendering contact details to avoid repetition
const ContactDetail = ({ title, detail }) => (
  <>
    <p className="text-white my-1 text-sm font-bold">{title}:</p>
    <p className="text-white my-1 text-sm">{detail}</p>
  </>
);

export default SpeakerInfoCard;
