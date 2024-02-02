import React from "react";
import {useMediaQuery} from "react-responsive";

// i18n
import {useTranslation} from "react-i18next";
import Sidebar from "../components/sidebar/Sidebar.jsx";

// Components
import WIP from "../components/wip/WIP.jsx";
import {Outlet} from "react-router-dom";

const Index = () => {
    const [t, i18n] = useTranslation();
    const isOnMobile = useMediaQuery({query: "(max-width: 1024px)"});

    if(isOnMobile) {
        return <WIP title="Mobile version not supported yet"/>
    }

    return (
        <div className="min-h-[100vh]">
            <Sidebar t={t}/>
            <div className="ml-64 px-4">
                <Outlet/>
            </div>
        </div>
    )
}


export default Index;