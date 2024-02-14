import React from "react";
import {Helmet} from "react-helmet";

// i18n
import {useTranslation} from "react-i18next";
import Sidebar from "../components/sidebar/Sidebar.jsx";

// Components
import {Outlet} from "react-router-dom";
import Footer from "../components/footer/Footer.jsx";

const Index = () => {
    const [t, i18n] = useTranslation();
    return (
        <div className="flex flex-col bg-mainBg min-h-[100vh] overflow-hidden">
            <Helmet>
                <title>7Numby.com - {t("sidebar.home")}</title>
            </Helmet>
            <Sidebar t={t}/>
            <main className="lg:ml-64 grow min-w-[calc(100vw-256px)]">
                <div className="p-10 max-s:px-3 max-sm:px-4 max-sm:py-7">
                    <Outlet/>
                </div>
            </main>
            <Footer t={t}/>
        </div>
    )
}


export default Index;