import React from "react";
import {useTranslation} from "react-i18next";

// Data
import {eventsDate} from "../../data/timeline.js";

// Components
import DisplayHistoryLinks from "../../components/DisplayHistoryLinks.jsx";


const Timeline = () => {
    const [t, i18n] = useTranslation();

    return (
        <div className="flex flex-col gap-4">
            <DisplayHistoryLinks t={t} data={[
                {
                    translation: "route.timeline.title",
                }
            ]}
            />
            <h1 className="text-4xl font-semibold tracking-wide">{t("route.timeline.title")}</h1>
        </div>
    )
}

export default Timeline;