import React from "react";
import { Routes, Route } from "react-router-dom";
import { AboutUs } from "../../pages/AboutUs";
import { Blog } from "../../pages/Blog";
import { Career } from "../../pages/Career";
import { Contact } from "../../pages/Contact";
import { Home } from "../../pages/Home";
import { Products } from "../../pages/Products";
import { Footer } from "../Footer";
import Header from "../Header/Header";

export const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/gioi-thieu" element={<AboutUs />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/san-pham" element={<Products />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/tuyen-dung" element={<Career />} />
      </Routes>
      <Footer />
    </div>
  );
};
