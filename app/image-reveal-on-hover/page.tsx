"use client";

import Image from "next/image";
import Header from "./Header";
import { bodoniModa } from "@/fonts/fonts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Page = () => {
  const data = [
    {
      name: "Astraline,",
      url: "https://w61pzgbhdn.ufs.sh/f/sgyYFvRJUSNKSb932FfSVUxivcrb21Bfl5OAwTs9deCNmh7E",
    },
    {
      name: "Lucid Rift,",
      url: "https://w61pzgbhdn.ufs.sh/f/sgyYFvRJUSNK5wisUGBJGPpjLu9Uc7zT8gAWX6lfNi0Ohst5",
    },
    {
      name: "Solara,",
      url: "https://w61pzgbhdn.ufs.sh/f/sgyYFvRJUSNKDSsDbkNdSQw4rR7vby5msf8eHCBZcln3XVzu",
    },
    {
      name: "Eclipsed,",
      url: "https://w61pzgbhdn.ufs.sh/f/sgyYFvRJUSNKQfC93fR6SFOAivwJVPCK5D4Nqxn1BzXeQGY3",
    },
    {
      name: "Nebulae,",
      url: "https://w61pzgbhdn.ufs.sh/f/sgyYFvRJUSNKxmWaajhDqtdCILnXlJVj8RYM6TPck5Kbrg3B",
    },
    {
      name: "Hollowlight,",
      url: "https://w61pzgbhdn.ufs.sh/f/sgyYFvRJUSNK7T6Cu6o8uio5dmtsYk7KRrxNFgjJzUnLQlDf",
    },
    {
      name: "Echofall",
      url: "https://w61pzgbhdn.ufs.sh/f/sgyYFvRJUSNKDQL0lcNdSQw4rR7vby5msf8eHCBZcln3XVzu",
    },
  ];

  const { contextSafe } = useGSAP(() => {});

  const handleItemHover = contextSafe((i: number) => {
    gsap
      .timeline()
      .set(`.image-container-${i}`, {
        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",
      })
      .set(`.image-${i}`, {
        scale: 1.1,
      })
      .to(`.image-container-${i}`, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        opacity: 1,
      })
      .to(`.image-${i}`, { scale: 1 }, "<")
      .to(`.underline-${i}`, { width: 0 }, "<");
  });

  const handleItemLeave = contextSafe((i: number) => {
    gsap
      .timeline()
      .to(`.image-container-${i}`, {
        opacity: 0,
      })
      .to(`.underline-${i}`, { width: "100%" }, "<");
  });

  return (
    <div
      className={`${bodoniModa.className} relative flex h-screen flex-col justify-between p-4`}
    >
      <div className="absolute top-1/2 left-1/2 h-[700px] w-[1000px] -translate-1/2 rounded-lg">
        {data.map((item, i) => (
          <div
            key={item.name}
            className={`image-container-${i} absolute top-0 left-0 h-[700px] w-[1000px] rounded-lg`}
            style={{ clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)" }}
          >
            <Image
              src={item.url}
              alt="image"
              fill
              className={`image-${i} scale-110 rounded-lg object-cover`}
            />
          </div>
        ))}
      </div>
      <Header />
      <div className="z-99 flex">
        <p className="text-6xl text-black mix-blend-difference">
          Hover over the links
        </p>
        <Image src="/arrow.png" alt="arrow svg" width={100} height={100} />
      </div>
      <div className="z-99 flex w-[900px] flex-wrap items-center gap-4 py-10">
        {data.map((item, i) => (
          <div
            onMouseEnter={() => handleItemHover(i)}
            onMouseLeave={() => handleItemLeave(i)}
            key={item.name}
            className="relative cursor-pointer text-6xl"
          >
            {item.name}
            <div
              className={`underline-${i} absolute bottom-0 left-0 h-px w-full bg-black`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
