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
    className={`${darkmode ? 'dark': ''} w-screen min-h-screen bg-[#d9ed92] absolute flex flex-col`}>
      <Header />
 
        <div className={`topWave bg-[#00001e] h-80 ${isMobileDevice ? "mt-12" : "mt-20"}`} />

      <div className="flex flex-wrap gap-6 justify-center p-12">
      {ods.map((path, index) => (
        <img 
        src={path} 
        alt="ods image" 
        key={index}
        width={160}
        height={160}/>
      ))}
      </div>
    </div>
  )
}