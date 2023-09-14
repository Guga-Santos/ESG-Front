export interface ILineChartProps {
  id: string;
  categories: number[];
  name: string;
  data: number[];
  type: "area" | "line" | "bar" | "scatter" | "heatmap" | "radar" | undefined;
  height: number;
  width: number;
}