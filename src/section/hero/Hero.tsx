"use client";
import { useEffect } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
const Hero = () => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();

    const moonTexture = textureLoader.load("/moon.jpg");
    const venusTexture = textureLoader.load("/venus.jpg");
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
      camera.position.set(3, 3, 8);

      renderer.render(scene, camera);
      const pointLight = new THREE.PointLight(0xffffff, 1);
      const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
      pointLight.position.set(8, 5, 5);
      pointLight2.position.set(-8, -5, -5);
      scene.add(pointLight, pointLight2);
      const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
      const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
      const moon = new THREE.Mesh(moonGeometry, moonMaterial);
      scene.add(moon);
      const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
      const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
      const venus = new THREE.Mesh(venusGeometry, venusMaterial);
      venus.position.set(8, 5, 5);
      scene.add(venus);
      const constSpeed = 0.01;
      window.addEventListener("mousemove", (e) => {
        // For Left quadrant
        if (e.clientX <= window.innerWidth / 2) {
          moon.rotation.x -= constSpeed;
          moon.rotation.y += constSpeed;
          venus.rotation.x -= constSpeed;
          venus.rotation.y += constSpeed;
        }
        // For Right quadrant
        if (e.clientX > window.innerWidth / 2) {
          moon.rotation.x -= constSpeed;
          moon.rotation.y -= constSpeed;
          venus.rotation.x -= constSpeed;
          venus.rotation.y -= constSpeed;
        }
        // For Bottom
        if (e.clientY > window.innerHeight / 2) {
          moon.rotation.x -= constSpeed;
          moon.rotation.y += constSpeed;
          venus.rotation.x -= constSpeed;
          venus.rotation.y += constSpeed;
        }
        // For Top
        if (e.clientY <= window.innerHeight / 2) {
          moon.rotation.x -= constSpeed;
          moon.rotation.y -= constSpeed;
          venus.rotation.x -= constSpeed;
          venus.rotation.y -= constSpeed;
        }
      });

      const animate = () => {
        requestAnimationFrame(animate);
        moon.rotation.y += 0.001;
        venus.rotation.y += 0.001;
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.render(scene, camera);
      };
      animate();
      return window.addEventListener("scroll", () => {
        camera.rotation.z = window.scrollY * 0.001;
        camera.rotation.y = window.scrollY * 0.001;
      });
    }
  }, []);

  return (
    <div className="min-h-screen w-screen overflow-x-hidden">
      <canvas id="hero" className="hidden lg:block"></canvas>
      <div
        className="bg-cover bg-center h-screen block lg:hidden"
        style={{ backgroundImage: `url(${"/space.jpg"})` }}
      ></div>
      <div className="absolute top-0 left-0 backdrop-blur-sm h-screen w-screen z-10 flex justify-between items-center">
        <div className="bg-white h-fit p-4">
          <p className="hero-name">A</p>
          <p className="hero-name">B</p>
          <p className="hero-name">U</p>
          <p className="hero-name"></p>
          <p className="hero-name">H</p>
          <p className="hero-name">U</p>
          <p className="hero-name">R</p>
          <p className="hero-name">A</p>
          <p className="hero-name">I</p>
          <p className="hero-name">R</p>
          <p className="hero-name">A</p>
          <p className="hero-name">H</p>
        </div>
        <div className="flex flex-col overflow-x-hidden">
          <span className="hero-skill">Developer</span>
          <span className="hero-skill">Designer</span>
          <span className="hero-skill">Teacher</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
