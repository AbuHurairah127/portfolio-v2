import { motion } from "framer-motion";
import { kaushan, sirin } from "../hero/Hero";

const AboutMe = () => {
  return (
    <div
      className="min-h-screen max-h-fit max-w-screen z-50 relative"
      id={"about-me"}
      // data-scroll-section
    >
      <div className="lg:absolute lg:top-0 lg:left-0 backdrop-blur-[1px] min-h-screen w-screen z-10 flex justify-evenly bg-black overflow-hidden py-5 sm:z-50">
        <div className="w-screen" id="up">
          {/* For LG screen */}
          <h1
            className={
              // kaushan.className +
              "text-[10vw] absolute top-5 left-[25%] text-white uppercase font-thin tracking-wider p-0 m-0 hidden lg:block"
            }
            style={{ fontFamily: kaushan.style.fontFamily }}
            data-scroll
            data-scroll-speed="-4"
            data-scroll-direction="vertical"
            data-scroll-target="#up"
          >
            About Me
          </h1>
          {/* For smaller screens */}
          <motion.h1
            className="text-[10vw] absolute top-5 left-[25%] text-white uppercase font-thin tracking-wider p-0 m-0 block lg:hidden"
            style={{ fontFamily: kaushan.style.fontFamily }}
          >
            About Me
          </motion.h1>
          <div className="w-screen flex h-full items-center flex-col justify-center overflow-auto px-20 font-thin my-8">
            <motion.p
              className="text-white mt-8 text-2xl text-center"
              initial={{ opacity: 0, translateY: "10vw" }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.75 }}
              style={{ fontFamily: sirin.style.fontFamily }}
              // data-scroll
              // data-scroll-direction="horizontal"
              // data-scroll-speed="10"
            >
              &quot;I&apos;m a certified MERN stack and React Native developer
              with experience building web and mobile applications.&quot;
            </motion.p>
            <motion.p
              className="mt-5 text-white text-xl text-center"
              initial={{ opacity: 0, translateY: "10vw" }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.75 }}
              style={{ fontFamily: sirin.style.fontFamily }}
              // data-scroll
              // data-scroll-direction="horizontal"
              // data-scroll-speed="10"
            >
              As a certified developer, I have acquired the necessary knowledge
              and skills to design and develop high-quality software
              applications. I have a deep understanding of various programming
              languages, frameworks, and tools, which enables me to create
              complex applications that meet the needs of modern users. My
              expertise extends to developing both web and mobile applications
              using a range of technologies such as the MERN stack and React
              Native. I am skilled in creating intuitive and user-friendly
              interfaces, managing server-side data, building RESTful APIs, and
              implementing real-time communication features.
            </motion.p>
            <motion.p
              className="mt-5 text-white text-xl text-center"
              initial={{ opacity: 0, translateY: "10vw" }}
              whileInView={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.75 }}
              style={{ fontFamily: sirin.style.fontFamily }}
              // data-scroll
              // data-scroll-direction="horizontal"
              // data-scroll-speed="10"
            >
              I have a passion for writing clean, efficient, and maintainable
              code, and I am constantly staying up-to-date with the latest
              industry trends and technologies. I take pride in delivering
              high-quality work and am committed to providing a positive and
              collaborative development experience.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
