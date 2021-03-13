import { useState } from "react";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="pt-16 pb-8 px-8 bg-darkBlue w-screen">
        <div className="mx-auto text-white px-4 sm:px-6 lg:px-8">
          <div className="text-xl font-black">CONÓCENOS</div>
          <div className="py-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.080712211453!2d-90.59603092055713!3d14.500703636786353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a78c273f80e9%3A0xb18b0eece2c5a6c5!2s16%20Avenida%2C%20Villa%20Nueva%2C%20Guatemala!5e0!3m2!1sen!2ses!4v1615662024532!5m2!1sen!2ses"
              width="275"
              height="275"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <div className="font-semibold text-lg pt-1">Ubicación</div>
            <div className="font-normal text-base pb-4">
              16 Avenida 7-88 zona 4 de Villanueva, El Sarsal, Guatemaala,
              Guatemala
            </div>
            <div className="font-semibold text-lg pt-1">Teléfono</div>
            <div className="font-normal text-base pb-4">
              <a href="tel:+50230342085">+502-3034-2085</a>
            </div>
            <div className="font-semibold text-lg pt-1">
              Horario de Atención
            </div>
            <div className="font-normal text-base pb-2">24/7</div>
          </div>
        </div>
      </div>
      <div className="bg-darkBlue w-screen mx-auto py-1 px-4 sm:px-6 lg:px-8 flex justify-center">
        <button className="bg-red text-white text-sm h-12 w-48 px-4 my-6 rounded shadow-customBtn">
          <a href="tel:+50230342085">Llama y cotiza</a>
        </button>
        </div>
    </>
  );
}
