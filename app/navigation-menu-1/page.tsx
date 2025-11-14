import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import Overlay from "./Overlay";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const Page = () => {
  return (
    <div className={`${cormorant.className} h-screen w-full overflow-hidden`}>
      <div className="relative h-screen w-screen">
        <Image
          src="https://w61pzgbhdn.ufs.sh/f/sgyYFvRJUSNKtbCIrbjAfPH4szXUcRhM5qpNg7JO1w8lyInv"
          alt="img"
          fill
          className="object-cover"
          priority
        />
      </div>
      <Overlay />
    </div>
  );
};

export default Page;
