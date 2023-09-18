import { getCompanies } from "@/api/companyRequests";
import { searchInputStyles } from "@/styles/SearchInput.styles";
import { PageContext } from "@/utils/PageContext";
import { useContext, useEffect } from "react";

export default function SearchInput() {
  const {companies, 
        setCompanies,
        globalData,
        darkmode } = useContext(PageContext);

  function handleChange(value:string) {
    setCompanies(globalData.filter((company) => company.name.includes(value)));
  }

  useEffect(() => {
    ;(async () => {
      const data = await getCompanies();
        setCompanies(data);
    })();   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);



  return (
    <form className={searchInputStyles.form}>   
      <div className="relative">
        <div className={searchInputStyles.svgDiv}>
          <svg className="w-4 h-4 text-gray-500 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input
        type="search" 
        id="default-search" 
        className={darkmode ? searchInputStyles.inputDark : searchInputStyles.inputLight } 
        placeholder="Procure uma empresa..." 
        onChange={(e) => handleChange(e.target.value)}
        required />
    </div>
</form>
  )
}