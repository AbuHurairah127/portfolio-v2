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
          <h1 className="text-[4vw] font-bold mt-12 mb-14">Get In Touch</h1>
          <p className="text-xl w-[60%] text-center mb-12 font-thin tracking-widest">
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
              >
                dev.abuhurairah@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2 h-full p-5 flex flex-col items-center bg-black"
          initial={{ opacity: 0, translateX: "25vw" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-4xl font-bold text-white mt-12 mb-10">
            Send me a message
          </h1>
          <form className="w-[75%]">
            <input
              type="text"
              placeholder="Name e.g: Abu Hurairah"
              className="contact-me-input"
            />
            <input
              type="text"
              placeholder="Email e.g abc@xyz.com"
              className="contact-me-input"
            />
            <input
              type="text"
              placeholder="Subject e.g : Discuss an LMS"
              className="contact-me-input"
            />
            <textarea
              name=""
              id=""
              className="resize-none contact-me-input"
              rows={5}
              placeholder="e.g: Hey Abu Hurairah, I want an LMS for my academic institute. Basically, I run a tuition center named Al-Bassam Academy where I teach students from class..."
            ></textarea>
            <button
              type="submit"
              className="bg-white text-2xl text-[#000814] py-2 px-8 rounded-xl tracking-wider font-thin"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactMe;
