import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Blog from "../Pages/Blog";
import Gallery from "../Pages/Gallery";
import Speakers from "../Pages/Speakers";
import Contact from "../Pages/Contact";
import Ticket from "../Pages/Ticket";

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
    </Routes>
  );
};

export default Routers;
