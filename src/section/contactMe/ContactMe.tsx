import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
const ContactMe = () => {
  return (
    <div
      className="min-h-screen w-screen flex items-center justify-center py-5 bg-[#000814]"
      id={"contactMe"}
    >
      <div className="w-[75vw] min-h-[75vh] rounded-[2.5rem] flex flex-col lg:flex-row overflow-hidden border border-white">
        <motion.div
          className="min-h-[75vh] w-full lg:w-1/2 flex flex-col items-center bg-white overflow-hidden"
          initial={{ opacity: 0, translateX: "-25vw" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1
            className="text-[4vw] font-bold mt-12 mb-14"
            style={{ fontFamily: "kaushan script" }}
          >
            Get In Touch
          </h1>
          <p
            className="text-xl w-[60%] text-center mb-12 font-thin tracking-widest"
            style={{ fontFamily: "sirin stencil" }}
          >
            I am very approachable and would love to speak to you. Feel free to
            call, send me an email . Follow me in social media or simply
            complete the enquiry form.
          </p>
          <div>
            <div className="flex items-center flex-col lg:flex-row">
              <div className="bg-black p-3 rounded-full">
                <BsFillTelephoneFill size={30} color="white" />
              </div>
              <a
                href="tel:+923207443537"
                className="text-xl ml-5 font-semibold"
                style={{ fontFamily: "Sirin Stencil" }}
              >
                +92 320 7443537
              </a>
            </div>
            <div className="flex items-center mt-5 flex-col lg:flex-row">
              <div className="bg-black p-3 rounded-full">
                <HiMail size={30} color="white" />
              </div>
              <a
                href="mailto:dev.abuhurairah@gmail.com"
                className=" text-xl ml-5 font-semibold"
                style={{ fontFamily: "Sirin Stencil" }}
              >
                dev.abuhurairah@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 min-h-[75vh] p-5 flex flex-col items-center bg-black justify-evenly"
          initial={{ opacity: 0, translateX: "25vw" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1
            className="text-4xl font-bold text-white mt-12 mb-10"
            style={{ fontFamily: "kaushan script" }}
          >
            Send me a message
          </h1>
          <a
            href="https://wa.me/923207443537"
            className="text-white border-white border py-5 px-10 self-center text-3xl font-thin rounded"
            target="_blank"
            style={{ fontFamily: "sirin stencil" }}
          >
            Say Hello👋
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMe;
