import React, {useEffect, useReducer} from "react";
import {Helmet} from "react-helmet";
import {Link, useOutletContext} from "react-router-dom";

// i18n
import {useTranslation} from "react-i18next";

// Components
import DisplayHistoryLinks from "../../components/DisplayHistoryLinks.jsx";
import SelectBy from "../../components/SelectBy.jsx";

// Data
import {elements, paths, rarity, stars} from "../../data/constants.js";
import {getIconPathById, reduceCharacterName} from "../../data/utils.js";

// Initial state
const initialState = {
    choice:
        paths.map(path => path.id)
            .concat(elements.map(element => element))
            .concat(stars.map(star => star.int)),
    filteredCharacter: [],
    filterOption: undefined,
}

// Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_CHOICE":
            // We add/remove element, path, rarity to the choice array without delete previous choice
            if (state.choice.includes(action.payload)) return {...state, choice: state.choice.filter(e => e !== action.payload)};
            else return {...state, choice: [...state.choice, action.payload]};
        case "UPDATE_FILTER_OPTION":
            return {...state, filterOption: action.payload};
        case "UPDATE_FILTERED_CHARACTER":
            // We filter the character list based on the choice array
            let filteredCharacter = Object.values(action.payload).filter(character =>
                state.choice.includes(character.element) &&
                state.choice.includes(character.path) &&
                state.choice.includes(character.rarity) &&
                character.name !== "{NICKNAME}"
            );

            switch(state.filterOption) {
                case "name":
                    filteredCharacter.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case "element":
                    filteredCharacter.sort((a, b) => a.element.localeCompare(b.element));
                    break;
                case "path":
                    filteredCharacter.sort((a, b) => a.path.localeCompare(b.path));
                    break;
                case "rarity":
                    filteredCharacter.sort((a, b) => a.rarity - b.rarity);
                    break;
                default:
                    break;
            }
            return {...state, filteredCharacter: filteredCharacter};
        default:
            return state;
    }
}

const Character = () => {
    const [t, i18n] = useTranslation();
    const [state, dispatch] = useReducer(reducer, initialState, undefined);
    const data = useOutletContext();

    useEffect(() => {
        handleChoiceUpdate()
    }, [data, state.filterOption]);

    const handleChoiceUpdate = (payload) => {
        if(payload) dispatch({ type: "UPDATE_CHOICE", payload });
        dispatch({ type: "UPDATE_FILTERED_CHARACTER", payload: data.characters });
    };

    return (
        <div className="flex flex-col gap-4">
            <Helmet>
                <title>7Numby.com - {t("route.characters.title")}</title>
            </Helmet>
            <DisplayHistoryLinks t={t} data={[
                    {
                        translation: "route.characters.title",
                    }
                ]}
            />
            <h1 className="text-4xl font-semibold tracking-wide">{t("route.characters.title")}</h1>
            <div className="flex flex-row gap-2 max-2xl:flex-col max-sm:items-center">
                <div className="flex items-center bg-darkBg w-48 rounded-xl h-16 max-sm:w-full cursor-pointer">
                    <SelectBy
                        data={{
                            title: "sorter.sort_by",
                            options: ["name", "element", "path", "rarity"]
                        }}
                        callback={dispatch}
                    />
                </div>

                <div className="flex flex-row gap-2 max-[1125px]:flex-col">
                    <div className="flex flex-row items-center gap-2">
                        {
                            elements.map((element, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="p-2 bg-darkBg rounded-xl hover:cursor-pointer"
                                        style={{opacity: state.choice.includes(element) ? "1" : ".3"}}
                                        onClick={() => {handleChoiceUpdate(element)}}
                                    >
                                        <img className="w-8" src={"./hsr/icon/element/" + element + ".png"}
                                             alt={element}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex items-center flex-row gap-2">
                        {
                            paths.map((path, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="p-2 bg-darkBg rounded-xl hover:cursor-pointer"
                                        style={{opacity: state.choice.includes(path.id) ? "1" : ".3"}}
                                        onClick={() => {handleChoiceUpdate(path.id)}}
                                    >
                                        <img className="w-8" src={"./hsr/icon/path/" + path.tag + ".png"}
                                             alt={path.id}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex items-center flex-row gap-2">
                    {
                        stars.map((star, index) => {
                            return (
                                <div
                                    key={index}
                                    className="p-2 bg-darkBg rounded-xl hover:cursor-pointer"
                                    style={{opacity: state.choice.includes(star.int) ? "1" : ".3"}}
                                    onClick={() => {handleChoiceUpdate(star.int)}}
                                >
                                    <img className="w-8" src={"./hsr/icon/deco/" + star.icon + ".png"} alt={star.icon}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="flex flex-wrap gap-4 max-w-screen-2xl max-md:justify-center">
                {
                    state.filteredCharacter.map((character, index) => {
                        return (
                            <Link
                                className="flex flex-col relative w-32 bg-darkBg rounded-xl no-underline hover:bg-gg"
                                style={{background: character.rarity === 5 ? "linear-gradient(#9d6959, #c7a470)" : "linear-gradient(#414268, #8f69bc)"}}
                                to={"/characters/" + character.tag}
                                key={index}
                            >
                                <img
                                    className="bg-darkBg p-1 rounded-xl absolute w-8 left-1 top-1 text-white"
                                    src={"./hsr/icon/element/" + character.element + ".png"}
                                    alt={character.element}
                                />
                                <img
                                    className="bg-darkBg p-1 rounded-xl absolute w-8 left-1 bottom-10 text-white"
                                    src={"./hsr/icon/path/" + getIconPathById(character.path) + ".png"}
                                    alt={character.element}
                                />
                                <img
                                    className="w-32 h-32 rounded-t-xl" src={"./hsr/" + character.icon}
                                    alt={character.tag}
                                />
                                <span className="text-white text-center text-sm p-2 bg-darkBg">{reduceCharacterName(character.name)}</span>
                            </Link>
                        )
                    })
                }
            </div>


        </div>
    );
}

export default Character;