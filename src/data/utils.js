import {paths, aeons, rarity, stars} from "./constants.js";
import characterData from "./index_new/en/characters.json";
import React from "react";

// Getters
export const getIconPathById = (id) => {
    let result = "";
    paths.forEach(path => {
        if (path.id === id) result = path.tag
    })
    return result
}

export const getAeonByPath = (path) => {
    let result = {}
    aeons.forEach(aeon => {
        if (aeon.path === path) result = aeon
    })
    return result
}

export const getRarityArrayByInt = (int) => {
    let result = {}
    rarity.forEach(r => {
        if (r.int === int) result = r.stars
    })
    return result
}

export const getAllCharactersTag = () => {
    let result = [];
    Object.values(characterData).forEach((value) => {
        result.push(value.tag);
    })
    return result;
}


/**
 * Get the character's skills by their skill id
 * @param array Array of skill id (character.skills)
 * @param data Object of which contains all the skills in the game (data.characterSkills)
 * @returns {*[]} Array of skills objects that match the skill id
 */
export const getCharacterSkills = (array, data) => {
    if(array.length === 0) return undefined;
    if(data === undefined) return undefined;
    let result = []
    Object.values(data).forEach((value) => {
        for (const element of array) {
            if(value.id === element) {
                result.push(value);
            }
        }
    })
    //console.info(result);
    return result;
}

/**
 * Get character object matching his name from the dataset
 * @param name Character's name
 * @param data Object of which contains all the characters in the game (data.characters)
 * @returns {{}} Character object
 */
export const getCharacterByName = (name, data) => {
    let result = {};
    Object.values(data).forEach((value) => {
        if(value.tag === name) {
            result = value;
        }
    })
    //if(Object.keys(result).length !== 0) console.info(result);
    return result;
}

export const getCharacterRanks = (array, data) => {
    if(array.length === 0) return undefined;
    if(data === undefined) return undefined;
    let result = []
    Object.values(data).forEach((value) => {
        for (const id of array) {
            if(value.id === id) {
                result.push(value);
            }
        }
    })
    //console.info(result);
    return result;

}

export const getDefaultLevel = (skill) => {
    let type = skill.type;
    switch (type) {
        case "Normal":
            return 5
        case "BPSkill":
            return 9
        case "Ultra":
            return 9
        case "Talent":
            return 9
        case "MazeNormal":
            return;
        case "Maze":
            return 0
        default:
            return;
    }
}

export const getParamsByLevel = (skill, currentLevel=5) => {
    /* All available skill type :
     * Normal
     * BPSkill
     * Ultra
     * Talent
     * MazeNormal
     * Maze
     */
    const { type, params } = skill;
    return ["Normal", "BPSkill", "Ultra", "Talent", "Maze"].includes(type) ? params[currentLevel] : 1;
}


// Methods
export const reduceCharacterName = (name) => {
    switch (name) {
        case "Dan Heng • Imbibitor Lunae":
            return "Imbibitor Lunae"
        default:
            return name
    }
}
