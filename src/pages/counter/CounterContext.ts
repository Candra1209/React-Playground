import React, { createContext, useContext } from "react";


export type CounterTypeContext = {
    count : number,
    isCount : React.Dispatch<React.SetStateAction<number>>,
    countUp : Function,
    countDown : Function,

}

export const CounterContext = createContext<CounterTypeContext | undefined>(undefined)

export function useCounterContext(){
    const context = useContext(CounterContext);
    if(!context){
        throw new Error("Tidak ada context yang dimaksudkan");
        
    }
    return context
}