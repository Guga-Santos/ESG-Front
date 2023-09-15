'use client'
import { getCompanies } from "@/api/companyRequests";
import CompanyCard from "@/components/CompanyCard";
import Header from "@/components/Header";
import ChartPage from "@/components/chartPages";
import { ResponseAPI } from "@/interfaces/Response.interface";
import { PageContext } from "@/utils/PageContext";
import { useEffect, useState } from "react";
import data from '../mocks/fakeData.json';

export default function Home() {
  const [companies, setCompanies] = useState<ResponseAPI[] | []>([]);

  useEffect(() => {
    ;(async () => {
      const data = await getCompanies();
      setCompanies(data);
    })();
  }, []);

  return (
    <>
      <PageContext.Provider value={{}}>
        <main className="flex min-h-screen flex-col items-center justify-between p-2">
          <Header />
          <div className="flex flex-wrap w-full p-6">
          { companies.map((company: ResponseAPI) => (
            <CompanyCard
            logo={company.logo} 
            id={company._id} 
            key={company._id}
            name={company.name}/>
          ))}
          </div>
          <ChartPage {...data.company} />
        </main>
      </PageContext.Provider>
    </>
  )
}
