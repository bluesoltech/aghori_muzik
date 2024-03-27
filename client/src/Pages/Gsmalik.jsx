import React from 'react'
import SpeakerInfoCard from './SpeakerInfoCard';
import GSMalik from "../assets/GSMalik.png";

const Gsmalik = () => {
  const speakerInfo = {
    name: 'GS Malik',
    image: GSMalik,
    role: 'Commissioner of Ahmedabad police',
    bio: [
      'GS Malik joined the Police Service on 8 January 1994. Malik is B.Tech. (Elect.), L.L.B. by education.',
      'Ahmedabad: Gyanender Singh Malik took charge of the office of the city police commissioner of Ahmedabad today afternoon. He received the guard of honor as he arrived at the Police Commissioner office at Shahibaug area of the city.',
    ],
    address: 'Delhi Darwaja Road, Shahibaug, Ahmedabad - 380004 (Near Petrol Pump and Shahibaug Under Bridge)',
    email: 'cp-ahd@gujarat.gov.in',
    contact: '079 - 25633636',
  };
  return (
    <div>
      <SpeakerInfoCard  speaker={speakerInfo}/>
      
    </div>
  )
}

export default Gsmalik