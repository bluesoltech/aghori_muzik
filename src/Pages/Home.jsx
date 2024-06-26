import React from "react";
import Video from "../Components/Video";
import Recent_news from "../Components/Recent_news";
import Schedule from "../Components/Schedule";
import Pricing from "../Components/Pricing";
import Map from "../Components/Map";
import Sponsors from "../Components/Sponsors";
import Timmer from "../Components/Timmer";
import Speakers from "./Speakers";
import banner from "../assets/ARUFirst-01.jpg";
const faqs = [
  {
    question: "5:00 PM Reporting Time",
  },
  {
    question: "5:30 PM Event Start",
    answer: [
      "SEO is one of the most important aspects of online marketing. It can help you rank higher in search engine results pages, which can lead to more website visitors and more customers. If you’re looking for an SEO package, you may be wondering how much they cost.",
    ],
  },
  {
    question: "Deep Pragatya Ceremony",
    answer: [
      "There are a lot of SEO packages on the market. But are they worth the investment?",
    ],
  },
  {
    question: "Award Ceremony",
    answer: [
      "SEO is not a one-time job. It’s an ongoing process that needs to be tweaked and adjusted as search engine algorithms change. That’s why most SEO professionals recommend monthly SEO services.",
    ],
  },
  {
    question: "Glimps of Ahmedabad City Police",
    answer: [
      "Yes, you can do SEO on your own, but it’s important to remember that it’s a long-term process that takes patience and diligence. Professional SEO services can help you stay on track and make sure your website is performing at its best.",
    ],
  },
  {
    question: "Special Guest Speech",
    answer: [
      "When it comes to SEO, there are a lot of things to think about. You need to make sure that your website is coded in a way that makes it easy for search engines to crawl, that you have quality content, and that you’re doing everything you can to get links from other websites. If all of this sounds like too much for you, or if you just don’t have the time to do it yourself, you may want to consider hiring an SEO agency.",
    ],
  },
  {
    question: "Live Concert Muzik with Aghori",
    answer: [
      "Small businesses should be careful not to spend too much on SEO services each month. While it is important to invest in SEO, small businesses can quickly go over their budget if they’re not careful. It’s important to find a balance between the money you’re spending and the results you’re seeing.",
    ],
  },
];
const plansData = [
  {
    title: "Full Pass-Silver Ticket",
    subtittle: "For Normal Seating",
    price: "250",
    features: ["Event Attendance", "Entrance Bands"],
  },
  {
    title: "Full Pass-Golden Ticket",
    subtittle: "For Corporate Seating",

    price: "500",
    features: ["Event Attendance", "Entrance Bands", "Water Bottle", "Tea"],
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
      "Tea",
    ],
  },
];
const Home = () => {
  return (
    <div className="text-[100px]">
      <div
        className="flex justify-center 2xl:py-2"
        style={{
          backgroundImage:
            "linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)",
        }}
      >
        <img src={banner} className="2xl:rounded-xl" alt="" />
      </div>
      <Timmer />
      <Video />
      <Schedule faqs={faqs} />
      <Pricing plansData={plansData} />
      <Sponsors />
      <Recent_news />
    </div>
  );
};

export default Home;
