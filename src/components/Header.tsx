/* eslint-disable jsx-a11y/alt-text */
'use client'
import { PageContext } from '@/utils/PageContext';
import isMobile from 'is-mobile';
import { useContext, useEffect, useState } from "react";
/* eslint-disable @next/next/no-img-element */
export default function Header() {
  const [hidded, setHidded] = useState<boolean>(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const {darkmode, setDarkmode} = useContext(PageContext);
  useEffect(() => {
    setIsMobileDevice(isMobile())
  }, [])

  function handleDrop() {
    setHidded(!hidded);
    setIsMobileDevice(!isMobileDevice);
  }

  function handleDarkMode() {
    setDarkmode(!darkmode);
    localStorage.setItem('darkmode', JSON.stringify(!darkmode));
  }

  return (
    <header className="
    w-screen bg-[#FFF] 
    fixed top-0 
    z-50 
    shadow-[rgba(0,_0,_0,_0.2)_0px_1px_18px]">
      <nav className="bg-grey border-gray-200 lg:px-6 py-2.5 dark:bg-gray-800 sm-w-screen">
        <div className="flex flex-wrap justify-between sm-w-screen items-center mx-auto max-w-screen-xl lg:p-3">
          <a href="/" className="flex items-center">
            <img className="ml-4 h-10 lg:mr-12 sm:mr-2 rounded-xl sm:h-9 lg:w-40 md:w-40 sm:w-20" alt="Flowbite Logo" src={!isMobileDevice ? "https://i.ibb.co/JjK8RZy/Captura-de-tela-de-2023-09-17-19-07-03.png" : "https://i.ibb.co/Wvs7gVc/Captura-de-tela-de-2023-09-17-19-07-26.png"}/>
          </a>
          <div className="flex flex-wrap items-center lg:order-2">
            <a href="#" className="text-gray-300 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
            <button
            type="button"
            onClick={() => handleDarkMode()}
            className="h-10 w-14 text-white justify-center bg-transparent font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="black" 
              className={darkmode ? "hidden" : "inline-block h-6 w-6"}>
                      <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
              </svg>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className={!darkmode ? "hidden" : "inline-block h-5 w-5"}>
                      <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"></path>
                    </svg>
               </button>
            <button
              onClick={() => handleDrop()}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <svg className={hidded ? "hidden" : "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
              <svg className={!hidded ? "hidden" : "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
            
          </div>
          <div className={isMobileDevice ? "hidden" : "justify-center items-center w-full lg:flex lg:w-3/5 lg:order-1"} id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:mr-4 lg:w-4/5 justify-between">
              <li>
                <a href="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sobre</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Setores</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Empresas</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-gray-400 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
