// pages/company/[id].js
import Header from '@/components/Header';
import ChartPage from '@/components/chartPages';
import { useRouter } from 'next/router';
import data from '../../mocks/fakeData.json';


function CompanyPage() {
  const router = useRouter();
  const { id } = router.query;

  // Aqui você pode buscar os dados da empresa com base no ID

  return (
    <div className='h-full text-white'>
      <Header />
      <ChartPage {...data.company}/>

    </div>
  );
}

export default CompanyPage;
