import localFont from "next/font/local";
import { Bodoni_Moda } from "next/font/google";

export const emily = localFont({
  src: "./EmilysCandy-Regular.ttf",
});

export const bodoniModa = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
