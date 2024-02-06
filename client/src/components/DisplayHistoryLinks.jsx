import React, {Fragment} from "react";
import {Link} from "react-router-dom";

// Icons
import {FiChevronRight} from "react-icons/fi";

const DisplayHistoryLinks = ({t,data}) => {
    return (
        <div className="flex flex-row items-center gap-2">
            <Link to={"/"} className="opacity-50 no-underline text-white ease-in duration-150 hover:text-gg hover:opacity-100">7Numby.gg</Link>
            <FiChevronRight className="text-xl opacity-50"/>
            {
                data.map((route, index) => {
                    return (
                        <Fragment key={index}>
                            {
                                route.link ? <Link to={route.link} className="opacity-50 no-underline text-white ease-in duration-150 hover:text-gg hover:opacity-100">{t(route.translation)}</Link> : <span>{t(route.translation)}</span>
                            }
                            {
                                index !== data.length - 1 && <FiChevronRight className="text-xl opacity-50"/>
                            }
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default DisplayHistoryLinks;