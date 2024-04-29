import { Outlet } from "react-router-dom";
import { Navbar } from "../component/Navbar";


export function Homepage() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

