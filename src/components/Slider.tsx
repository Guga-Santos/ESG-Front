/* eslint-disable @next/next/no-img-element */

import { PageContext } from '@/utils/PageContext';
import isMobile from 'is-mobile';
import { useContext, useEffect, useState } from 'react';


export default function Slider() {
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>();
  const { darkmode } = useContext(PageContext);

  useEffect(() => {
    setIsMobileDevice(isMobile());
  }, []);

  return (
    <div className='flex flex-col min-h-screen relative bg-[#d9ed92]'>
      <div className={isMobileDevice ? "w-screen pt-12 min-h-[80%]" : "w-screen"}>
          <img 
          className={isMobileDevice ? "w-screen h-full object-cover" : "fixed w-screen h-full object-cover mt-12"}
          src={isMobileDevice 
          ? "https://i.pinimg.com/564x/16/5a/cc/165acc364c6c56e52108cb7efe92ea70.jpg" 
          : "https://mercadoeconsumo.com.br/wp-content/uploads/2022/06/M3rc4doConsumo-shutterstock_2053227626.jpg"} alt="..." />

      </div>
      <div 
      className={isMobileDevice 
      ? `${!darkmode ? 'bg-[#00001e]' : 'bg-[#d9ed92]'} waveOneMobil w-screen h-1/2 z-10 absolute top-80`
      : `${!darkmode ? 'waveOne bg-[#00001e]' : 'waveThree bg-[#d9ed92]'} w-screen h-1/2 z-10 absolute top-80 mt-4`} />
      <div className={isMobileDevice 
        ? 'waveTwoMobil  w-screen bg-white h-1/2 z-10 absolute top-96 -mt-12' 
        : 'waveTwo bg-white w-screen h-1/2 z-10 absolute top-80 mt-4'} />
      <div className={isMobileDevice 
        ? `${darkmode ? 'bg-[#00001e]' : 'bg-[#d9ed92]'} waveThreeMobil w-screen h-2/3 z-10 absolute top-96 -mt-32` 
        : `${darkmode ? 'waveOne bg-[#00001e]' : 'waveThree bg-[#d9ed92]'} w-screen h-1/2 z-10 absolute top-96 mt-2`} />
    </div>
  )
}

// 