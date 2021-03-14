import { useState } from "react";
import Image from "next/image";

export default function ReferedBy() {
  return (
    <>
      <div className="pt-8">
        <h2 className="text-xl text-center font-bold pb-2">
          Empresas que nos avalan:
        </h2>
        <div>
          <div className="mx-auto w-full">
            <dl className="flex flex-col md:flex-row items-center justify-around">
              <div className="w-72 flex flex-col items-center py-6">
                <Image src="/images/ingrup.png" width={100} height={100} />
              </div>
              <div className="w-72 flex flex-col items-center py-6">
                <Image src="/images/magdalena.png" width={100} height={100} />
              </div>
              <div className="w-72 flex flex-col items-center py-6">
                <Image src="/images/kerns.png" width={100} height={100} />
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
