import { getCompanies } from "@/api/companyRequests";
import { PageContext } from "@/utils/PageContext";
import { useContext, useEffect } from "react";

export default function SearchInput() {
  const {companies, 
        setCompanies,
        globalData } = useContext(PageContext);

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
<form className="mt-28 w-80">   
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input
        type="search" 
        id="default-search" 
        className="block w-full p-4 pl-10 text-sm text-gray-200 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" 
        placeholder="Procure uma empresa..." 
        onChange={(e) => handleChange(e.target.value)}
        required />
        <button 
        type="submit" 
        className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        </button>
    </div>
</form>
  )
}