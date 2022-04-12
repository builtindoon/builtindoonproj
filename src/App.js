import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/page.jsx/About";
import Contact from "./component/Contact";
import Home from "./component/Home";
import Services from "./component/services";
import SignUp from "./component/Sign Up";
import Skills from "./component/skills";
import Teams from "./component/teams";
export default function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="skills" element={<Skills />} />
        <Route path="teams" element={<Teams />} />
      </Routes>
    </BrowserRouter>
  );
}
