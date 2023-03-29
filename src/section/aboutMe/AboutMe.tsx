"use client";
import { useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
const Hero = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const cubeTexture = textureLoader.load("/abuhurairah.png");
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x11071f);
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const canvas = document.getElementById("aboutme") as HTMLCanvasElement;
    if (canvas) {
      const renderer = new THREE.WebGLRenderer({ canvas });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.position.set(0, 1, -9);
      renderer.render(scene, camera);

      const ambientLight = new THREE.AmbientLight(0xffffff);
      scene.add(ambientLight);

      const cubeGeometry = new THREE.BoxGeometry(3, 3, 3);
      const cubeMaterial = new THREE.MeshStandardMaterial({ map: cubeTexture });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      scene.add(cube);

      const constSpeed = 0.008;
      window.addEventListener("mousemove", (e) => {
        // For Left quadrant
        if (e.clientX <= window.innerWidth / 2) {
          cube.rotation.x -= constSpeed;
          cube.rotation.y += constSpeed;
        }
        // For Right quadrant
        if (e.clientX > window.innerWidth / 2) {
          cube.rotation.x -= constSpeed;
          cube.rotation.y -= constSpeed;
        }
        // For Bottom
        if (e.clientY > window.innerHeight / 2) {
          cube.rotation.x -= constSpeed;
          cube.rotation.y += constSpeed;
        }
        // For Top
        if (e.clientY <= window.innerHeight / 2) {
          cube.rotation.x -= constSpeed;
          cube.rotation.y -= constSpeed;
        }
      });

      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.y += 0.001;
        cube.rotation.x += 0.002;
        cube.rotation.z += 0.005;
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
      };
      animate();
      return window.addEventListener("scroll", () => {
        camera.rotation.z = window.scrollY * -0.0001;
        camera.rotation.y = window.scrollY * -0.003;
      });
    }
  }, []);

  return (
    <div
      className="min-h-screen max-w-screen relative overflow-x-hidden "
      id={"about-me"}
    >
      <canvas id="aboutme" className="hidden lg:block"></canvas>
      <div
        className="bg-cover bg-center h-screen block lg:hidden"
        style={{ backgroundImage: `url(${"/space.jpg"})` }}
      ></div>
      <div className="absolute top-0 left-0 backdrop-blur-[1px] h-screen w-screen z-10 flex justify-evenly items-center">
        <div className="w-screen lg:w-[50vw] p-10">
          <div className="h-fit flex">
            <motion.h1
              className="about-me-heading"
              initial={{ color: "white" }}
              whileInView={{
                color: "#EAB308",
                translateY: [-5, 0],
                scale: [3.5, 1],
              }}
              transition={{ duration: 0.3, delay: 0.0 }}
            >
              A
            </motion.h1>
            <motion.h1
              className="about-me-heading"
              initial={{ color: "white" }}
              whileInView={{
                color: "#EAB308",
                translateY: [-5, 0],
                scale: [3.5, 1],
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              B
            </motion.h1>
            <motion.h1
              className="about-me-heading"
              initial={{ color: "white" }}
              whileInView={{
                color: "#EAB308",
                translateY: [-5, 0],
                scale: [3.5, 1],
              }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              O
            </motion.h1>
            <motion.h1
              className="about-me-heading"
              initial={{ color: "white" }}
              whileInView={{
                color: "#EAB308",
                translateY: [-5, 0],
                scale: [3.5, 1],
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              U
            </motion.h1>
            <motion.h1
              className="about-me-heading"
              initial={{ color: "white" }}
              whileInView={{
                color: "#EAB308",
                translateY: [-5, 0],
                scale: [3.5, 1],
              }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              T
            </motion.h1>
            <motion.h1
              className="about-me-heading"
              initial={{ color: "white" }}
              whileInView={{
                color: "#EAB308",
                translateY: [-5, 0],
                scale: [3.5, 1],
              }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              &nbsp;
            </motion.h1>
            <motion.h1
              className="about-me-heading"
              initial={{ color: "white" }}
              whileInView={{
                color: "#EAB308",
                translateY: [-5, 0],
                scale: [3.5, 1],
              }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              M
            </motion.h1>
            <motion.h1
              className="about-me-heading"
              initial={{ color: "white" }}
              whileInView={{
                color: "#EAB308",
                translateY: [-5, 0],
                scale: [3.5, 1],
              }}
              transition={{ duration: 0.3, delay: 0.7 }}
            >
              E
            </motion.h1>
          </div>
          <p className="text-white mt-8 text-lg">
            A certified MERN stack and React Native developer with experience
            building web and mobile applications.{" "}
            <span className="font-semibold">
              &quot;Always eager to learn new things. <br /> Always ready to
              face new challenges and develop new planet scale website, web
              application and mobile applications.&quot;
            </span>
          </p>
          <p className="mt-5 text-white text-xl ">
            If you have a project or idea you'd like to discuss, feel free to
            get in touch with me. I'm always open to new opportunities and
            collaborations.
          </p>
        </div>
        <div className="w-[50vw] hidden lg:block"></div>
      </div>
    </div>
  );
};

export default Hero;
