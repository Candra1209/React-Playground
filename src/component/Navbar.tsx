import { useState } from "react";
import { Link } from "react-router-dom";
import { LinkItem } from "./LinkItem";


export function Navbar(){

    const[hide, isHide] = useState<boolean>(true);

    const hideNav = () =>{
        isHide(!hide)
        
    }

    return (
        <>
            <div className="fixed flex justify-between w-full px-7 py-2 bg-warna-1 ">
                <Link className="text-3xl font-Honk" to='/'>
                    R-Playground
                </Link>
                <button className="flex text-3xl" onClick={ hideNav }>
                    📚
                </button>
            </div>

            <div className={
                "fixed top-0 bg-warna-2 w-[300px] h-full " 
                + (hide? 
                    "transition-transform ease-out duration-500 translate-x-[-300px]" 
                    : "transition-transform ease-in duration-500 translate-x-0")
                
                }>
                <div className="flex justify-between px-5 py-4">
                    <Link className="text-xl font-Honk" to='/'>
                        R-Playground
                    </Link>
                    <button onClick={hideNav}>❌</button>
                </div>
                <div className="flex flex-col py-5">
                    <LinkItem styleLink="font-Plus-Jakarta-Sans font-medium hover:bg-warna-3 hover:text-white text-center py-3"/>
                </div>
            </div>
        </>
    )
}