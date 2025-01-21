"use client";
import Image from "next/image";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative min-h-screen p-8 pb-12 gap-8 sm:p-8 bg-slate-900">
      <div className=" sticky top-2 flex flex-row p-4 items-center justify-between w-full my-8 rounded-lg backdrop-blur-lg border border-orange-400 font-bold z-50">
        <Link href="" className="text-lg text-orange-600">
          Acceuil
        </Link>
        <div className=" flex flex-row gap-2">
          <Link href="/booking" className="text-lg">
            Réservations
          </Link>
          <Link href="/blog" className="text-lg">
            Blog
          </Link>
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col gap-4 justify-evenly items-center">
        <h3 className="text-4xl lg:text-8xl md:text-7xl font-black text-center lg:text-start">
          Découvrez les merveilles de la{" "}
          <span className="text-orange-600">Route des Pêches</span>
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
        <p className="text-lg font-normal">
          La{" "}
          <span className="text-xl text-orange-600 font-normal">
            Route des Pêches du Bénin
          </span>{" "}
          est bien plus qu&apos;un simple itinéraire, c&apos;est un véritable
          voyage sensoriel à travers le Bénin, où chaque étape vous plonge dans
          l&apos;authenticité et la beauté de la côte béninoise. S&apos;étendant
          sur environ{" "}
          <span className="text-xl text-orange-600 font-normal">
            100 kilomètres
          </span>{" "}
          le long de l&apos;Atlantique, elle vous invite à découvrir des
          paysages pittoresques, des plages magnifiques et des villages de
          pêcheurs traditionnels. Au fil de la route, vous découvrirez de{" "}
          <span className="text-xl text-orange-600 font-normal">
            nombreuses plages
          </span>{" "}
          comme la{" "}
          <span className="text-xl text-orange-600 font-normal">
            plage de Fidjrossè
          </span>
          , la{" "}
          <span className="text-xl text-orange-600 font-normal">
            plage de Grand-Popo
          </span>{" "}
          ou encore{" "}
          <span className="text-xl text-orange-600 font-normal">
            la plage de Ouidah
          </span>
          , offrant des panoramas incroyables et un cadre idéal pour se détendre
          ou pratiquer des activités nautiques. Les pêcheurs locaux vous
          accueilleront avec leurs techniques traditionnelles de pêche et vous
          pourrez savourer des poissons frais, gorgés de saveurs uniques.
          <span className="text-xl text-orange-600 font-normal">Ouidah</span>,
          ville historique et haut lieu du vaudou, est un passage incontournable
          où vous découvrirez son temple dédié à la religion vaudou et ses
          vestiges historiques. Vous pourrez également visiter{" "}
          <span className="text-xl text-orange-600 font-normal">
            la Route des Esclaves
          </span>
          , un lieu de mémoire incontournable du passé du Bénin. En chemin, vous
          traverserez des villages de pêcheurs comme{" "}
          <span className="text-xl text-orange-600 font-normal">
            Locogohoué
          </span>{" "}
          ou{" "}
          <span className="text-2xl text-orange-600 font-normal">Ganvié</span>{" "}
          un village construit sur pilotis au cœur du lac Nokoué, souvent
          surnommé la &quot;Venise de l&apos;Afrique&quot;. Ce trajet est aussi
          un véritable parcours culinaire avec les poissons grillés, le{" "}
          <span className="text-xl text-orange-600 font-normal">
            riz béninois
          </span>
          , les sauces épicées et autres spécialités locales que vous pourrez
          déguster sur les marchés ou dans les restaurants typiques du bord de
          mer. La Route des Pêches du Bénin vous invite donc à un voyage
          inoubliable à travers la culture, l&apos;histoire et les paysages du
          pays, tout en vous offrant une immersion dans la vie locale des
          pêcheurs et des habitants de la région.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

      <div className="my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          <div className="mx-auto rounded-md bg-slate-700 w-full h-72 shadow-lg shadow-orange-900 overflow-hidden">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/bRR4H6FRvgA"
              title="Video 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mx-auto rounded-md bg-slate-700 w-full h-72 shadow-lg shadow-orange-900 overflow-hidden">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/U6hQA-jKP-k"
              title="Video 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mx-auto rounded-md bg-slate-700 w-full h-72 shadow-lg shadow-orange-900 overflow-hidden">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/tQyXfDJoSEY"
              title="Video 3"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mx-auto rounded-md bg-slate-700 w-full h-72 shadow-lg shadow-orange-900 overflow-hidden">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/w_9nYm0ZrgA"
              title="Video 4"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mx-auto rounded-md bg-slate-700 w-full h-72 shadow-lg shadow-orange-900 overflow-hidden">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/r6Xa76uGgBE"
              title="Video 5"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="my-8">
        <h1 className="font-bold text-5xl my-5 text-center">
          La Route des Pêches - Carte Interactive
        </h1>
        <div className="mx-auto rounded-md bg-slate-700 w-full h-72 shadow-lg shadow-orange-900">
          {/* <MapWithNoSSR /> */}
        </div>
      </div>

      <div className="my-8">
        <h1 className="font-bold text-5xl my-5 text-center">
          Vidéos de Témoignages
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mx-auto rounded-md bg-slate-700 w-full h-72 shadow-lg shadow-orange-900 overflow-hidden">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/ln7nV_rX2do"
              title="Témoignage 1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mx-auto rounded-md bg-slate-700 w-full h-72 shadow-lg shadow-orange-900 overflow-hidden">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/2HoQ2S-ivH4"
              title="Témoignage 2"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="p-8 w-full bg-gradient-to-t from-slate-700 to-slate-800 rounded-md mt-8 text-center">
        <h3 className="font-bold text-2xl text-center text-orange-600 mb-4">
          Tipiac Agency
        </h3>
        <p className="text-gray-300 mb-4">
          Tipiac Agency est votre partenaire idéal pour des expériences de
          voyage inoubliables. Spécialisée dans l&apos;organisation de circuits
          sur mesure, nous vous proposons des aventures authentiques au cœur des
          destinations les plus fascinantes.
        </p>

        {/* Section des Icônes */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link
            href="https://wa.me/46538805" // Remplace par ton numéro WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-green-500 transition-all"
          >
            <FaWhatsapp size={40} className="text-white" />{" "}
          </Link>
          <Link
            href="https://www.instagram.com/tipiacagency?igsh=MXZ0ZGVodW5qbzRrNg==&utm_source=ig_contact_invite" // Remplace par ton compte Instagram
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-pink-500 transition-all"
          >
            <FaInstagram size={40} className="text-white" />{" "}
          </Link>
        </div>

        {/* Formulaire de Newsletter */}
        <div className="mb-4">
          <h4 className="text-lg text-white mb-2 font-black">
            Abonnez-vous à notre{" "}
            <span className="text-orange-600">newsletter</span>
          </h4>
          <form
            action="#"
            method="POST"
            className="flex justify-center space-x-1"
          >
            <input
              type="email"
              placeholder="Entrez votre email"
              className="p-2 rounded-md text-black w-1/2 lg:w-1/3"
              required
            />
            <button
              type="submit"
              className="bg-orange-600 text-white p-2 rounded-md hover:bg-orange-700 transition-all"
            >
              S&apos;abonner
            </button>
          </form>
        </div>

        <div className="text-gray-400">
          <p>
            © 2025 <span className="text-orange-600">Tipiac Agency</span>. Tous
            droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
}
