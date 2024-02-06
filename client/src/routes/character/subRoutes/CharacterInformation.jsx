import React, {useEffect, useState} from "react";
import {useCharacterData} from "../../../context/DataContext.jsx";

// Components
import DisplayHistoryLinks from "../../../components/DisplayHistoryLinks.jsx";

// i18n
import {useTranslation} from "react-i18next";

const CharacterInformation = ({data}) => {
    const {t, i18n} = useTranslation();
    const path = window.location.pathname.split("/")[2];
    const characterData = useCharacterData();

    let character = {};
    Object.entries(characterData).filter(([key, value]) => {
        // if value.tag === path return the value
        if (value.tag === path) character = value;
    });

    console.log(character);

    if(character !== undefined) {
        return (
            <div>
                <DisplayHistoryLinks t={t} data={[
                    {
                        translation: "route.characters.title",
                        link: "/characters",
                    },
                    {
                        translation: character.name,
                    }
                ]}/>
                <div>
                    <img src={"./hsr/" + character.portrait} alt=""/>
                </div>
            </div>
        )

    } else {
        return (<>Loading...</>)
    }

}

export default CharacterInformation;