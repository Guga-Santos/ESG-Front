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
    className={`${darkmode ? 'dark': ''} w-screen bg-[#d9ed92] absolute flex flex-col`}>
      <Header />

      <div 
      className={`${darkmode ? "bg-[#00001e]" : "bg-[#d9ed92]"} w-screen h-screen ${isMobileDevice ? 'mt-12' : 'mt-20'} relative`}>
        
        <div className={`topWave ${darkmode ? "bg-[#d9ed92]" : "bg-[#00001e]"} h-80`}/>
        <div className="flex justify-between">
          <div className={isMobileDevice ? "w-screen p-10 absolute top-12" : "absolute w-[50%] top-28 right-[10%]"}>
            <h1 className={isMobileDevice ? "my-2 text-3xl" : "my-8 text-5xl"}>SOBRE NÓS</h1>
            <p className={isMobileDevice ? "my-2 text-lg" : "my-2 text-2xl"}>Bem-vindo ao ESG Simplify, o seu parceiro confiável na jornada em direção a um mundo mais sustentável e consciente. Somos apaixonados por simplificar a complexidade dos relatórios de sustentabilidade e tornar a informação sobre ESG (Ambiental, Social e Governança) e as ODS (Objetivos de Desenvolvimento Sustentável) acessível a todos.</p>
          </div>
          <img
          loading="lazy" 
          src="/images/aboutFirst.svg" 
          alt="svg" 
          className={isMobileDevice ? "absolute bottom-16" : "h-3/4 absolute top-10"} />
        </div>
      </div>


      <div 
      className={`${darkmode ?  "bg-[#d9ed92]" : "bg-[#00001e]"} w-screen h-screen relative`}>
        <div className={`topWave ${!darkmode ? "bg-[#d9ed92]" : "bg-[#00001e]"} h-80 -mt-2`}/>
          <div className="flex justify-between bg-[#00001e]">
            <div className={isMobileDevice ? "w-screen p-10 absolute top-[5%]" : "absolute w-[50%] top-[25%] left-[5%]"}>
              <h1 className={isMobileDevice ? "my-2 text-3xl" : "my-8 text-5xl"}>QUEM SOMOS</h1>
              <p className={isMobileDevice ? "my-2 text-lg" : "my-2 text-2xl"}>No ESG Simplify, acreditamos que cada indivíduo pode fazer a diferença. Nosso objetivo é capacitar você a tomar decisões informadas sobre investimentos e consumo, promovendo um impacto positivo no mundo. Somos uma equipe diversificada de especialistas em sustentabilidade, tecnologia e design, unidos por uma visão compartilhada de um planeta mais verde e equitativo.</p>
            </div>
            <img
            loading="lazy" 
            src="/images/aboutSec.svg" 
            alt="svg" 
            className={isMobileDevice ? "absolute top-[50%]" : "h-3/4 absolute top-[25%] right-[5%]"} />
         </div>
      </div>

      
      <div 
      className={`${darkmode ? "bg-[#00001e]" : "bg-[#d9ed92]"} w-screen h-screen relative`}>
        <div className={`topWave ${darkmode ? "bg-[#d9ed92]" : "bg-[#00001e]"} h-80`}/>
        <div className="flex justify-between bg-[#00001e]">
            <div className={isMobileDevice ? "w-screen p-10 absolute top-[5%]" : "absolute w-[50%] top-[25%] right-[5%]"}>
              <h1 className={isMobileDevice ? "my-2 text-3xl" : "my-8 text-5xl"}>NOSSA MISSÃO</h1>
              <p className={isMobileDevice ? "my-2 text-lg" : "my-2 text-2xl"}>Nossa missão é simples: simplificar. Queremos simplificar o acesso a informações essenciais sobre ESG e ODS, para que você possa agir com consciência e responsabilidade. Acreditamos que, ao tornar os relatórios de sustentabilidade mais compreensíveis e visuais, podemos inspirar mudanças positivas em indivíduos, empresas e comunidades.</p>
            </div>
            <img
            loading="lazy" 
            src="/images/aboutThi.svg" 
            alt="svg" 
            className={isMobileDevice ? "absolute top-[50%]" : "h-3/4 absolute top-[25%] left-[5%]"} />
         </div>

      </div>


      <div 
      className={`${darkmode ?  "bg-[#d9ed92]" : "bg-[#00001e]"} w-screen h-screen relative`}>
        <div className={`topWave ${!darkmode ? "bg-[#d9ed92]" : "bg-[#00001e]"} h-80 -mt-2`}/>
          <div className="flex justify-between bg-[#00001e]">
            <div className={isMobileDevice ? "w-screen p-10 absolute top-[5%]" : "absolute w-[50%] top-[25%] left-[5%]"}>
              <h1 className={isMobileDevice ? "my-2 text-3xl" : "my-8 text-5xl"}>O QUE FAZEMOS</h1>
              <p className={isMobileDevice ? "my-2 text-lg" : "my-2 text-2xl"}>Transformamos dados complexos em gráficos fáceis de entender, permitindo que você avalie o desempenho de empresas em relação aos critérios ESG e seu alinhamento com as ODS. Nosso aplicativo é uma ferramenta poderosa para investidores conscientes, consumidores responsáveis e todos que desejam fazer escolhas sustentáveis.</p>
            </div>
            <img
            loading="lazy" 
            src="/images/aboutFou.svg" 
            alt="svg" 
            className={isMobileDevice ? "absolute top-[50%]" : "h-3/4 absolute top-[25%] right-[5%]"} />
         </div>
      </div>

      <div 
      className={`${darkmode ? "bg-[#00001e]" : "bg-[#d9ed92]"} w-screen h-screen relative`}>
        <div className={`topWave ${darkmode ? "bg-[#d9ed92]" : "bg-[#00001e]"} h-80 -mt-2`}/>
        <div className="flex justify-between bg-[#00001e]">
            <div className={isMobileDevice ? "w-screen p-10 absolute top-[5%]" : "absolute w-[50%] top-[25%] right-[5%]"}>
              <h1 className={isMobileDevice ? "my-2 text-3xl" : "my-8 text-5xl"}>Junte-se a Nós!!</h1>
              <p className={isMobileDevice ? "my-2 text-lg" : "my-2 text-2xl"}>Junte-se à nossa comunidade global de pessoas comprometidas com um futuro mais brilhante. No ESG Simplify, acreditamos que, juntos, podemos criar um impacto positivo duradouro no mundo. Explore o aplicativo, compartilhe sua jornada e inspire outros a se unirem à causa.
              </p>
              <p className={isMobileDevice ? "my-2 text-lg" : "my-2 text-2xl"}>Seja parte da mudança. Seja parte do ESG Simplify!</p>
            </div>
            <img
            loading="lazy" 
            src="/images/aboutFiv.svg" 
            alt="svg" 
            className={isMobileDevice ? "absolute top-[50%]" : "h-3/4 absolute top-[25%] left-[5%]"} />
         </div>

      </div>

    </div>
  )
}