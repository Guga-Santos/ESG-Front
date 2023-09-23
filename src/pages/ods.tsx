/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import OdsTexts from "@/components/OdsTexts";
import PageWrapper from "@/utils/PageWrapper";
import isMobile from 'is-mobile';
import { useEffect, useState } from "react";
import odsTexts from '../../public/Metas/metas.json';
import odsImages from '../../public/images/ODS/odsPaths.json';


export default function Ods() {
  const [darkmode, setDarkMode] = useState<boolean>();
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);
  const [click, setClick] = useState<boolean>(false);
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    ;(async () => {
      const localData = localStorage.getItem('darkmode');
      setDarkMode(localData === 'true');
      setIsMobileDevice(isMobile());
    })();
  }, []);

  const handleClick = (id: string) => {
    if(id !== '17') {
      setClick(!click)
      setPosition(+id);
    }
  }
  
  return (
    <div 
    className={`${darkmode ? 'dark': ''} w-screen ${isMobileDevice ? "min-h-[420%]" : "min-h-[310%]"} ${darkmode ? 'bg-[#00001e]  text-[#d9ed92]' : 'bg-[#d9ed92] text-[#00001e]'} absolute flex flex-col`}>
      <Header />
      <div className={`topWave ${darkmode ? 'bg-[#d9ed92]' : 'bg-[#00001e]'} h-80 ${isMobileDevice ? "mt-12" : "mt-20 -mb-52"}`} />
      <OdsTexts />

      <div className={`flex flex-wrap gap-4 justify-center p-8  ${isMobileDevice ? "top-[56%]" : "top-[68%]"}`}>
      {odsImages.map((path, index) => (
        <PageWrapper key={index}>
          <img 
          src={path} 
          alt="ods image" 
          key={index}
          id={index.toString()}
          width={160}
          height={160}
          onClick={(e) => handleClick((e.target as HTMLImageElement).id)}
          className="
          shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] 
          hover:shadow-[rgba(50,50,93,0.5)_0px_6px_12px_-2px,_rgba(0,0,0,0.5)_0px_3px_7px_-3px] 
          active:shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] cursor-pointer"/>
        </PageWrapper>
      ))}
      </div>
      {
        click 
        && <div 
        className="fixed z-50 bg-[rgba(0,0,0,0.5)] w-full p-4 h-[100%] w-[100%] flex justify-center items-center"
        onClick={() => setClick(!click)}> 
          <div className={`${isMobileDevice ? "h-[90%] w-[95%]" : "h-[80%] w-[80%]"} bg-white`}>
          <div
          className="h-full w-full overflow-y-scroll"

          >
            <div className={`${!darkmode ? 'bg-[#d9ed92]' : 'bg-[#00001e]'} pb-4`}>
            <div className={`topWave ${darkmode ? 'bg-[#d9ed92]' : 'bg-[#00001e]'} h-80 -mb-64 `} />
            <h1 className={`${isMobileDevice ? "text-lg" : "text-3xl"} mx-8 pt-6 text-semibold`}>{odsTexts[position].titulo}</h1>
              { odsTexts[position].meta.map((phrase, index) => (
                <PageWrapper key={index}>
                  <p  className="text-lg text-justify mt-8 px-8">{phrase}</p>
                </PageWrapper>
              ))}
              <PageWrapper>
                <img src={odsTexts[position].imagem} alt="imagem referente a ods" className={`mt-6 ${isMobileDevice ? "" : "m-auto w-2/3"}`} />
              </PageWrapper>
            </div>
            </div>
          </div>
        </div>
      }
    <div className={`bottomWave ${ darkmode ? "bg-[#d9ed92]" : "bg-[#00001e]"} h-80 -mb-8 -mt-40`} />
    </div>
  )
}