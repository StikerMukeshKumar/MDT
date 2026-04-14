import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import AppRoutes from "../src/routes/AppRoutes";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <CustomCursor />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};

export default App;