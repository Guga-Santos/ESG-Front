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
      <div className={`${!darkmode ? 'bg-[#d9ed92] text-[#00001e]' : 'bg-[#00001e] text-[#d9ed92]'} w-screen ${isMobileDevice ? 'mt-12' : 'mt-20'} relative`}>
        <div className={`topWave ${ darkmode ? "bg-[#d9ed92]" : "bg-[#00001e]"} h-80 -mb-64`} />
          <div className={`p-8 ${isMobileDevice ? "px-3" : "px-28"}`}>
            <h1 className="text-3xl font-bold mb-4">Entendendo ESG - Sustentabilidade Simplificada</h1>

            <p className="text-lg mb-4">
              Bem-vindo à seção ESG do ESG Simplify, onde simplificamos a complexa paisagem da sustentabilidade empresarial para você. Entenda o que é ESG, descubra por que as empresas estão adotando essa abordagem e explore como você pode se tornar parte de uma mudança positiva para o mundo. Vamos começar!
            </p>

            <h2 className="text-2xl font-semibold mb-2">O que é ESG?</h2>
            <p className="text-lg mb-4">
              ESG é uma sigla que representa <strong>Ambiental (Environmental), Social (Social) e Governança (Governance).</strong> Esses três pilares compõem a estrutura fundamental que as empresas utilizam para avaliar e comunicar seu desempenho em áreas relacionadas à sustentabilidade. Aqui está o que cada um deles significa:
            </p>

            <ol className="list-decimal pl-6">
              <li className="text-lg mb-4">
                <strong>Ambiental (E - Environmental):</strong> Esta dimensão trata das práticas e impactos ambientais das empresas. Isso inclui a gestão de recursos naturais, emissões de carbono, conservação da biodiversidade, descarte de resíduos e muito mais.
              </li>

              <li className="text-lg mb-4">
                <strong>Social (S - Social):</strong> A dimensão social concentra-se nas relações da empresa com funcionários, clientes, comunidades e sociedade em geral. Questões de igualdade, diversidade, segurança no trabalho e responsabilidade social corporativa entram aqui.
              </li>

              <li className="text-lg mb-4">
                <strong>Governança (G - Governance):</strong> A dimensão de governança refere-se à forma como as empresas são administradas e controladas. Envolve a estrutura de liderança, a transparência, a prestação de contas e a ética nos negócios.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold mb-2">A Tendência ESG: Por que Importa?</h2>
            <p className="text-lg mb-4">
              Nos últimos anos, a sustentabilidade empresarial tornou-se uma tendência global. As empresas estão percebendo a importância de alinhar suas práticas com os princípios ESG por várias razões:
            </p>

            <ul className="list-disc pl-6">
              <li className="text-lg mb-4">
                <strong>Responsabilidade Social:</strong> Empresas desempenham um papel vital na promoção do bem-estar social e ambiental. Adotar práticas ESG é uma forma de cumprir essa responsabilidade.
              </li>

              <li className="text-lg mb-4">
                <strong>Gestão de Riscos:</strong> ESG ajuda a identificar e mitigar riscos relacionados a questões ambientais, sociais e de governança, protegendo a reputação e a estabilidade das empresas.
              </li>

              <li className="text-lg mb-4">
                <strong>Atração de Investimentos:</strong> Investidores e fundos estão direcionando seus recursos para empresas com boas classificações ESG, impulsionando o interesse das empresas na sustentabilidade.
              </li>

              <li className="text-lg mb-4">
                <strong>Crescimento Sustentável:</strong> Empresas que incorporam ESG estão mais bem posicionadas para o crescimento a longo prazo, atendendo às necessidades das gerações futuras.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Como Você Pode Contribuir?</h2>
            <p className="text-lg mb-4">
              Você, como consumidor, tem o poder de influenciar as práticas das empresas. Ao se informar sobre ESG e apoiar empresas que abraçam esses princípios, você está contribuindo para um mundo mais sustentável. Use nosso aplicativo para encontrar relatórios de sustentabilidade simplificados e tome decisões informadas sobre onde investir seu tempo e dinheiro.
            </p>

            <p className="text-lg">
              Explorar e compreender ESG é um passo importante para um futuro mais consciente e responsável. Juntos, podemos fazer a diferença!
            </p>
        </div>
      </div>
    </div>
  )
}