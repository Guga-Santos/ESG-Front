import Image from "next/image";

export default function CompanyProfiler() {
  return (
    <div className="border-1 w-3/4 h-96 bg-gradient-to-l from-indigo-950 rounded-2xl">
      <figure className="m-8 border-2 border-white h-56 w-56">
        <Image alt="Logo" src={""} />
      </figure>
    </div>
  )
}