import { useState } from "react";
import Image from "next/image";

export default function Quote() {
  return (
    <>
      <div className="py-8 bg-darkBlue w-screen">
        <div className="w-4/5 flex flex-col mx-auto text-xl text-center justify-center text-white font-black px-4 sm:px-6 lg:px-8 lg:flex-row">
          <div className="lg:px-1">SIEMPRE PARA ADELANTE,</div>
          <div className="lg:px-1">NADA DE PÉRDIDAS,</div>
          <div className="lg:px-1">SOLO GANANCIAS.</div>
        </div>
      </div>
    </>
  );
}
