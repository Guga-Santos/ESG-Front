import { LinesChart } from "@/components/LinesCharts";
import { MixedChart } from "@/components/MixedChart";

export default function ChartPage(props: {}){
  return(
    <div className="flex min-h-screen flex-wrap items-center justify-evenly p-12">
        <LinesChart 
        id={"apexchart-example"} 
        categories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} 
        name={"series-1"} 
        data={[30, 40, 35, 50, 49, 60, 70, 91, 125]} 
        type={"area"} 
        height={200} 
        width={400} />
        <LinesChart 
        id={"EEG"} 
        categories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} 
        name={"series-1"} 
        data={[30, 40, 35, 50, 49, 60, 70, 91, 125]} 
        type={"line"} 
        height={200} 
        width={400} />
        <LinesChart 
        id={"EEG"} 
        categories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} 
        name={"series-1"} 
        data={[30, 40, 35, 50, 49, 60, 70, 91, 125]} 
        type={"bar"} 
        height={200} 
        width={400} />
        <LinesChart 
        id={"EEG"} 
        categories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} 
        name={"ESG"} 
        data={[30, 40, 35, 50, 49, 60, 70, 91, 125]} 
        type={"heatmap"} 
        height={200} 
        width={400} />
        <LinesChart 
        id={"EEG"} 
        categories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]} 
        name={"series-1"} 
        data={[30, 40, 35, 50, 49, 60, 70, 91, 125]} 
        type={"radar"} 
        height={400} 
        width={400} />  
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
        height={400} 
        width={400} />  
        </div>
  )
}