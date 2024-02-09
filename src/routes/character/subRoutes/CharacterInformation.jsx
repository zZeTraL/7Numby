import React, {useEffect, useState} from "react";
import {useData} from "../../../context/DataContext.jsx";

// Components
import DisplayHistoryLinks from "../../../components/DisplayHistoryLinks.jsx";

// i18n
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";

// Utils functions
import {reduceCharacterName, getIconPathById, getAeonByPath} from "../../../data/utils.js";

const CharacterInformation = () => {
    const {t, i18n} = useTranslation();
    const data = useData();

    const path = window.location.pathname.split("/")[2];
    const character = Object.values(data.characters).find((value) => value.tag === path) || {};
    const aeon = getAeonByPath(character.path);

    return (
        <>
            <Helmet>
                <title>7Numby.com - {t("route.characters.title")}</title>
            </Helmet>
            <div className="flex flex-col gap-4 relative">
                <DisplayHistoryLinks t={t} data={[
                    {
                        translation: "route.characters.title",
                        link: "/characters",
                    },
                    {
                        translation: character.name,
                    }
                ]}/>

                <div className="absolute pt-4 flex flex-col items-start h-full">
                    <div className="-rotate-90 translate-y-[calc(16vh+48px)] -translate-x-[calc(99%/2)]">
                        <span className="px-2 font-firstWorld whitespace-nowrap text-2xl bg-mainBg tracking-widest">{t(reduceCharacterName(character.name))}</span>
                    </div>
                    <div className="grow border-l-[1px]"></div>
                </div>

                <div className="flex flex-col px-12 py-4 z-10">
                    <div className="flex justify-center relative">
                            <img className="absolute opacity-10 w-[1024px] -z-10" src={"./hsr/image/simulated_event/" + aeon.tag + ".png"} alt={aeon.title}/>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-semibold tracking-wide">{character.name}</h1>
                        <div>
                            <img className="w-12" src={"./hsr/icon/path/" + getIconPathById(character.path) + ".png"} alt={character.path}/>
                            <img className="w-12" src={"./hsr/icon/element/" + character.element + ".png"} alt={character.element}/>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img className="w-[768px]" src={"./hsr/" + character.portrait} alt={character.name}/>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CharacterInformation;