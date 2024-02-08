import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {useTranslation} from "react-i18next";

// Constants
const baseURL = import.meta.env.PROD ? "./data/index_new/" : "./src/data/index_new/";
const urls = [
    "characters.json",
    "character_skills.json",
    "character_ranks.json",
]

const DataContext = createContext();
export const DataContextProvider = ({ children }) => {
    const [data, setData] = useState({
        characters: [],
        characterSkills: [],
        characterRanks: [],
    });
    const [t, i18n] = useTranslation();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.all(urls.map(url => axios.get(baseURL + i18n.language + "/" + url)));
            result.forEach((r, i) => {
                result[i] = r.data;
            });
            return result;
        };

        fetchData().then((r) => {
            updateCharacterData(r);
        });
    }, [i18n.language]);

    const updateCharacterData = (data) => {
        setData({
            characters: data[0],
            characterSkills: data[1],
            characterRanks: data[2],
        });
    };

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error(
            "Error: useData must be used within a DataContextProvider"
        );
    }
    return context;
};
