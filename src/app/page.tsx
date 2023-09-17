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
  const [globalData, setGlobal] = useState<ResponseAPI[] | []>([]);

  useEffect(() => {
    ;(async () => {
      const data = await getCompanies();
      setGlobal(data);
    })();   
    },[]);

  return (
    <>
      <PageContext.Provider value={{ companies, setCompanies, globalData }}>
        <main className="
        flex 
        min-h-screen 
        flex-col 
        items-center 
        p-2
        dark
        ">
          <Header />
          <SearchInput />
          <div className="
          flex 
          flex-wrap 
          w-screen 
          p-6 
          justify-center
          bg-[#d9ed92]
          dark:bg-[#00001e]">
          { companies?.length == 0 
          ? <div className='dark:bg-[#00001e] bg-[#d9ed92] w-screen h-screen flex  justify-center'><Loading /></div> 
          : companies?.map((company: ResponseAPI) => (
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
