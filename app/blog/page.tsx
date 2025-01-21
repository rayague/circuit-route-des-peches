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
        <h3 className="text-4xl lg:text-8xl md:text-7xl font-black text-center lg:text-start">
          Explorez les secrets{" "}
          <span className="text-orange-600">de la Route des Pêches</span>
        </h3>

        <Image
          src="/image3.webp"
          width={500}
          height={100}
          className="w-full rounded-lg shadow-lg shadow-orange-900"
          alt="image"
        ></Image>
      </div>
      <div className="my-16 text-center ">
        <h2 className="text-4xl lg:text-7xl md:text-6xl font-semibold mb-8">
          Pourquoi explorer la Route des Pêches ?
        </h2>
        <p className="text-lg mb-6">
          La{" "}
          <span className="text-orange-600 font-semibold">
            Route des Pêches
          </span>{" "}
          vous invite à une aventure inoubliable, où chaque étape est
          l&apos;occasion de découvrir la beauté du Bénin, ses paysages
          époustouflants, ses traditions vivantes et ses plages secrètes.
        </p>
      </div>
      <div className=" p-4 w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 rounded-md my-8 items-center justify-center">
        {/* Article 1 */}
        <div className=" bg-white max-w-sm rounded-lg overflow-hidden shadow-lg border border-orange-700 mx-auto hover:border-x-orange-500 transition-all hover:drop-shadow-2xl shadow-orange-900">
          <Image
            className="w-full"
            src="/image1.jpg"
            height={500}
            width={500}
            alt="La plage paradisiaque"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">
              Les Plages Cachées de la Route des Pêches
            </div>
            <var>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                publié le : 10/01/2025
              </span>
            </var>
            <p className="text-gray-700 text-base">
              Partez à la découverte des plages secrètes et isolées que vous
              trouverez le long de la Route des Pêches. Loin des foules, ces
              plages vous offriront une sérénité rare, parfaites pour se
              détendre en toute tranquillité.
            </p>
            <Link
              href="/article1"
              className="bg-orange-500 flex w-full text-center items-center justify-center p-2 my-4 text-white font-bold rounded-md hover:bg-orange-600 transition-all active:outline-1 outline-offset-2 outline-orange-600"
            >
              Détails
            </Link>
          </div>
        </div>

        {/* Article 2 */}
        <div className=" bg-white max-w-sm rounded-lg overflow-hidden shadow-lg border border-orange-700 mx-auto hover:border-x-orange-500 transition-all hover:drop-shadow-2xl shadow-orange-900">
          <Image
            className="w-full"
            src="/image2.jpg"
            height={500}
            width={500}
            alt="Pêcheurs locaux"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">
              Rencontrez les Pêcheurs Locaux
            </div>
            <var>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                publié le : 12/01/2025
              </span>
            </var>
            <p className="text-gray-700 text-base">
              Vivez une expérience unique en rencontrant les pêcheurs locaux et
              en apprenant leurs traditions séculaires de pêche. Une immersion
              dans la culture authentique du Bénin qui enrichira votre voyage.
            </p>
            <Link
              href="/article2"
              className="bg-orange-500 flex w-full text-center items-center justify-center p-2 my-4 text-white font-bold rounded-md hover:bg-orange-600 transition-all active:outline-1 outline-offset-2 outline-orange-600"
            >
              Détails
            </Link>
          </div>
        </div>

        {/* Article 3 */}
        <div className=" bg-white max-w-sm rounded-lg overflow-hidden shadow-lg border border-orange-700 mx-auto hover:border-x-orange-500 transition-all hover:drop-shadow-2xl shadow-orange-900">
          <Image
            className="w-full"
            src="/image4.jpg"
            height={500}
            width={500}
            alt="Villages pittoresques"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">
              Voyage au Coeur des Villages du Bénin
            </div>
            <var>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                publié le : 14/01/2025
              </span>
            </var>
            <p className="text-gray-700 text-base">
              En traversant les villages pittoresques du Bénin, vous découvrirez
              un monde d&apos;hospitalité et de traditions. Rencontrez les
              habitants, goûtez à leurs spécialités et plongez dans un voyage
              culturel inoubliable.
            </p>
            <Link
              href="/article3"
              className="bg-orange-500 flex w-full text-center items-center justify-center p-2 my-4 text-white font-bold rounded-md hover:bg-orange-600 transition-all active:outline-1 outline-offset-2 outline-orange-600"
            >
              Détails
            </Link>
          </div>
        </div>

        {/* Article 4 */}
        <div className=" bg-white max-w-sm rounded-lg overflow-hidden shadow-lg border border-orange-700 mx-auto hover:border-x-orange-500 transition-all hover:drop-shadow-2xl shadow-orange-900">
          <Image
            className="w-full"
            src="/image4.jpg"
            height={500}
            width={500}
            alt="Activités nautiques"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">
              Profitez des Activités Nautiques
            </div>
            <var>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                publié le : 16/01/2025
              </span>
            </var>
            <p className="text-gray-700 text-base">
              Plongez dans l&apos;océan Atlantique avec des activités nautiques
              passionnantes : plongée, pêche sportive et bien plus encore.
              Profitez de la beauté des eaux béninoises et créez des souvenirs
              mémorables.
            </p>
            <Link
              href="/article4"
              className="bg-orange-500 flex w-full text-center items-center justify-center p-2 my-4 text-white font-bold rounded-md hover:bg-orange-600 transition-all active:outline-1 outline-offset-2 outline-orange-600"
            >
              Détails
            </Link>
          </div>
        </div>

        {/* Article 5 */}
        <div className=" bg-white max-w-sm rounded-lg overflow-hidden shadow-lg border border-orange-700 mx-auto hover:border-x-orange-500 transition-all hover:drop-shadow-2xl shadow-orange-900">
          <Image
            className="w-full"
            src="/image4.jpg"
            height={500}
            width={500}
            alt="Saveurs du Bénin"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">
              Dégustation des Saveurs Locales
            </div>
            <var>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                publié le : 18/01/2025
              </span>
            </var>
            <p className="text-gray-700 text-base">
              La Route des Pêches est aussi un véritable festin pour vos
              papilles. Dégustez des poissons frais, des fruits tropicaux et des
              plats locaux préparés avec amour et savoir-faire.
            </p>
            <Link
              href="/article5"
              className="bg-orange-500 flex w-full text-center items-center justify-center p-2 my-4 text-white font-bold rounded-md hover:bg-orange-600 transition-all active:outline-1 outline-offset-2 outline-orange-600"
            >
              Détails
            </Link>
          </div>
        </div>

        {/* Article 6 */}
        <div className=" bg-white max-w-sm rounded-lg overflow-hidden shadow-lg border border-orange-700 mx-auto hover:border-x-orange-500 transition-all hover:drop-shadow-2xl shadow-orange-900">
          <Image
            className="w-full"
            src="/image2.jpg"
            height={500}
            width={500}
            alt="Randonnée en nature"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">
              Les Meilleures Randonnées de la Route des Pêches
            </div>
            <var>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                publié le : 20/01/2025
              </span>
            </var>
            <p className="text-gray-700 text-base">
              Enfilez vos chaussures de randonnée et explorez les paysages
              époustouflants du Bénin. Des sentiers qui serpentent à travers des
              forêts luxuriantes et des montagnes vous attendent.
            </p>
            <Link
              href="/article6"
              className="bg-orange-500 flex w-full text-center items-center justify-center p-2 my-4 text-white font-bold rounded-md hover:bg-orange-600 transition-all active:outline-1 outline-offset-2 outline-orange-600"
            >
              Détails
            </Link>
          </div>
        </div>

        {/* Article 7 */}
        <div className=" bg-white max-w-sm rounded-lg overflow-hidden shadow-lg border border-orange-700 mx-auto hover:border-x-orange-500 transition-all hover:drop-shadow-2xl shadow-orange-900">
          <Image
            className="w-full"
            src="/image1.jpg"
            height={500}
            width={500}
            alt="Sites historiques"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">
              Les Sites Historiques du Bénin
            </div>
            <var>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                publié le : 22/01/2025
              </span>
            </var>
            <p className="text-gray-700 text-base">
              Découvrez les vestiges du passé à travers les sites historiques du
              Bénin, tels que les forteresses et les monuments datant de
              l&apos;époque coloniale et de la période royale du Dahomey.
            </p>
            <Link
              href="/article7"
              className="bg-orange-500 flex w-full text-center items-center justify-center p-2 my-4 text-white font-bold rounded-md hover:bg-orange-600 transition-all active:outline-1 outline-offset-2 outline-orange-600"
            >
              Détails
            </Link>
          </div>
        </div>

        {/* Article 8 */}
        <div className=" bg-white max-w-sm rounded-lg overflow-hidden shadow-lg border border-orange-700 mx-auto hover:border-x-orange-500 transition-all hover:drop-shadow-2xl shadow-orange-900">
          <Image
            className="w-full"
            src="/image1.jpg"
            height={500}
            width={500}
            alt="Les produits artisanaux"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">
              Les Produits Artisanaux du Bénin
            </div>
            <var>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                publié le : 24/01/2025
              </span>
            </var>
            <p className="text-gray-700 text-base">
              Explorez les marchés locaux et découvrez les trésors artisanaux du
              Bénin, comme les sculptures, les tissus traditionnels et les
              bijoux faits main.
            </p>
            <Link
              href="/article8"
              className="bg-orange-500 flex w-full text-center items-center justify-center p-2 my-4 text-white font-bold rounded-md hover:bg-orange-600 transition-all active:outline-1 outline-offset-2 outline-orange-600"
            >
              Détails
            </Link>
          </div>
        </div>

        {/* Article 9 */}
        <div className=" bg-white max-w-sm rounded-lg overflow-hidden shadow-lg border border-orange-700 mx-auto hover:border-x-orange-500 transition-all hover:drop-shadow-2xl shadow-orange-900">
          <Image
            className="w-full"
            src="/image1.jpg"
            height={500}
            width={500}
            alt="Excursions en bateau"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">
              Excursions en Bateau à Travers les Lagunes
            </div>
            <var>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                publié le : 26/01/2025
              </span>
            </var>
            <p className="text-gray-700 text-base">
              Offrez-vous une excursion inoubliable en bateau à travers les
              lagunes du Bénin. Explorez la faune et la flore locales tout en
              profitant d&apos;une balade paisible sur l&apos;eau.
            </p>
            <Link
              href="/article9"
              className="bg-orange-500 flex w-full text-center items-center justify-center p-2 my-4 text-white font-bold rounded-md hover:bg-orange-600 transition-all active:outline-1 outline-offset-2 outline-orange-600"
            >
              Détails
            </Link>
          </div>
        </div>

        {/* Article 10 */}
        <div className=" bg-white max-w-sm rounded-lg overflow-hidden shadow-lg border border-orange-700 mx-auto hover:border-x-orange-500 transition-all hover:drop-shadow-2xl shadow-orange-900">
          <Image
            className="w-full"
            src="/image1.jpg"
            height={500}
            width={500}
            alt="Le marché d'Abomey"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-black">
              Visite du Marché d&apos;Abomey
            </div>
            <var>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                publié le : 28/01/2025
              </span>
            </var>
            <p className="text-gray-700 text-base">
              Découvrez le marché vibrant d&apos;Abomey, un lieu incontournable
              pour découvrir les produits locaux, l&apos;artisanat et les
              saveurs du Bénin.
            </p>
            <Link
              href="/article10"
              className="bg-orange-500 flex w-full text-center items-center justify-center p-2 my-4 text-white font-bold rounded-md hover:bg-orange-600 transition-all active:outline-1 outline-offset-2 outline-orange-600"
            >
              Détails
            </Link>
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
