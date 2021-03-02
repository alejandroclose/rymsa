import { useState } from "react";
import Image from "next/image";

export default function Services(props) {
  return (
    <>
      <div className="pt-12">
        <h2 className="text-xl text-center font-black pb-2">TRANSPORTE</h2>
        <div className="flex flex-col lg:flex-row align-center">
          <Image src="/images/transport.png" height={400} width={400} />
          <div className="flex flex-col items-center px-10 py-5">
            <div className="">
              <p className="text-center">
                Ponemos a su disposición una amplia variedad de camiones para
                realizar cargas en Centro América:
              </p>
              <ul className="list-square pl-10 py-3">
                <li>Furgones de 53 pies.</li>
                <li>Pipas de 8000 galones.</li>
                <li>Góndolas de carga de 30 toneladas.</li>
                <li>Plataformas de arrastre.</li>
              </ul>
            </div>
            <button className="bg-blue text-white text-sm h-12 w-48 px-4 my-6 rounded shadow-customBtn">
              Cotizar ahora
            </button>
          </div>
        </div>
      </div>
      <div className="pt-12">
        <h2 className="text-xl text-center font-black pb-2">PRODUCCIÓN</h2>
        <div className="flex flex-col lg:flex-row-reverse align-center">
          <Image src="/images/sertoy.png" height={400} width={400} />
          <div className="flex flex-col items-center px-10 py-5">
            <div className="">
              <p className="text-center">
                Conoce SERTOY, marca pionera a nivel nacional en la producción de partes especializadas para el transporte terrestre.
              </p>
            </div>
            <button className="bg-blue text-white text-sm h-12 w-48 px-4 my-6 rounded shadow-customBtn">
              Cotizar ahora
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
