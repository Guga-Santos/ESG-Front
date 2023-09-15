/* eslint-disable @next/next/no-img-element */
// pages/company/[id].js
import { getCompaniesById } from '@/api/companyRequests';
import Header from '@/components/Header';
import ChartPage from '@/components/chartPages';
import { ResponseAPI } from '@/interfaces/Response.interface';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import data from '../../mocks/fakeData.json';


function CompanyPage() {
  const router = useRouter();
  const { id } = router.query;

  const [company, setCompany] = useState<ResponseAPI>();


  useEffect(() => {
    ;(async () => {
      const data = await getCompaniesById(id as string);
      setCompany(data);
    })();
  }, [id])

  return (
    <div className='h-full text-white'>
      <Header />
      <div className='w-3/4 flex flex-wrap m-auto justify-between'>
        <figure className=''>
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

    </div>
  );
}

export default CompanyPage;
