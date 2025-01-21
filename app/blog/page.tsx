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
          <Link href="/booking" className="text-lg">
            Réservations
          </Link>
          <Link href="/blog" className="text-lg text-orange-600">
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
      <div className=" p-4 w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 rounded-md my-8 items-center justify-center">
        <div className=" bg-white max-w-sm rounded-lg overflow-hidden shadow-lg border border-orange-700 mx-auto hover:border-x-orange-500 transition-all hover:drop-shadow-2xl">
          <Image
            className="w-full"
            src="/image1.jpg"
            height={500}
            width={500}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">Article </div>
            <var>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                publié le : 09/01/2025
              </span>
            </var>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <Link
              href=""
              className="bg-orange-500 flex w-full text-center items-center justify-center p-2 my-4 text-white font-bold rounded-md hover:bg-orange-600 transition-all active:outline-1 outline-offset-2 outline-orange-600"
            >
              Détails
            </Link>
          </div>
        </div>
        <div className=" bg-white max-w-sm rounded-lg overflow-hidden shadow-lg border border-orange-700 mx-auto hover:border-x-orange-500 transition-all hover:drop-shadow-2xl">
          <Image
            className="w-full"
            src="/image1.jpg"
            height={500}
            width={500}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">Article </div>
            <var>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                publié le : 09/01/2025
              </span>
            </var>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <Link
              href=""
              className="bg-orange-500 flex w-full text-center items-center justify-center p-2 my-4 text-white font-bold rounded-md hover:bg-orange-600 transition-all active:outline-1 outline-offset-2 outline-orange-600"
            >
              Détails
            </Link>
          </div>
        </div>
        <div className=" bg-white max-w-sm rounded-lg overflow-hidden shadow-lg border border-orange-700 mx-auto hover:border-x-orange-500 transition-all hover:drop-shadow-2xl">
          <Image
            className="w-full"
            src="/image1.jpg"
            height={500}
            width={500}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">Article </div>
            <var>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                publié le : 09/01/2025
              </span>
            </var>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <Link
              href=""
              className="bg-orange-500 flex w-full text-center items-center justify-center p-2 my-4 text-white font-bold rounded-md hover:bg-orange-600 transition-all active:outline-1 outline-offset-2 outline-orange-600"
            >
              Détails
            </Link>
          </div>
        </div>
        <div className=" bg-white max-w-sm rounded-lg overflow-hidden shadow-lg border border-orange-700 mx-auto hover:border-x-orange-500 transition-all hover:drop-shadow-2xl">
          <Image
            className="w-full"
            src="/image1.jpg"
            height={500}
            width={500}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">Article </div>
            <var>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                publié le : 09/01/2025
              </span>
            </var>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <Link
              href=""
              className="bg-orange-500 flex w-full text-center items-center justify-center p-2 my-4 text-white font-bold rounded-md hover:bg-orange-600 transition-all active:outline-1 outline-offset-2 outline-orange-600"
            >
              Détails
            </Link>
          </div>
        </div>
        <div className=" bg-white max-w-sm rounded-lg overflow-hidden shadow-lg border border-orange-700 mx-auto hover:border-x-orange-500 transition-all hover:drop-shadow-2xl">
          <Image
            className="w-full"
            src="/image1.jpg"
            height={500}
            width={500}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">Article </div>
            <var>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                publié le : 09/01/2025
              </span>
            </var>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
            <Link
              href=""
              className="bg-orange-500 flex w-full text-center items-center justify-center p-2 my-4 text-white font-bold rounded-md hover:bg-orange-600 transition-all active:outline-1 outline-offset-2 outline-orange-600"
            >
              Détails
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
