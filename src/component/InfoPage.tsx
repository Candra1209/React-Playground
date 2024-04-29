import { useState } from "react"

type infoPageProps = {
    infoTitle: string;
    massage: string;
}

function InfoPage({infoTitle, massage} : infoPageProps) {

    let [showInfo, setShowInfo] = useState<boolean>(false)

    return (
        <>
            <button className='text-xl underline hover:text-warna-3 font-Short-Stack' onClick={() => setShowInfo(!showInfo)}>info</button>
            <div className={"transition-opacity duration-1000 bg-slate-500/75 fixed top-0 left-0 w-svw h-svh flex justify-center items-center "
                + (showInfo? "visible":"invisible")
            }>
                <div className={"w-[350px] h-[400px] bg-white rounded-2xl flex flex-col justify-between"
                }>
                    <h1 className="text-center text-2xl font-Pixelify-Sans pt-5">{infoTitle}</h1>
                    
                    <p className="py-2 px-5 text-justify font-Short-Stack">
                        {massage}
                    </p>

                    <button className=' text-xl bg-warna-2 text-white rounded-xl pb-1 p-2 my-5 mx-10 text-center' 
                    onClick={() => setShowInfo(!showInfo)}>
                        ❌
                    </button>
                </div>
            </div>
        </>
    )
}

export default InfoPage
