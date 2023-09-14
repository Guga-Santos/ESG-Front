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
        <>
        <div
        className="border-2 rounded-lg p-4 m-6">

            <ApexChart 
            type={props.type} 
            options={option} 
            series={series} 
            height={props.height} 
            width={props.width}
            animate />
        </div>
        </>
    )
    
}