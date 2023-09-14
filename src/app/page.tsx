import Header from "@/components/Header";
import { LinesChart } from "@/components/LinesCharts";
import { MixedChart } from "@/components/MixedChart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Header />
      <div>
      <LinesChart 
      id={"apexchart-example"} 
      categories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} 
      name={"series-1"} 
      data={[30, 40, 35, 50, 49, 60, 70, 91, 125]} 
      type={"area"} 
      height={200} 
      width={500} />
      <LinesChart 
      id={"EEG"} 
      categories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} 
      name={"series-1"} 
      data={[30, 40, 35, 50, 49, 60, 70, 91, 125]} 
      type={"line"} 
      height={200} 
      width={500} />
      <LinesChart 
      id={"EEG"} 
      categories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} 
      name={"series-1"} 
      data={[30, 40, 35, 50, 49, 60, 70, 91, 125]} 
      type={"bar"} 
      height={200} 
      width={500} />
      <LinesChart 
      id={"EEG"} 
      categories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} 
      name={"ESG"} 
      data={[30, 40, 35, 50, 49, 60, 70, 91, 125]} 
      type={"heatmap"} 
      height={200} 
      width={500} />
      <LinesChart 
      id={"EEG"} 
      categories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} 
      name={"series-1"} 
      data={[30, 40, 35, 50, 49, 60, 70, 91, 125]} 
      type={"radar"} 
      height={500} 
      width={500} />  
      <MixedChart  
      id={"EEG"} 
      categories={[1991, 1992, 1993, 1994, 1995, 1996, 1997]} 
      name={"Natura-ESG"} 
      series={[{
        name: 'Carbono Neutro',
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: 'Descarte de resíduos',
        data: [53, 32, 33, 52, 13, 43, 32]
      }, {
        name: 'Energia Limpa',
        data: [12, 17, 11, 9, 15, 11, 20]
      }, {
        name: 'Produção sustentável',
        data: [9, 7, 5, 8, 6, 9, 4]
      }, {
        name: 'Reciclagem',
        data: [25, 12, 19, 32, 25, 24, 10]
      }]}
      type={"bar"} 
      height={500} 
      width={800} />  
      </div>
    </main>
  )
}
