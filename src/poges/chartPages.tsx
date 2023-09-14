import { LinesChart } from "@/components/LinesCharts";
import { MixedChart } from "@/components/MixedChart";
import { ILineChartProps } from "@/interfaces/chartProps";

export default function ChartPage(props: Partial<ILineChartProps>){
  return(
    <div className="flex min-h-screen flex-wrap items-center justify-evenly p-12">
      

        <LinesChart 
        id={props.id || ""} 
        categories={props.categories || []} 
        name={props.name || ""} 
        data={props.data || []} 
        type={"area"} 
        height={200} 
        width={400} />

        <LinesChart 
        id={props.id || ""} 
        categories={props.categories || []} 
        name={props.name || ""} 
        data={props.data || []} 
        type={"line"} 
        height={200} 
        width={400} />

        <LinesChart 
         id={props.id || ""} 
         categories={props.categories || []} 
         name={props.name || ""} 
         data={props.data || []} 
        type={"bar"} 
        height={200} 
        width={400} />

        <LinesChart 
        id={props.id || ""} 
        categories={props.categories || []} 
        name={props.name || ""} 
        data={props.data || []} 
        type={"heatmap"} 
        height={200} 
        width={400} />

        <LinesChart 
        id={props.id || ""} 
        categories={props.categories || []} 
        name={props.name || ""} 
        data={props.data || []} 
        type={"radar"} 
        height={400} 
        width={400} />  
        
        <MixedChart  
         id={props.id || ""} 
         categories={props.categories || []} 
         name={props.name || ""} 
        series={[{
          name: 'Carbono Neutro',
          data: [44, 55, 41, 37, 22, 43, 21, 24, 35]
        }, {
          name: 'Descarte de resíduos',
          data: [53, 32, 33, 52, 13, 43, 32, 33, 36]
        }, {
          name: 'Energia Limpa',
          data: [12, 17, 11, 9, 15, 11, 20, 23, 26]
        }, {
          name: 'Produção sustentável',
          data: [9, 7, 5, 8, 6, 9, 4, 5, 10]
        }, {
          name: 'Reciclagem',
          data: [13, 10, 11, 14, 16, 11, 19, 16, 21]
        }]}
        type={"bar"} 
        height={400} 
        width={400} />  
        </div>
  )
}