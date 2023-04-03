import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineFacebook,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsStackOverflow, BsWhatsapp } from "react-icons/bs";
import Year from "./Year";
import { kaushan, sirin } from "../hero/Hero";
const Footer = () => {
  return (
    <div className="min-h-screen w-screen p-20 relative flex flex-col items-center">
      <div className="w-screen flex justify-center">
        <h1
          className="text-[10vw] text-center uppercase font-thin tracking-wider handWriting p-0 m-0 absolute top-[25%]"
          data-scroll
          data-scroll-speed="4"
          data-scroll-direction="vertical"
          style={{ fontFamily: kaushan.style.fontFamily }}
        >
          Abu Hurairah
        </h1>
      </div>
      <motion.div
        className="flex w-[75vw]  h-24 border-y border-black justify-center"
        initial={{ opacity: 0, translateY: "-25vh" }}
        whileInView={{ opacity: 1, translateY: "40vh" }}
      >
        <ul className="flex w-full h-full justify-between items-center">
          <li>
            <a href="https://github.com/AbuHurairah127" target={"_blank"}>
              <AiOutlineGithub size={35} />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/abu.h.3701/" target={"_blank"}>
              <AiOutlineFacebook size={35} />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/abuhurairah_127/"
              target={"_blank"}
            >
              <AiOutlineInstagram size={35} />
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/20799955/abu-hurairah"
              target="_blank"
            >
              <BsStackOverflow size={35} />
            </a>
          </li>
          <li>
            <a href=" https://wa.me/923207443537" target="_blank">
              <BsWhatsapp size={35} />
            </a>
          </li>
        </ul>
      </motion.div>
      <div
        className="flex justify-between absolute bottom-[10%] text-3xl"
        data-scroll
        data-scroll-speed="-5"
        style={{ fontFamily: sirin.style.fontFamily }}
      >
        <p>
          &copy; Abu Hurairah&nbsp;
          <Year />. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
