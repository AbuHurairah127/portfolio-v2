import React from "react";
import { motion, spring } from "framer-motion";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="lg:w-[30vw] lg:min-h-screen bg-black px-8">
        <h2
          className="text-white text-center font-thin lg:text-[5vw] mt-8 text-[9vw]"
          style={{ fontFamily: "kaushan script" }}
          data-scroll
          data-scroll-speed="1"
        >
          My Projects
        </h2>
        <div className="h-full flex justify-center flex-col pb-28">
          <motion.p
            className="font-thin text-lg text-white "
            initial={{ opacity: 0, translateY: "10vw" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.75 }}
          >
            In this section, you can find some of the projects that I have
            developed as a software developer. These projects showcase my skills
            and expertise in designing and developing applications using a range
            of technologies. Each project has been carefully crafted to meet the
            unique needs of the end-users, and I have strived to deliver
            high-quality work that is both functional and visually appealing.
          </motion.p>
          <motion.span
            className="text-red-600 font-medium text-4xl"
            initial={{ opacity: 0, translateX: "-20vw" }}
            whileInView={{ opacity: 1, translateX: 0 }}
            transition={{
              //   duration: 0.3,
              type: "spring",
              stiffness: 1000,
              damping: 200,
            }}
            style={{
              fontFamily: "Sirin Stencil",
            }}
          >
            Note:&nbsp;
          </motion.span>
          <motion.p
            className="font-thin text-lg text-white"
            initial={{ opacity: 0, translateY: "10vw" }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            As, I am unable to showcase all of my projects due to client privacy
            policies, I can assure you that my portfolio represents a
            comprehensive overview of my skills and expertise as a developer.
            <br />
            <br />
            As well as some of these are not my designs but the code is mine.
          </motion.p>
        </div>
      </div>
      <div className="min-h-screen lg:w-[70vw] flex justify-center items-center">
        {/* lorem */}
        <h1 className="text-[7vw] font-thin text-center">
          Projects are under development.
        </h1>
      </div>
    </div>
  );
};

export default Projects;
