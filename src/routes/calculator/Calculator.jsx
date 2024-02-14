import React from "react";
import {Helmet} from "react-helmet";

// I18n
import {useTranslation} from "react-i18next";

// Components
import DisplayHistoryLinks from "../../components/DisplayHistoryLinks.jsx";

const Calculator = () => {
    const [t, i18n] = useTranslation();

    return (
        <div className="flex flex-col gap-4">
            <Helmet>
                <title>7Numby.com - {t("route.calculator.title")}</title>
            </Helmet>
            <DisplayHistoryLinks t={t} data={[
                {
                    translation: "route.calculator.title",
                }
            ]}
            />
            <h1 className="text-4xl font-semibold tracking-wide">{t("route.calculator.title")}</h1>
        </div>
    )
}

export default Calculator;