"use client";
import { motion } from "framer-motion";
import "@fontsource/kaushan-script"; // Defaults to weight 400.

const Banner = () => {
  return (
    <div
      className="min-h-screen max-h-fit max-w-screen relative"
      id={"about-me"}
      scroll-data-section
    >
      <div className="absolute top-0 left-0 backdrop-blur-[1px] min-h-screen w-screen z-10 flex justify-evenly bg-black overflow-hidden py-5">
        <div className="w-screen" id="up">
          <h1
            className="text-[10vw] text-white uppercase font-thin tracking-wider p-0 m-0"
            style={{ fontFamily: "Kaushan Script" }}
            data-scroll
            data-scroll-speed="-15"
            data-scroll-direction="horizontal"
            data-scroll-target={"#up"}
          >
            Eat
          </h1>
          <h1
            className="text-[10vw] absolute right-0 text-white uppercase font-thin tracking-wider p-0 m-0"
            style={{ fontFamily: "Kaushan Script" }}
            data-scroll
            data-scroll-speed="5"
            data-scroll-direction="horizontal"
            data-scroll-target={"#up"}
          >
            Sleep
          </h1>
          <h1
            className="text-[10vw] text-white uppercase font-thin tracking-wider p-0 m-0"
            style={{ fontFamily: "Kaushan Script" }}
            data-scroll
            data-scroll-speed="-8"
            data-scroll-direction="horizontal"
            data-scroll-target={"#up"}
          >
            Code
          </h1>
          <h1
            className="text-[10vw] text-white uppercase font-thin tracking-wider p-0 m-0"
            style={{ fontFamily: "Kaushan Script" }}
            data-scroll
            data-scroll-speed="8"
            data-scroll-direction="horizontal"
            data-scroll-target={"#up"}
          >
            Repeat
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
