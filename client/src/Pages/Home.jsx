import React from 'react'
import Video from '../Components/Video'
import Recent_news from '../Components/Recent_news'
import Schedule from '../Components/Schedule'
import Pricing from '../Components/Pricing';
<<<<<<< HEAD
import Map from '../Components/Map';
import Sponsors from '../Components/Sponsors';
import Timmer from '../Components/Timmer';
=======
import Speakers from './Speakers';
>>>>>>> 4d543b7b9bfddef58ff01ad3da991a8563b0668c
const faqs = [
  {
    question: "5:00 pm Reporting Time",
    answer: ["When you are looking for an SEO package, there are a few things that you should keep in mind. The first is the size of your business. If you are a small business, you may not need all of the services that an SEO company offers. You may be able to get away with just basic services, such as keyword research and on-page optimization.",
    ]
  },
  {
    question: "5:10 event start",
    answer: ["SEO is one of the most important aspects of online marketing. It can help you rank higher in search engine results pages, which can lead to more website visitors and more customers. If you’re looking for an SEO package, you may be wondering how much they cost.",
    ]
  },
  {
    question: "5:20 Acp Department Activities",
    answer: ["There are a lot of SEO packages on the market. But are they worth the investment?",
    ]
  },
  {
    question: "6:00 Glimpse of Acp department",
    answer: ["SEO is not a one-time job. It’s an ongoing process that needs to be tweaked and adjusted as search engine algorithms change. That’s why most SEO professionals recommend monthly SEO services.",
    ]
  },
  {
    question: "6:15 guest welcome with Diya lightning ceremony",
    answer: ["Yes, you can do SEO on your own, but it’s important to remember that it’s a long-term process that takes patience and diligence. Professional SEO services can help you stay on track and make sure your website is performing at its best."
    ]
  },
  {
    question: "6:30 award anouncement",
    answer: ["When it comes to SEO, there are a lot of things to think about. You need to make sure that your website is coded in a way that makes it easy for search engines to crawl, that you have quality content, and that you’re doing everything you can to get links from other websites. If all of this sounds like too much for you, or if you just don’t have the time to do it yourself, you may want to consider hiring an SEO agency.",
    ]
  },
  {
    question: "8:00 live concert by AGhori muzik team",
    answer: ["Small businesses should be careful not to spend too much on SEO services each month. While it is important to invest in SEO, small businesses can quickly go over their budget if they’re not careful. It’s important to find a balance between the money you’re spending and the results you’re seeing.",

    ]
  },
];
const plansData = [
  {
    title: "Full Pass-Silver Ticket",
    subtittle: "For Normal Seating",
    price: "250",
    features: [
      "Event Attendance",
      "Entrance Bands",
    ],
  },
  {
    title: "Full Pass-Golden Ticket",
    subtittle: "For Corporate Seating",

    price: "500",
    features: [


      "Event Attendance",
      "Entrance Bands",
      "Water Bottle",
      "Tea"
    ],
  },
  {
    title: "Full Pass-Platinum Ticket",
    subtittle: "For VIP Seating",

    price: "1500",
    features: [
      "Event Attendance",
      "Entrance Bands",
      "Water Bottle",
      "Food Packets",
      "Energy Drink",
      "Tea"
    ],
  },
];
const Home = () => {
  return (
    <div className='text-[100px]'>
      <Timmer/>
      <Video />
      <Schedule faqs={faqs} />
<<<<<<< HEAD
      <Pricing plansData={plansData} />
      <Recent_news />
      <Map />
      <Sponsors/>
=======
      <Speakers />
      <Pricing/>
      <Recent_news/>
      
>>>>>>> 4d543b7b9bfddef58ff01ad3da991a8563b0668c
    </div>
  )
}

export default Home