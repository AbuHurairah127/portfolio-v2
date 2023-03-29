"use client";
import Image from "next/image";
import React from "react";
import skillset from "@/assets/skillset.png";
import { motion } from "framer-motion";
const Skills = () => {
  return (
    <div
      className="flex justify-center items-center flex-col py-8"
      id={"skills"}
    >
      <motion.h1
        className="text-yellow-500 text-6xl font-bold"
        initial={{ opacity: 0, scale: 2 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        Skill Set
      </motion.h1>
      <p className="text-white text-xl text-center w-[50vw] py-5 my-5 border-y border-white">
        Currently, I'm expanding my skillset by learning Next.js, TypeScript,
        blockchain, and metaverse technologies to stay on top of the latest
        trends in the industry.
      </p>
      <Image src={skillset} alt={"skill set"}></Image>
    </div>
  );
};

export default Skills;
