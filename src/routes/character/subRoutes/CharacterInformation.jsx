import React, {useState} from "react";
import styled from "@emotion/styled";
import {useOutletContext} from "react-router-dom";

// Constants
import {characterInformationHash} from "../../../data/constants.js";

// Components
import WIP from "../../../components/wip/WIP.jsx";
import DisplayHistoryLinks from "../../../components/DisplayHistoryLinks.jsx";
import Skill from "../../../components/modal/Skill.jsx";

// i18n
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet";

// Utils functions
import {
    reduceCharacterName,
    getCharacterSkills,
    getIconPathById,
    getAeonByPath,
    getRarityArrayByInt, getCharacterByName, getCharacterRanks
} from "../../../data/utils.js";
import Eidolon from "../../../components/modal/Eidolon.jsx";

// Styled components
const StyledBtn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    transition: all ease-in 500ms;
    overflow: hidden;
    scale: ${props => props.current ? "1.1" : null};
    &:hover {
        cursor: pointer;
        span {
            scale: ${props => props.current ? null : "1.04"};
            opacity: 1;
        }
        img {
            filter: blur(0px);
            opacity: .5;
        }
    }
    
    span {
        transition: all ease-in 500ms;
        z-index: 10;
        opacity: ${props => props.current ? "1" : "0.5"};
    }
    img {
        transition: all ease-in 500ms;
        filter: ${props => props.current ? "blur(0px)" : "blur(2px)"};
        opacity: ${props => props.current ? ".6" : "0.25"};
    
    }
`;

const CharacterInformation = () => {
    const {t, i18n} = useTranslation();
    const [currentModal, setCurrentModal] = useState(characterInformationHash[window.location.hash] || "skills");
    const data = useOutletContext();


    const path = window.location.pathname.split("/")[2];
    const character = getCharacterByName(path, data.characters);
    const skills = getCharacterSkills(character.skills, data.character_skills);
    const ranks = getCharacterRanks(character.ranks, data.character_ranks)

    const aeon = getAeonByPath(character.path);
    const stars = getRarityArrayByInt(character.rarity);

    console.log(character.id);

    const handleModalState = (modal) => {
        if(modal === currentModal) return;
        setCurrentModal(modal);
        window.location.hash = modal;
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
                        <img loading="lazy" className="absolute translate-y-12 opacity-10 w-[768px] -z-10" src={"./hsr/image/simulated_event/" + aeon.tag + ".png"} alt={aeon.title}/>
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
                        <div>
                            {character.desc}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img
                            className="w-[768px] ease-in-out duration-500 hover:cursor-pointer"
                            loading="lazy"
                            src={"./hsr/" + character.portrait} alt={character.name}
                            onClick={(event) => {
                                if(event.target.style.width === "1024px") {
                                    event.target.style.width = "768px";
                                } else {
                                    event.target.style.width = "1024px";
                                }
                            }}
                        />
                    </div>
                    <div className="flex flex-row justify-center gap-8 max-2xl:flex-col max-2xl:items-center md:px-32 my-12 w-full relative">
                        <div className="absolute max-md:hidden -translate-x-12 top-[50%] w-64 left-0 border-b-2 border-dotted"></div>
                        <StyledBtn
                            current={currentModal === "skills"}
                            className="px-4 w-64 h-16 rounded-xl bg-darkBg"
                            onClick={() => {handleModalState("skills")}}
                        >
                            <span className="text-lg tracking-wider z-10">{t("route.characters.skills")}</span>
                            <img className="absolute blur-[2px] -right-2 w-28 opacity-25" src={"./hsr/icon/item/252.png"} alt="Skills"/>
                        </StyledBtn>
                        <StyledBtn
                            current={currentModal === "traces"}
                            className="px-4 w-64 h-16 rounded-xl bg-darkBg"
                            onClick={() => {handleModalState("traces")}}
                        >
                            <span className="text-lg tracking-wider">{t("route.characters.traces")}</span>
                            <img className="absolute blur-[2px] -right-2 w-26" src={"./hsr/icon/item/241.png"} alt="Traces"/>
                        </StyledBtn>
                        <StyledBtn
                            current={currentModal === "eidolons"}
                            className="px-4 w-64 h-16 rounded-xl bg-darkBg"
                            onClick={() => {handleModalState("eidolons")}}
                        >
                            <span className="text-lg tracking-wider">{t("route.characters.eidolons")}</span>
                            <img className="absolute blur-[2px] -right-2 w-28" src={"./hsr/icon/item/261.png"} alt="Eidolon"/>
                        </StyledBtn>
                        <StyledBtn
                            current={currentModal === "builds"}
                            className="px-4 w-64 h-16 rounded-xl bg-darkBg"
                            onClick={() => {handleModalState("builds")}}
                        >
                            <span className="text-lg tracking-wider">{t("route.characters.builds")}</span>
                            <img className="absolute blur-[2px] -right-2 w-26" src={"./hsr/icon/item/71001.png"} alt="Builds"/>
                        </StyledBtn>
                    </div>
                    {
                        currentModal === "skills" &&
                        (
                            <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 md:grid-cols-1 my-12 md:px-16 gap-4">
                                {
                                    skills.map((skill, index) => {
                                        if (skill.type === "MazeNormal") return;
                                        return (
                                            <Skill key={index} skill={skill} params={character}/>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                    {
                        currentModal === "traces" &&
                        (
                            <WIP title="WIP" />
                        )
                    }
                    {
                        currentModal === "eidolons" &&
                        (
                            <div className="my-12 mx-32 grid xl:grid-cols-2 md:grid-cols-1 gap-8">
                                {
                                    ranks.map((rank, index) => {
                                        return (
                                            <Eidolon key={index} rank={rank}/>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                    {
                        currentModal === "builds" &&
                        (
                            <WIP title="Not available right now" desc={
                                <a target="_blank"
                                   href="https://www.prydwen.gg/star-rail/characters"
                                   className="text-sm tracking-wider max-w-lg"
                                >
                                    Instead I recommend you to visit
                                    <span className="text-gg"> prydwen </span>
                                    for quite interesting builds for each character.
                                </a>}
                            />
                        )
                    }
                </div>
            </div>
        </>
    )

}

export default CharacterInformation;