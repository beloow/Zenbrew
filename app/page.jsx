"use client";
import { useEffect } from "react";
// Composants
import About from "@/components/About";
import Explore from "@/components/Explore";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import OpeningHours from "@/components/OpeningHours";

const Home = () => {
  // locomotive scroll
  useEffect(()=> {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import ("locomotive-scroll")).default;
      new LocomotiveScroll;
    };

    loadLocomotiveScroll();
  }, []);
  return (
    <div className="h-full overflow-x-hidden">
      <Hero />
      <Explore />
      <About />
      <Menu />
      <OpeningHours />
      <Testimonials />
      {/* div temp */}
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
};

export default Home;