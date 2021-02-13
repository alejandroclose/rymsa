import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="w-screen">
      <div className="bg-white">
        <nav className="bg-white shadow-custom1">
          <div className=" mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex w-screen">
                <div className="flex-shrink-0 flex items-center text-2xl text-red leading-9 font-racing">
                  R&MSA
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                    alt="Workflow"
                  /> */}
                </div>
                <div className="hidden w-full justify-end sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {/* <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" --> */}
                  <a
                    href="#"
                    className="border-transparent inline-flex items-center px-1 pt-1 border-b-2 text-sm text-blue font-medium"
                  >
                    Conócenos
                  </a>

                  <a
                    href="#"
                    className="border-transparent hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm text-blue font-medium"
                  >
                    Soluciones
                  </a>

                  <a
                    href="#"
                    className="border-transparent hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm text-blue font-medium"
                  >
                    Contacto
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center"></div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* <!-- Mobile menu button --> */}
                <button className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setIsOpen(!isOpen)}>
                  <span className="sr-only">Abrir menú</span>
                  {/* <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
                  <svg
                    className={(isOpen) ? "hidden" :"block h-6 w-6"}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* <!--Heroicon name: outline/x--> */}
                  <svg
                    className={(isOpen) ? "block" : "hidden h-6 w-6"}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* <!--
      Mobile menu, toggle classNamees based on menu state.

      Open: "block", closed: "hidden"
    --> */}
          <div className={(isOpen) ? "block" :"hidden sm:hidden"}>
            <div className="pt-2 pb-3 space-y-1">
              {/* <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" --> */}
              <a
                href="#"
                className="border-transparent block pl-3 pr-4 py-2 border-l-4 text-base text-blue font-medium"
              >
                Conócenos
              </a>

              <a
                href="#"
                className="border-transparent block pl-3 pr-4 py-2 border-l-4 text-base text-blue font-medium"
              >
                Soluciones
              </a>

              <a
                href="#"
                className="border-transparent block pl-3 pr-4 py-2 border-l-4 text-base text-blue font-medium"
              >
                Contacto
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
