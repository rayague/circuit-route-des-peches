"use client";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "nextjs-simple-typewriter";

export default function Home() {
  const handleType = (count: number) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className="relative min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/image1.jpg" // Le chemin de ton image
          alt="Description de l'image"
          layout="fill" // Remplir tout l'espace disponible
          objectFit="cover" // Assurer que l'image couvre toute la zone sans être déformée
          className="opacity-40" // Assombrir l'image en réduisant l'opacité
        />
      </div>

      {/* Contenu du texte */}
      <div className="relative z-2 flex flex-col items-center justify-center h-full text-center text-white">
        <div className="justify-center items-center flex flex-col">
          <div className="App">
            <h1 className="font-black lg:text-9xl md:text-8xl sm:text-7xl text-6xl tracking-tighter text-white">
              <span className="">
                {/* Typewriter effect */}
                <Typewriter
                  words={[
                    "Évasion sur la côte béninoise",
                    "Découverte de paysages idylliques",
                    "Voyage au cœur des trésors cachés",
                    "Séjour sur les plages dorées",
                    "Exploration des joyaux côtiers",
                    "Vivez l’expérience des rives béninoises"
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={150}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                  onType={handleType}
                />
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Sous-titre fixe centré en bas */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 z-2 text-center">
        <p className="text-lg text-white font-bold">
          Découvrez le paradis caché du Bénin, où mer et traditions
          s'entrelacent pour vous offrir un voyage inoubliable.
        </p>

        {/* Bouton sous le sous-titre */}
        <div className="mt-4">
          <Link href="/home">
            <button className="bg-orange-600 text-white px-6 py-3 rounded-md hover:bg-orange-700 transition-all">
              Explorer plus
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
