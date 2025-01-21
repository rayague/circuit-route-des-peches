import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Tipiac Agency",
  description:
    "Tipiac Agency vous offre des expériences inoubliables au cœur des destinations les plus pittoresques. Explorez, découvrez et vivez des aventures uniques avec nos circuits exclusifs à travers le Bénin et au-delà."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href="/globe.svg" type="image/x-icon" />
      </Head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
