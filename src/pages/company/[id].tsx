/* eslint-disable @next/next/no-img-element */
// pages/company/[id].js
import { getCompaniesById } from '@/api/companyRequests';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import ChartBoard from '@/components/chartBoard';
import { ResponseAPI } from '@/interfaces/Response.interface';
import PageWrapper from '@/utils/PageWrapper';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import data from '../../mocks/fakeData.json';


function CompanyPage() {
  const router = useRouter();
  const { id } = router.query;
  const [darkmode, setDarkMode] = useState<boolean>();
  const [company, setCompany] = useState<ResponseAPI>();

  function handleClick() {
    window.open(company?.data, '_blank');
  }


  useEffect(() => {
    ;(async () => {
      const data = await getCompaniesById(id as string);
      setCompany(data);
      const localData = localStorage.getItem('darkmode');
      setDarkMode(localData === 'true');
    })();
  }, [id])

  return (
    <div className={darkmode ? 'dark h-full text-white bg-[#00001e]' : 'h-full text-white bg-[#d9ed92]'}>
      <Header /> 
      { !company 
      ? <div className={darkmode ? 'bg-[#00001e] w-screen h-screen flex items-center justify-center' : 'bg-[#d9ed92] w-screen h-screen flex items-center justify-center'}>
        <Loading/>
        </div> 
      : <div className={darkmode ? 'bg-[#00001e]' : 'bg-[#d9ed92]' }>
        <PageWrapper>
          <div className={darkmode ? 'w-3/4 flex flex-wrap mx-auto pt-32 mb-8 justify-between text-white bg-[#00001e]' : 'w-3/4 flex flex-wrap mx-auto pt-32 mb-8 justify-between text-[#184E77] bg-[#d9ed92]'}>
            <figure>
              <img 
              src={company?.logo} 
              alt="logo" 
              className='rounded-md w-80 lg:w-40 mb-8' />
            </figure>
            <p className='w-80 lg:w-3/4 m-1 lg:m-3 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus, vitae quis quam veniam, ut voluptatem quidem ex maxime rem recusandae quia distinctio repudiandae, culpa voluptas possimus suscipit nihil sit.
            Aliquid totam nisi consectetur tenetur est, eveniet quos incidunt officia at odit iusto hic, quo cupiditate sit velit et eos adipisci quia quaerat quasi temporibus numquam mollitia commodi?
            Expedita recusandae cupiditate iure reiciendis maiores laborum est, libero quo repellendus harum deleniti distinctio, earum officiis? Quia natus totam aliquid aut iusto quaerat?</p>

            <button
            type="button"
            onClick={() => handleClick()}
            className="mb-2 block w-full rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init>
            Acesse o relatório completo!
          </button>
          </div>
        </PageWrapper>
          <ChartBoard {...data.company}/>
        </div>}
    </div>
  );
}

export default CompanyPage;
