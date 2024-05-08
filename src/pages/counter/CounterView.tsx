
import { useCounterContext } from "./CounterContext"

export function CounterView(){

    const {count} = useCounterContext()

    return(
        <span className="font-Pixelify-Sans text-9xl">
            {count}
        </span>
    )
}