import { Link } from "react-router-dom"
import { LinkModel } from "../model/LinkModel"


export function LinkItem({styleLink} : {styleLink : string}) {
    return(
        <>
            {LinkModel.map((link,i) => {

                return(
                    <Link to={link.url} key={i}
                    className={styleLink}
                    >
                    {link.name}
                    </Link>
                )
            })}
        </>
    )
}