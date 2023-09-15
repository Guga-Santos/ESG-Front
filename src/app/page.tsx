import Header from "@/components/Header";
import CompanyProfiler from "@/components/companyProfiler";
import ChartPage from "@/pages/chartPages";
import { PageContext } from "@/utils/PageContext";
import data from '../mocks/fakeData.json';


export default function Home() {

  return (
    <>
      <PageContext.Provider value={{}}>
      <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <Header />
      <CompanyProfiler />
      <ChartPage {...data.company}/>
      </main>
      </PageContext.Provider>
    </>
  )
}
