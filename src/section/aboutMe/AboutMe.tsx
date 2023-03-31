"use client";
import { useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import "@fontsource/sirin-stencil";
const AboutMe = () => {
  // useEffect(() => {
  //   const textureLoader = new THREE.TextureLoader();

  //   const cubeTexture = textureLoader.load("/abuhurairah.png");
  //   const scene = new THREE.Scene();
  //   scene.background = new THREE.Color(0x11071f);
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );
  //   const canvas = document.getElementById("aboutme") as HTMLCanvasElement;
  //   if (canvas) {
  //     const renderer = new THREE.WebGLRenderer({ canvas });
  //     renderer.setPixelRatio(window.devicePixelRatio);
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //     camera.position.set(0, 1, -9);
  //     renderer.render(scene, camera);

  //     const ambientLight = new THREE.AmbientLight(0xffffff);
  //     scene.add(ambientLight);

  //     const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
  //     const cubeMaterial = new THREE.MeshStandardMaterial({ map: cubeTexture });
  //     const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  //     scene.add(cube);

  //     const constSpeed = 0.008;
  //     window.addEventListener("mousemove", (e) => {
  //       // For Left quadrant
  //       if (e.clientX <= window.innerWidth / 2) {
  //         cube.rotation.x -= constSpeed;
  //         cube.rotation.y += constSpeed;
  //       }
  //       // For Right quadrant
  //       if (e.clientX > window.innerWidth / 2) {
  //         cube.rotation.x -= constSpeed;
  //         cube.rotation.y -= constSpeed;
  //       }
  //       // For Bottom
  //       if (e.clientY > window.innerHeight / 2) {
  //         cube.rotation.x -= constSpeed;
  //         cube.rotation.y += constSpeed;
  //       }
  //       // For Top
  //       if (e.clientY <= window.innerHeight / 2) {
  //         cube.rotation.x -= constSpeed;
  //         cube.rotation.y -= constSpeed;
  //       }
  //     });

  //     const animate = () => {
  //       requestAnimationFrame(animate);
  //       cube.rotation.y += 0.001;
  //       cube.rotation.x += 0.002;
  //       cube.rotation.z += 0.005;
  //       renderer.setSize(window.innerWidth, window.innerHeight);
  //       renderer.render(scene, camera);
  //     };
  //     animate();
  //     return window.addEventListener("scroll", () => {
  //       camera.rotation.z = window.scrollY * -0.0001;
  //       camera.rotation.y = window.scrollY * -0.003;
  //     });
  //   }
  // }, []);

  return (
    <div
      className="min-h-screen max-w-screen relative overflow-x-hidden "
      id={"about-me"}
      scroll-data-section
    >
      <div className="absolute top-0 left-0 backdrop-blur-[1px] h-screen w-screen z-10 flex justify-evenly items-center bg-black">
        <div className="w-screen  p-10">
          <div className="h-fit flex">
            <h1
              className="text-[10vw] text-white"
              data-scroll
              data-scroll-speed="5"
              data-scroll-direction="horizontal"
              data-scroll-delay="0.13"
              style={{ fontFamily: "Sirin Stencil" }}
            >
              A
            </h1>
            <h1
              className="text-[10vw] text-white"
              data-scroll
              data-scroll-speed="5"
              data-scroll-direction="horizontal"
              data-scroll-delay="0.09"
              style={{ fontFamily: "Sirin Stencil" }}
            >
              B
            </h1>
            <h1
              className="text-[10vw] text-white"
              data-scroll
              data-scroll-speed="5"
              data-scroll-direction="horizontal"
              data-scroll-delay="0.11"
              style={{ fontFamily: "Sirin Stencil" }}
            >
              O
            </h1>
            <h1
              className="text-[10vw] text-white"
              data-scroll
              data-scroll-speed="5"
              data-scroll-direction="horizontal"
              data-scroll-delay="0.06"
              style={{ fontFamily: "Sirin Stencil" }}
            >
              U
            </h1>
            <h1
              className="text-[10vw] text-white"
              data-scroll
              data-scroll-speed="5"
              data-scroll-direction="horizontal"
              data-scroll-delay="0.03"
              style={{ fontFamily: "Sirin Stencil" }}
            >
              T
            </h1>
            <h1
              className="text-[10vw] text-white"
              data-scroll
              data-scroll-speed="5"
              data-scroll-direction="horizontal"
              data-scroll-delay="0.07"
              style={{ fontFamily: "Sirin Stencil" }}
            >
              &nbsp;
            </h1>
            <h1
              className="text-[10vw] text-white"
              data-scroll
              data-scroll-speed="5"
              data-scroll-direction="horizontal"
              data-scroll-delay="0.02"
              style={{ fontFamily: "Sirin Stencil" }}
            >
              M
            </h1>
            <h1
              className="text-[10vw] text-white"
              data-scroll
              data-scroll-speed="5"
              data-scroll-direction="horizontal"
              data-scroll-delay="0.01"
              style={{ fontFamily: "Sirin Stencil" }}
            >
              E
            </h1>
          </div>
          <motion.p
            className="text-white mt-8 text-lg text-center"
            initial={{ opacity: 0, translateY: "-50vw" }}
            animate={{ opacity: 1, translateY: 0 }}
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="10"
          >
            A certified MERN stack and React Native developer with experience
            building web and mobile applications.{" "}
            <span className="font-semibold">
              &quot;Always eager to learn new things. <br /> Always ready to
              face new challenges and develop new planet scale website, web
              application and mobile applications.&quot;
            </span>
          </motion.p>
          <motion.p
            className="mt-5 text-white text-xl text-center"
            initial={{ opacity: 0, translateY: "-50vw" }}
            animate={{ opacity: 1, translateY: 0 }}
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="10"
          >
            If you have a project or idea you'd like to discuss, feel free to
            get in touch with me. I'm always open to new opportunities and
            collaborations.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
