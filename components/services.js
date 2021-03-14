import { useState } from "react";
import Image from "next/image";

export default function Services(props) {
  return (
    <>
      <div id="soluciones"></div>
      <div className="pt-12">
        <h2 className="text-xl text-center font-black pb-2 md:hidden">TRANSPORTE</h2>
        <div className="flex flex-col lg:flex-row align-center">
          <div className="flex justify-center lg:justify-start lg:pl-32 lg:w-7/12">
            <Image src="/images/transport.png" height={700} width={750} alt="foto de camión RYMSA"/>
          </div>
          <div className="flex flex-col items-center justify-center px-10 py-5 lg:w-4/12">
            <div className="">
            <h2 className="text-xl text-center font-black pb-2 hidden md:block">TRANSPORTE</h2>
              <p className="text-center lg:px-16">
                Ponemos a su disposición una amplia variedad de camiones para
                realizar cargas en Centro América:
              </p>
              <ul className="list-square flex flex-col justify-center pl-14 lg:pl-24 py-3">
                <li>Furgones de 53 pies.</li>
                <li>Pipas de 8000 galones.</li>
                <li>Góndolas de carga de 30 toneladas.</li>
                <li>Plataformas de arrastre.</li>
              </ul>
            </div>
            <button className="bg-blue text-white text-sm h-12 w-48 px-4 my-6 rounded shadow-customBtn">
            <a href="https://api.whatsapp.com/send?phone=+50230342085">Cotizar ahora</a>
            </button>
          </div>
        </div>
      </div>
      <div className="pt-12">
        <h2 className="text-xl text-center font-black pb-2 md:hidden">PRODUCCIÓN</h2>
        <div className="pb-8 flex flex-col lg:flex-row-reverse align-center">
          <div className="flex justify-center lg:pr-40 lg:w-7/12">
          <Image src="/images/sertoy.png" height={700} width={750} alt="Foto del taller"/>
          </div>
          <div className="flex flex-col items-center justify-center px-10 py-5 lg:w-4/12 lg:px-24">
          <h2 className="text-xl text-center font-black pb-2 hidden md:block">PRODUCCIÓN</h2>
            <div className="">
              <p className="text-center">
                Conoce SERTOY, marca pionera a nivel nacional en la producción de partes especializadas para el transporte terrestre.
              </p>
            </div>
            <button className="bg-blue text-white text-sm h-12 w-48 px-4 my-6 rounded shadow-customBtn">
            <a href="https://api.whatsapp.com/send?phone=+50230342085">Cotizar ahora</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
