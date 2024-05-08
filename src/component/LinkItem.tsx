import { Link } from "react-router-dom"
import { LinkModel } from "../model/LinkModel"
import React from "react"


export function LinkItem({styleLink, isHide} : {styleLink? : string | "", isHide:React.Dispatch<React.SetStateAction<boolean>>}) {
    return(
        <>
            {LinkModel.map((link,i) => {

                return(
                    <Link to={link.url} key={i}
                    className={styleLink}
                    onClick={() => {isHide(true)}}
                    >
                    {link.name}
                    </Link>
                )
            })}
        </>
    )
}