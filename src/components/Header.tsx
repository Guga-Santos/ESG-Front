/* eslint-disable jsx-a11y/alt-text */
import { headerSRC, headerStyle } from '@/styles/Header.styles';
import { PageContext } from '@/utils/PageContext';
import isMobile from 'is-mobile';
import { useContext, useEffect, useState } from "react";
/* eslint-disable @next/next/no-img-element */
export default function Header() {
  const [hidded, setHidded] = useState<boolean>(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const {darkmode, setDarkmode} = useContext(PageContext);
  const [duble, setDuble] = useState<boolean | null>();
  

  useEffect(() => {
    setIsMobileDevice(isMobile());
    const localData = localStorage.getItem('darkmode');
    setDarkmode(localData === 'true');
    setDuble(localData === 'true');
  }, [setDarkmode])

  function handleDrop() {
    setHidded(!hidded);
    setIsMobileDevice(!isMobileDevice);
  }

  function handleDarkMode() {
    setDarkmode(!darkmode);
    setDuble(!duble)
    localStorage.setItem('darkmode', JSON.stringify(!duble));
    window.location.reload();
  }

  return (
    <header className={headerStyle.header}>
      <nav className={headerStyle.nav}>
        <div className={headerStyle.firstDiv}>
          <a href="/" className="flex items-center">
            <img className={headerStyle.image} alt="Simplify Logo" src={!isMobileDevice ? headerSRC.logoG : headerSRC.logoP }/>
          </a>
          <div className="flex flex-wrap items-center lg:order-2">
            <a href="#" className={headerStyle.logInBtn}>Log in</a>
            <button
            type="button"
            onClick={() => handleDarkMode()}
            className={headerStyle.modeBtn}>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="black" 
              className={duble ? "hidden" : "inline-block h-6 w-6"}>
                <path d={headerStyle.sunPath}></path>
              </svg>
              <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className={!duble ? "hidden" : "inline-block h-5 w-5"}>
                <path fillRule="evenodd" d={headerStyle.moonPath} clipRule="evenodd"></path>
              </svg>
            </button>
            <button
              onClick={() => handleDrop()}
              type="button"
              className={headerStyle.dropButton}>
              <svg className={hidded ? "hidden" : "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d={headerStyle.sanduichPath} clipRule="evenodd"></path>
              </svg>
              <svg className={!hidded ? "hidden" : "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d={headerStyle.closePath} clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className={isMobileDevice ? "hidden" : headerStyle.dropDiv} id="mobile-menu-2">
            <ul className={headerStyle.ul}>
              <li>
                <a href="/" className={headerStyle.liHome} aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className={headerStyle.li}>Sobre</a>
              </li>
              <li>
                <a href="#" className={headerStyle.li}>Setores</a>
              </li>
              <li>
                <a href="#" className={headerStyle.li}>Empresas</a>
              </li>
              <li>
                <a href="#" className={headerStyle.li}>Team</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
