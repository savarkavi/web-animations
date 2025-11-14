"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Overlay = () => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlayToggleTl = useRef<gsap.core.Timeline>(null);

  const items = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Work" },
    { id: 4, title: "Studio" },
    { id: 5, title: "Contact" },
  ];

  const { contextSafe } = useGSAP(() => {
    overlayToggleTl.current = gsap
      .timeline({ paused: true })
      .to(overlayRef.current, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "expo.in",
        duration: 1,
      })
      .to(".text-top", { y: 0, stagger: 0.1 })
      .to(".text-bottom", { top: "100%", stagger: 0.1 }, "<");
  });

  const handleOpenOverlay = () => {
    overlayToggleTl.current?.play();
  };

  const handleCloseOverlay = () => {
    overlayToggleTl.current?.reverse();
  };

  const handleItemHover = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    const textTop = e.currentTarget.querySelector(".text-top");
    const textBottom = e.currentTarget.querySelector(".text-bottom");

    gsap
      .timeline()
      .to(textTop, { y: -120, duration: 0.3 })
      .to(textBottom, { top: 0, duration: 0.3 }, "<");
  });

  const handleItemLeave = contextSafe((e: React.MouseEvent<HTMLDivElement>) => {
    const textTop = e.currentTarget.querySelector(".text-top");
    const textBottom = e.currentTarget.querySelector(".text-bottom");

    gsap
      .timeline()
      .to(textTop, { y: 0, duration: 0.3 })
      .to(textBottom, { top: "100%", duration: 0.3 }, "<");
  });

  return (
    <>
      <button
        onClick={handleOpenOverlay}
        className="absolute top-6 right-6 cursor-pointer text-2xl text-white uppercase"
      >
        Menu
      </button>
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 flex h-screen w-full items-center justify-center bg-[#c5fb45]"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
      >
        <button
          onClick={handleCloseOverlay}
          className="absolute top-6 right-6 cursor-pointer text-2xl uppercase"
        >
          Close
        </button>
        <div className="flex flex-col items-center justify-center gap-6 p-12">
          {items.map((item) => (
            <div
              key={item.id}
              className="menu-item relative w-fit cursor-pointer overflow-hidden"
              onMouseEnter={handleItemHover}
              onMouseLeave={handleItemLeave}
            >
              <p
                className="text-top translate-y-[120px] text-9xl uppercase"
                style={{ willChange: "transform" }}
              >
                {item.title}
              </p>
              <p className="text-bottom absolute top-[200%] w-fit cursor-pointer text-9xl uppercase">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Overlay;
