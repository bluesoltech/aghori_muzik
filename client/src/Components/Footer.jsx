import React from "react";
import Logo from "../assets/images/logo/logo.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #161928 40%, #4E598E 100%)",
      }}
    >
      <footer className=" rounded-xl h-fit overflow-hidden mx-auto  text-white py-11 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 text-center md:text-left">
          <div className="flex flex-col items-center">
            <Link to="/" >
              <img className="h-16 w-auto mb-4" src={Logo} alt="Logo" />
            </Link>
            <p className="text-sm text-white/70 text-center">
              A one stop solution to all your event needs.
            </p>
            {/* <div className="flex justify-center md:justify-start mt-4">
              <Link
                to="https://www.facebook.com/HappyTeam95?mibextid=uzlsIk"
                className="text-white hover:text-blue-600 mx-2"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="https://www.instagram.com/happyteam95/"
                className="text-white hover:text-pink-400 mx-2"
              >
                <FaInstagram />
              </Link>
              <Link
                to="https://www.youtube.com/@HappyTeam.95"
                className="text-white hover:text-red-600 mx-2"
              >
                <FaYoutube />
              </Link>
            </div> */}
          </div>

          <div className="flex flex-col justify-center col-start-1 md:col-start-2 lg:col-start-3">
            <h3 className="font-semibold mb-3 text-xl">Quick Links</h3>
            <ul className="text-white/50 flex md:items-start w-4/6 md:justify-start m-auto flex-col md:flex-row md:ml-0 justify-centerm flex-start tracking-wide">
              <div>
                <li>
                  <Link to="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/speakers" className="hover:text-white">
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link to="/shop" className="hover:text-white">
                    shop
                  </Link>
                </li>
              </div>
              <div className="md:ml-8">
                <li>
                  <Link to="/gallery" className="hover:text-white">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/ticket" className="hover:text-white">
                    Buy Tickets
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          <div className="flex flex-col justify-start">
            <h3 className="font-semibold mb-3 text-xl">Information</h3>
            <ul className="text-white/50 tracking-wide">
              <li>
                <a
                  href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSKhbzLBFBgcjnwpMfchqvFMFhKxCLznDrmfKbHQtBGpbwsllVKpNNLsNPRpBjmDdkXxFwXs"
                  type="email"
                  target="_blank"
                >
                  info@bluesoltech.in
                </a>
              </li>
              <li>
                <a href="" type="tel">
                  +91 92746 82710
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 text-center pt-5 mt-5">
          © 2024 Blue Soltech • All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default Footer;
