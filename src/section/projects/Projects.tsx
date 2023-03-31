import React from "react";

const Projects = () => {
  return (
    <div className="min-h-screen flex">
      <div className="w-[30vw] min-h-screen bg-black px-8">
        <h2
          className="text-white text-center font-thin text-[5vw] mt-3"
          style={{ fontFamily: "Sirin Stencil" }}
        >
          My Projects
        </h2>
        <div className="h-full flex justify-center flex-col pb-28">
          <p className="font-thin text-lg text-white ">
            In this section, you can find some of the projects that I have
            developed as a software developer. These projects showcase my skills
            and expertise in designing and developing applications using a range
            of technologies. Each project has been carefully crafted to meet the
            unique needs of the end-users, and I have strived to deliver
            high-quality work that is both functional and visually appealing.
          </p>
          <p className="font-thin text-lg text-white">
            <span className="text-red-600 font-medium text-2xl">
              Note:&nbsp;
            </span>
            I am unable to showcase all of my projects due to client privacy
            policies, I can assure you that my portfolio represents a
            comprehensive overview of my skills and expertise as a developer.
            <br />
            <br />
            As well as some of these are not my designs but the code is mine.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Projects;
