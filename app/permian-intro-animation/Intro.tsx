"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Intro = () => {
  useGSAP(() => {
    gsap
      .timeline()
      .from(".intro-text", { autoAlpha: 0, y: 30, stagger: 0.5 })
      .to(".intro-box", { opacity: 1 })
      .to(".intro-box", { width: "300px", height: "300px" })
      .to(".intro-box", { width: "600px", height: "600px" }, "+=0.5")
      .to(".intro-box", { width: "70%", height: "100%" })
      .to(".intro-box", { width: "100%", height: "100%" })
      .to(
        ".hero-container",
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
        "<",
      )
      .from(".shoe-container", { y: 60 }, "<");
  });

  return (
    <div className="absolute top-0 left-0 -z-10 flex h-screen w-full items-center overflow-hidden bg-black text-white">
      <div className="flex items-center gap-24 px-6 text-sm uppercase">
        <div className="intro-text invisible">
          <p>Permian.</p>
          <p>Join us to co-create</p>
          <p>The sneaker brand of the future.</p>
        </div>
        <div className="intro-text invisible">
          <p>United kingdom: London</p>
          <p>51* 30&lsquo; 35.5140&lsquo;&lsquo; N / 0* 7&lsquo; </p>
          <p>&gt; Worldwide</p>
        </div>
      </div>
      <div className="intro-box absolute top-1/2 left-1/2 h-[50px] w-[50px] -translate-1/2 bg-blue-700 opacity-0"></div>
    </div>
  );
};

export default Intro;
