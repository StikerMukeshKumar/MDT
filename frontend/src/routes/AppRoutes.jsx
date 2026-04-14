import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";
import AdsComponent from "../components/AdsComponent";

import WhatsAppWidget from "../components/WhatsAppWidget"; // 👈 FIX PATH

const AppRoutes = () => {
  return (
    <>
      {/* ROUTES */}
      <AdsComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* GLOBAL FLOATING WIDGET (OUTSIDE ROUTES) */}
      <WhatsAppWidget />
    </>
  );
};

export default AppRoutes;