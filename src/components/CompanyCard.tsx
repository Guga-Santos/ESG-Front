/* eslint-disable @next/next/no-img-element */

import { companyCardStyles } from "@/styles/CompanyCard.styles";
import Link from "next/link";

export default function CompanyCard(
  { logo, id, name } 
  : 
  { logo: string, id: string, key: string, name: string }) {
  return (
    <Link href={`company/${id}`}>
    <div className={companyCardStyles.firstDiv}>
      <div className="flex-col w-36 text-center">
      <figure className="h-24 w-24 mt-2 m-auto rounded-xl">
        <img alt="Logo" src={logo} width={200} height={200} className="rounded-lg select-none"/>
      </figure>
      <h1 className={companyCardStyles.h1}>{name}</h1>
      </div>
    </div>
    </Link>
  )
}