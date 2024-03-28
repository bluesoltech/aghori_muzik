import React from 'react'
import SpeakerInfoCard from './SpeakerInfoCard';
import img3 from "../assets/img3.png"

const Praveena = () => {
  const speakerInfo = {
    name: 'Ms. Praveena D K',
    image: img3,
    role: 'Collector of Ahmedabad',
    bio: [
      'Ms. Praveena D K IAS ( Gujarat 2009 ) presently Collector, Gandhinagar is transferred and appointed as Collector, Ahmedabad vice Dr. Dhavalkumar kiritkumar Patel IAS.',
    ],
    address: '3H8J+7MV, RTO Subhash bridge collector office, Ashram Rd, Old Wadaj, Ahmedabad, Gujarat 380027',
    email: 'ahd@gujarat.gov.in',
    contact: '79 27551681',
  };
  return (
    <div>
      <SpeakerInfoCard speaker={speakerInfo} />
    </div>
  )
}

export default Praveena
