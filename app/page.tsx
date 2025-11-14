import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-white">
      <Link href={"/navigation-menu-1"}>Navigation menu 1</Link>
    </div>
  );
}
