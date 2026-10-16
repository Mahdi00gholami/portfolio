import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./home";
import Projects from "./projects";
import Skills from "./skills";
import About from "./about";
import Contact from "./contact";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar />

     {/* کانتینر اصلی صفحات: pt-16 فاصله از بالا ایجاد می‌کند تا متن‌ها زیر نوبار نروند */}
    <main className="pt-16  ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>

  </BrowserRouter>,
);
