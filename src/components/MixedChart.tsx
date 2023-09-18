'use client' // if you use app dir, don't forget this line

import { IMixedProps } from "@/interfaces/chartProps";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


export function MixedChart(props: IMixedProps){

    const option = {
        chart: {
          id: props.id,
          stacked: true,
        },
        xaxis: {
          categories: props.categories
        },
        title: {
          text: "ESG Mixed-Data"
        },
        stroke: {
          width: 2,
          colors: ['#fff']
        },
        plotOptions: {
          bar: {
            horizontal: true,
          },
        }
      }

    const series = props.series
    return(
        <div className="text-black">
            <ApexChart 
            type={props.type} 
            options={option} 
            series={series} 
            height={props.height} 
            width={props.width} />
        </div>
    )
    
}