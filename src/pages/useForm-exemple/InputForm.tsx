import React, { useState } from "react"
import { dataProps } from "./FormModel"

function InputForm({setDataList, dataList} : {setDataList:React.Dispatch<React.SetStateAction<dataProps>> , dataList: dataProps}) {

    const [isJenisNull, setIsJenisNull] = useState<boolean>(false)
    const [isPesanNull, setIsPesanNull] = useState<boolean>(false)
    const [isNamaNull, setIsNamaNull] = useState<boolean>(false)

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()

        const data = e.target as typeof e.target & {
            jenis : {value:string},
            messege : {value:string},
            nama :{value:string}
        }

        console.log(data.jenis.value, data.messege.value, data.nama.value);
        if(data.jenis.value == ""){
            setIsJenisNull(true)
        }else{
            setIsJenisNull(false)
        }
        
        if(data.messege.value == ""){
            setIsPesanNull(true)
        }else{
            setIsPesanNull(false)
        }

        if(data.nama.value == ""){
            setIsNamaNull(true)
        }else{
            setIsNamaNull(false)
        }

        let isEmpty = (isJenisNull || isNamaNull || isPesanNull)
        console.log(isEmpty);

        setDataList([...dataList, {
            id: dataList.length + 1,
            jenis: data.jenis.value,
            pesan: data.messege.value,
            nama: data.nama.value
        }])

        console.log("here");
        
        
    }

    return (
        <form className="flex flex-col gap-3 bg-slate-300 min-h-[400px] px-3 py-3 m-5" onSubmit={onSubmit}>
            <div id="radioJenis" className="sm:flex">
                <div>
                    <input type="radio" id="radio-advance" name="jenis" value="advance"/>
                    <label className="px-2" htmlFor="radio-advance">Advance</label>
                </div>
                <div>
                    <input type="radio" id="radio-motivation" name="jenis" value="motivation"/>
                    <label className="px-2" htmlFor="radio-motivation">Motivation</label>
                </div>
                <div>
                    <input type="radio" id="radio-critic" name="jenis" value="critic"/>
                    <label className="px-2" htmlFor="radio-critic">Criticism</label>
                </div>
                <div className={(isJenisNull? "":"hidden")}>
                    <p className="text-red-600">silahkan pilih jenis masukan!</p>
                </div>
            </div>
            <div>
                <p className="font-Plus-Jakarta-Sans">Silahkan tinggal kan pesan : </p>
                <textarea style={{resize:"none"}} name="messege" id="messege" className="ring-1 rounded-lg p-1 h-[200px] w-[80%]" placeholder="Tinggalkan Pesan"/>
                <div className={(isPesanNull? "":"hidden")}>
                    <p className="text-red-600">Tolong masukan pesan anda!</p>
                </div>
            </div>
            <div>
                <p className="font-Plus-Jakarta-Sans">jangan lupa tinggalkan nama</p>
                <input type="text" name="nama" id="nama" className="ring-1 rounded-lg p-1 " placeholder="Masukan Nama"/>
                <div className={(isNamaNull? "":"hidden")}>
                    <p className="text-red-600">Tolong Masukan Nama Anda</p>
                </div>
            </div>
            <button type="submit" value="submit" className="max-w-[200px] py-2 bg-warna-1 rounded-md text-white hover:bg-indigo-500  ">Submit</button>
        </form>
    )
}

export default InputForm