import AboutMe from "@/section/aboutMe/AboutMe";
import Hero from "@/section/hero/Hero";
import React from "react";

const page = () => {
  return (
    <div className="bg-primary w-screen">
      <Hero />
      <AboutMe />
    </div>
  );
};

export default page;
