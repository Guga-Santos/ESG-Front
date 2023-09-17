/* eslint-disable @next/next/no-img-element */
// pages/company/[id].js
import { getCompaniesById } from '@/api/companyRequests';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import ChartPage from '@/components/chartPages';
import { ResponseAPI } from '@/interfaces/Response.interface';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import data from '../../mocks/fakeData.json';


function CompanyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [darkmode, setDarkMode] = useState<boolean>();

  const [company, setCompany] = useState<ResponseAPI>();


  useEffect(() => {
    const localData = localStorage.getItem('darkmode');
    setDarkMode(localData === 'true');
    ;(async () => {
      const data = await getCompaniesById(id as string);
      setCompany(data);
    })();
  }, [id])

  return (
    <div className={darkmode ? 'dark h-full text-white dark:bg-[#00001e]' : 'h-full text-white'}>
      <Header /> 
      { !company 
      ? <div className='dark:bg-[#00001e] bg-[#d9ed92] w-screen h-screen flex items-center justify-center'>
        <Loading/>
        </div> 
      : <div className='
       dark:bg-[#00001e] 
       bg-[#d9ed92]'>
          <div className='
          w-3/4 
          flex 
          flex-wrap 
          mx-auto 
          pt-32 
          mb-8 
          justify-between
          text-[#184E77]
          dark:text-white
          dark:bg-[#00001e]
          '>
            <figure>
              <img 
              src={company?.logo} 
              alt="logo" 
              className='rounded-md w-80 lg:w-40' />
            </figure>
            <p className='w-80 lg:w-3/4 m-1 lg:m-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus, vitae quis quam veniam, ut voluptatem quidem ex maxime rem recusandae quia distinctio repudiandae, culpa voluptas possimus suscipit nihil sit.
            Aliquid totam nisi consectetur tenetur est, eveniet quos incidunt officia at odit iusto hic, quo cupiditate sit velit et eos adipisci quia quaerat quasi temporibus numquam mollitia commodi?
            Expedita recusandae cupiditate iure reiciendis maiores laborum est, libero quo repellendus harum deleniti distinctio, earum officiis? Quia natus totam aliquid aut iusto quaerat?</p>
          </div>
          <ChartPage {...data.company}/>
        </div>}
    </div>
  );
}

export default CompanyPage;
