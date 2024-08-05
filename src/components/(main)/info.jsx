import Image from 'next/image'
import React from 'react'
import Hive from "../../../public/Main/Hive2.svg"
import BuildWithDelhi from "../../../public/Main/BuildWithDelhi.jpeg"
import { FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link'

function Info() {
  return (
    <div className="flex flex-col items-center justify-center w-11/12 gap-20">
      <div className="flex flex-col justify-between w-full gap-10 xl:flex-row">
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-medium md:text-2xl text-white/70">This Year's Hackathon Theme,</h1>
          <h1 className="h-[44px] lg:h-[70px] text-4xl font-bold lg:text-6xl" style={{
            background:
              "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Digital Anonymity</h1>
          <h1 className="text-4xl font-bold lg:text-6xl" style={{
            background:
              "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Unleashed</h1>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col text-white/70">
            <p className="text-base font-medium text-nowrap md:text-lg">Join us at Chandigarh University,</p>
            <p className="text-base font-medium text-nowrap md:text-lg">Our 1st Biggest Hackathon In Chandigarh.</p>
          </div>
          <Link href={"https://buildwithdelhi.devfolio.co"} target="_blank" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black duration-150 bg-white md:py-3 md:text-base md:px-10 hover:scale-95 w-fit">Register Now<FiArrowUpRight size={28} /></Link>
          <Link href={"https://shorturl.at/P0478"} target="_blank" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-black duration-150 bg-white md:py-3 md:text-base md:px-10 hover:scale-95 w-fit">Explore Hive Tracks<FiArrowUpRight size={28} /></Link>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-10">
          <Image src={Hive} alt="Mx Logo" className="w-72" quality={100} fetchPriority="high" priority={true} />
          <h1 className="text-sm font-semibold md:text-base lg:text-xl text-white/70">PRESENTS</h1>
          <Image src={BuildWithDelhi} alt="HackWithIndia Logo" className="w-full h-auto" quality={100} fetchPriority="high" priority={true} />
        </div>
      </div>
    </div >
  )
}

export default Info;
