import Header from "@/components/Header";
import isMobile from 'is-mobile';
import { useEffect, useState } from "react";

export default function Esg() {
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
      <div className={`bg-white w-screen h-screen ${isMobileDevice ? 'mt-12' : 'mt-20'} relative`}>
        <div className="topWave bg-[#00001e] h-80" />
        <h1 className={`text-[#00001e] ${isMobileDevice ? 'text-xl' : 'text-4xl'} absolute top-[15%] left-[10%]`}>VOCÊ SABE O QUE É ESG?</h1>
      </div>
    </div>
  )
}