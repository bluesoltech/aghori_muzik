import React from 'react'
import SpeakerInfoCard from './SpeakerInfoCard';
import vk from "../assets/vk.jpg";

const Vishnu = () => {
  const speakerInfo = {
    name: 'Vishnu Kamaliya',
    image: vk,
    role: 'Project Director',
    bio: [
      'Vishnu Kamaliya is ultra-marathoner. Provides a marvelious lens to the sport. Participated in more than 18+ marathon events. Also organized, managed and directed more than 26+ Government and Pvt. Events of Sports and Marathon.',
    ],
    address: '102, Solaris Business Hub,Opp. The National Higher Secondary School Nr.Parshwnath Jain Mandir, Bhuyangdev, Sola Road, Ahmedabad, Gujarat 380013',
    email: 'vishnu@bluesoltech.in',
    contact: '+91 96626 95956',
  };
  return (
    <div>
      <SpeakerInfoCard  speaker={speakerInfo}/>
    </div>
  )
}

export default Vishnu
 
