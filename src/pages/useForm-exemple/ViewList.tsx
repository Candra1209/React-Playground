import { useState } from "react";
import { dataProps } from "./FormModel";

function ViewList({data}: {data:dataProps}) {
    const [editMode, setEditMode] = useState<boolean>(false)

    function badgeJenis(jenis:string){
        switch(jenis){
            case "motivation" :
                return "bg-green-500"
                break;
            
            case "advance" : 
                return "bg-blue-500"
                break;
            
            case "critic" : 
                return "bg-amber-500"
                break;
            
            default : 
                return ""
                break;
        }
    }


    return (
        <div className="bg-slate-300 max-h-[500px] flex flex-col m-5">
            <div className="bg-warna-1 top-0 p-2 flex justify-end h-[50px]">
                <button className={"py-1 px-4 rounded-md font-medium " 
                + (editMode? "bg-warna-2 text-blac":" k bg-warna-3 text-white")}
                onClick={()=> setEditMode(!editMode)}
                >
                    {editMode? "EXIT EDIT":" EDIT MODE"}
                </button>
            </div>
            <div className="overflow-auto h-full ">
                {data.map((data,i) => {
                    return(
                        <div key={i} className="py-2 border-b-[1px] border-warna-1 p-2">
                        
                            <p className={"font-Pixelify-Sans text-white w-fit rounded-full px-2 " 
                            + (badgeJenis(data.jenis))}>{data.jenis}</p>
                            <p className="font-Short-Stack font-bold">{data.pesan}</p>
                            <p className="font-Plus-Jakarta-Sans italic text-xs">-{data.nama}</p>
                            <div className={"flex gap-1 pt-2 justify-end "
                                + (editMode? "visible": "hidden")
                            }>
                                <button className="bg-red-500 text-white text-xs py-1 px-2 rounded-md"
                                onClick={()=> console.log(data.id)}>
                                    DEL
                                </button>
                            </div>
                        
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ViewList
