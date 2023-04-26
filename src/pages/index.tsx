import { Inter } from "next/font/google";
import Head from "next/head";
import { Navbar } from "@/components/navbar/Navbar";

const font = Inter({subsets: ["latin"], weight: "500"})

export default function Home() {
  return (
    <main className={`${font.className}`}>
      <Head>
        <title>TicketSky - Página Inicial</title>
      </Head>
      <Navbar/>
    </main>
  )
}