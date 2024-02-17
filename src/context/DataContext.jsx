import React, {createContext, useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {availableFiles, fetchAllData} from "../data/request.js";

const DataContext = createContext();

export const DataProvider = ({children}) => {
    const {i18n} = useTranslation();
    const [data, setData] = useState();

    const subscribe = async () => {
        const result = await fetchAllData(i18n.language);
        const data = availableFiles.reduce((acc, url, index) => {
            acc[url] = result[index];
            return acc;
        }, {});
        setData(data);
    }

    useEffect(() => {
        subscribe();
    }, [i18n.language]);

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => {
    return useContext(DataContext)
}