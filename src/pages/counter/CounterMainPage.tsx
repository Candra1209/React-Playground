import InfoPage from "../../component/InfoPage";
import { CounterForm } from "./CounterForm";
import { CounterView } from "./CounterView";
import { useCounter } from "./useCounter";
import { CounterContext } from "./CounterContext";






export function CounterMainPage(){

    const {count, isCount, countUp, countDown} = useCounter();
    
    const pesan = {
        title : "Counter useContext",
        massage : "counter ini dibuat dengan menggunakan 2 komponen berbeda, yaitu komponen view untuk menampilkan angak dan komponen view untuk memanipulasi angka, awal nya menggunakan custom hook namun saya menyadari bahwa custom hook hanya berbagi code bukan nilai, lalu saya mencoba context hook dan membuat custom context hook tersebut"
    }
    
    return(
        <CounterContext.Provider value={{count, isCount, countUp, countDown}}>
            <div className="pt-20 bg-slate-50">
                <div>
                    <div className="flex justify-end px-5 gap-5">
                        <InfoPage infoTitle={pesan.title} massage={pesan.massage}/>
                        <CounterForm/>
                    </div>
                </div>
                <div className="w-full h-dvh grid place-content-center bg-slate-50">
                    <div className="w-[200px] h-[200px] bg-slate-200 rounded-xl shadow-xl grid place-content-center">
                        <CounterView/>
                    </div>
                </div>
            </div>
        </CounterContext.Provider>
    )
}