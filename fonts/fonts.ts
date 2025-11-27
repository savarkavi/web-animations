import localFont from "next/font/local";
import { Bodoni_Moda, Uncial_Antiqua } from "next/font/google";

export const emily = localFont({
  src: "./EmilysCandy-Regular.ttf",
});

export const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const supplyMono = localFont({
  src: "./Supply-Regular.otf",
});

export const unicalAntiqua = Uncial_Antiqua({
  subsets: ["latin"],
  weight: ["400"],
});
