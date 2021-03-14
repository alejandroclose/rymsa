import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="bg-hero bg-cover h-hero w-full mx-auto lg:h-heroLg" />
      <div className="w-10/12 my-4 h-full py-10 text-xl text-center flex flex-col items-center lg:absolute lg:top-32">
        <h1 className="font-black">PRODUCIENDO VALOR, TRANSPORTANDO BIENES</h1>
        <div className="font-semibold my-2 lg:w-4/12">
          Servicio internacional de transporte terrestre y especialistas en la{" "}
          <br />
          fabricación de partes para camiones.
        </div>
        <button className="bg-blue text-white text-sm h-12 w-48 px-4 my-6 rounded shadow-customBtn">
          <a href="#contacto">Contacto</a>
        </button>
      </div>
    </>
  );
}
