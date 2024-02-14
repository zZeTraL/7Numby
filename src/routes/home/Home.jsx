import React from "react";
import {Helmet} from "react-helmet";

// I18n
import {useTranslation} from "react-i18next";

// Components
import DisplayHistoryLinks from "../../components/DisplayHistoryLinks.jsx";

const Home = () => {
    const [t, i18n] = useTranslation();

    return (
        <div className="flex flex-col gap-4">
            <Helmet>
                <title>7Numby.com - {t("route.home.title")}</title>
            </Helmet>
            <DisplayHistoryLinks t={t} data={[]}/>
            <h1 className="text-4xl font-semibold tracking-wide">{t("route.home.title")}</h1>
        </div>
    )
}

export default Home;