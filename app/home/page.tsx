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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae placeat
          quasi consequuntur molestias similique ullam at eius a praesentium
          autem fuga recusandae voluptates sapiente ab, alias illo, vitae vel
          in? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
          vero repellat doloremque distinctio, sit placeat possimus, eaque
          sapiente a sed adipisci quaerat perspiciatis officia voluptas
          temporibus velit nobis quidem eligendi quo harum aperiam voluptates
          pariatur. Consequuntur rem animi eligendi harum ut commodi odit
          temporibus, adipisci tempora facilis autem nisi quibusdam magni
          architecto nam fugiat at itaque dolore vitae totam ullam ex. Natus
          tenetur neque eos temporibus debitis molestias animi ipsam eum harum,
          accusantium deleniti? Nobis, sed voluptatibus exercitationem natus
          illum dolorum minima ullam id sapiente officia sint ipsam architecto
          pariatur doloremque eum nisi esse dicta assumenda inventore! Sit
          dignissimos quidem fuga asperiores, magni neque necessitatibus esse
          vero quas maxime voluptatem facilis illum reiciendis veniam inventore
          hic reprehenderit velit a corporis aperiam. Praesentium cum ipsam
          incidunt quo facilis repellat fugiat nisi ut. Doloremque esse quam
          libero. Asperiores voluptatibus vel porro omnis veniam aliquid nostrum
          dolorem aliquam eaque aut adipisci reprehenderit voluptas cum, dolor
          doloremque quam voluptatem necessitatibus veritatis dolores quibusdam?
          Quod, eos. Id dolorum veritatis repellat dolorem accusantium fugiat!
          Soluta quasi molestiae ipsa rem autem enim eaque nostrum officiis!
          Velit eligendi consequatur rem corporis! Tempore hic voluptatum soluta
          natus in consectetur unde modi quos libero, assumenda veritatis
          obcaecati eligendi deserunt sapiente.
        </p>
      </div>
    </div>
  );
}
