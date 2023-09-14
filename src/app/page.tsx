import { LinesChart } from "@/components/LinesCharts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
      categories={[2020, 2021, 2022, 2023]} 
      name={"series-1"} 
      data={[60, 124, 91, 125]} 
      type={"line"} 
      height={200} 
      width={500} />
      <LinesChart 
      id={"EEG"} 
      categories={[2020, 2021, 2022, 2023]} 
      name={"series-1"} 
      data={[60, 124, 91, 125]} 
      type={"bar"} 
      height={200} 
      width={500} />
      <LinesChart 
      id={"EEG"} 
      categories={[2020, 2021, 2022, 2023]} 
      name={"ESG"} 
      data={[60, 124, 91, 125]} 
      type={"heatmap"} 
      height={200} 
      width={500} />
      <LinesChart 
      id={"EEG"} 
      categories={[2020, 2021, 2022, 2023]} 
      name={"series-1"} 
      data={[60, 124, 91, 125]} 
      type={"radar"} 
      height={200} 
      width={500} />      
    </main>
  )
}
