import AboutMe from "@/section/aboutMe/AboutMe";
import Hero from "@/section/hero/Hero";
import Skills from "@/section/skills/Skills";
import React from "react";

const page = () => {
  return (
    <div className="bg-primary w-screen">
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  );
};

export default page;
