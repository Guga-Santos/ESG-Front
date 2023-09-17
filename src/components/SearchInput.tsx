import { getCompanies } from "@/api/companyRequests";
import { PageContext } from "@/utils/PageContext";
import { useContext, useEffect } from "react";

export default function SearchInput() {
  const {companies, 
        setCompanies,
        globalData,
        darkmode } = useContext(PageContext);

  function handleChange(value:string) {
    setCompanies(globalData.filter((company) => company.name.includes(value)));
    console.log("value: ", value)
    console.log("Companies: ", companies)
  }

  useEffect(() => {
    ;(async () => {
      const data = await getCompanies();
        setCompanies(data);
    })();   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);



  return (
<form className="
  flex
  items-center
  justify-center
  h-48 
  pt-24
  w-screen
  bg-[#d9ed92]
  dark:bg-[#00001e]"
  >   
    <div className="relative">
        <div className="
        absolute 
        inset-y-0 
        left-0 
        flex 
        items-center 
        pl-3 
        pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input
        type="search" 
        id="default-search" 
        className={darkmode ? "block w-full p-4 pl-10 text-sm text-gray-200 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" : "block w-full p-4 pl-10 text-sm text-gray-8 border border-gray-300 rounded-lg"} 
        placeholder="Procure uma empresa..." 
        onChange={(e) => handleChange(e.target.value)}
        required />
    </div>
</form>
  )
}