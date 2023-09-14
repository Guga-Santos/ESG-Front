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
          categories: props.categories
        }
      }

    const series = [{
        name: props.name,
        data: props.data
      }]

    return(
        <>
            <ApexChart 
            type={props.type} 
            options={option} 
            series={series} 
            height={props.height} 
            width={props.width} />
        </>
    )
    
}