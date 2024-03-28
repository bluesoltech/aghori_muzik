import React from 'react'
import SpeakerInfoCard from './SpeakerInfoCard';
import img2 from "../assets/img2.png"

const Purohit = () => {
  const speakerInfo = {
    name: 'Dr. K S Purohit',
    image: img2,
    role: 'Subhadra Gastro Hospital',
    bio: [
      'Right from the infrastructure to the latest medical gastroenterology technology acquisition, Subhadra Gastro Hospital has always kept its patients first and strived to deliver world’s best care to its patients since its inception last 25 years in Ahmedabad.',
    ],
    address: 'Subhadra Gastro Hospital, Opposite Kocharab Ashram, Paldi, Ahmedabad - 380007',
    email: 'info@subhadrahospital.com',
    contact: '(+91) 98244 77663',
  };
  return (
    <div>
      <SpeakerInfoCard  speaker={speakerInfo}/>
    </div>
  )
}

export default Purohit
// 4) ( Dr. K S Purohit ) Right from the infrastructure to the latest medical gastroenterology technology acquisition, Subhadra Gastro Hospital has always kept its patients first and strived to deliver world’s best care to its patients since its inception last 25 years in Ahmedabad.
