/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function CompanyCard(
  { logo, id, key, name } 
  : 
  { logo: string, id: string, key: string, name: string }) {
  return (
    <Link href={`company/${id}`}>
    <div className="
    border-1 
    w-40 
    h-40 
    m-2
    rounded-2xl
    bg-slate-900
    hover:brightness-125 
    hover:cursor-pointer
    active:brightness-150
    flex
    flex-col
    justify-center
    items-center
    p-8">
      <div className="flex-col w-36 text-center">
      <figure className="h-24 w-24 mt-2 m-auto rounded-xl">
        <img 
        alt="Logo" 
        src={logo} 
        width={200} 
        height={200}
        className="rounded-lg select-none"/>
      </figure>
      <h1
      className="
      text-white
      select-none
      text-base
      mt-2"
      >{name}
      </h1>
      </div>
    </div>
    </Link>
  )
}