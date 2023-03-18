import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

const ContactMe = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center py-5">
      <div className="w-[75vw] min-h-[75vh] bg-contactMeDialog/30 rounded-[2.5rem] shadow-2xl flex flex-col lg:flex-row">
        <div className="h-full w-full lg:w-1/2 p-5 flex flex-col items-center ">
          <h1 className="text-4xl font-bold text-white mt-12 mb-14">
            Get In Touch
          </h1>
          <p className="text-white text-lg w-[60%] text-center mb-24">
            I am very approachable and would love to speak to you. Feel free to
            call, send me an email . Follow me in social media or simply
            complete the enquiry form.
          </p>
          <div>
            <div className="flex items-center flex-col lg:flex-row">
              <div className="bg-violet-400 p-3 rounded-full">
                <BsFillTelephoneFill size={30} color="white" />
              </div>
              <a
                href="tel:+923207443537"
                className="text-white text-xl ml-5 font-semibold"
              >
                +92 320 7443537
              </a>
            </div>
            <div className="flex items-center mt-5 flex-col lg:flex-row">
              <div className="bg-violet-400 p-3 rounded-full">
                <HiMail size={30} color="white" />
              </div>
              <a
                href="mailto:dev.abuhurairah@gmail.com"
                className=" text-white text-xl ml-5 font-semibold"
              >
                dev.abuhurairah@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full p-5 flex flex-col items-center">
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
              className="bg-gradient-to-br from-purple-500 to-blue-800 text-xl text-white py-3 px-8 rounded-xl tracking-wider font-semi-bold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
