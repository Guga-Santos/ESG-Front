import Header from "@/components/Header";
import ChartPage from "@/poges/chartPages";
import data from '../mocks/fakeData.json';


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Header />
      <ChartPage {...data.company}/>
      </main>
    </>
  )
}
