/* eslint-disable @next/next/no-img-element */

export default function CompanyProfiler(
  { logo, id, key } 
  : 
  { logo: string, id: string, key: string }) {
  return (
    <div className="
    border-1 
    w-2/3 
    h-36 
    mb-2
    bg-gradient-to-l from-indigo-950 rounded-2xl">
      <figure className="m-8 ml-20 h-20 w-20">
        <img 
        alt="Logo" 
        src={logo} 
        width={200} 
        height={200}
        className="rounded-lg"/>
      </figure>
    </div>
  )
}