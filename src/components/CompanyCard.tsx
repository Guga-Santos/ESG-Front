/* eslint-disable @next/next/no-img-element */

import { companyCardStyles } from "@/styles/CompanyCard.styles";
import PageWrapper from "@/utils/PageWrapper";
import { useScroll } from "framer-motion";
import Link from "next/link";

export default function CompanyCard(
  { logo, id, name } 
  : 
  { logo: string, id: string, key: string, name: string }) {

    const { scrollYProgress } = useScroll();
  return (
    <PageWrapper>
    <Link href={`company/${id}`}>
    <div className={companyCardStyles.firstDiv}>
      <div className="flex-col w-36 text-center">
      <figure className="h-24 w-24 mt-2 m-auto rounded-xl">
        <img 
        alt="Logo" 
        src={logo} 
        width={200} 
        height={200}
        loading="lazy" 
        className="rounded-lg select-none"/>
      </figure>
      <h1 className={companyCardStyles.h1}>{name}</h1>
      </div>
    </div>
    </Link>
    </PageWrapper>
  )
}