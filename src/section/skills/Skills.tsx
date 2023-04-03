"use client";
import Image, { StaticImageData } from "next/image";
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
import git from "./../../assets/git.png";
import github from "./../../assets/github.png";
import tailwindcss from "./../../assets/tailwindcss.png";
import firebase from "./../../assets/firebase.png";
const Skills = () => {
  const SKILLS_ICONS: {
    image: StaticImageData;
    title: string;
    delay: number;
  }[] = [
    {
      image: html,
      title: "HTML",
      delay: 0.0,
    },
    {
      image: css,
      title: "CSS",
      delay: 0.2,
    },
    {
      image: bootstrap,
      title: "BOOTSTRAP",
      delay: 0.4,
    },
    {
      image: js,
      title: "JAVASCRIPT",
      delay: 0.6,
    },
    {
      image: ts,
      title: "TYPESCRIPT",
      delay: 0.8,
    },
    {
      image: react,
      title: "REACT JS",
      delay: 1,
    },
    {
      image: next,
      title: "NEXT JS",
      delay: 1.2,
    },
    {
      image: redux,
      title: "REDUX",
      delay: 1.4,
    },
    {
      image: vs,
      title: "VISUAL STUDIO CODE",
      delay: 1.6,
    },
    {
      image: figma,
      title: "FIGMA",
      delay: 1.8,
    },
    {
      image: express,
      title: "EXPRESS JS",
      delay: 2,
    },
    {
      image: nodejs,
      title: "NODE JS",
      delay: 2.2,
    },
    {
      image: git,
      title: "GIT",
      delay: 2.4,
    },
    {
      image: github,
      title: "GITHUB",
      delay: 2.6,
    },
    {
      image: tailwindcss,
      title: "TAILWIND CSS",
      delay: 2.8,
    },
    {
      image: firebase,
      title: "FIREBASE",
      delay: 3,
    },
  ];
  const SKILL_SET_SPELL: string[] = [
    "S",
    "K",
    "I",
    "L",
    "L",
    "  ",
    "S",
    "E",
    "T",
  ];
  return (
    <div
      className="flex justify-center items-center flex-col py-8 min-h-screen"
      id={"skills"}
      // data-scroll-section
    >
      {SKILL_SET_SPELL.map((spell, i) => (
        <h1
          key={i}
          className="text-[10vw]  uppercase font-thin tracking-wider p-0 mt-10 hidden lg:block"
          style={{ fontFamily: "Kaushan Script" }}
          data-scroll
          data-scroll-speed="-5"
          data-scroll-direction="vertical"
        >
          {spell}
        </h1>
      ))}
      <div>
        <motion.h1
          className="text-[12vw] text-center text-black uppercase font-thin tracking-wider p-0 m-0 block lg:hidden"
          style={{ fontFamily: "Kaushan Script" }}
          initial={{ opacity: 0, translateY: "10vw" }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          Skill Set
        </motion.h1>
      </div>
      <div className="flex w-[75vw] justify-center flex-wrap border-b border-b-black/60 bg-white lg:z-10">
        {SKILLS_ICONS.map((skill, i) => (
          <motion.div
            key={i}
            className="w-20 h-20 bg-black rounded-full flex justify-center items-center mx-8 my-3"
            initial={{ opacity: 0, translateX: "-100px" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{ delay: skill.delay, duration: 0.5 }}
            title={skill.title}
          >
            <Image src={skill.image} alt={""} className="w-10 h-10" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
