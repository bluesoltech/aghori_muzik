import React from 'react'
import SpeakerInfoCard from './SpeakerInfoCard';
import NMChoudhary from "../assets/N.M. Choudhary.png";

const Nmchoudhary = () => {
  const speakerInfo = {
    name: 'N N Chaudhari',
    image: NMChoudhary,
    role: 'Joint Comissioner of Ahmedabad Police',
    bio: [
      'Shri N N Chaudhari IPS ( Gujarat 2006 ) presently Principal, State Pol. Academy, Karai, Gandhinagar , has been empanelled to hold DIG and Equivalent posts at the Government of india.'
    ],
    address: '2J54+4C2, Kankaria, Ahmedabad, Gujarat 380002',
    email: 'acp-admin-ahd@gujarat.gov.in',
    contact: ' 079 2546 2161',
  };
  return (
    <div>
      <SpeakerInfoCard speaker={speakerInfo} />

    </div>
  )
}

export default Nmchoudhary