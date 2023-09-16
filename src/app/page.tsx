'use client'
import { getCompanies } from "@/api/companyRequests";
import CompanyCard from "@/components/CompanyCard";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import SearchInput from "@/components/SearchInput";
import { ResponseAPI } from "@/interfaces/Response.interface";
import { PageContext } from "@/utils/PageContext";
import { useEffect, useState } from "react";

export default function Home() {
  const [companies, setCompanies] = useState<ResponseAPI[] | []>([]);

  

  useEffect(() => {
  setInterval(async () => {
    const data = await getCompanies();
      setCompanies(data);
  }, 2000);      
  }, []);

  return (
    <>
      <PageContext.Provider value={{ companies }}>
        <main className="flex min-h-screen flex-col items-center p-2">
          <Header />
          <SearchInput />
          <div className="flex flex-wrap w-screen p-6 my-20 justify-center">
          { companies.length == 0 ? <Loading /> : companies.map((company: ResponseAPI) => (
            <CompanyCard
            logo={company.logo} 
            id={company._id} 
            key={company._id}
            name={company.name}/>
          ))}
          </div>
        </main>
      </PageContext.Provider>
    </>
  )
}
