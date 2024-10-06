import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Working from "../components/working/Working";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <Working />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
