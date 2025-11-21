import React from "react";
import Intro from "./Intro";
import { supplyMono } from "@/fonts/fonts";
import Image from "next/image";

const Page = () => {
  return (
    <div className={`${supplyMono.className}`}>
      <Intro />
      <div
        className="hero-container z-10 h-screen w-full overflow-hidden bg-white"
        style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" }}
      >
        <div className="shoe-container relative h-full w-full">
          <Image
            src="https://w61pzgbhdn.ufs.sh/f/sgyYFvRJUSNKaRFhfqecgN2CDOfxSXkBUYrjJ8Tiahpo3z0P"
            alt="shoe"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
