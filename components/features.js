import { useState } from "react";
import Image from "next/image";

export default function Features() {
  return (
    <>
      <div className="py-16 bg-darkBlue w-screen">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <dl className="flex flex-col md:flex-row justify-around px-20">
            <div className="w-52 flex flex-col items-center py-6">
                  <Image src="/images/icons/trust.png" width={30} height={30}/>
                  <dt class="text-xl text-center text-white font-black">
                   CONFIANZA
                  </dt>
                  <dd className="mt-2 h-40 text-white text-center ">
                    Escuchamos y entendemos las necesidades de nuestros clientes.
                  </dd>
                </div>
                <div className="w-52 flex flex-col items-center py-6">
                <Image src="/images/icons/quality.png" width={30} height={30}/>
                  <dt class="text-xl text-white text-center font-black">
                    CALIDAD
                  </dt>
                  <dd className="mt-2 h-40 text-white text-center">
                    Trabajamos con material de alto grado para ofrecer un servicio óptimo.
                  </dd>
                </div>
                <div className="w-52 flex flex-col items-center py-6">
                <Image src="/images/icons/fast.png" width={30} height={30}/>
                  <dt class="text-xl text-white text-center font-black">
                    RAPIDEZ
                  </dt>
                  <dd className="mt-2 h-40 text-white text-center">
                    Servicio 24/7 para cumplir con las expectativas de nuestros clientes.
                  </dd>
                </div>
            </dl>
        </div>
        <div className="w-screen mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-center">
        <button className="bg-red text-white text-sm h-12 w-48 px-4 lg:w-3/12 my-6 rounded shadow-customBtn">
          Conoce nuestros servicios
        </button>
        </div>
      </div>
    </>
  );
}
