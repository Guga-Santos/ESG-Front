import Header from "@/components/Header";
import ChartPage from "@/poges/chartPages";


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Header />
      <ChartPage />
      </main>
    </>
  )
}
