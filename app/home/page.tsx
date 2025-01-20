"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen p-8 pb-12 gap-8 sm:p-8 bg-slate-900">
      <div className=" sticky top-2 flex flex-row p-4 items-center justify-between w-full my-8 rounded-lg backdrop-blur-lg border border-orange-400 font-bold">
        <Link href="" className="text-lg">
          Acceuil
        </Link>
        <div className=" flex flex-row gap-2">
          <Link href="/home" className="text-lg">
            Réservations
          </Link>
          <Link href=" " className="text-lg">
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
      <div className="w-full bg-slate-800 p-4 rounded-lg bo my-16  shadow-lg shadow-orange-900">
        <p className="text-lg font-light">
          La{" "}
          <span className="text-2xl text-orange-600 font-bold">
            Route des Pêches
          </span>{" "}
          est bien plus qu'un simple itinéraire, c'est un véritable voyage
          sensoriel au cœur de la Provence, où chaque kilomètre parcouru vous
          dévoile une nouvelle merveille. S'étendant sur environ{" "}
          <span className="text-2xl text-orange-600 font-bold">
            100 kilomètres
          </span>{" "}
          à travers les magnifiques départements du Var et des Alpes-Maritimes,
          elle vous invite à découvrir un paysage où la nature et l'authenticité
          de la région se rencontrent à chaque virage. Au fil de la route, les
          vergers de pêches s'étendent à perte de vue, offrant une explosion de
          couleurs et de parfums grâce aux fruits mûrs, juteux et sucrés,
          récoltés directement sur les arbres. Vous croiserez des villages
          typiques de la Provence, comme Fréjus, où l'histoire romaine se mêle à
          l'atmosphère méditerranéenne, et Puget-sur-Argens, un charmant village
          aux rues étroites et pavées, où la douceur de vivre semble flotter
          dans l'air. La route traverse également le massif de l'Esterel, dont
          les montagnes aux formes sculptées par le vent et le temps offrent des
          panoramas à couper le souffle sur la mer Méditerranée. Les plages
          immaculées de la région, comme celles de Bormes-les-Mimosas, sont des
          havres de paix parfaits pour se détendre après une journée de
          découvertes. En chemin, ne manquez pas les marchés provençaux,
          regorgeant de produits artisanaux locaux, où vous pourrez déguster des
          pêches gorgées de soleil, des confitures maison, du miel parfumé, ou
          encore des vins du Var aux arômes envoûtants. Les amateurs d'histoire
          seront comblés par les vestiges antiques de Fréjus, avec son
          amphithéâtre romain et son musée archéologique, témoins du riche passé
          de cette région. La Route des Pêches est également un paradis pour les
          amoureux de la nature et des activités de plein air : des randonnées
          inoubliables dans le massif de l'Esterel aux activités nautiques le
          long des plages. Chaque étape est une nouvelle occasion d'explorer les
          paysages grandioses de la région, de goûter à des saveurs locales
          exquises et de plonger dans un patrimoine culturel et naturel
          incomparable. Ce parcours, parsemé de merveilles et de découvertes,
          vous promet une immersion totale dans la beauté sauvage et la douceur
          de vivre de la Provence.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image3.webp"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image3.webp"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image3.webp"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image3.webp"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image3.webp"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image3.webp"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image3.webp"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image3.webp"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image3.webp"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image3.webp"
            alt=""
            width={500}
            height={100}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image3.webp"
            alt=" /"
            width={500}
            height={100}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/image3.webp"
            alt=" /"
            width={500}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
