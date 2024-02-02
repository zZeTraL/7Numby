import React, {createRef, forwardRef, useEffect, useImperativeHandle, useState} from "react";
import styled from "@emotion/styled";

// i18n
import i18n from "i18next";


// Styled components
const SetLanguageModal = styled.div`
  display: ${props => props.active ? "flex" : "none"};
`;

const languageList = [ "en", "fr" ];

const Language = ({t}) => {
    const currentLanguage = window.localStorage.getItem("language") || i18n.language;
    const [modalState, setModalState] = useState(false);

    // Ref
    const languageRef = createRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (languageRef.current && !languageRef.current.contains(e.target)) setModalState(false);
        };
        document.addEventListener("click", handleClickOutside, true);
        return () => document.removeEventListener("click", handleClickOutside, true);
    }, [modalState]);

    function displayLanguage(language = undefined){
        switch (language || currentLanguage) {
            case "fr":
                return "Français";
            case "en":
                return "English";
        }
    }

    function setLanguage(language = undefined){
        if(modalState === true && language !== undefined) setModalState(false);
        switch (language || currentLanguage) {
            case "fr":
                i18n.changeLanguage("fr").then(r => console.info("Language changed to French"));
                break;
            case "en":
                i18n.changeLanguage("en").then(r => console.info("Language changed to English"));
                break;
        }
    }

    return (
        <div className="flex flex-row relative justify-center items-end flex-none">
            <div className="flex flex-row gap-2 p-4 mt-4 items-center hover:cursor-pointer hover:bg-currentLinkBg rounded-xl"
                 onClick={() => setModalState(true)}
            >
                <img className="h-8" src={"./locales/" + currentLanguage + ".svg"} alt="Flag"/>
                <span className="text-sm">{displayLanguage()}</span>
            </div>
            <SetLanguageModal
                ref={languageRef}
                active={modalState}
                className="bg-mainBg p-5 m-5 rounded-xl bottom-16 absolute z-30 flex-col"
            >
                <div className="flex flex-col gap-4">
                    {
                        languageList.map((language, index) => {
                            if(language === currentLanguage) return;
                            return (
                                <div key={index} className="flex items-center gap-2 opacity-75 hover:opacity-100 hover:cursor-pointer" onClick={() => {
                                    setLanguage(language);
                                    setModalState(false);
                                }}>
                                    <img className="h-8" src={"./locales/" + language + ".svg"} alt="Flag"/>
                                    <span className="text-sm">{displayLanguage(language)}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </SetLanguageModal>
        </div>
    )
};

export default Language;