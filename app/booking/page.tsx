"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Typage de l'état du formulaire
interface FormData {
  name: string;
  email: string;
  date: string;
  numPeople: number;
}

export default function Booking() {
  // Utilisation du typage de FormData
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    date: "",
    numPeople: 1
  });

  // Typage correct de l'événement pour handleChange
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Typage correct de l'événement pour handleSubmit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Traiter la soumission du formulaire
    console.log("Réservation effectuée", formData);
  };

  return (
    <div className="relative min-h-screen p-8 pb-12 gap-8 sm:p-8 bg-slate-900">
      <div className="sticky top-2 flex flex-row p-4 items-center justify-between w-full my-8 rounded-lg backdrop-blur-lg border border-orange-400 font-bold z-50">
        <Link href="/home" className="text-lg">
          Accueil
        </Link>
        <div className="flex flex-row gap-2">
          <Link href="/booking" className="text-lg text-orange-600">
            Réservations
          </Link>
          <Link href="/blog" className="text-lg">
            Blog
          </Link>
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col gap-4 justify-evenly items-center">
        <h3 className="text-4xl lg:text-8xl md:text-7xl font-black text-center lg:text-start">
          Réservez votre aventure sur la{" "}
          <span className="text-orange-600">Route des Pêches</span>
        </h3>

        <Image
          src="/image3.webp"
          width={500}
          height={100}
          className="w-full rounded-lg shadow-lg shadow-orange-900"
          alt="image"
        />
      </div>

      <div className="mt-16 text-center text-white">
        <h2 className="text-4xl lg:text-7xl md:text-6xl font-semibold mb-8">
          Pourquoi réserver votre aventure ?
        </h2>
        <p className="text-lg mb-6">
          La{" "}
          <span className="text-orange-600 font-semibold">
            Route des Pêches
          </span>{" "}
          est bien plus qu&apos;une simple excursion. En réservant, vous plongez
          dans une expérience unique au cœur de la nature et des traditions du
          Bénin. Voici quelques-unes des opportunités qui vous attendent :
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
          <div className="bg-slate-800 p-6 rounded-lg hover:border hover:border-orange-600 shadow-lg shadow-orange-900">
            <h4 className="text-xl font-bold text-orange-600 mb-4">
              Explorer les plages cachées
            </h4>
            <p className="text-lg">
              Détendez-vous sur des plages secrètes, loin de la foule, et
              profitez de l&apos;eau cristalline. Certaines plages ne sont
              accessibles que par la route des pêches, offrant une vue
              imprenable sur l&apos;océan.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:border hover:border-orange-600 shadow-orange-900">
            <h4 className="text-xl font-bold text-orange-600 mb-4">
              Rencontrer les pêcheurs locaux
            </h4>
            <p className="text-lg">
              Vivez une expérience authentique en rencontrant les pêcheurs
              locaux, apprenez leur métier et découvrez les secrets de la pêche
              traditionnelle.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:border hover:border-orange-600 shadow-orange-900">
            <h4 className="text-xl font-bold text-orange-600 mb-4">
              Visiter des villages pittoresques
            </h4>
            <p className="text-lg">
              En chemin, vous découvrirez des villages typiques du Bénin, où
              histoire, culture et hospitalité se mêlent pour offrir une
              immersion complète dans la vie locale.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:border hover:border-orange-600 shadow-orange-900">
            <h4 className="text-xl font-bold text-orange-600 mb-4">
              Profiter d&apos;activités nautiques
            </h4>
            <p className="text-lg">
              Que vous soyez amateur de plongée, de kayak ou de pêche en mer,
              les activités nautiques proposées le long de la route vous
              offriront des sensations fortes et des moments de détente
              incomparables.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg shadow-lg hover:border hover:border-orange-600 shadow-orange-900">
            <h4 className="text-xl font-bold text-orange-600 mb-4">
              Déguster des spécialités locales
            </h4>
            <p className="text-lg">
              Chaque arrêt sur la route vous permettra de découvrir les saveurs
              du Bénin : fruits frais, poissons grillés, et autres délices
              culinaires locaux à savourer dans un cadre authentique.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 bg-slate-800 p-8 rounded-lg shadow-lg shadow-orange-900 w-full max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-xl text-white mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-md bg-slate-700 text-white border border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-xl text-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-md bg-slate-700 text-white border border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="date" className="text-xl text-white mb-2">
              Date de réservation
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-3 rounded-md bg-slate-700 text-white border border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="numPeople" className="text-xl text-white mb-2">
              Nombre de personnes
            </label>
            <input
              type="number"
              id="numPeople"
              name="numPeople"
              value={formData.numPeople}
              onChange={handleChange}
              className="p-3 rounded-md bg-slate-700 text-white border border-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
              min="1"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-600"
          >
            Réserver maintenant
          </button>
        </form>
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
          <a
            href="https://wa.me/1234567890" // Remplace par ton numéro WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-green-500 transition-all"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://instagram.com/toncompte" // Remplace par ton compte Instagram
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl hover:text-pink-500 transition-all"
          >
            <i className="fab fa-instagram"></i>
          </a>
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
