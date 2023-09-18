'use client'
import { getCompanies } from "@/api/companyRequests";
import CompanyCard from "@/components/CompanyCard";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import SearchInput from "@/components/SearchInput";
import Slider from "@/components/Slider";
import { ResponseAPI } from "@/interfaces/Response.interface";
import { pageStyles } from "@/styles/page.styles";
import { PageContext } from "@/utils/PageContext";
import { useEffect, useState } from "react";

export default function Home() {
  const [companies, setCompanies] = useState<ResponseAPI[] | []>([]);
  const [globalData, setGlobal] = useState<ResponseAPI[] | []>([]);
  const [darkmode, setDarkmode] = useState<boolean | any>();


  useEffect(() => {
    const localData = localStorage.getItem('darkmode');
    setDarkmode(localData === 'true');
    ;(async () => {
      const data = await getCompanies();
      setGlobal(data);
    })();   
    },[]);

  return (
    <>
      <PageContext.Provider value={{ 
        companies, 
        setCompanies, 
        globalData, 
        darkmode, 
        setDarkmode }}>
        <main className={darkmode ? pageStyles.mainDark : pageStyles.mainLight }>
          <Header />
          <Slider />
          <SearchInput />
          <div className={pageStyles.companiesDiv}>
          { companies?.length == 0 
          ? <div className={pageStyles.loadingDiv}><Loading /></div> 
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
