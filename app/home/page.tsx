"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen p-8 pb-12 gap-8 sm:p-8 bg-slate-900">
      <div className="w-full flex flex-row gap-4 justify-evenly items-center">
        <h3 className="text-7xl font-black">
          Decouvrez les merveilles de la routes des peches
        </h3>
        <Image
          src="/image3.webp"
          width={500}
          height={100}
          className="w-full rounded-lg shadow-xl"
          alt="image"
        ></Image>
      </div>
      <div className="bg-slate-950 w-full"></div>
    </div>
  );
}
