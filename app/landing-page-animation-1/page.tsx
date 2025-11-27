import { unicalAntiqua } from "@/fonts/fonts";
import Intro from "./Intro";
import Image from "next/image";

const Page = () => {
  return (
    <div className={`${unicalAntiqua.className}`}>
      <Intro />
      <div className="absolute top-0 left-0 h-screen w-full">
        <Image
          src="/ascii-art.png"
          alt="ascii art"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Page;
