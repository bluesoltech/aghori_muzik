import React from 'react'
import SpeakerInfoCard from './SpeakerInfoCard';
import MThennarasan from "../assets/M.Thennarasan.png";

const Thennarasan = () => {
  const speakerInfo = {
    name: 'Mr.M.Thennarasan',
    image: MThennarasan,
    role: 'Commissioner of Ahmedabad police',
    bio: [
      'He has played pivotal role in ensuring doing business reforms in industries which involved developing online modules for all industry related  applications in GIDC, Geographical Information System (GIS) based estate information system, a mobile based app GIDC SETU self-certification, smart water meters and smart DCR for plan approval'
    ],
    address: ' Central Zone Office, Sardar Patel Bhavan, Municipal Corporation, Danapith - Khamasa,Ahmedabad, 380001',
    email: 'mc@ahmedabadcity.gov.in',
    contact: '25391811',
  };
  return (
    <div>
      <SpeakerInfoCard  speaker={speakerInfo}/>
    </div>
  )
}

export default Thennarasan