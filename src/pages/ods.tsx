/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import isMobile from 'is-mobile';
import { useEffect, useState } from "react";
import ods from '../../public/images/ODS/odsPaths.json';

export default function Ods() {
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
    className={`${darkmode ? 'dark': ''} w-screen ${isMobileDevice ? "min-h-[250%]" : "min-h-[150%]"} bg-[#d9ed92] absolute flex flex-col`}>
      <Header />
 
        <div className={`topWave bg-[#00001e] h-80 ${isMobileDevice ? "mt-12" : "mt-20"}`} />

      <div className={`flex flex-wrap gap-6 justify-center p-12 absolute ${isMobileDevice ? "top-[10%]" : "top-[20%]"}`}>
      {ods.map((path, index) => (
        <img 
        src={path} 
        alt="ods image" 
        key={index}
        width={160}
        height={160}
        className="
        shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] 
        hover:shadow-[rgba(50,50,93,0.5)_0px_6px_12px_-2px,_rgba(0,0,0,0.5)_0px_3px_7px_-3px] 
        active:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] cursor-pointer"/>
      ))}
      </div>
    </div>
  )
}