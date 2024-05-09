import Image from 'next/image';
import React from 'react'
import LeftLeaf from "../../../public/LeftLeaf.svg"
import RightLeaf from "../../../public/RightLeaf.svg"
import { TaggingWinnerData } from '@/data/TaggingWinner';

function TaggingWinner() {
    return (
        <div className="flex flex-col items-center w-full h-full gap-20">
            <div className="flex flex-col items-center max-w-5xl gap-10 text-center">
                <h1 className="text-3xl font-semibold tracking-wide md:text-4xl lg:text-6xl">Tagging Challenge Winner's</h1>
            </div>

            <div className="grid items-center justify-center w-[95%] lg:w-4/5 grid-cols-1 gap-10 md:grid-cols-2">
                {TaggingWinnerData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center p-20 justify-center w-full h-full gap-6 border border-white border-solid rounded-3xl bg-[radial-gradient(ellipse_100%_90%_at_50%_0%,#222,#000)]">
                        <div className="flex items-center justify-center gap-4">
                            <Image
                                src={LeftLeaf}
                                alt="leaf"
                                className="w-10 md:w-16"
                                quality={100}
                                priority={true} fetchPriority="high"
                            />
                            <h1 className="text-3xl font-semibold tracking-wider text-center capitalize text-nowrap md:text-4xl lg:text-5xl">Prize - {data.prizeOrder}</h1>
                            <Image
                                src={RightLeaf}
                                alt="leaf"
                                className="w-10 md:w-16"
                                quality={100}
                                priority={true} fetchPriority="high"
                            />
                        </div>
                        <p className="text-sm font-bold text-nowrap md:text-lg" style={{
                            background:
                                "linear-gradient(80deg, #D06D30 6.67%, #FFD887 28.13%, #FFDCAD 64.87%, #FAB858 95.66%)",
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>{data.prize}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TaggingWinner