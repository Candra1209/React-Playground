import { useState } from "react"
import InputForm from "./InputForm"
import ViewList from "./ViewList"
import { FormModel,dataProps } from "./FormModel"
import InfoPage from "../../component/InfoPage"


function MainPage() {

    const info = {
        tittle :"Tinggalkan Pesan",
        massage: "pada page ini akan menangkap input dengan event lalu di tampilkan pada component disamping, perhatian inputan tidak akan disimpan di server"
    }

    const [dataList, setDataList] = useState<dataProps>(FormModel)
    return (
        <div className=" bg-slate-200 h-full  ">
            <div className="pt-20 flex justify-end px-5">
                <InfoPage infoTitle={info.tittle} massage={info.massage}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 z-0"> 
                <div>
                    <InputForm setDataList ={setDataList} dataList={dataList}/>
                </div>
                <div>
                    <ViewList data={dataList}/>
                </div>
            </div>
        </div>
    )
}

export default MainPage
