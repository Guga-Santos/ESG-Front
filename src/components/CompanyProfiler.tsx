/* eslint-disable @next/next/no-img-element */

export default function CompanyProfiler(
  { logo, id, key, name } 
  : 
  { logo: string, id: string, key: string, name: string }) {
  return (
    <div className="
    border-1 
    w-36 
    h-36 
    m-3
    rounded-2xl
    bg-slate-950
    hover:brightness-125 
    hover:cursor-pointer
    active:brightness-150
    flex
    flex-col
    justify-center
    items-center
    p-8">
      <div className="flex-col w-36 text-center">
      <figure className="h-20 w-20 mt-2 m-auto">
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
      mt-2"
      >{name}
      </h1>
      </div>
    </div>
  )
}