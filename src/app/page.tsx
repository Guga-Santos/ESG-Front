import Header from "@/components/Header";
import CompanyProfiler from "@/components/companyProfiler";
import ChartPage from "@/poges/chartPages";
import data from '../mocks/fakeData.json';


export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Header />
      <CompanyProfiler />
      <ChartPage {...data.company}/>
      </main>
    </>
  )
}
