import React from "react";
import Video from "../Components/Video";
import Recent_news from "../Components/Recent_news";
import Schedule from "../Components/Schedule";
import Pricing from "../Components/Pricing";
import Map from "../Components/Map";
import Sponsors from "../Components/Sponsors";
import Timmer from "../Components/Timmer";
import Speakers from "./Speakers";
const faqs = [
  {
    question: "5:00 pm Reporting Time",
  },
  {
    question: "5:30 event start",
  },
  {
    question: "Deep pragatya Ceremony",
  },
  {
    question: "Award Ceremony",
  },
  {
    question: "Glimps of Ahmedabad city Police Department work",
  },
  {
    question: "Special guest speech",
  },
  {
    question: "Live music with Agori",
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
      <div className="h-screen"></div>
      <Timmer />
      <Video />
      <Schedule faqs={faqs} />
      <Pricing plansData={plansData} />
      <Recent_news />
      <Map />
      <Sponsors />
      <Speakers />
      <Pricing />
      <Recent_news />
    </div>
  );
};

export default Home;
