/* eslint-disable @next/next/no-img-element */
// pages/company/[id].js
import { getCompaniesById } from '@/api/companyRequests';
import Header from '@/components/Header';
import Loading from '@/components/Loading';
import ChartPage from '@/components/chartPages';
import { ResponseAPI } from '@/interfaces/Response.interface';
import { styles } from '@/styles/styles';
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
    console.log("ola")
  }, [id])

  return (
    <div className={styles.idPage.divContainer}>
      <Header />
      { !company ? <div className={styles.idPage.divLoading}><Loading/></div> 
       : <div>
          <div className={styles.idPage.divProfile}>
            <figure>
              <img 
              src={company?.logo} 
              alt="logo" 
              className={styles.idPage.image} />
            </figure>
            <p className={styles.idPage.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet natus, vitae quis quam veniam, ut voluptatem quidem ex maxime rem recusandae quia distinctio repudiandae, culpa voluptas possimus suscipit nihil sit.
            Aliquid totam nisi consectetur tenetur est, eveniet quos incidunt officia at odit iusto hic, quo cupiditate sit velit et eos adipisci quia quaerat quasi temporibus numquam mollitia commodi?
            Expedita recusandae cupiditate iure reiciendis maiores laborum est, libero quo repellendus harum deleniti distinctio, earum officiis? Quia natus totam aliquid aut iusto quaerat?</p>
          </div>
          <ChartPage {...data.company}/>
        </div>}
    </div>
  );
}

export default CompanyPage;
