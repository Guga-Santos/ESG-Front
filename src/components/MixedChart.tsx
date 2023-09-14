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
          text: props.name
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

/**
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
      type={"area"} 
      height={500} 
      width={800} />  
 */