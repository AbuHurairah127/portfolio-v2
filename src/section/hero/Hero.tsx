"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion, useScroll } from "framer-motion";
import "@fontsource/sirin-stencil";
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load("/moon.jpg");
    const venusTexture = textureLoader.load("/Earth.png");
    const spaceTexture = textureLoader.load("/space.jpg");
    const scene = new THREE.Scene();
    scene.background = spaceTexture;
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const canvas = document.getElementById("hero") as HTMLCanvasElement;
    if (canvas) {
      const renderer = new THREE.WebGLRenderer({ canvas });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.position.set(1, 2, 10);

      renderer.render(scene, camera);
      const pointLight = new THREE.PointLight(0xffffff, 1);
      const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
      pointLight.position.set(-7, -4, -4);
      pointLight2.position.set(-8, -5, -5);
      scene.add(pointLight, pointLight2);
      const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
      const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
      const moon = new THREE.Mesh(moonGeometry, moonMaterial);
      moon.position.set(7, 5, -4);
      scene.add(moon);
      const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
      const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
      const venus = new THREE.Mesh(venusGeometry, venusMaterial);
      // venus.position.set(8, 5, 5);
      scene.add(venus);
      const CONSTSPEED = 0.01;
      window.addEventListener("mousemove", (e) => {
        // For Left quadrant
        if (e.clientX <= window.innerWidth / 2) {
          moon.rotation.x -= CONSTSPEED;
          moon.rotation.y += CONSTSPEED;
          venus.rotation.x -= CONSTSPEED;
          venus.rotation.y += CONSTSPEED;
        }
        // For Right quadrant
        if (e.clientX > window.innerWidth / 2) {
          moon.rotation.x -= CONSTSPEED;
          moon.rotation.y -= CONSTSPEED;
          venus.rotation.x -= CONSTSPEED;
          venus.rotation.y -= CONSTSPEED;
        }
        // For Bottom
        if (e.clientY > window.innerHeight / 2) {
          moon.rotation.x -= CONSTSPEED;
          moon.rotation.y += CONSTSPEED;
          venus.rotation.x -= CONSTSPEED;
          venus.rotation.y += CONSTSPEED;
        }
        // For Top
        if (e.clientY <= window.innerHeight / 2) {
          moon.rotation.x -= CONSTSPEED;
          moon.rotation.y -= CONSTSPEED;
          venus.rotation.x -= CONSTSPEED;
          venus.rotation.y -= CONSTSPEED;
        }
      });

      const animate = () => {
        requestAnimationFrame(animate);
        moon.rotation.y += 0.005;
        venus.rotation.y += 0.004;
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
      };
      animate();
    }
  }, []);

  return (
    <div className="min-h-screen w-screen overflow-x-hidden" id="main">
      <canvas id="hero" className="hidden lg:block"></canvas>
      <div
        className="bg-cover bg-center h-screen block lg:hidden"
        style={{ backgroundImage: `url(${"/space.jpg"})` }}
      ></div>
      <div className="absolute top-0 left-0  h-screen w-screen z-10 flex justify-between items-center ">
        <motion.div
          className="h-screen flex items-center justify-center bg-black/60 absolute top-0 w-screen flex-col"
          // data-scroll-section
        >
          <motion.h1
            className=" text-[15vw] lg:text-[10vw] text-white text-center uppercase font-thin tracking-wider handWriting p-0 m-0"
            initial={{ opacity: 0, translate: "-50vw" }}
            animate={{ opacity: 1, translate: 0 }}
            transition={{
              delay: 1.5,
              type: "spring",
              stiffness: 1000,
              damping: 20,
            }}
            data-scroll
            data-scroll-speed="-12"
            data-scroll-direction="vertical"
            style={{ fontFamily: "Sirin Stencil" }}
          >
            Abu Hurairah
          </motion.h1>
          <motion.p
            className=" text-[5vw] lg:text-[2vw] text-white text-center uppercase font-thin tracking-widest handWriting"
            initial={{ opacity: 0, translate: "-50vw" }}
            animate={{ opacity: 1, translate: 0 }}
            transition={{
              delay: 1.5,
              type: "spring",
              stiffness: 1000,
              damping: 20,
            }}
            data-scroll
            data-scroll-speed="9"
            style={{ fontFamily: "Sirin Stencil" }}
          >
            Hi All I am a developer, designer and teacher
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
