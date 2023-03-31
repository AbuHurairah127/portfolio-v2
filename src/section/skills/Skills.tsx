"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import html from "./../../assets/html.png";
import css from "./../../assets/css.png";
import bootstrap from "./../../assets/bootstrap.png";
import js from "./../../assets/js.png";
import ts from "./../../assets/ts.png";
import react from "./../../assets/react.png";
import next from "./../../assets/nextjs.png";
import redux from "./../../assets/redux.png";
import vs from "./../../assets/vs.png";
import figma from "./../../assets/figma.png";
import express from "./../../assets/express.png";
import nodejs from "./../../assets/nodejs.png";
const Skills = () => {
  const SKILLS_ICONS = [
    html,
    css,
    bootstrap,
    js,
    ts,
    react,
    next,
    redux,
    vs,
    figma,
    express,
    nodejs,
  ];
  return (
    <div
      className="flex justify-center items-center flex-col py-8 relative"
      id={"skills"}
      // data-scroll-section
    >
      <h1
        className="text-[10vw]  uppercase font-thin tracking-wider p-0 mt-10"
        style={{ fontFamily: "Kaushan Script" }}
        data-scroll
        data-scroll-speed="-5"
        data-scroll-direction="vertical"
      >
        S
      </h1>
      <h1
        className="text-[10vw]  uppercase font-thin tracking-wider p-0 mt-10"
        style={{ fontFamily: "Kaushan Script" }}
        data-scroll
        data-scroll-speed="-5"
        data-scroll-direction="vertical"
      >
        K
      </h1>
      <h1
        className="text-[10vw]  uppercase font-thin tracking-wider p-0 mt-10"
        style={{ fontFamily: "Kaushan Script" }}
        data-scroll
        data-scroll-speed="-5"
        data-scroll-direction="vertical"
      >
        I{" "}
      </h1>
      <h1
        className="text-[10vw]  uppercase font-thin tracking-wider p-0 mt-10"
        style={{ fontFamily: "Kaushan Script" }}
        data-scroll
        data-scroll-speed="-5"
        data-scroll-direction="vertical"
      >
        L{" "}
      </h1>
      <h1
        className="text-[10vw]  uppercase font-thin tracking-wider p-0 mt-10"
        style={{ fontFamily: "Kaushan Script" }}
        data-scroll
        data-scroll-speed="-5"
        data-scroll-direction="vertical"
      >
        L{" "}
      </h1>
      <h1
        className="text-[10vw]  uppercase font-thin tracking-wider p-0 mt-10"
        style={{ fontFamily: "Kaushan Script" }}
        data-scroll
        data-scroll-speed="-5"
        data-scroll-direction="vertical"
      >
        &nbsp;{" "}
      </h1>
      <h1
        className="text-[10vw]  uppercase font-thin tracking-wider p-0 mt-10"
        style={{ fontFamily: "Kaushan Script" }}
        data-scroll
        data-scroll-speed="-5"
        data-scroll-direction="vertical"
      >
        S{" "}
      </h1>
      <h1
        className="text-[10vw]  uppercase font-thin tracking-wider p-0 mt-10"
        style={{ fontFamily: "Kaushan Script" }}
        data-scroll
        data-scroll-speed="-5"
        data-scroll-direction="vertical"
      >
        E
      </h1>
      <h1
        className="text-[10vw]  uppercase font-thin tracking-wider p-0 mt-10"
        style={{ fontFamily: "Kaushan Script" }}
        data-scroll
        data-scroll-speed="-5"
        data-scroll-direction="vertical"
      >
        T
      </h1>
      <div></div>
    </div>
  );
};

export default Skills;
