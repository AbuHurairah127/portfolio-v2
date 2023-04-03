"use client";

import AboutMe from "@/section/aboutMe/AboutMe";
// import Banner from "@/section/banner/Banner";
import ContactMe from "@/section/contactMe/ContactMe";
import Footer from "@/section/footer/Footer";
import Hero from "@/section/hero/Hero";
import Projects from "@/section/projects/Projects";
import Skills from "@/section/skills/Skills";
import { ReactNode, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
type Props = {
  children: ReactNode;
};
const ScrollWrapper = () => {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        // ... all available Locomotive Scroll instance options
      }}
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
      className=""
    >
      <main data-scroll-container ref={containerRef} className="">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        {/* <Banner /> */}
        <ContactMe />
        <Footer />
      </main>
    </LocomotiveScrollProvider>
  );
};
export default ScrollWrapper;
