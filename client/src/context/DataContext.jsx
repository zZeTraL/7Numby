import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {useTranslation} from "react-i18next";

const CharacterDataContext = createContext();

export const CharacterDataProvider = ({ children }) => {
    const [characterData, setCharacterData] = useState({});
    const [t, i18n] = useTranslation();

    useEffect(() => {
        const fetchCharacters = async () => {
            const result = await axios.get(
                `./src/data/index_new/${i18n.language}/characters.json`
            );
            return result.data;
        };

        fetchCharacters().then((r) => {
            updateCharacterData(r);
        });
    }, [i18n.language]);

    const updateCharacterData = (data) => {
        setCharacterData(data);
    };

    return (
        <CharacterDataContext.Provider value={characterData}>
            {children}
        </CharacterDataContext.Provider>
    );
};

export const useCharacterData = (callback) => {
    const context = useContext(CharacterDataContext);
    if(callback) callback(false);
    if (!context) {
        throw new Error(
            "useCharacterData must be used within a CharacterDataProvider"
        );
    }
    return context;
};
