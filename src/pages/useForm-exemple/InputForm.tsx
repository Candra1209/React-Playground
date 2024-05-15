import React from "react"
import { dataProps } from "./FormModel"
import { useData } from "./useDataForm"

function InputForm({setDataList, dataList} : {setDataList:React.Dispatch<React.SetStateAction<dataProps>> , dataList: dataProps}) {

    const { currData, handleOnChange, handleOnClick,errors } = useData({
        id : 0,
        jenis : "advance",
        pesan : "",
        nama : ""
    })

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(Object.keys(errors).length> 0){
            return alert(" Gagal Menambahkan Data! Pastikan mengisi data dengan benar")
        }
        setDataList([...dataList, currData])
        alert("Berhasil Manmbah Data")
        }


    return (
        <form className="flex flex-col gap-3 bg-slate-300 min-h-[400px] px-3 py-3 m-5" onSubmit={onSubmit}>
            <div id="radioJenis" className="xl:flex">
                <div>
                    <input type="radio" id="radio-advance" name="jenis" value="advance" defaultChecked onClick={handleOnClick}/>
                    <label className="px-2" htmlFor="radio-advance">Advance</label>
                </div>
                <div>
                    <input type="radio" id="radio-motivation" name="jenis" value="motivation" onClick={handleOnClick}/>
                    <label className="px-2" htmlFor="radio-motivation">Motivation</label>
                </div>
                <div>
                    <input type="radio" id="radio-critic" name="jenis" value="critic" onClick={handleOnClick}/>
                    <label className="px-2" htmlFor="radio-critic">Criticism</label>
                </div>
                
            </div>
            
            <div>
                <p className="font-Plus-Jakarta-Sans">Silahkan tinggal kan pesan : </p>
                <textarea style={{resize:"none"}} name="pesan" id="pesan" className="ring-1 rounded-lg p-1 h-[200px] w-[80%]" placeholder="Tinggalkan Pesan" onChange={handleOnChange}/>
                <p className="text-red-500 font-Plus-Jakarta-Sans text-sm">{errors.pesan}</p>
            </div>
            <div>
                <p className="font-Plus-Jakarta-Sans">Jangan lupa tinggalkan nama</p>
                <input type="text" name="nama" id="nama" className="ring-1 rounded-lg p-1 " placeholder="Masukan Nama" onChange={handleOnChange}/>
                <p className="text-red-500 font-Plus-Jakarta-Sans text-sm">{errors.nama}</p>
            </div>
            <button type="submit" value="submit" className="max-w-[200px] py-2 bg-warna-1 rounded-md text-white hover:bg-indigo-500  ">Submit</button>
        </form>
    )
}

export default InputForm
