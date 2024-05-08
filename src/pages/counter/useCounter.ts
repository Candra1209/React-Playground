import { useState } from "react";

export function useCounter(){
    const [count, isCount] = useState<number>(0)

    function countUp(value:number){
        isCount(count + value)
    }

    function countDown(value:number){
        isCount(count - value)
    }

    return {
        count,
        isCount,
        countUp,
        countDown
    }
}