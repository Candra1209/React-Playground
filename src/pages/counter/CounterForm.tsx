import { useState } from "react"
import { useCounterContext } from "./CounterContext"

export function CounterForm(){
    const [isShow, setIsShow] = useState<boolean>(false)
    const {countUp, countDown} = useCounterContext()


    return(
        <>
            <button className="text-xl underline hover:text-warna-3 font-Short-Stack" onClick={() => setIsShow(true)}>Ubah Nilai</button>
            <div className="relative">
                <div className={"absolute top-0 right-0 bg-slate-100 rounded-xl w-[200px] h-[120px] " 
                    + (isShow? "visible":"invisible")
                }>
                    <div className="flex justify-end p-2">
                        <button className="" onClick={() => setIsShow(false)}>
                            ❌
                        </button>
                    </div>
                    <div className={"flex justify-center items-center "}>
                        <div className=" flex justify-between items-center gap-5">
                            <button onClick={() => countUp(3)}
                            className="font-Pixelify-Sans text-2xl w-[50px] bg-green-500 text-white px-2 py-1 rounded-md hover:ring-2 ring-green-500 hover:bg-transparent hover:text-green-500">
                                +3
                            </button>
                            <button onClick={() => countDown(1)}
                            className="font-Pixelify-Sans text-2xl w-[50px] bg-red-500 text-white px-2 py-1 rounded-md hover:ring-2 ring-red-500 hover:bg-transparent hover:text-red-500">
                                -1
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}