"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen p-8 pb-12 gap-8 sm:p-8 bg-slate-900">
      <div className=" sticky top-2 flex flex-row p-4 items-center justify-between w-full my-8 rounded-lg backdrop-blur-lg border border-orange-400 font-bold z-50">
        <Link href="/home" className="text-lg">
          Acceuil
        </Link>
        <div className=" flex flex-row gap-2">
          <Link href="/booking" className="text-lg text-orange-600">
            Réservations
          </Link>
          <Link href="/blog" className="text-lg">
            Blog
          </Link>
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col gap-4 justify-evenly items-center">
        <h3 className="text-4xl lg:text-8xl md:text:7xl font-black text-center lg:text-start">
          Decouvrez les merveilles de la routes des peches
        </h3>
        <Image
          src="/image3.webp"
          width={500}
          height={100}
          className="w-full rounded-lg shadow-lg shadow-orange-900"
          alt="image"
        ></Image>
      </div>
    </div>
  );
}
