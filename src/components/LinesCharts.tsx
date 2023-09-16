'use client' // if you use app dir, don't forget this line

import { ILineChartProps } from "@/interfaces/chartProps";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


export function LinesChart(props: ILineChartProps){

    const option = {
        chart: {
          id: props.id
        },
        xaxis: {
          categories: props.categories,
        },
        title: {
          text: 'ESG-Data',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  '#FFF'
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: "vertical",
            shadeIntensity: 0.1,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.5,
            stops: [0, 95, 100],
            colorStops: []
          }
        },

      }

    const series = [{
        name: props.name,
        data: props.data
      }]

    return(
        <div className="mb-6 text-black">
             <ApexChart 
            type={props.type} 
            options={option} 
            series={series} 
            height={props.height} 
            width={props.width}
            animate />
        </div>
    )
    
}