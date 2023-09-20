/* eslint-disable @next/next/no-img-element */
import isMobile from 'is-mobile';
import { useEffect, useState } from 'react';



export default function OdsTexts() {
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false);
  const [darkmode, setDarkMode] = useState<boolean>();

  
  useEffect(() => {
    ;(async () => {
      const localData = localStorage.getItem('darkmode');
      setDarkMode(localData === 'true');
      setIsMobileDevice(isMobile());
    })();
  }, []);

  return (
    <div className={`w-screen text-lg ${isMobileDevice ? "px-3" : "px-28"} text-justify`}>
      <div className={`${isMobileDevice ? 'flex flex-col -mt-64' : 'flex -mt-12'} items-center `}>
        <img src="/images/climateChange.svg" alt="a sad planet" width={350} className='' />
        <p className={`${isMobileDevice ? '' : 'mt-20'}`}>Os Objetivos de Desenvolvimento Sustentável, ou ODS, representam um apelo global à ação para criar um mundo mais equitativo, saudável e sustentável até 2030. Estabelecidos pela Organização das Nações Unidas (ONU) em 2015, esses 17 objetivos são a espinha dorsal de uma visão compartilhada para um futuro melhor.</p>
      </div>

      <div className="mt-8">
        <h1 className="text-xl font-bold mb-3">O Que São as ODS?</h1>
        <p>As ODS são metas ambiciosas que abordam uma ampla gama de desafios globais, desde a erradicação da pobreza até a promoção da igualdade de gênero, a proteção do meio ambiente e o fortalecimento da paz e justiça. Elas foram desenvolvidas para abordar interligações complexas entre questões sociais, econômicas e ambientais, reconhecendo que não podemos resolver um problema sem considerar seu impacto em outros.</p>
      </div>

      <div className="mt-8">
        <h1 className="text-xl font-bold mb-3">Por Que as ODS São Importantes?</h1>
        <p>As ODS são um farol para um mundo melhor. Elas nos lembram que todos compartilhamos a responsabilidade de moldar o futuro do nosso planeta e melhorar a vida das gerações presentes e futuras. As ODS oferecem um roteiro para:</p>
        <br />
        <ul>
          <li>- Reduzir desigualdades e promover a justiça social.</li>
          <li>- Proteger nosso planeta e garantir sua sustentabilidade a longo prazo.</li>
          <li>- Melhorar a saúde e o bem-estar das pessoas.</li>
          <li>- Fomentar a inovação e o desenvolvimento econômico inclusivo.</li>
        </ul>
        <br />
        <p>Ao explorar as metas das ODS, você está dando um passo importante para entender como cada um de nós pode contribuir para a realização desses objetivos vitais. Juntos, podemos criar um mundo onde ninguém seja deixado para trás, onde a natureza seja respeitada e onde todos possam prosperar.</p>
      </div>

      <div className="mt-8">
        <h1 className="text-xl font-bold mb-3">Explore Nossos Cards para Detalhes</h1>
        <p>Navegue pelos cards abaixo para explorar cada Objetivo de Desenvolvimento Sustentável e suas metas específicas. Clique em um card para descobrir como você pode desempenhar um papel ativo na realização desses objetivos e ajudar a construir um futuro mais brilhante para todos.</p>
        <br/>
        <p>Juntos, podemos transformar os ODS em ações concretas e criar um mundo mais sustentável e equitativo para todos!</p>
      </div>
    </div>
  )
}

