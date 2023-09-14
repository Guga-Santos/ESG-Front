export interface ILineChartProps {
  id: string;
  categories: number[];
  name: string;
  data: number[];
  type: "area" | "line" | "bar" | "scatter" | "heatmap" | "radar" | undefined;
  height: number;
  width: number;
}

export interface IMixedProps {
  id: string;
  categories: number[];
  name: string;
  series: {
    name: string,
    data: number[]
  }[];
  type: "area" | "line" | "bar" | "scatter" | "heatmap" | "radar" | "pie" | "donut" | "radialBar" | "bubble" | "candlestick" | "boxPlot" | "polarArea" | "rangeBar" | "rangeArea" | "treemap" | undefined
  height: number;
  width: number;
}