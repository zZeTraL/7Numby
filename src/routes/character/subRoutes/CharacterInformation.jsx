import React from "react";

// Context
import {useData} from "../../../context/DataContext.jsx";

// Components
import DisplayHistoryLinks from "../../../components/DisplayHistoryLinks.jsx";

// i18n
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";

// Utils functions
import {
    reduceCharacterName,
    getCharacterSkills,
    getIconPathById,
    getAeonByPath,
    getRarityArrayByInt, getCharacterByName, processSkillsText
} from "../../../data/utils.js";

const CharacterInformation = () => {
    const {t, i18n} = useTranslation();
    const data = useData();

    const path = window.location.pathname.split("/")[2];
    const character = getCharacterByName(path, data.characters) || {};
    const skills = getCharacterSkills(character.skills || [], data.characterSkills);

    console.log(skills);

    const aeon = getAeonByPath(character.path);
    const stars = getRarityArrayByInt(character.rarity);

    if(data.characters.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl font-semibold">Loading...</p>
            </div>
        )
    }

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
                    <div className="flex flex-col gap-4 mt-10 absolute translate-y-2 -translate-x-[calc(99%/2)]">
                        <img className="w-10 bg-mainBg" src={"./hsr/icon/element/" + character.element + ".png"} alt={character.element}/>
                        <img className="w-10 bg-mainBg" src={"./hsr/icon/path/" + getIconPathById(character.path) + ".png"} alt={character.path}/>
                    </div>
                    <div className="-rotate-90 translate-y-[calc(28vh+48px)] -translate-x-[calc(99%/2)]">
                        <span className="px-2 font-firstWorld whitespace-nowrap text-2xl bg-mainBg tracking-widest">{t(reduceCharacterName(character.name))}</span>
                    </div>
                    <div className="grow border-l-[1px]"></div>
                </div>

                <div className="flex flex-col px-12 py-6 z-10 h-full">
                    <div className="flex justify-center relative">
                        <img className="absolute translate-y-12 opacity-10 w-[768px] -z-10" src={"./hsr/image/simulated_event/" + aeon.tag + ".png"} alt={aeon.title}/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-4xl font-semibold tracking-wide">{character.name}</h1>
                        <div className="flex flex-row">
                            {
                                stars.length > 0 &&
                                stars.map((value, index) => {
                                    return (
                                        <img key={index} className="w-10" src={"./hsr/icon/deco/" + value + ".png"}
                                             alt={value}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            className="w-[1024px] ease-in-out duration-500 hover:cursor-pointer"
                            src={"./hsr/" + character.portrait} alt={character.name}
                            onClick={(event) => {
                                if(event.target.style.width === "2048px") {
                                    event.target.style.width = "1024px";
                                } else {
                                    event.target.style.width = "2048px";
                                }
                            }}
                        />
                    </div>
                    <div className="grid grid-cols-3 my-12 px-12 gap-4">
                        {
                            skills.length > 0 &&
                            skills.map((skill, index) => {
                                if(skill.effect === "MazeAttack") return;
                                return (
                                    <div key={index} className="flex flex-col gap-3 bg-darkBg rounded-xl py-8 px-5">
                                        <div className="flex justify-center">
                                            <img className="w-16" src={"./hsr/" + skill.icon} alt=""/>
                                        </div>
                                        <div>
                                            <h2 className="text-lg text-center font-semibold">{skill.name}</h2>
                                        </div>
                                        <div className="flex flex-col">
                                            {
                                                skill.desc.split("\n").map((text, index) => {
                                                    return (
                                                        <span key={index} className="font-hsr leading-5 tracking-wide text-sm"><br/>{text}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )

}

export default CharacterInformation;