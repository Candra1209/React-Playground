import { useState } from "react"
import { data } from "./FormModel"
import { useErrorState } from "./useErrorState"

export function useData(initialValue : data){

    const [currData, setCurrData] = useState<data>(initialValue)
    const {errors, setError, clearError} = useErrorState({pesan:"", nama: ""})

    const handleOnChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        

        if(e.target.value == ""){
            setError(e.target.name, "Inputan Kosong")

        }else{
            setCurrData({...currData, [e.target.name] : e.target.value})
            clearError(e.target.name)
        }
    }

    const handleOnClick = (e : React.MouseEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        setCurrData({...currData, [target.name] : target.value})
    }

    return {
        currData,
        setCurrData,
        handleOnChange,
        handleOnClick,
        errors
    }

}