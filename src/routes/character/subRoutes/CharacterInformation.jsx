import React, {useEffect, useState} from "react";
import {useData} from "../../../context/DataContext.jsx";

// Components
import DisplayHistoryLinks from "../../../components/DisplayHistoryLinks.jsx";

// i18n
import {useTranslation} from "react-i18next";

const CharacterInformation = () => {
    const {t, i18n} = useTranslation();
    const path = window.location.pathname.split("/")[2];
    const data = useData();

    let character = {};
    Object.entries(data.characters).filter(([key, value]) => {
        // if value.tag === path return the value
        if (value.tag === path) character = value;
    });

    return (
        <div className="relative">
            <DisplayHistoryLinks t={t} data={[
                {
                    translation: "route.characters.title",
                    link: "/characters",
                },
                {
                    translation: character.name,
                }
            ]}/>
            <div className="flex items-center mt-4 gap-2 grow">
                <h1 className="text-3xl tracking-wider font-semibold">{character.name}</h1>
                <img className="w-12" src={"./hsr/icon/element/" + character.element + ".png"} alt={character.element}/>
            </div>
            <img className="w-full" src={"./hsr/" + character.portrait} alt={character.name}/>
        </div>
    )

}

export default CharacterInformation;