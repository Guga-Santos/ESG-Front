/* eslint-disable jsx-a11y/alt-text */
'use client'
import isMobile from 'is-mobile';
import { useEffect, useState } from "react";
/* eslint-disable @next/next/no-img-element */
export default function Header() {
  const [hidded, setHidded] = useState<boolean>(false);
  const [isMobileDevice, setIsMobileDevice] = useState(true);

  useEffect(() => {
    setIsMobileDevice(isMobile())
  }, [])

  function handleDrop() {
    setHidded(!hidded);
    setIsMobileDevice(!isMobileDevice);
  }

  return (
    <header className="w-96 lg:w-full">
      <nav className="bg-grey border-gray-200 lg:px-6 py-2.5 dark:bg-gray-800 sm-w-auto">
        <div className="flex flex-wrap justify-between sm-w-screen items-center mx-auto max-w-screen-xl lg:p-3">
          <a href="" className="flex items-center">
            <img className="ml-4 h-10 lg:mr-12 sm:mr-2 rounded-xl sm:h-9 lg:w-40 md:w-40 sm:w-20" alt="Flowbite Logo" src="https://i.ibb.co/b1tbW5R/Captura-de-tela-de-2023-09-14-11-47-44.png"/>
          </a>
          <div className="flex flex-wrap items-center lg:order-2">
            <a href="#" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
            <a href="#" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get </a>
            <button
              onClick={() => handleDrop()}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <svg className={hidded ? "hidden" : "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
              </svg>
              <svg className={!hidded ? "hidden" : "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className={isMobileDevice ? "hidden" : "justify-between items-center w-full lg:flex lg:w-auto lg:order-1"} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:mr-4">
              <li>
                <a href="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sobre</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Setores</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Empresas</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
