import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Blog from "../Pages/Blog";
import Gallery from "../Pages/Gallery";
import Speakers from "../Pages/Speakers";
import Contact from "../Pages/Contact";
import Ticket from "../Pages/Ticket";
import Nmchoudhary from "../Pages/Nmchoudhary";
import Praveena from "../Pages/Praveena"
import Purohit from "../Pages/Purohit"
import Thennarasan from "../Pages/Thennarasan"
import Vishnu from "../Pages/Vishnu"
import Gsmalik from "../Pages/Gsmalik"

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/nmchoudhary" element={<Nmchoudhary />} />
      <Route path="/praveena" element={<Praveena />} />
      <Route path="/purohit" element={<Purohit />} />
      <Route path="/thennarasan" element={<Thennarasan />} />
      <Route path="/vishnu" element={<Vishnu />} />
      <Route path="/gsmalik" element={<Gsmalik />} />

    </Routes>
  );
};

export default Routers;
