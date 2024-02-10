import {paths, aeons, rarity, stars} from "./constants.js";

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
    console.info(result);
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
    if(Object.keys(result).length !== 0) console.info(result);
    return result;
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

export const processSkillsText = (text) => {
    let parts = [];
    let splitText = text.split(" ");
    for (const part of splitText) {
        parts.push({
            text: part,
            type: part.includes("#") ? "number" : "text"
        })
    }
    return parts;
}