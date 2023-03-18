import AboutMe from "@/section/aboutMe/AboutMe";
import ContactMe from "@/section/contactMe/ContactMe";
import Hero from "@/section/hero/Hero";
import Skills from "@/section/skills/Skills";
import React from "react";

const page = () => {
  return (
    <div className="bg-primary w-screen">
      <Hero />
      <AboutMe />
      <Skills />
      <ContactMe />
    </div>
  );
};

export default page;
