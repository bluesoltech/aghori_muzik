import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import HappyTeamLogo from "../assets/HappyTeamLogo.png";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #161928 40%, #4E598E 100%)",
        borderRadius: "10px",
      }}
    >
      <footer className=" rounded-xl h-fit overflow-hidden mx-auto my-4 text-white py-11 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 text-center md:text-left">
          <div className="flex flex-col items-center">
            <img className="h-16 w-22 mb-4" src={HappyTeamLogo} alt="Logo" />
            <p className="text-sm text-white/70 text-center">
              A one stop solution to all your event needs.
            </p>
            <div className="flex justify-center md:justify-start mt-4">
              <a
                href="https://www.facebook.com/HappyTeam95?mibextid=uzlsIk"
                className="text-white hover:text-blue-600 mx-2"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/happyteam95/"
                className="text-white hover:text-pink-400 mx-2"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@HappyTeam.95"
                className="text-white hover:text-red-600 mx-2"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center col-start-1 md:col-start-2 lg:col-start-3">
            <h3 className="font-semibold mb-3 text-xl">Quick Links</h3>
            <ul className="text-white/50">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white">
                  Speakers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="font-semibold mb-3 text-xl">Services</h3>
            <ul className="text-white/50">
              <li>
                <a href="/service/1" className="hover:text-white">
                  Sports
                </a>
              </li>
              <li>
                <a href="/service/2" className="hover:text-white">
                  Corporate Events
                </a>
              </li>
              <li>
                <a href="/service/3" className="hover:text-white">
                  Government Project
                </a>
              </li>
              <li>
                <a href="/service/4" className="hover:text-white">
                  Social Activities
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 text-center pt-5 mt-5">
          © 2024 happy team • All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
