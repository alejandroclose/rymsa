import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features from "../components/features";
import Services from "../components/services";
import Quote from "../components/quote";
import ReferedBy from "../components/referedby";
import About from "../components/about";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>R&MSA | Produciendo Valor, Transportando Bienes</title>
        <meta name="description" content="Servicio internacional de transporte terrestre. Especializados en la fabricación de partes para camiones." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar></Navbar>
      <main className="px-0 flex flex-col justify-center items-center font-titillium">
        <Hero></Hero>
        <Features />
        <Services />
        <Quote/>
        <ReferedBy/>
        <About/>
      </main>

      {/* <footer className={styles.footer}>
      </footer> */}
    </div>
  );
}
