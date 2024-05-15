import { useState } from "react"

export interface ErrorObject {
    [key : string] : string
}

export const useErrorState = (initalValue: ErrorObject) => {
    const [errors, setErrors] = useState<ErrorObject>(initalValue)

    const setError = (error: string, pesan: string) => {

        setErrors(prevError => ({...prevError, [error] : pesan }))
    }

    const clearError = (error:string) => {
        const {[error] : _, ...sisa} = errors
        setErrors(sisa)
    }

    return {
        errors,
        setError,
        clearError
    }
}