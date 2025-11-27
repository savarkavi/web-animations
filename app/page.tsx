import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-white">
      <Link href={"/navigation-menu-1"}>Navigation menu 1</Link>
      <Link href={"/page-transition-1"}>Page transition 1</Link>
      <Link href={"/image-reveal-on-hover"}>Image reveal on hover</Link>
      <Link href={"/permian-intro-animation"}>Permian intro animation</Link>
      <Link href={"/landing-page-animation-1"}>Landing page animation 1</Link>
    </div>
  );
}
