/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import isMobile from 'is-mobile';
import { useEffect, useState } from "react";

export default function About() {
  const [darkmode, setDarkMode] = useState<boolean>();
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);

  useEffect(() => {
    ;(async () => {
      const localData = localStorage.getItem('darkmode');
      setDarkMode(localData === 'true');
      setIsMobileDevice(isMobile());
    })();
  }, []);
  
  return (
    <div 
    className={`${darkmode ? 'dark': ''} w-screen min-h-screen bg-[#d9ed92] absolute flex flex-col`}>
      <Header />
      <div className={`${darkmode ? "bg-[#00001e]" : "bg-[#d9ed92]"} w-screen h-screen ${isMobileDevice ? 'mt-12' : 'mt-20'} relative`}>
        <div className={`topWave ${darkmode ? "bg-[#d9ed92]" : "bg-[#00001e]"} h-80`}>
        </div>
        <div className="flex justify-between">
          <div className={isMobileDevice ? "w-screen p-10 absolute top-12" : "absolute w-[50%] top-28 right-[10%]"}>
            <h1 className={isMobileDevice ? "my-2 text-3xl" : "my-8 text-5xl"}>SOBRE NÓS</h1>
            <p className={isMobileDevice ? "my-2 text-lg" : "my-2 text-2xl"}>Bem-vindo ao ESG Simplify, o seu parceiro confiável na jornada em direção a um mundo mais sustentável e consciente. Somos apaixonados por simplificar a complexidade dos relatórios de sustentabilidade e tornar a informação sobre ESG (Ambiental, Social e Governança) e as ODS (Objetivos de Desenvolvimento Sustentável) acessível a todos.</p>
          </div>
          <img 
          src="/images/aboutFirst.svg" 
          alt="svg" 
          className={isMobileDevice ? "absolute bottom-16" : "h-3/4 absolute top-10"} />
        </div>
      </div>
    </div>
  )
}